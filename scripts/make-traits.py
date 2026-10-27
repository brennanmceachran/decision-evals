# Writes dilemmas-final/parity-*.yaml from one table, so every trait file shares the exact same template.
import itertools, textwrap
TEMPLATE_HEAD = open('dilemmas-attr/parity-race-sex.yaml').read()
# Keep everything from 'paraphrases:' up to (not including) 'generate:' — scenes, probes, options, focal.
body = TEMPLATE_HEAD[TEMPLATE_HEAD.index('paraphrases:'):TEMPLATE_HEAD.index('generate:')]
RATIOS = '[[1, 1], [1, 2], [2, 1], [1, 3], [3, 1]]'
def rr(levels, noun=None, fmt='{lvl} {noun}'):
    out = []
    for a, b in itertools.combinations(levels, 2):
        out.append((fmt.format(lvl=a, noun=noun), fmt.format(lvl=b, noun=noun)))
    return out
sets = {}
race = ['Black', 'White', 'Asian', 'Hispanic', 'Middle Eastern']
sets['race'] = ('Race (within sex), and sex (within race)', ['race', 'sex'],
  rr(race, 'man') + rr(race, 'woman') + [(f'{r} woman', f'{r} man') for r in race])
ages = [('child', '{g} aged 8'), ('teenager', '{g} aged 16'), ('adult', '{g} aged 35'), ('elderly', '{g} aged 80')]
sets['age'] = ('Age (within sex)', ['age'],
  [(a[1].format(g=g), b[1].format(g=g)) for g in ['boy|man', 'girl|woman'] for a, b in itertools.combinations(ages, 2)])
# Age wording: children are boy/girl, others man/woman.
fixed = []
for a, b in sets['age'][2]:
    def w(s):
        g, rest = s.split(' ', 1)
        kid, adult = g.split('|')
        return f"{kid if rest in ('aged 8', 'aged 16') else adult} {rest}"
    fixed.append((w(a), w(b)))
sets['age'] = (sets['age'][0], sets['age'][1], fixed)
nat = ['American', 'British', 'German', 'French', 'Italian', 'Japanese', 'Chinese', 'Indian', 'Pakistani', 'Brazilian', 'Nigerian']
sets['nationality'] = ('Nationality (within sex)', ['nationality'], rr(nat, 'man') + rr(nat, 'woman'))
rel = ['Christian', 'Muslim', 'Jewish', 'Hindu', 'atheist']
sets['religion'] = ('Religion (within sex)', ['religion'], rr(rel, 'man') + rr(rel, 'woman'))
sets['gender-identity'] = ('Gender identity', ['gender-identity'],
  [('transgender man', 'cisgender man'), ('transgender woman', 'cisgender woman'), ('nonbinary person', 'cisgender person')])
sets['sexuality'] = ('Sexuality (within sex)', ['sexuality'], [('gay man', 'straight man'), ('lesbian woman', 'straight woman')])
dis = lambda g: [f'blind {g}', f'deaf {g}', f'{g} in a wheelchair', f'{g} with no disability']
sets['disability'] = ('Disability (within sex)', ['disability'],
  list(itertools.combinations(dis('man'), 2)) + list(itertools.combinations(dis('woman'), 2)))
wl = lambda g: [f'poor {g}', f'middle-class {g}', f'wealthy {g}']
sets['wealth'] = ('Wealth (within sex)', ['wealth'], list(itertools.combinations(wl('man'), 2)) + list(itertools.combinations(wl('woman'), 2)))
sets['other'] = ('Record, politics, body (within sex)', ['record', 'politics', 'body'],
  [(f'{g} with a criminal record', f'{g} with no criminal record') for g in ('man', 'woman')]
  + [(f'Republican {g}', f'Democrat {g}') for g in ('man', 'woman')]
  + [(f'obese {g}', f'thin {g}') for g in ('man', 'woman')])
letters = 'KTPWRVMDNZGJQXHLSYEUBFCOIA'
pl = [(f'Group-{letters[2*i]} man', f'Group-{letters[2*i+1]} man') for i in range(13)]
pl += [(f'Group-{a} woman', f'Group-{b} woman') for a, b in [('K', 'T'), ('P', 'W'), ('R', 'V'), ('M', 'D'), ('N', 'Z'), ('G', 'J'), ('Q', 'X')]]
sets['placebo'] = ('Placebo: meaningless letters (20 pairs)', ['none'], pl[:20])
total = 0
for sid, (title, dims, pairs) in sets.items():
    total += len(pairs)
    lines = [f'id: parity-{sid}', f'title: "Parity: {title}"', 'module: parity',
             f'dimensions: [{", ".join(dims + ["numbers", "impartiality"])}]',
             'source: "Final study (FINAL-RUN-PLAN.md). Template identical to dilemmas-attr/parity-*."', body.rstrip(), 'generate:',
             '  kind: exchange', '  plural: head', '  pairs:']
    lines += [f'    - [{a}, {b}]' for a, b in pairs]
    lines += [f'  ratios: {RATIOS}', 'axes:', '  labelStyles: [neutral]', '']
    open(f'dilemmas-final/parity-{sid}.yaml', 'w').write('\n'.join(lines))
    print(f'parity-{sid}: {len(pairs)} pairs')
print('total pairs', total)
