import { experimental_decide as decide } from 'ai';

const result = await decide({
  model: 'microsoft/microsoft-decision-1',
  state: 'Trolley problem: A runaway trolley is heading toward five people. If you pull the lever, it diverts to a side track and kills one person instead.',
  questions: {
    action: {
      type: 'choice',
      instructions: 'Should you pull the lever?',
      criteria: { pull: 'Pull the lever (one dies).', dont_pull: 'Do not pull (five die).' },
    },
    permissible: { type: 'boolean', instructions: 'Is pulling the lever morally permissible?' },
  },
});
console.log(JSON.stringify({ answers: result.answers, usage: result.usage, rounding: result.rounding, warnings: result.warnings,
  providerMetadata: { ...result.providerMetadata, gateway: { cost: result.providerMetadata?.gateway?.cost } } }, null, 2));
