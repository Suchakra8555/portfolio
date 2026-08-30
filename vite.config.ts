import { defineConfig, type Connect, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Mirrors the /resume -> index.html rewrite that vercel.json applies in production,
// so the route behaves the same under `vite dev` and `vite preview`. The app itself
// detects the /resume path and opens straight to the in-app resume viewer.
function resumeRoute(): Plugin {
  const rewrite: Connect.NextHandleFunction = (req, _res, next) => {
    const pathname = (req.url ?? '').split('?')[0]
    if (pathname === '/resume' || pathname === '/resume/') {
      req.url = '/index.html'
    }
    next()
  }

  return {
    name: 'resume-route',
    configureServer(server) {
      server.middlewares.use(rewrite)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resumeRoute()],
})
