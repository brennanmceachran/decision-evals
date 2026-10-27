import os, sys, gzip, json, time
ns, out = sys.argv[1], sys.argv[2]
d = f'.cache/final/{ns}'
t = time.time(); n = 0
with gzip.open(out, 'wt', compresslevel=6) as g:
    for name in sorted(os.listdir(d)):
        with open(os.path.join(d, name)) as f:
            g.write(json.dumps({'file': name, 'record': json.load(f)}, separators=(',', ':')) + '\n')
        n += 1
print(ns, n, f'{time.time()-t:.0f}s', f'{os.path.getsize(out)/1048576:.1f} MB')
