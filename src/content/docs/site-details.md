---
title: "Site Details"
description: "View detailed information about your Drupal site including status, backups, and quick actions."
section: "sites"
order: 1
---

# Site Details

The site detail page gives you a complete view of a specific site. Open it by clicking a site card on the dashboard.

## Header

At the top of the page you will see:

- **Site name** with status and tier badges
- **Site URL** (platform URL or custom domain) with a copy button
- **Visit Site** button to open the site in a new tab
- **Settings** button to access site configuration

## Information Cards

Four cards summarize key site information:

- **Status** -- Real-time container health. Shows "Running since [time]" when healthy, or "Container is not running" if stopped.
- **Tier** -- Your current plan and its monthly price.
- **Created** -- When the site was first created, shown as both an absolute date and a relative time.
- **Database** -- The database engine powering the site (MySQL 8.0).

## Environments Panel (Developer Tier)

If your site is on the Developer tier, an environments panel appears below the header showing your three environments:

- **Development** -- For testing new features (blue themed)
- **Staging** -- For pre-production validation (amber themed)
- **Production** -- Your live site (green themed)

Each environment card shows its URL, status, and a restart button. Environments run independently -- restarting one does not affect the others.

See [Developer Tier](/docs/developer-tier) for more on multi-environment workflows.

### SSH Access Card

Below the environments panel, an **SSH Access** card shows the connection string for each environment:

```
ssh a1b2c3d4-dev@ssh.creodrop.com -p 2222
ssh a1b2c3d4-stage@ssh.creodrop.com -p 2222
ssh a1b2c3d4-prod@ssh.creodrop.com -p 2222
```

Each line has a copy button. You must add your SSH public key in [Account Settings](/docs/account-settings) before connecting.

### Developer Tools Panel

Below the SSH card, a **Developer Tools** panel lets you run commands directly from the browser:

- **Quick actions** -- One-click buttons for common operations:
  - **Cache Rebuild** -- Runs `drush cache:rebuild`
  - **Login Link** -- Runs `drush uli` to generate a one-time login URL
  - **Config Export** -- Runs `drush config:export`
- **Environment selector** -- Choose which environment (dev, stage, prod) to run commands against
- **Custom command input** -- Type any allowed command and press Enter or click Run
- **Output display** -- Shows command output, exit code, and execution duration
- **Download Drush Aliases** -- Downloads a `.yml` file for using native `drush @alias` commands from your local machine

See [Creodrop CLI](/docs/cli) for the full command-line tool.

## Site Details Section

### Platform URL

Your site's auto-generated URL in the format `{id}.prod.creodrop.com`. This URL is for development and testing. Use a [custom domain](/docs/custom-domains) for production.

### Custom Domain

If you have configured a custom domain, it appears here with its verification and SSL status.

### Container Status

Detailed technical information about your site's container:

- **Health** -- healthy, unhealthy, or starting
- **Running** -- whether the container is active
- **Started** -- when the container last started

### Resource Allocation

Shows the resources allocated to your site based on your tier:

- CPU cores
- Memory (RAM)
- PHP worker processes
- Maximum upload file size

## Quick Actions

Three action buttons on the right side of the page:

### Restart Site

Restarts your site's container. Use this if your site is behaving unexpectedly or after making configuration changes. The restart takes about 10-30 seconds. For Developer tier sites, this restarts the production environment -- use the environments panel to restart specific environments.

### Create Backup

Triggers an immediate database backup. The backup appears in the Recent Backups list below once complete.

### Site Settings

Opens the [settings page](/docs/site-settings) where you can manage custom domains and other configuration.

## Recent Backups

Shows your last 5 backups with:

- **Type** -- Manual (triggered by you) or Scheduled (automatic)
- **Status** -- Pending, In Progress, Completed, or Failed
- **Created** -- When the backup was started
- **Size** -- The backup file size (shown when complete)

If you have no backups yet, click **Create Backup** to make your first one.

## Deleting a Site

At the bottom of the page is a Danger Zone with a **Delete Site** button. Deleting a site permanently removes:

- The Drupal container and all files
- The site database and all content
- Any custom domain configuration
- All backups

This action cannot be undone. You will be asked to confirm before deletion proceeds.
