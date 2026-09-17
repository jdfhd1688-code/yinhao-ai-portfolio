# YINHAO — AI 产品、智能体与创作

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

Regenerate the AI Research PDF with an embedded CJK font:

```bash
python scripts/generate_ai_research_pdf.py
```

The generator uses Windows Noto Sans SC by default. Set `PORTFOLIO_CJK_FONT` to another CJK TrueType font on other systems.

## Media map

All production media lives in `public/media/`.

| Path | Purpose | Current status |
| --- | --- | --- |
| `public/media/hero/hero-road.mp4` | Homepage background video | Original supplied video |
| `public/media/hero/hero-road.png` | Hero video poster | Original supplied night-road image |
| `public/media/hero/walking-road.png` | Closing Contact background | Reuses the supplied night-road image |
| `public/media/about/yinhao-avatar.png` | First front-facing appearance in About | Original supplied portrait |
| `public/media/youwozai/cover-generated.png` | 有我在 project cover | Interim visual; the case page links to the runnable MVP and public repository |
| `public/media/legal-agent/cover-generated.png` | Legal Agent project cover | Interim visual; the case page links to the current prototype and public repository |
| `public/media/storytelling/cover-generated.png` | Legacy storytelling visual | Not presented as official released-work art |

## Phase 3.2 — real-work integration

The site is Chinese-first with an in-place English switch. Language choice persists locally. Project claims and external links are grounded in the supplied source materials and public repositories; absent evidence remains visibly marked as planned or is omitted.

### 有我在 / YOUWOZAI

- `public/media/youwozai/chat.png`
- `public/media/youwozai/emotion-record.png`
- `public/media/youwozai/weekly-letter.png`
- `public/media/youwozai/guardian-circle.png`
- `public/media/youwozai/safety-workflow.png`
- `public/media/youwozai/demo.mp4`
- Simulated-data demo: temporarily unavailable (the previous deployment URL is intentionally not linked on the portfolio)
- Repository: `https://github.com/jdfhd1688-code/youwozai-ai-companion`

### Enterprise Legal AI Agent

- `public/media/legal-agent/contract-upload.png`
- `public/media/legal-agent/risk-review.png`
- `public/media/legal-agent/legal-basis.png`
- `public/media/legal-agent/revision-suggestion.png`
- `public/media/legal-agent/report.png`
- `public/media/legal-agent/architecture.svg`
- `public/media/legal-agent/demo.mp4`
- Current prototype: `https://enterprise-legal-ai-agent.onrender.com/`
- Repository: `https://github.com/jdfhd1688-code/enterprise-legal-ai-agent`

### IP Adaptation & Short Drama

- `public/media/storytelling/poster-01.jpg`
- `public/media/storytelling/character-01.jpg`
- `public/media/storytelling/storyboard-01.jpg`
- `public/media/storytelling/frame-01.jpg`
- `public/media/storytelling/frame-02.jpg`
- `public/media/storytelling/preview-01.mp4`
- `public/media/storytelling/final-film-01.mp4`
- Two released-work links are stored in `data/dramaWorks.ts`.
- No generated image is presented as an official poster or release still.

### Felicity Solar South Africa

- Live website: `https://felicitysolar.co.za/`
- The case states only the supplied responsibilities and makes no unsupported SEO, traffic, conversion, sales or research claims.

### Contact links

- Verified email address
- GitHub profile URL
- LinkedIn profile URL

Until those are supplied, the site does not invent live demos, metrics, results, testimonials, repositories, social profiles, or finished films. The contact labels remain intentionally inactive; no placeholder `href="#"` links are shipped.

## Routes

- `/`
- `/work/youwozai`
- `/work/legal-ai-agent`
- `/work/short-drama`
- `/work/ai-storytelling` (legacy-compatible alias)
- `/work/felicity-south-africa`
