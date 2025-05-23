import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import type { UserConfig } from 'vite'
import type {InlineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test:{
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom'
  }
} as UserConfig & {
  test: InlineConfig
})  
