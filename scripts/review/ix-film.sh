#!/bin/sh
# ix-film.sh <dir> [pick] [w h]: the film recorded in real time, its score rendered offline at the same cue times,
# muxed into <dir>/film.mp4, plus a 2-per-second contact sheet. For review only.
cd "$(dirname "$0")/../.."
O=$1; pick=${2:-left}; w=${3:-1440}; h=${4:-900}; mkdir -p $O
export AGENT_BROWSER_SESSION=decision-v5
agent-browser set viewport $w $h >/dev/null
agent-browser open "http://localhost:8780/v6/index.html?pick=$pick&t=0&z=$RANDOM" >/dev/null; sleep 1.5
end=$(agent-browser eval "window.__intro.end()")
agent-browser eval "window.__intro.renderScore().then(r=>{window.__wav=r.wav;return r.wav.length})" > $O/.len
len=$(cat $O/.len); rm -f $O/.b64 $O/.len
i=0; while [ $((i*1000000)) -lt $len ]; do agent-browser eval "window.__wav.slice($i*1000000, ($i+1)*1000000)" | python3 -c "import sys,json;sys.stdout.write(json.loads(sys.stdin.read()))" >> $O/.b64; i=$((i+1)); done
base64 -d -i $O/.b64 -o $O/score.wav; rm $O/.b64
agent-browser open "about:blank" >/dev/null
agent-browser record start $O/film.webm "http://localhost:8780/v6/index.html?pick=$pick&t=0&play=1&z=$RANDOM" >/dev/null
sleep $(python3 -c "print($end + 3)")
agent-browser record stop >/dev/null
# the film starts when the red route first appears on the bottom-left of the frame; find that frame to sync the score
rm -rf $O/.st; mkdir $O/.st; ffmpeg -v error -i $O/film.webm -t 5 -vf "fps=30,scale=160:-1" $O/.st/%04d.png
off=$(python3 - "$O" <<'PY'
import sys,glob
from PIL import Image, ImageStat
fs=sorted(glob.glob(sys.argv[1]+'/.st/*.png'))
base=None
for i,f in enumerate(fs):
    m=ImageStat.Stat(Image.open(f).convert('L')).mean[0]
    if base is None and m>20: base=m; continue
    if base is not None and abs(m-base)>4: print(round(i/30-0.02,3)); break
else: print(0.5)
PY
)
rm -rf $O/.st
ffmpeg -v error -y -i $O/film.webm -itsoffset $off -i $O/score.wav -map 0:v -map 1:a -c:v libx264 -pix_fmt yuv420p -crf 22 -c:a aac -b:a 192k -shortest -movflags +faststart $O/film.mp4
echo "offset $off end $end"
rm -f $O/g_*.png; ffmpeg -v error -i $O/film.mp4 -vf "fps=2,scale=320:-1" $O/g_%03d.png
python3 - "$O" <<'PY'
import sys,glob
from PIL import Image, ImageDraw
O=sys.argv[1]; fs=sorted(glob.glob(O+'/g_*.png')); ims=[Image.open(f) for f in fs]
w,h=ims[0].size; cols=10; rows=(len(ims)+cols-1)//cols
S=Image.new('RGB',(cols*w,rows*(h+14)),'white'); d=ImageDraw.Draw(S)
for i,im in enumerate(ims):
  x=(i%cols)*w; y=(i//cols)*(h+14); S.paste(im,(x,y+14)); d.text((x+3,y+1),f'{i/2:.1f}s',fill='black')
S.save(O+'/sheet.jpg',quality=80)
for f in fs: __import__('os').remove(f)
PY
