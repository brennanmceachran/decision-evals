# What was cleaned up (27 Oct 2026)

Everything below was backed up and checked before it was deleted locally.

## Backed up, then deleted locally

The private GitHub release `data-2026-10` holds 13 files (about 425 MB) with `SHA256SUMS`. Every file was downloaded
again and checked against its checksum. The answer files decompress to the same bytes as the originals, and each cache
archive holds exactly as many records as the cache folder had files.

| What | Where it is now |
|---|---|
| The raw answers (`final-run1`, `final-run2`, `stage2`) | Kept locally in `results/final/`, and in the release |
| Every model call's full response (`.cache/final`, the five study runs) | Release only: `cache-*.jsonl.gz` |
| The early studies (pilots, confirm, attr, exchange-age) | Release only: `results-early-studies.tar.gz` |
| Superseded first passes | Release only: `final-superseded-passes.tar.gz` |
| Scratch code and notes | Release only: `scratch-code-and-notes.tar.gz`. Two scripts still useful moved to `scripts/` |

## Deleted, nothing lost

- `stage1.jsonl`, `stage1-repeat.jsonl` and `pplx12-*.jsonl` are contained in `final-run1/2`. The second and third
  passes were identical copies.
- `.promptfoo/`: every eval it held had already been exported to the early-studies files.
- `.cache/real-study`, `.cache/image-study`, the smoke and pilot caches.
- `scratch/` images (the realism candidates). The chosen frames are in `assets/`.
- Review screenshots from v5 and v6 development, and the press prototypes' images (their code is in
  `review/press-proto-code/`).

## The draft sites

v1 to v5, `present`, `final` and `v4-summary` were removed from `site/`, along with their build scripts and tests.
They are all at the git tag `drafts-v1-v5` (`git checkout drafts-v1-v5`). v6 still builds on the v5 data, which now
lives at `assets/base/v5-data.js`. It is still rebuilt by `scripts/site-v5.ts` and recounted from the raw answers by
`test/site-v5-verify.test.ts`. A full v6 rebuild after the move was byte-identical.

The step 4 cost and speed figures were computed from the call caches. They are now saved in `assets/routing-cost.json`,
so the build no longer needs the caches.
