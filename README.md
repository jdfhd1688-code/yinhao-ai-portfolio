# Yihong — AI Products, Agents & Stories

A cinematic, editorial portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion and GSAP.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Media map

All production media lives in `public/media/`.

| Path | Purpose | Current status |
| --- | --- | --- |
| `public/media/hero/hero-road.mp4` | Homepage background video | Original supplied video |
| `public/media/hero/hero-road.png` | Hero video poster | Original supplied night-road image |
| `public/media/hero/walking-road.png` | Closing Contact background | Reuses the supplied night-road image |
| `public/media/about/yihong-avatar.png` | First front-facing appearance in About | Original supplied portrait |
| `public/media/youwozai/cover-generated.png` | 有我在 project cover | Clean generated interim art; replace after the real project link is supplied |
| `public/media/legal-agent/cover-generated.png` | Legal Agent project cover | Clean generated interim art; replace after the real project link is supplied |
| `public/media/storytelling/cover-generated.png` | AI Storytelling project cover | Clean generated interim art; replace after the real project link is supplied |

To replace an asset, keep the same filename and aspect ratio where possible. The project content is stored in `data/projects.ts`; add future case studies there and create their media folder under `public/media/`.

## Routes

- `/`
- `/work/youwozai`
- `/work/legal-ai-agent`
- `/work/ai-storytelling`
