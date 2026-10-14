# Contributing — NOVIA STUDIO portfolio

## Run locally

```bash
node server.js
```

## Boundaries (important)

- **Preserve** Framer visual composition, section order, and imagery.
- **Fix** scroll/runtime behavior without redesigning the portfolio.
- Lenis attaches to `.framer-bpy7lj` only — never `window`.
- GSAP is optional and visual-only (no scroll hijacking).

## Pull requests

- Describe scroll/motion changes with before/after notes.
- Keep CSS fixes scoped (`styles/novia.css` preferred over broad Framer edits).
- Do not commit `.cursor/`.

See full runtime doctrine in [README.md](../README.md).
