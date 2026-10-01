# Abdulrahman Zidan — Premium Interactive Portfolio

A cinematic, editorial personal-brand portfolio for lead generation, lead management and sales operations.

## Positioning
Real Estate Cold Caller • Lead Manager • Appointment Setter • Virtual Assistant

Experience positioning also covers **various industries**, including U.S. **real estate + solar**, with transferable lead-generation and lead-management workflows.

## Experience architecture
Content is data-driven in `data/portfolio.ts`. Add future companies, roles, services, tools and strengths there without rebuilding the page structure.

## Stack
- Next.js / React / TypeScript
- Tailwind CSS
- Three.js WebGL hero
- GSAP for lightweight entrance choreography
- Motion for React micro-interactions
- Lucide icons
- GitHub Actions + GitHub Pages static export
- Native HTML5 video

## Included interactions
- Manual/native browser scrolling — no smooth-scroll library
- Anchor navigation with active-section tracking
- WebGL hero that reacts to pointer movement
- Cursor spotlight / ambient pointer response
- Hover tilt, lift and glow behavior on key cards
- Interactive experience switcher
- Command palette with Ctrl/Cmd + K
- Native on-site video modal
- CV download
- Reduced-motion accessibility mode
- SEO metadata, sitemap, robots and web manifest

## Local development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```

GitHub Pages is configured through `.github/workflows/deploy.yml` and Next.js static export.

## Assets
Upload these exact files into the repository:
- `public/intro.mp4`
- `public/Abdulrahman-Zidan-CV.pdf`

They are linked by the site automatically.

## Live target
https://zidmatrix.github.io/Abdulrahman-Zidan/
