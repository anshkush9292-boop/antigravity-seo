# ROADMAP.md

> **Current Phase**: Not started
> **Milestone**: v4.0 — White × Orange Edition

## Must-Haves (from SPEC)
- [ ] Premium single-file HTML portfolio with all 12 sections
- [ ] White + Orange design system (Syne + DM Sans typography)
- [ ] Interactive robot hero with speech bubbles and auto-wave
- [ ] Antigravity skill bubble arena with tooltips
- [ ] Case studies with expandable details and real screenshots
- [ ] Flip-card certifications with real certificate images
- [ ] AEO schema markup (Person + FAQPage JSON-LD)
- [ ] Full mobile responsiveness (5 breakpoints)
- [ ] Deploy-ready on Vercel

## Phases

### Phase 1: Foundation — Design System & Page Skeleton
**Status**: ⬜ Not Started
**Objective**: Create the single HTML file with the complete design system (CSS variables, typography, base layout), loading screen, custom cursor, fixed global elements (social bar, resume button), and navigation — the shell everything else builds on.
**Deliverables**:
- `index.html` with all CSS variables, fonts, and base styles
- Loading screen with typewriter + progress bar
- Custom cursor (dot + lagging ring)
- Fixed left social bar + fixed bottom-right resume button
- Responsive navigation with mobile hamburger menu
- Smooth scroll + scroll-reveal IntersectionObserver setup

### Phase 2: Hero & Impact Sections
**Status**: ⬜ Not Started
**Objective**: Build the hero section (robot, orbit rings, floating pills, ghost word, split layout), marquee strip, and stats bar — the first impression.
**Deliverables**:
- Hero with robot emoji, 3 orbit rings, orange glow, 6 orbit icons, 4 floating skill pills
- AI-Augmented badge card (right of robot)
- Stat card (left of robot)
- 8 floating background metrics
- Hero bottom: Name LEFT / Role RIGHT split layout with ghost word
- Orange marquee strip with seamless loop
- Stats bar with count-up animation (5 stats)

### Phase 3: Core Content Sections
**Status**: ⬜ Not Started
**Objective**: Build the About, Why You Need Me, Skills, and Experience sections — the substance that converts visitors.
**Deliverables**:
- About section: 2-column with bio + 5-slide growth philosophy
- "Why You Need Me" dark section: value cards, comparison table, impact stats
- Skills section: 12-bubble antigravity arena + AI stack cards + 12-skill technical grid
- Experience timeline: 3 entries with accordion expand, one-at-a-time behavior

### Phase 4: Projects, Certs, Contact & Polish
**Status**: ⬜ Not Started
**Objective**: Build the case studies, AEO personal project, certifications, contact section, and footer. Inject all real images and screenshots. Final polish with scroll reveals and magnetic buttons.
**Deliverables**:
- 4 project case study cards with expandable details + metric tiles
- AEO Engine personal project (2-column dark/light)
- 9 certification flip cards (3 real + 6 upcoming)
- Certificate images embedded as base64
- Case study analytics screenshots embedded
- Contact section with CTAs + thank you card
- Footer
- Magnetic button effect on all CTAs
- All scroll reveal animations applied
- Meta tags + AEO schema markup (Person + FAQPage JSON-LD)
- Resume PDF linked for download

### Phase 5: Testing, QA & Deployment
**Status**: ⬜ Not Started
**Objective**: Validate all interactions, responsive breakpoints, schema markup, and deploy to Vercel.
**Deliverables**:
- Browser testing (Chrome, Firefox, Safari)
- Mobile responsive testing at 900px, 768px, 700px, 600px
- JSON-LD validation via Google Rich Results Test
- Link verification
- Lighthouse audit (target 85+)
- Deploy to Vercel
- Final live URL testing
