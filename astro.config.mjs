import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import astroLlmsTxt from '@4hse/astro-llms-txt';

export default defineConfig({
  site: 'https://creodrop.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    astroLlmsTxt({
      title: 'Creodrop',
      description:
        'Creodrop is a managed Drupal hosting platform. Launch a fully functional Drupal site in under two minutes with no server configuration required.',
      details:
        'Creodrop provides managed Drupal-as-a-Service hosting for non-technical users and developers. Sites run on isolated Docker containers with automatic SSL, custom domain support, and database backups.',
      notes:
        '- This content is auto-generated from the official Creodrop documentation and website.',
      optionalLinks: [
        {
          label: 'Blog',
          url: 'https://creodrop.com/blog',
          description: 'Creodrop blog posts and updates',
        },
        {
          label: 'Roadmap',
          url: 'https://creodrop.com/roadmap',
          description: 'Creodrop product roadmap',
        },
      ],
      docSet: [
        {
          title: 'Full Documentation',
          description: 'Complete Creodrop documentation and site content',
          url: '/llms-full.txt',
          include: ['docs/**', 'roadmap'],
          promote: ['docs/welcome'],
        },
        {
          title: 'Documentation Index',
          description: 'Compact index of Creodrop documentation pages',
          url: '/llms-small.txt',
          include: ['docs/**'],
          onlyStructure: true,
          promote: ['docs/welcome'],
        },
      ],
    }),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
});
