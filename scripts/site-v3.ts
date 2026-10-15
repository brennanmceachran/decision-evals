// Data for site/v3. Extends v2's data with what the v3 redesign shows: scenario-first views (one question, all
// models), equal-footing dashcam counts, schedule-following rates, list-price costs, and the all-generated
// "real or generated?" set. Every number comes from the analysis files; test/site-v3.test.ts rebuilds and compares.
// Usage: tsx scripts/site-v3.ts [--no-cards]   → site/v3/data.js (+ images, + share cards)
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { expand, loadDilemmas } from '../src/expand.js';
import { NAME } from './findings.js';
import { buildV2 } from './site-v2.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
type M = any;
const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
const r2 = (x: number) => Math.round(x * 100) / 100;
const r3 = (x: number) => Math.round(x * 1000) / 1000;
const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
const jsonl = (p: string): M[] =>
  readFileSync(p, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l))
    .filter((r: M) => !r.error);

/**
 * List prices per token (AI Gateway catalogue, 2026-10-15), for the models whose recorded spend was $0 because they
 * ran on a bring-your-own-key route (GPT-6 Luna, GPT-6 Luna Decisions). Laya lists at $0 and stays $0.
 * Per-call tokens are estimated from the prompts as sent (characters ÷ 4; main call + probe call for decision models,
 * 5 samples for chat models with a short structured answer).
 */
export const LIST_PRICE = {
  'openai/gpt-6-luna-decisions': { input: 0.1e-6, output: 0 },
  'openai/gpt-6-luna': { input: 0.1e-6, output: 0.5e-6 },
} as const;

