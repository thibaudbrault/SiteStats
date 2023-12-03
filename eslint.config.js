import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'tailwind.config.ts',
    'nuxt.config.ts',
    'types/*.ts',
  ],
})
