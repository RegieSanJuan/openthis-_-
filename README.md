# Animated Daisy Flower🌼 

A simple Next.js app that renders a CSS-animated flower garden with optional background music.

## Features

- Next.js (App Router) + TypeScript
- CSS-only flower/night animations (`app/flowers.css`)
- Background music via HTML5 `<audio>` using `public/audio/gluesong.mp3`
- Reusable UI components in `components/ui`

## Getting started

Prerequisites:

- Node.js 18+
- pnpm (recommended) or npm/yarn

Install dependencies:

```powershell
# from the project root
pnpm install
# or
npm install
```

Run the dev server:

```powershell
pnpm dev
# then open http://localhost:3000
```

Build for production:

```powershell
pnpm build
pnpm start
```

## Audio notes

- Place audio files in `public/audio/`.
- The page references `/audio/gluesong.mp3` in `app/page.tsx`.
- Modern browsers may block autoplay with sound until the user interacts with the page. If music doesn’t start automatically, click the page or add a small “Play Music” button that calls `audio.play()` after a user gesture.

## Project structure (high level)

- `app/` — pages, layout, global and flower styles
- `components/` — UI components and helpers
- `hooks/` — shared React hooks
- `lib/` — utilities
- `public/` — static assets (images, audio)
- `styles/` — additional global styles

## Deploy

- Vercel: import this repo and deploy (Next.js defaults).
- Other hosts: build with `pnpm build` and serve with `pnpm start`.

## Push to GitHub

First push:

```powershell
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/RegieSanJuan/openthis-_-.git
git push -u origin main
```

If the remote already has commits:

```powershell
git pull origin main --allow-unrelated-histories
# resolve any merge conflicts, then
git push -u origin main
```

---

Made with Next.js and a bit of CSS magic.
