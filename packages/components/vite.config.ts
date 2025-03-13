import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { glob } from 'glob'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      outDir: 'dist/types',
    }),
    // 复制 Less 文件到输出目录
    {
      name: 'copy-less-files',
      async closeBundle() {
        const lessFiles = glob.sync('src/**/*.less')
        for (const file of lessFiles) {
          // 复制到 es 目录
          const esOutFile = file.replace('src/', 'dist/es/')
          mkdirSync(dirname(esOutFile), { recursive: true })
          writeFileSync(esOutFile, readFileSync(file, 'utf-8'))

          // 复制到 lib 目录
          const libOutFile = file.replace('src/', 'dist/lib/')
          mkdirSync(dirname(libOutFile), { recursive: true })
          writeFileSync(libOutFile, readFileSync(file, 'utf-8'))
        }
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'components',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    cssCodeSplit: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
