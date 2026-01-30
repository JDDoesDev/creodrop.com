# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Creodrop Landing is an Astro-based static site for Creodrop, a managed Drupal hosting platform. It includes a landing page, roadmap, markdown-powered blog, and documentation section.

## Development

```bash
mise install        # Install Node.js and pnpm via mise
pnpm install        # Install dependencies
pnpm dev            # Start dev server at localhost:4321
pnpm build          # Build for production (outputs to dist/)
pnpm preview        # Preview production build
pnpm new-post "Title"  # Create new blog post
```

**Deployment**: Push to `main` branch - GitHub Actions builds and deploys to GitHub Pages (creodrop.com)

## Architecture

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ButtondownForm.astro
│   ├── DocsSearch.astro     # Pagefind search for docs
│   ├── DocsSidebar.astro    # Docs navigation sidebar
│   ├── CodeBlock.astro      # Code with copy button
│   ├── Mermaid.astro        # Mermaid diagram renderer
│   └── icons/
├── layouts/
│   ├── BaseLayout.astro
│   ├── PageLayout.astro
│   ├── BlogLayout.astro
│   └── DocsLayout.astro     # Two-column docs layout
├── pages/
│   ├── index.astro
│   ├── roadmap.astro
│   ├── rss.xml.js
│   ├── blog/
│   └── docs/
│       ├── index.astro      # Docs landing page
│       └── [...slug].astro  # Dynamic doc pages
├── content/
│   ├── config.ts            # Content collection schemas
│   ├── blog/
│   └── docs/                # Documentation markdown files
└── styles/
    └── global.css
```

**Static assets**: `public/` directory (images, CNAME, robots.txt)

## Documentation

### Creating Doc Pages

Add markdown files to `src/content/docs/` with this frontmatter:

```yaml
---
title: "Page Title"
description: "SEO description for this page"
section: "getting-started"  # One of: getting-started, dashboard, sites, settings
order: 1                    # Sort order within section
draft: false
---
```

**Sections**: Docs are grouped into sections. The sidebar displays them in this order:
- `getting-started` - Introduction and onboarding
- `dashboard` - Dashboard features
- `sites` - Site management
- `settings` - Account and preferences

### Using Components in Docs

**Code blocks with copy button:**

```astro
---
import CodeBlock from '../../components/CodeBlock.astro';
---

<CodeBlock code="npm install something" lang="bash" />
```

Or use standard markdown code fences - they render with Astro's built-in Shiki highlighting.

**Mermaid diagrams:**

```astro
---
import Mermaid from '../../components/Mermaid.astro';
---

<Mermaid chart={`
graph TD
    A[Start] --> B[Step 1]
    B --> C[Step 2]
`} caption="Optional caption" />
```

### Search

Search is powered by Pagefind and only works in production builds. Run `pnpm build && pnpm preview` to test search locally. The search index is generated automatically during build.

## Blog Posts

Create new posts with `pnpm new-post "Post Title"` or manually add markdown files to `src/content/blog/`:

```yaml
---
title: "Post Title"
description: "SEO description"
publishDate: 2026-01-15
author: "Creodrop"        # optional, defaults to "Creodrop"
image: "/images/post.jpg" # optional, for social sharing
tags: ["drupal", "hosting"]
draft: false
---
```

Schema defined in `src/content/config.ts`.

## Navigation

Edit `src/components/Header.astro` to add/modify nav links:

```js
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/roadmap', label: 'Roadmap' },
];
```

Mobile nav uses a hamburger menu (visible at 640px breakpoint).

## Styling

- Global CSS in `src/styles/global.css` using CSS custom properties
- Dark mode via `prefers-color-scheme: dark` media query
- Responsive breakpoints: 480px, 640px, 900px
- Primary color: `--color-primary: #0891b2` (cyan)
- `.visually-hidden` utility for accessible hidden content
- Docs styles use `.docs-*` prefixed classes

## Accessibility

- Maintain sequential heading order (h1 → h2 → h3)
- Use `.visually-hidden` for screen-reader-only section headings when visual design omits them
- Dark mode colors meet WCAG AA contrast requirements

## External Integrations

- Buttondown for email newsletter signup
- Google Fonts (Inter)
- GitHub Pages for hosting
- Pagefind for documentation search
- Mermaid for diagrams