export function buildV3() {
  const d = buildV2();
  const ids = d.models.map((m) => m.id);
  const name = (id: string) => NAME[id] ?? id;

  // ---------- 1. List-price cost per 1,000 decisions, replacing recorded $0 for BYOK routes.
  const vs = loadDilemmas('dilemmas').flatMap((x) => expand(x, { frames: ['game'] }));
  const tokMain = mean(vs.map((v) => (v.state + v.question + JSON.stringify(v.criteria)).length / 4));
  const tokProbe = mean(vs.filter((v) => v.probes.length).map((v) => (v.state + JSON.stringify(v.probes)).length / 4));
  const listCost: Record<string, { per1k: number; basis: string }> = {
    'openai/gpt-6-luna-decisions': {
      per1k: r3((tokMain + tokProbe) * LIST_PRICE['openai/gpt-6-luna-decisions'].input * 1000),
      basis: `list price $0.10 per million input tokens, ~${Math.round(tokMain + tokProbe)} tokens per decision`,
    },
    'openai/gpt-6-luna': {
      per1k: r3(
        5 * (tokMain * LIST_PRICE['openai/gpt-6-luna'].input + 20 * LIST_PRICE['openai/gpt-6-luna'].output) * 1000,
      ),
      basis: 'list price, 5 samples per question',
    },
  };
  const models = d.models.map((m) => {
    const lc = listCost[m.id];
    return {
      ...m,
      costPer1k: lc ? lc.per1k : m.costPer1k,
      costBasis: lc ? lc.basis : m.costPer1k === 0 ? 'listed free' : 'recorded spend',
    };
  });

  // ---------- 2. Dashcam on equal footing: every condition counted on the same two log styles (plain + syslog).
  const v4 = jsonl('results/real-v4.jsonl');
  const v3 = jsonl('results/real-v3.jsonl');
  const shared = (r: M) => r.wording === 0 || r.wording === 2;
  const tally = (rows: M[], id: string, f: (r: M) => boolean) => {
    const all = rows.filter((r) => r.model === id && f(r));
    const rs = all.filter((r) => r.choice);
    const toward = rs.filter((r) => r.choice !== `route_${r.fewer}`).length;
    return { toward, away: rs.length - toward, refused: all.length - rs.length, of: rs.length };
  };
  const realIds = Object.keys(d.real.models);
  const dash = Object.fromEntries(
    realIds.map((id) => [
      id,
      {
        routing: tally(v4, id, (r) => r.framing === 'ops' && r.relation === 'conflict' && shared(r)),
        dilemma: tally(v4, id, (r) => r.framing === 'dilemma' && !!r.fewer),
        fault: tally(v3, id, (r) => r.framing === 'ops-nostop' && r.relation === 'conflict'),
        config: tally(v4, id, (r) => r.framing === 'ops-config' && r.relation === 'conflict'),
        safety: tally(v4, id, (r) => r.framing === 'ops-safety' && r.relation === 'conflict'),
        // Did it follow the schedule? When the schedule pointed at the larger group, and when at the smaller.
        follow: {
          larger: (() => {
            const rs = v4.filter((r) => r.model === id && r.framing === 'ops' && r.relation === 'conflict' && r.choice);
            return { followed: rs.filter((r) => r.choice === `route_${r.scheduled}`).length, of: rs.length };
          })(),
          smaller: (() => {
            const rs = v4.filter((r) => r.model === id && r.framing === 'ops' && r.relation === 'aligned' && r.choice);
            return { followed: rs.filter((r) => r.choice === `route_${r.scheduled}`).length, of: rs.length };
          })(),
          refused: v4.filter((r) => r.model === id && r.framing === 'ops' && !!r.relation && !r.choice).length,
        },
      },
    ]),
  );
  /** How each frame was asked: the design behind every count. */
  const dashDesign = {
    frames: new Set(
      v4
        .filter((r) => r.framing === 'ops' && r.relation === 'conflict')
        .map((r) => `${r.plate}|${r.content}|${r.mirror}`),
    ).size,
    depots: new Set(v4.map((r) => r.plate)).size,
    perCondition: dash[realIds.find((id) => dash[id]!.safety.of)!]!.safety.of,
  };

  // ---------- 2b. The five dilemmas as sent (5 lives against 1, first wording, buttons in display order).
  const dil = loadDilemmas('dilemmas');
  const asSent = (id: string) => {
    const v = expand(
      dil.find((x) => x.id === id)!,
      { frames: ['game'] },
    ).find((v) => v.point.n === 5 && v.paraphrase === 0 && v.order === 'forward')!;
    return { text: v.state, question: v.question, buttons: Object.values(v.criteria) };
  };
  const dilemmaPrompts = Object.fromEntries(
    ['switch', 'loop', 'trapdoor', 'footbridge', 'transplant'].map((k) => [k, asSent(k)]),
  );
  /** Trait prompts as sent (first wording, first-named person on the left, buttons forward), per pair. */
  const dilA = loadDilemmas('dilemmas-attr');
  const pairPrompt = (set: string, pair: string) => {
    const [a, b] = pair.split('|');
    const v = expand(
      dilA.find((x) => x.id === set)!,
      { frames: ['game'] },
    ).find(
      (v) =>
        v.point.a === a &&
        v.point.b === b &&
        v.point.k === 1 &&
        v.point.m === 1 &&
        v.point.side === 'a_left' &&
        v.paraphrase === 0 &&
        v.order === 'forward',
    )!;
    return { text: v.state, question: v.question };
  };

  // ---------- 3. Scenario-first views: one question, every model, sorted. For dilemmas (P act at 5) and trait pairs.
  const scenarios = {
    dilemmas: (['switch', 'loop', 'trapdoor', 'footbridge', 'transplant'] as const).map((k) => ({
      key: k,
      people: (d.human as M)[k],
      models: ids.map((id) => ({ id, p: (d.ladder as M)[id][k] as number })).sort((a, b) => b.p - a.p),
    })),
    /** Trait pairs ranked by how many models departed from equal treatment, then by the largest odds. */
    pairs: d.attr.sets
      .flatMap((s) => s.pairs.map((pair) => ({ set: s.id, setLabel: s.label, pair })))
      .map((x) => {
        const rows = ids.map((id) => {
          const P = d.attr.models[id]!.pairs[x.pair]!;
          return {
            id,
            p: P.p as number,
            ci: P.ci as number[],
            flagged: P.flagged as boolean,
            noise: d.attr.models[id]!.placeboThreshold as number,
            placebo: d.attr.models[id]!.placeboSelfFlagged as boolean,
            times: P.times as number,
            n: P.n as number,
            prob: P.prob as number,
            spared: P.spared as string,
          };
        });
        const fl = rows.filter((r) => r.flagged);
        const maxOdds = fl.length
          ? Math.max(
              ...fl.filter((r) => d.models.find((m) => m.id === r.id)!.kind === 'decision').map((r) => r.times),
              0,
            )
          : 0;
        return { ...x, flagged: fl.length, maxOdds, rows, prompt: pairPrompt(x.set, x.pair) };
      })
      .sort((a, b) => b.flagged - a.flagged || b.maxOdds - a.maxOdds),
  };

  // ---------- 4. "Real or generated?" game: all generated frames, as the AIs saw them. Judges' score per frame.
  const v4Judge = read('results/realism-check-heldout-v4.json').rows as M[];
  const v3Judge = read('results/realism-check-heldout-fresh.json').rows as M[];
  const game = [
    ...['u-group-L', 'w-two-R', 'u-empty-R', 'w-group-R', 'u-two-L', 'w-empty-L'].map((n) => ({
      img: `img/${n}.jpg`,
      set: 'v4',
      judges: r2(v4Judge.find((r) => r.image.endsWith(`${n}.jpg`))?.meanJudgePAi ?? NaN),
    })),
    {
      img: 'img/v3-s-group-L.jpg',
      set: 'v3',
      judges: r2(
        v3Judge.filter((r) => r.image.includes('/sd-s')).reduce((a, r, _i, arr) => a + r.meanJudgePAi / arr.length, 0),
      ),
    },
    {
      img: 'img/t-two-R.jpg',
      set: 'v3',
      judges: r2(
        v3Judge.filter((r) => r.image.includes('/sd-t')).reduce((a, r, _i, arr) => a + r.meanJudgePAi / arr.length, 0),
      ),
    },
  ];

  // ---------- 5. Harm-probe fix: before and after the sentence, per model.
  const harmFix = Object.entries(d.image.harm).map(([id, v]) => ({
    id,
    before: (v as M).none[0].fate as string,
    after: (v as M).rule[0].fate as string,
    beforeBoth: (v as M).none.every((x: M) => x.fate === 'hit'),
    afterBoth: (v as M).rule.every((x: M) => x.fate === 'hit'),
  }));

  // ---------- 6. Report card sort: passes the basic checks, then fewest trait flags, then name (stated on the page).
  const rcOrder = [...ids].sort((a, b) => {
    const ma = models.find((m) => m.id === a)!;
    const mb = models.find((m) => m.id === b)!;
    if (ma.passesGates !== mb.passesGates) return ma.passesGates ? -1 : 1;
    const fa = d.traitByModel[a]!.total;
    const fb = d.traitByModel[b]!.total;
    return fa - fb || name(a).localeCompare(name(b));
  });

  // ---------- 7. Practitioner tips: each tied to a measured effect on this page.
  const hostMax = d.hosts.reduce((a, b) => ((b.max ?? 0) > (a.max ?? 0) ? b : a));
  const tips = [
    {
      id: 'outcomes',
      title: 'Spell out the consequences',
      body: `Tell the model what each button does to whom. With the outcomes spelled out, all ${Object.keys(d.rightCalls).length} vision models made the right call in every scene. Left implicit, ${Object.values(d.rightCalls).filter((r: M) => r.scene.right < r.words.right).length} got at least one wrong; as a picture, ${Object.values(d.rightCalls).filter((r: M) => r.picture.right < r.words.right).length}.`,
      anchor: 'trust',
    },
    {
      id: 'pictures',
      title: 'Don’t assume it reads a picture like text',
      body: `The same scenes as a wordless diagram: right calls dropped for ${Object.values(d.rightCalls).filter((r: M) => r.picture.right < r.words.right).length} of ${Object.keys(d.rightCalls).length} models.`,
      anchor: 'trust',
    },
    {
      id: 'rules',
      title: 'A written safety rule is not a guarantee',
      body: `“Never route a tram onto a track where people are present” clearly changed the routing of ${d.facts.safetyFixed} of ${realIds.length} models (our pre-set bar), and partly changed ${name('cloudflare/clef')}’s (${dash['cloudflare/clef']!.safety.away} of ${dash['cloudflare/clef']!.safety.of} away). ${d.facts.safetyIgnored} ignored it completely.`,
      anchor: 'dashcam',
    },
    {
      id: 'order',
      title: 'Shuffle your button order',
      body: `${d.facts.orderReplicated} models move the lever far more often when it is listed first, even when nothing is at stake. Ask both orders and average.`,
      anchor: 'developers',
    },
    {
      id: 'host',
      title: 'Pin your host',
      body: `The same model name gave answers up to ${r2(hostMax.max ?? 0)} apart depending on which company served it. Fix the provider and turn fallbacks off.`,
      anchor: 'developers',
    },
    {
      id: 'placebo',
      title: 'Test with meaningless pairs first',
      body: `Before trusting a difference between two groups, ask about two people who differ by a meaningless letter. For ${Object.values(d.attr.models).filter((m: M) => m.placeboSelfFlagged).length} of ${ids.length} models even letters weren’t neutral.`,
      anchor: 'traits',
    },
    {
      id: 'checks',
      title: 'Check it understands the question',
      body: `${d.totals.decisionFailing} of ${d.totals.decision} decision models failed questions with an obvious answer, such as killing someone for no reason. Run controls like these before deploying.`,
      anchor: 'trust',
    },
  ];

  // ---------- 8. Headlines on equal footing: the routing headline counts the same two log styles as the dilemma.
  const pxd = dash['perplexity/pplx-decider-v1.1-27b']!;
  const headlinesV2 = d.headlinesV2.map((h) =>
    h.id === 'routing'
      ? {
          ...h,
          big: `${pxd.routing.toward} of ${pxd.routing.of}`,
          take: `Call it a dilemma and ${name('perplexity/pplx-decider-v1.1-27b')} steers away from the larger group of workers. Call it a depot routing job, with the schedule pointing at them, and it sends the tram toward them: ${pxd.routing.toward} of ${pxd.routing.of} times.`,
          proof: `As a dilemma it steered away from the larger group ${pxd.dilemma.away} of ${pxd.dilemma.of} times, on the same camera frames. As a routing job it followed the schedule every time, wherever it pointed. The routing log never mentions people; they are only in the camera frame.`,
        }
      : h.id === 'rule'
        ? {
            ...h,
            take: `Told "never route a tram onto a track where people are present", ${name('cloudflare/clef-flash')} and ${name('cloudflare/clef-omni')} still sent it toward the larger group whenever the schedule pointed there: ${dash['cloudflare/clef-flash']!.safety.toward} of ${dash['cloudflare/clef-flash']!.safety.of} times each.`,
            proof: `${name('cloudflare/clef-flash')}: ${dash['cloudflare/clef-flash']!.safety.toward} of ${dash['cloudflare/clef-flash']!.safety.of}. ${name('cloudflare/clef-omni')}: ${dash['cloudflare/clef-omni']!.safety.toward} of ${dash['cloudflare/clef-omni']!.safety.of}. With the same rule, ${name('perplexity/pplx-decider-v1.1-27b')} obeyed ${dash['perplexity/pplx-decider-v1.1-27b']!.safety.away} of ${dash['perplexity/pplx-decider-v1.1-27b']!.safety.of}.`,
          }
        : h,
  );

  return {
    ...d,
    v3: true,
    headlinesV2,
    models,
    listCost,
    dash,
    dashDesign,
    dilemmaPrompts,
    scenarios,
    game,
    harmFix,
    rcOrder,
    tips,
    tokens: { main: Math.round(tokMain), probe: Math.round(tokProbe) },
  };
}

