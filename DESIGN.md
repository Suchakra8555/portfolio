<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Suchakra Kumar Gattu Portfolio
description: A mascot sticker-pack portfolio, where cream, ink-black outlines and a bitten cookie make a serious AI engineer approachable.
---

# Design System: Suchakra Kumar Gattu Portfolio

## Overview

**Creative North Star: "The Sticker Pack"**

The portfolio is a chat-sticker set built around the logo mascot (`public/logo_avatar.jpg`): a cream-faced, black-eared cartoon character in a charcoal jacket, holding a bitten cookie. Every avatar clip is a reaction sticker; every section is a die-cut sticker laid on a calm ground. Personality lives in the drawing and the motion. The engineering content (experience, metrics, projects) stays plain, exact and readable.

The system is flat and graphic, not glossy: thick ink-black outlines, a white cut-border around die-cut elements, and flat fills. Layout stays a calm two-pane (content plus avatar/chat companion) so the sticker character never fights the reading. Motion is the sticker "peel and pop": short, springy, and fully removable under `prefers-reduced-motion`.

**Key Characteristics:**
- Mascot-first: the logo's drawing style (heavy outline, flat fill) sets the form language.
- Avatar clips act as reaction stickers tied to navigation and chat events.
- Playful surface, serious copy: never jokes in place of facts.
- Light and dark themes are both first-class (confirmed constraint).
- WCAG 2.2 AA is a hard floor for every colour pairing, focus state and motion.

## Colors

Palette strategy: Committed-neutral. Cream and ink-black carry the surface, charcoal grounds the dark theme, and cookie brown is the single warm accent. Exact values `[to be resolved during implementation]`, sampled from the logo and then verified for AA contrast (4.5:1 body text, 3:1 large text and UI components).

- **Cream:** the mascot's face colour; main light-theme ground and sticker fill.
- **Ink black:** the outline colour for all stickers, and primary text on cream.
- **Charcoal:** the jacket grey; dark-theme ground and secondary surfaces.
- **Cookie brown:** the one accent, for primary actions and active states, adjusted per theme to meet AA.

**The One Warm Voice Rule.** Cookie brown is the only accent; it marks actions and active states, never decoration.
**The Contrast First Rule.** A colour is chosen only after its pairing passes AA; the logo's exact hues bend to contrast, not the reverse.

## Typography

`[to be resolved during implementation]`. Intent: a friendly, rounded display voice for sticker labels and headings that echoes the mascot's hand-drawn warmth, paired with a plain, highly legible text face for experience and project content. Body text keeps a comfortable measure (about 65-75ch) and at least 16px.

## Layout

A calm two-pane layout stays: content on the left, avatar and chat companion on the right, collapsing to a single column on small screens (as the incumbent does at 1024px). Stickers (section headers, project cards, chips) sit on a steady vertical rhythm with generous space above headings; slight sticker rotation is allowed on decorative labels only, never on body text. Exact measurements `[to be resolved during implementation]`.

## Elevation & Depth

Flat by default. Depth comes from the sticker idea: a thick outline plus a white die-cut border and, at most, a hard offset shadow on lifted or active stickers. No soft blur shadows, glass or gradients.

**The Peel Rule.** Elevation appears only as a response to state (hover, focus, active, drag), as a sticker lifting off the page.

## Shapes

Rounded, hand-cut silhouettes: generous corner radii on cards and chips, pill-shaped actions, and avatar framed as a die-cut circle or blob. Every sticker carries the same heavy outline weight. Corner values `[to be resolved during implementation]`.

## Do's and Don'ts

### Do:
- **Do** use the logo mascot as the identity anchor (header mark, favicon, avatar frame).
- **Do** keep all text and UI pairings at WCAG 2.2 AA or better in both themes.
- **Do** provide visible keyboard focus on every sticker-like control.
- **Do** honour `prefers-reduced-motion` for the avatar video and all pop/peel animation.
- **Do** keep technical copy and metrics plain and factual.

### Don't:
- **Don't** invent metrics, testimonials, or clients; content comes from `src/data/resume.ts`.
- **Don't** convey state by colour alone.
- **Don't** let decoration (tilt, confetti, extra mascot poses) sit behind or interrupt body text.
- **Don't** add a second accent colour or glossy gradients.
