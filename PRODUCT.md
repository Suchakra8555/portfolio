# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Suchakra Kumar Gattu's portfolio is shared as a link in many situations: cold outreach to recruiters, referral requests for a specific company, career-page applications, and anywhere else a professional introduction is needed. Visitors are:
- Recruiters and hiring managers screening for LLMOps / agentic voice AI roles.
- Engineering peers and tech leads judging depth of the work.
- Clients and freelance leads looking for someone to build with.

Most arrive from a shared link with little context and decide quickly whether to keep reading, download the resume, or get in touch.

## Product Purpose
A single shareable home for Suchakra's professional identity and work: about, experience, projects, achievements, education, and contact, plus an in-app resume view and a downloadable PDF. Success = a visitor understands who Suchakra is and how deep the work goes, and takes a next step (resume, contact, conversation).

## Positioning
Two things a standard resume site can't claim equally: an animated video avatar that reacts to navigation and chat, and an AI chat assistant (Groq-backed) that answers questions about Suchakra's background from the same resume data that renders the page. The interactive layer is itself proof that he ships real LLM products. Interactive layer and written content carry equal weight.

## Operating Context
- Content is the single source of truth in `src/data/resume.ts`, feeding both the UI and the chat assistant's system prompt.
- Chat is proxied through a Vercel serverless function (`api/chat.ts`); the API key is never client-side. Without it, chat fails gracefully.
- Avatar is one `<video>` driven by event-to-clip mapping (`avatarClips.ts`); many clips in `public/` are a reserve pool.
- Hosted on Vercel; built with Vite + React + TypeScript with CSS modules.

## Capabilities and Constraints
- Light and dark theme, toggled via `data-theme`, must remain first-class.
- Avatar and chat must be kept.
- Resume available both as in-app `/resume` and as PDF download.
- Accessibility standard: undecided (WCAG 2.2 AA recommended; see below).

## Brand Commitments
- The main logo is `public/logo_avatar.jpg`: a cartoon panda-like character (cream face, black ears, thick black outline, closed-eye smile, dark grey jacket, holding a bitten cookie). The user calls it their "bunny theme" and wants it included, with the site restyled around its theme. Palette, mood and application of the character are to be decided in later design work.
- Personal name and title: Suchakra Kumar Gattu, LLMOps & Agentic Voice AI Engineer.

## Evidence on Hand
- Resume content, experience, and skills in `src/data/resume.ts`; resume PDF at `public/Suchakra_Kumar_Gattu_Resume.pdf`.
- Photo at `public/5_peicce_suit_pic.png`; CloudAngles logo at `public/cloudangles.webp`; ~30 avatar motion clips in `public/`.
- Links: GitHub, LinkedIn, LeetCode (in `resume.ts`).
- Do not fabricate metrics, testimonials, clients, or project outcomes beyond what the resume data states.

## Product Principles
1. Works as a cold link: the first screen makes sense with zero context.
2. Interactivity proves skill, never replaces substance.
3. Every audience (recruiter, peer, client) can find their next step quickly.
4. One content source; UI and assistant never disagree.
5. Personality (the bunny theme) is a deliberate choice that still reads as a serious engineer's work.

## Accessibility & Inclusion
Confirmed standard: WCAG 2.2 AA (4.5:1 body text contrast, 3:1 large text/UI, full keyboard access with visible focus, alt text, 200% zoom). Also respect `prefers-reduced-motion` for the avatar video and animations.
