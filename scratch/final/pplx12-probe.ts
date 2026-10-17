// One-off: does Perplexity Decider v1.2 answer text and image questions on the AI Gateway, and on which route?
import { ask } from '../../src/final/call.js';
import { dataUrl } from '../../src/real-study.js';
const q = { act: { type: 'choice' as const, instructions: 'Pick one.', criteria: { a: 'A', b: 'B' } } };
const img = { count_left: { type: 'choice' as const, instructions: 'How many people are on the left track?', criteria: { '0': '0', '1': '1', '2': '2', '3': '3' } } };
for (const image of ['gw-systemone', 'gw-decisions'] as const) {
  const s = { id: 'perplexity/pplx-decider-v1.2', category: 'decision' as const, route: 'gateway' as const, vendor: 'Perplexity', name: 'probe', image };
  for (const [label, state, qs] of [
    ['text', { kind: 'text' as const, text: 'Pick a.' }, q],
    ['image', { kind: 'image' as const, url: dataUrl('assets/real-final/u-group-L.jpg') }, img],
  ] as const) {
    try {
      const r = await ask(s as never, state as never, qs as never);
      console.log(image, label, 'OK', JSON.stringify(r.answers).slice(0, 160), '| provider', r.provider, '| served', r.servedModel, '| $', r.costUsd);
    } catch (e) {
      console.log(image, label, 'ERR', String((e as Error).message).slice(0, 200));
    }
  }
}
