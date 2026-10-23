import { defineConfig, configDefaults } from 'vitest/config';

// .old-step3 is a checkout of an older commit, kept for side-by-side review; its tests aren't this tree's
export default defineConfig({ test: { exclude: [...configDefaults.exclude, '.old-step3/**'] } });
