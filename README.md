# YINHAO — AI Products, Agents & Stories

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
| `public/media/about/yinhao-avatar.png` | First front-facing appearance in About | Original supplied portrait |
| `public/media/youwozai/cover-generated.png` | 有我在 project cover | Clean generated interim art; replace after the real project link is supplied |
| `public/media/legal-agent/cover-generated.png` | Legal Agent project cover | Clean generated interim art; replace after the real project link is supplied |
| `public/media/storytelling/cover-generated.png` | AI Storytelling project cover | Clean generated interim art; replace after the real project link is supplied |

## Phase 2 real-media handoff

The case-study layouts never invent product evidence. The following paths are rendered as clearly labelled placeholders until verified source files are supplied:

- `public/media/youwozai/chat.png`
- `public/media/youwozai/emotion-record.png`
- `public/media/youwozai/weekly-letter.png`
- `public/media/youwozai/guardian-circle.png`
- `public/media/legal-agent/contract-upload.png`
- `public/media/legal-agent/risk-report.png`
- `public/media/legal-agent/workflow.png`
- `public/media/storytelling/poster-01.jpg`
- `public/media/storytelling/storyboard-01.jpg`
- `public/media/storytelling/film-01.mp4`

The Email, GitHub, Resume, and LinkedIn labels in the finale remain intentionally inactive until verified URLs are provided. No placeholder `href="#"` values are shipped.

To replace an asset, keep the same filename and aspect ratio where possible. The project content is stored in `data/projects.ts`; add future case studies there and create their media folder under `public/media/`.

## Routes

- `/`
- `/work/youwozai`
- `/work/legal-ai-agent`
- `/work/ai-storytelling`
