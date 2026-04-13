---
title: "Creating a Site"
description: "Create your first Drupal site on Creodrop by choosing a name and selecting a plan."
section: "getting-started"
order: 3
---

# Creating a Site

## Step 1: Start the Creation Wizard

From the dashboard, click **Create Site** (or **Create Your First Site** if you have no sites yet). This opens the site creation wizard.

## Step 2: Enter a Site Name

Choose a display name for your site. This is the name you will see in the dashboard -- for example, "My Business Site" or "Portfolio". You can change this later.

## Step 3: Choose a Plan

Select one of four plans based on your needs:

### Starter

Best for personal sites, portfolios, and blogs.

- 0.5 CPU cores
- 256 MB RAM
- 2 PHP workers
- 32 MB max upload size

### Standard (Recommended)

Best for small businesses, restaurants, and light e-commerce.

- 1 CPU core
- 512 MB RAM
- 4 PHP workers
- 64 MB max upload size

### Pro

Best for high-traffic sites, active e-commerce, and membership sites.

- 2 CPU cores
- 1 GB RAM
- 8 PHP workers
- 128 MB max upload size

### Developer

Best for developers and agencies who need CLI access and multiple environments.

- 2 CPU cores, 2 GB RAM (production)
- 0.5 CPU cores, 512 MB RAM (development and staging)
- 8 PHP workers (production)
- 128 MB max upload size
- Includes separate development, staging, and production environments

See [Developer Tier](/docs/developer-tier) for details on multi-environment features.

## Step 3b: Choose a Starting Image (Developer Tier)

If you selected the Developer plan, you will see a **Base Image** selector with three options:

### Creodrop Drupal CMS (Default)

The full Drupal CMS distribution with Redis caching, Drush, and platform settings pre-configured. Best for most new projects.

### Vanilla Drupal 11

A clean Drupal 11 installation using the official `drupal/recommended-project` template. Includes Drush and the Redis module but no Creodrop-specific customizations. Best for developers who want a blank slate.

### Bring Your Own Code

An empty runtime with PHP, Nginx, Composer, and git -- no Drupal code. Push your existing Drupal codebase via git and the deploy pipeline handles the rest. Best for migrating from another hosting provider.

After pushing code for the first time, the deploy pipeline runs `composer install`, database updates, and cache rebuilds automatically.

This option is only available for Developer tier sites. Other plans always use the Creodrop Drupal CMS image.

## Step 4: Wait for Provisioning

After clicking **Create Site**, Creodrop provisions your site automatically. This includes:

1. Creating your database
2. Starting your Drupal container
3. Configuring routing and SSL

The process typically takes less than a minute. You will see a live status indicator as each step completes.

## Step 5: Access Your Site

Once provisioning finishes, you will see your site URL and a link to open it. Your first visit will show the Drupal installation wizard where you can configure your site name, admin account, and initial settings.

## Next Steps

- [Add a custom domain](/docs/custom-domains) for a professional URL
- [Explore your site details](/docs/site-details) to monitor health and manage backups
- [Learn about the dashboard](/docs/dashboard-overview) to manage all your sites
