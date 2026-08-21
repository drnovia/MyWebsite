# NOVIA STUDIO site

Inherit [../AGENTS.md](../AGENTS.md). This folder is the CURRENT runnable
portfolio.

## Always

- Stay inside `novia-studio-react/**` unless Chief expands scope.
- Keep Framer class names, CSS, and section order.
- Bind Lenis to `.framer-bpy7lj` only.

## Commands

```bash
node server.js
```

Tests live one level up:
`node --test projects/portfolio/tests/capsule-paths.test.mjs projects/portfolio/tests/lenis-contract.test.mjs`.

```mermaid
flowchart LR
  App["src/app.js"] --> Wrapper[".framer-bpy7lj"]
  Wrapper --> Lenis["vendor/lenis.min.js"]
```
