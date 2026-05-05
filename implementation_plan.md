# KidsForge (키즈포지) Implementation Plan

## Summary
Build a child-friendly AI coding platform prototype (KidsForge) targeting ages 6-12. Features a natural language command interface, 5 coding-character mascots with role-based animations, and a warm, playful UI.

## Scope

### In Scope
- [x] Vite + React + TypeScript project setup
- [x] Tailwind CSS with custom KidsForge color palette
- [x] Home page with hero, character introductions, and natural language input
- [x] 5 character SVG components with breathing/work animations (HammerNyan, TaxiBot, RulerFairy, GearBear, IdeaLamp)
- [x] Coding/Work page with step-by-step progress and preview
- [x] Routing between Home and Work pages
- [x] Responsive design for tablet/desktop

### Out of Scope
- Backend API integration (mocked responses)
- User authentication
- Sound/audio effects
- Mobile-optimized layout (tablet+ only for prototype)
- Database persistence

### Deferred
- Actual AI NLP processing (use rule-based mock)
- Multi-language support
- Parent dashboard

## Planned Changes

| # | Change | Files | Status |
|---|--------|-------|--------|
| 1 | Initialize Vite + React + TS project | `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html` | ✅ Done |
| 2 | Setup Tailwind CSS | `tailwind.config.js`, `postcss.config.js`, `src/index.css` | ✅ Done |
| 3 | Design tokens & global styles | `src/styles/tokens.ts`, `src/index.css` | ✅ Done |
| 4 | Character SVG components | `src/components/characters/*.tsx` | ✅ Done |
| 5 | Layout & Navigation | `src/components/Layout.tsx`, `src/components/Header.tsx` | ✅ Done |
| 6 | Home Page | `src/pages/Home.tsx` | ✅ Done |
| 7 | Work/Coding Page | `src/pages/Work.tsx` | ✅ Done |
| 8 | App Router | `src/App.tsx` | ✅ Done |
| 9 | Mock command processor | `src/lib/commandProcessor.ts` | ✅ Done |

## Technical Approach
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom theme extension
- **Routing**: React Router DOM (v6)
- **Animations**: CSS keyframes + Tailwind animate utilities
- **Characters**: Inline SVG components for crisp scaling and CSS animation control
- **State**: React useState/useContext (no external state library needed for prototype)

## Risk Assessment
| Risk | Mitigation |
|------|------------|
| Complex SVG animations may lag | Use simple CSS transforms (scale, translate, rotate) only |
| Color contrast for accessibility | Ensure WCAG AA compliance on all text |
| Character designs too complex | Keep SVGs simple and stylized (flat design) |
