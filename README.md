# Creodrop Landing Page

Pre-launch landing page and blog for [creodrop.com](https://creodrop.com), built with [Astro](https://astro.build).

## Prerequisites

- [mise](https://mise.jdx.dev/) for runtime management

## Setup

```bash
mise install      # Install Node.js and pnpm
pnpm install      # Install dependencies
```

## Development

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build for production
pnpm preview      # Preview production build
```

## Creating Blog Posts

```bash
pnpm new-post "Your Post Title"
```

This creates a new markdown file in `src/content/blog/` with frontmatter template. Edit the file and set `draft: false` when ready to publish.

## Project Structure

```
src/
├── components/        # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ButtondownForm.astro
│   └── icons/         # SVG icons
├── layouts/
│   ├── BaseLayout.astro    # HTML shell, meta tags
│   ├── PageLayout.astro    # Header + Footer wrapper
│   └── BlogLayout.astro    # Blog post template
├── pages/
│   ├── index.astro         # Landing page
│   ├── roadmap.astro       # Product roadmap
│   ├── rss.xml.js          # RSS feed
│   └── blog/               # Blog pages
├── content/
│   └── blog/               # Markdown blog posts
└── styles/
    └── global.css          # All styling
public/
├── images/                 # Static assets
├── CNAME                   # GitHub Pages domain
└── robots.txt
```

## Deployment

Push to `main` branch — GitHub Actions automatically builds and deploys to GitHub Pages.

### Custom Domain Setup

The `CNAME` file is set to `creodrop.com`. DNS records needed:

**Apex domain (creodrop.com):**
```
Type: A
Name: @
Values: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
```

**www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
    --color-primary: #0891b2;      /* Cyan */
    --color-secondary: #2dd4bf;    /* Teal */
    --color-text: #134e4a;         /* Dark teal */
}
```

### Email Signup

Buttondown integration is configured in `src/components/ButtondownForm.astro`. Update the form action URL to change the newsletter account.

## License

Proprietary — Creodrop
