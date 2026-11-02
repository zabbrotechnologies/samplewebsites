import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Copy uploaded background asset into public directory so it's directly accessible
const sourceBg = 'C:/Users/TUF/.gemini/antigravity/brain/2efd6f03-2cfa-4342-8d24-f648f028e078/.user_uploaded/media_1793618860273_fc317cf0.jpg'
const publicDir = path.resolve('public')
const destBg = path.join(publicDir, 'verhost-ambient-bg.jpg')

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  if (fs.existsSync(sourceBg)) {
    fs.copyFileSync(sourceBg, destBg)
    console.log('[Vite] Successfully copied background image to public/verhost-ambient-bg.jpg')
  }
} catch (err) {
  console.error('[Vite] Error copying background image:', err)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-ambient-bg',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/verhost-ambient-bg.jpg') {
            try {
              if (fs.existsSync(destBg)) {
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(fs.readFileSync(destBg))
                return
              } else if (fs.existsSync(sourceBg)) {
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(fs.readFileSync(sourceBg))
                return
              }
            } catch (e) {
              console.error(e)
            }
          }
          next()
        })
      }
    }
  ],
})
