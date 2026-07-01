# Portfolio — Suchakra Kumar Gattu

A personal portfolio built with Vite + React + TypeScript. Features a light/dark theme toggle, an interactive animated avatar, and a Groq-backed AI chat assistant that can answer questions about my background using content pulled from [src/data/resume.ts](src/data/resume.ts).

## Getting started

```bash
npm install
```

### Frontend-only dev

```bash
npm run dev
```

Runs the Vite dev server only. The site works fully except for the chat assistant — requests to `/api/chat` will fail gracefully with an inline error message, since Vite alone doesn't serve the `/api` serverless function.

### Full-stack dev (with working chat)

1. Get a free Groq API key at [console.groq.com/keys](https://console.groq.com/keys).
2. Create a `.env.local` file in the project root (see `.env.example`):
   ```
   GROQ_API_KEY=your_key_here
   ```
3. Run:
   ```bash
   npm run dev:vercel
   ```
   This uses the Vercel CLI to serve both the Vite frontend and the `/api/chat` serverless function locally, mirroring production exactly. The first run may prompt you to log in to Vercel and link the project.

## Build

```bash
npm run build
```

## Deployment

Deploy to Vercel — it auto-detects the Vite framework and the `api/` directory as serverless functions, no `vercel.json` needed. Set the `GROQ_API_KEY` environment variable in the Vercel project settings.

## Architecture notes

- **Content**: all resume content lives in [src/data/resume.ts](src/data/resume.ts) — it's the single source of truth for both the rendered UI and the chat assistant's system prompt ([src/data/resumeToPrompt.ts](src/data/resumeToPrompt.ts)).
- **Theming**: CSS variables in [src/index.css](src/index.css), toggled via a `data-theme` attribute set by an inline script in `index.html` (avoids a flash of the wrong theme) and a React context in [src/context](src/context).
- **Avatar**: a single `<video>` element driven by [src/hooks/useAvatarController.ts](src/hooks/useAvatarController.ts), reacting to app load, nav clicks, and chat activity. The event→clip mapping lives in [src/components/Avatar/avatarClips.ts](src/components/Avatar/avatarClips.ts) — most of the clips in `public/` are an unused reserve pool for future easter eggs.
- **Chat**: the Groq API key is never exposed client-side — [api/chat.ts](api/chat.ts) is a Vercel serverless function that proxies the request server-side.
