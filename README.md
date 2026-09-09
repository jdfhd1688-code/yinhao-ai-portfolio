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

## Phase 4 — real project integration checklist

Phase 3 deliberately shows honest, editorial placeholders wherever verified project evidence does not yet exist. `ProjectMediaSlot` checks each expected public path at build time: add a real file at the matching path and the placeholder automatically becomes the real image or video on the next build.

### 有我在 / YOUWOZAI

- `public/media/youwozai/chat.png`
- `public/media/youwozai/emotion-record.png`
- `public/media/youwozai/weekly-letter.png`
- `public/media/youwozai/guardian-circle.png`
- `public/media/youwozai/safety-workflow.png`
- `public/media/youwozai/demo.mp4`
- Needed: verified project URL and, only if public, repository URL.

### Enterprise Legal AI Agent

- `public/media/legal-agent/contract-upload.png`
- `public/media/legal-agent/risk-review.png`
- `public/media/legal-agent/legal-basis.png`
- `public/media/legal-agent/revision-suggestion.png`
- `public/media/legal-agent/report.png`
- `public/media/legal-agent/architecture.svg`
- `public/media/legal-agent/demo.mp4`
- Needed: verified demo URL, system documentation, and repository URL only if it is public.

### AI Storytelling

- `public/media/storytelling/poster-01.jpg`
- `public/media/storytelling/character-01.jpg`
- `public/media/storytelling/storyboard-01.jpg`
- `public/media/storytelling/frame-01.jpg`
- `public/media/storytelling/frame-02.jpg`
- `public/media/storytelling/preview-01.mp4`
- `public/media/storytelling/final-film-01.mp4`
- Needed: published film/preview URL and credits once the work is ready.

### Contact links

- Verified email address
- GitHub profile URL
- LinkedIn profile URL
- Resume PDF at `public/yinhao-resume.pdf`, if it should be public

Until those are supplied, the site does not invent live demos, metrics, results, testimonials, repositories, social profiles, or finished films. The contact labels remain intentionally inactive; no placeholder `href="#"` links are shipped.

## Routes

- `/`
- `/work/youwozai`
- `/work/legal-ai-agent`
- `/work/ai-storytelling`
