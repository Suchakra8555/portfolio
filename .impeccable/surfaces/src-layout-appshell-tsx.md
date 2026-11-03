---
version: 1
slug: "src-layout-appshell-tsx"
primary_target: "src/layout/AppShell.tsx"
related_targets: ["src/App.tsx"]
---

# Surface brief: Portfolio home

Mode: Experience (a portfolio; the work and the mascot lead).
Audience and action: recruiters, engineering peers and clients arriving from a shared link; they should understand who Suchakra is, explore the work, then download the resume or get in touch. Content comes from `src/data/resume.ts`.
Memorable moment: the avatar reacts like a sticker set to navigation and chat.
Unresolved: exact palette values, type faces, sticker proportions, mobile layout of the avatar pane.

## Direction contract

THESIS: The portfolio is a chat-sticker pack built from the logo mascot; it refuses the neutral two-pane resume template with a small logo accent.
OWN-WORLD: Cream and ink-black with thick outlines and white die-cut borders, charcoal for dark theme, one cookie-brown accent, flat fills, hard offset shadows only on state, pill and rounded forms.
STORY: A visitor sees a friendly mascot, trusts a serious engineer behind it, tries the chat, then opens the resume or makes contact.
FIRST VIEWPORT: Desktop 1440x900: calm two-pane. Left, a large die-cut mascot sticker beside the name, title and headline, with the resume and contact actions as sticker buttons. Right, the avatar pane with chat and quick-option stickers. Section navigation sits as a sticker strip.
FORM: Candidate 7 of the grounded list (chat-sticker pack), assigned by the roll. seed:8b712b32399a5b30
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
