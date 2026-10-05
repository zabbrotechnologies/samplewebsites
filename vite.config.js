import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/t2-live': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/t2-live/, '')
      },
      '/_next': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})
