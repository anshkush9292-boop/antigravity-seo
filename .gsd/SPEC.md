# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision
Build a premium, single-file portfolio website for **Anshuman Kushwaha** — an AI-Driven Digital Growth Strategist — that doesn't just list skills and experience, but *demonstrates* how he thinks, how he uses AI, and why a client or employer should choose him. The design adapts the award-worthy layout patterns from the Rajesh Portfolio (raxx21/rajesh-portfolio) into a **White (#FFFFFF) + Orange (#FF6B2C)** branded experience using pure HTML, CSS3, and Vanilla JavaScript — no frameworks, no build tools.

## Goals
1. **Stunning first impression** — Loading screen, custom cursor, floating robot, orbit rings, and antigravity skill bubbles create a memorable "wow" moment
2. **Conversion-optimized structure** — "Why You Need Me" comparison table, case study proof with real metrics, and clear CTAs convert HR/recruiters/clients
3. **AEO & Schema ready** — FAQPage + Person JSON-LD schemas make the portfolio visible in AI search engines (Perplexity, ChatGPT, Google AI Overviews)
4. **Real proof over promises** — Flip-card certifications with actual certificate images, case studies with analytics screenshots, validated AEO schema
5. **Mobile-first responsive** — 5 breakpoints (1140px → 600px), hamburger nav, stacked layouts, fully functional on every device
6. **Deploy-ready on Vercel** — Single `index.html` file with all CSS/JS inline, served as a static site

## Non-Goals (Out of Scope)
- Three.js / WebGL / 3D models (PRD explicitly excludes — pure CSS/JS only)
- React, Vue, or any JS framework
- GSAP Club plugins or paid animation libraries
- Backend / database / CMS
- Blog or multi-page architecture
- Dark theme (the old portfolio was dark; new one is White + Orange)

## Users
| Audience | What They Need |
|---|---|
| **HR / Recruiters** | Clear experience timeline, real certifications, AI-augmented workflow proof |
| **Clients / Brands** | Case study results with numbers, "Why You Need Me" business case, AEO proof |
| **General Visitors** | Memorable design that itself demonstrates digital marketing expertise |

## Constraints
- **Single HTML file** — All CSS and JS inline (as specified in PRD)
- **No external dependencies** except Google Fonts (Syne + DM Sans)
- **Certificate images** embedded as base64 data URIs in the final build
- **Case study screenshots** (YouTube analytics, Looker Studio) embedded similarly
- **Resume PDF** linked for download
- **Deploy target**: Vercel static hosting

## Success Criteria
- [ ] Loading screen with typewriter text and progress bar works correctly
- [ ] Custom cursor (orange dot + lagging ring) functions smoothly
- [ ] Robot emoji is interactive (click speech bubbles, auto-wave every 8s)
- [ ] All 12 skill bubbles float with antigravity animation + tooltip popups
- [ ] Certificate flip cards show real certificate images on back
- [ ] Case study cards expand with detailed metrics and screenshots
- [ ] AEO schema validates at Google Rich Results Test
- [ ] Mobile responsive at all 5 breakpoints
- [ ] Lighthouse score 85+ on desktop
- [ ] Scroll reveal animations fire correctly on all sections
- [ ] "Why You Need Me" section clearly communicates value proposition
