# DECISIONS.md — Architectural Decision Records

## ADR-001: Single-File HTML Architecture
**Date**: 2026-03-14
**Status**: Accepted
**Decision**: Build the entire portfolio as a single `index.html` file with inline CSS and JS.
**Rationale**: PRD specifies this approach. Simplifies deployment, eliminates build step, works on any static host.
**Consequences**: File will be large (especially with base64 images). Cannot leverage module bundling or code-splitting.

## ADR-002: Pure CSS/JS Instead of Three.js/GSAP
**Date**: 2026-03-14
**Status**: Accepted
**Decision**: Replicate Rajesh Portfolio's visual effects using CSS animations and Vanilla JS instead of Three.js and GSAP.
**Rationale**: Three.js is incompatible with single-file approach. GSAP Club plugins have licensing restrictions. CSS animations provide sufficient visual impact.
**Consequences**: Some 3D effects won't be possible (replaced by emoji robot + CSS glows). Animations may be simpler but still premium.

## ADR-003: White + Orange Theme
**Date**: 2026-03-14
**Status**: Accepted
**Decision**: Replace the current dark-mode portfolio with a White (#FFFFFF) + Orange (#FF6B2C) theme.
**Rationale**: Fresh brand identity per PRD V4. Differentiates from the old version and most developer portfolios.
