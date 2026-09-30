# Abdulrahman Zidan — Premium Interactive Portfolio

A cinematic, editorial personal brand portfolio for U.S. real estate sales operations.

## Positioning
Real Estate Cold Caller • Lead Manager • Appointment Setter • Virtual Assistant

## Experience architecture
Content is data-driven in `data/portfolio.ts`. Add future companies, roles, services, tools and strengths there without rebuilding the page structure.

## Stack
- Next.js 16.3.7 / React 19.3 / TypeScript
- Tailwind CSS 4
- Three.js WebGL hero scene
- GSAP + ScrollTrigger for cinematic scroll choreography
- Lenis for smooth native scrolling
- Motion for React micro-interactions and transitions
- Lucide icons
- GitHub Actions + GitHub Pages static export

## Included interactions
- Interactive WebGL hero
- Scroll-driven motion
- Responsive mobile navigation
- Command palette with Ctrl/Cmd + K
- Interactive experience switcher
- Motion-powered service and proof cards
- Native on-site video modal
- Voice introduction link
- Reduced-motion accessibility mode
- SEO metadata, sitemap, robots and web manifest

## Local development
npm install
npm run dev

## Production
npm run build

GitHub Pages is configured through `.github/workflows/deploy.yml` and Next.js static export.

## Assets
Add the final self-introduction video as `public/intro.mp4`. Add the verified CV PDF as `public/Abdulrahman-Zidan-CV.pdf` when ready.

## Live target
https://zidmatrix.github.io/Abdulrahman-Zidan/
