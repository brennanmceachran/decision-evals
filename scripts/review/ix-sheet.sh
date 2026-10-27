#!/bin/sh
# ix-sheet.sh <name> <pick> <w> <h> t1 t2 ...: frames of the film, then one contact sheet
cd /Users/brennanmceachran/Developer/decision-evals
O=review/v6-native/intro/$1; mkdir -p $O; pick=$2; w=$3; h=$4; shift 4
export AGENT_BROWSER_SESSION=decision-v5
agent-browser set viewport $w $h >/dev/null
agent-browser open "http://localhost:8780/v6/index.html?pick=$pick&t=0&r=$RANDOM" >/dev/null; sleep 1.5
for t in "$@"; do
  agent-browser eval "(()=>{const u=new URL(location);u.searchParams.set('t','$t');history.replaceState(0,'',u);return 1})()" >/dev/null
  agent-browser open "http://localhost:8780/v6/index.html?pick=$pick&t=$t" >/dev/null; sleep ${SLEEP:-1.1}
  agent-browser screenshot $O/t$(printf '%05.1f' $t).png >/dev/null
done
python3 - "$O" <<'PY'
import sys,glob
from PIL import Image, ImageDraw
O=sys.argv[1]; fs=sorted(glob.glob(O+'/t*.png')); ims=[Image.open(f) for f in fs]
w=480; h=int(ims[0].height*w/ims[0].width); cols=4 if ims[0].width>ims[0].height else 6
if ims[0].width<ims[0].height: w=240; h=int(ims[0].height*w/ims[0].width)
rows=(len(ims)+cols-1)//cols; S=Image.new('RGB',(cols*w,rows*(h+18)),'white'); d=ImageDraw.Draw(S)
for i,(f,im) in enumerate(zip(fs,ims)):
  x=(i%cols)*w; y=(i//cols)*(h+18); S.paste(im.resize((w,h)),(x,y+18)); d.text((x+4,y+3),f.split('/')[-1][1:-4]+'s',fill='black')
S.save(O+'/sheet.jpg',quality=82)
PY
