# Project Overview

This is the pre-launch landing page and blog for creodrop.com. It is a static site built with the [Astro](https://astro.build) web framework.

## Key Technologies

*   **Framework**: [Astro](https://astro.build)
*   **Package Manager**: [pnpm](https://pnpm.io/)
*   **Runtime Management**: [mise](https://mise.jdx.dev/)
*   **Deployment**: GitHub Pages

## Project Structure

The project follows the standard Astro project structure:

*   `src/components/`: Reusable Astro components.
*   `src/content/`: Content collections (e.g., blog posts).
*   `src/layouts/`: Base layouts for pages.
*   `src/pages/`: Site pages.
*   `src/styles/`: Global styles.
*   `public/`: Static assets.

# Building and Running

## Prerequisites

*   [mise](https://mise.jdx.dev/) for runtime management (Node.js and pnpm).

## Setup

1.  **Install runtimes**:
    ```bash
    mise install
    ```
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

## Development

To start the local development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`.

## Build

To build the site for production:

```bash
pnpm build
```

The output will be in the `dist/` directory.

## Preview

To preview the production build locally:

```bash
pnpm preview
```

# Development Conventions

## Creating Blog Posts

To create a new blog post, use the following command:

```bash
pnpm new-post "Your Post Title"
```

This will create a new Markdown file in `src/content/blog/`. You need to edit the file and set `draft: false` in the frontmatter to publish it.

## Styling

All styling is handled in `src/styles/global.css`. Colors can be customized by editing the CSS variables at the root of the file.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The configuration for this is in `.github/workflows/deploy.yml`.
