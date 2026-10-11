---
name: design-system-standards
description: Unified craft standards combining Anthropic Frontend Design, Vercel Web Interface Guidelines, Impeccable Style, and SkillsUI aesthetics (Bento Grid, Minimal Serif, Fintech).
---

# Design System Standards & Anti-AI-Slop Rules

Every interface across this workspace must adhere to high-craft human designer standards.

## 1. Absolute Prohibitions (AI-Tell Elimination)
- NEVER use emojis in place of UI icons, logos, or status indicators. Use semantic inline SVGs with precise geometry (stroke-width 1.75–2.0).
- NO generic template chrome: avoid tracked-out ALL-CAPS eyebrow labels above every heading, middle-dot separated tags ('A · B · C'), and generic arrows ('→') appended to every button.
- NO ungrounded color palettes: avoid the cliché "warm cream background with terracotta/clay accents" or "black with acid green accent".
- NO SaaS-card sameness: avoid identical rounded boxes with identical soft grey shadows and identical padding. Layouts must have varying rhythm, asymmetric visual weight, and deliberate hierarchy.

## 2. Typographic Rigor
- Pair a purposeful high-contrast display serif (or crisp neo-grotesque) with a workhorse sans-serif.
- Line length must stay under 75–80 characters for optimal legibility.
- Never accent random single words with italic/color unless semantically required.
- Maintain proportional vertical rhythm and generous spacing.

## 3. Interaction & Accessibility Floor (Vercel Guidelines)
- All interactive controls must be keyboard operable with visible `:focus-visible` states. Never use `outline: none` without a focus ring replacement.
- Native HTML elements first (`<button>` for actions, `<a>` for navigation, `<dialog>` for modals).
- Support `prefers-reduced-motion` on all transitions.
- High-contrast text compliance (WCAG AA minimum, 4.5:1 ratio).
