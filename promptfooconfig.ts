// Providers come from src/subjects.ts. Tests come from dilemmas/*.yaml via src/promptfoo/tests.ts.
// Narrow a run with env vars: SUBJECTS=jev,clef DILEMMAS=switch pnpm eval
import { SUBJECTS } from './src/subjects.js';

const only = process.env.SUBJECTS?.split(',').filter(Boolean);
const subjects = SUBJECTS.filter((s) => !only || only.some((o) => s.id.includes(o)));

export default {
  description: 'Decision models on moral dilemmas',
  // The provider ignores the rendered prompt and reads vars.variant instead; this placeholder just satisfies Promptfoo.
  prompts: ['{{variant}}'],
  providers: subjects.map((s) => ({
    id: 'file://src/promptfoo/provider.ts',
    label: s.id,
    config: { subject: s.id },
  })),
  tests: 'file://src/promptfoo/tests.ts',
  defaultTest: { options: { provider: undefined } },
  outputPath: ['results/latest.json'],
  writeLatestResults: true,
};
