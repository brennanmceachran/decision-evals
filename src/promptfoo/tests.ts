/**
 * Promptfoo test generator: `tests: file://src/promptfoo/tests.ts`.
 *
 * Each test carries its full Variant as a JSON var. The provider reads it, so Promptfoo's own
 * prompt templating never touches option order or labels.
 * Filter with: pnpm eval --filter-metadata dilemma=switch
 */
import { expand, loadDilemmas } from '../expand.js';

export default function generateTests() {
  const only = process.env.DILEMMAS?.split(',').filter(Boolean);
  const dilemmas = loadDilemmas().filter((d) => !only || only.includes(d.id));
  return dilemmas.flatMap((d) =>
    expand(d).map((v) => ({
      description: `${v.dilemmaId} [${v.pointKey || '-'}] p${v.paraphrase} ${v.order}/${v.labelStyle}`,
      vars: { variant: JSON.stringify(v) },
      metadata: {
        dilemma: v.dilemmaId,
        variantId: v.variantId,
        pointKey: v.pointKey,
        paraphrase: String(v.paraphrase),
        order: v.order,
        labelStyle: v.labelStyle,
      },
      assert: [
        // P(act) as a named score, so Promptfoo's viewer and derivedMetrics can aggregate it.
        { type: 'javascript' as const, value: 'file://src/promptfoo/assert-p-act.ts', metric: 'p_act' },
      ],
    })),
  );
}
