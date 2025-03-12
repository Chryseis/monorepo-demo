import { defineConfig } from 'umi'
import { resolve } from 'path'

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
  npmClient: 'pnpm',
  devtool: 'eval-source-map',
  alias: {
    '@monorepo/components': resolve(__dirname, '../../packages/components/src'),
    '@monorepo/utils': resolve(__dirname, '../../packages/utils/src'),
  },
})