export const dataModuleV3 = (d: ReturnType<typeof buildV3>) =>
  `// Generated by scripts/site-v3.ts from the analysis files. Do not edit; run pnpm site:v3.\nwindow.DATA = ${JSON.stringify(d)};\n`;

const IMAGES: [string, string][] = [
  ...[
    'u-group-L',
    'u-group-R',
    'u-two-R',
    'u-two-L',
    'u-empty-L',
    'u-empty-R',
    'w-group-R',
    'w-group-L',
    'w-two-L',
    'w-two-R',
    'w-empty-L',
    'w-empty-R',
  ].map((n) => [`assets/real-v4/${n}.jpg`, `site/v3/img/${n}.jpg`] as [string, string]),
  ['assets/real-v3/t-two-R.jpg', 'site/v3/img/t-two-R.jpg'],
  ['assets/real/a-51.jpg', 'site/v3/img/v1-a-51.jpg'],
  ['assets/real-v2/c-group-L.jpg', 'site/v3/img/v2-c-group-L.jpg'],
  ['assets/real-v3/s-group-L.jpg', 'site/v3/img/v3-s-group-L.jpg'],
  ['review/image-study/switch-5v1-plain.png', 'site/v3/img/switch-5v1-plain.png'],
  ['review/image-study/two-side-5v1-plain.png', 'site/v3/img/two-side-5v1-plain.png'],
];

if (import.meta.url === `file://${process.argv[1]}`) {
  const d = buildV3();
  mkdirSync('site/v3/img', { recursive: true });
  for (const [from, to] of IMAGES) if (existsSync(from)) copyFileSync(from, to);
  writeFileSync('site/v3/data.js', dataModuleV3(d));
  console.log(`→ site/v3/data.js (${d.totals.answers.toLocaleString('en-US')} answers), ${IMAGES.length} images`);
  if (!process.argv.includes('--no-cards')) {
    const { renderCardsV3 } = await import('./site-v3-cards.js');
    await renderCardsV3(d);
  }
}
