// The final study's design (FINAL-RUN-PLAN.md): every part balanced, nothing pooled by accident, no pilot leftovers.
import { describe, expect, it } from 'vitest';
import { dashcamJobs, imageJobs, textJobs } from '../src/final/jobs.js';
import { FINAL_SUBJECTS } from '../src/final/subjects.js';

describe('final study design', () => {
  const text = textJobs();
  const dash = dashcamJobs();
  const img = imageJobs();

  it('job ids are unique', () => {
    const ids = [...text, ...dash, ...img].map((j) => j.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every trait pair has every ratio, both sides, 4 scenes and both button orders', () => {
    const parity = text.filter((j) => String(j.meta.dilemma).startsWith('parity-'));
    const byPair = new Map<string, number>();
    for (const j of parity) {
      const p = j.variant!.point;
      const k = `${j.meta.dilemma}|${p.a}|${p.b}`;
      byPair.set(k, (byPair.get(k) ?? 0) + 1);
    }
    // 5 ratios × 2 sides × 4 scenes × 2 orders
    for (const [k, n] of byPair) expect(n, k).toBe(80);
    expect(byPair.size).toBe(139);
  });

  it('plural descriptions are grammatical (head noun pluralized)', () => {
    const bad = text
      .map((j) => (j.state as { text: string }).text)
      .filter((t) => /\b[2-9] (man|woman|boy|girl|person) (with|in|aged)\b|records\b|wheelchairs\b|\b\d+ \d/.test(t));
    expect(bad.slice(0, 3)).toEqual([]);
  });

  it('dashcam: every condition on the same wordings, schedules and orders; 4 depots × 3 scenes × 2 sides', () => {
    const cells = new Map<string, number>();
    for (const j of dash) {
      const k = `${j.meta.framing}|${j.meta.plate}|${j.meta.content}|${j.meta.side}`;
      cells.set(k, (cells.get(k) ?? 0) + 1);
    }
    for (const [k, n] of cells) expect(n, k).toBe(k.startsWith('dilemma') ? 4 : 16);
    expect(new Set(dash.map((j) => j.meta.plate))).toEqual(new Set(['u', 'w', 'x', 'y']));
    // conflict and aligned are balanced within each content, and 3v1 is never pooled with 2v0 by construction
    for (const content of ['two', 'group-one'])
      for (const framing of ['ops', 'ops-nostop', 'ops-config', 'ops-safety']) {
        const js = dash.filter((j) => j.meta.content === content && j.meta.framing === framing);
        expect(js.filter((j) => j.meta.relation === 'conflict').length).toBe(js.filter((j) => j.meta.relation === 'aligned').length);
      }
  });

  it('every model in the run has a route that can answer each part it is assigned', () => {
    for (const s of FINAL_SUBJECTS) {
      if (s.route === 'openrouter') expect(s.host, s.id).toBeTruthy();
      if (s.category !== 'decision') expect(s.image, s.id).toBeTruthy();
    }
    expect(FINAL_SUBJECTS.filter((s) => s.category === 'decision')).toHaveLength(19);
  });

  it('diagrams are sent at 1280×960', () => {
    const j = img.find((x) => x.state.kind === 'image')!;
    const b = Buffer.from((j.state as { url: string }).url.split(',')[1]!, 'base64');
    expect([b.readUInt32BE(16), b.readUInt32BE(20)]).toEqual([1280, 960]);
  });
});
