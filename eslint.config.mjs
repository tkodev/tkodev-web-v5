import { withTkodevConfig } from '@tkodev/eslint-config-next'

export default withTkodevConfig([
  { ignores: ['.next/', 'out/', 'node_modules/', 'next-env.d.ts'] },
  {
    files: [
      'src/app/**/{page,layout,template,loading,error,not-found,default,route,sitemap,robots,manifest}.{ts,tsx}',
      '*.config.{ts,mjs}',
      'eslint.config.mjs'
    ],
    rules: { 'import/no-default-export': 'off' }
  }
])
