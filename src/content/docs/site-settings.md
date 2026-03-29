---
title: "Site Settings"
description: "Configure your Creodrop site settings including custom domains and site information."
section: "sites"
order: 2
---

# Site Settings

Access site settings by clicking the **Settings** button on any site's detail page, or by navigating to **Sites > [Your Site] > Settings**.

## Custom Domain

The most important setting for a production site. By default, your site is accessible at a platform URL like `a1b2c3d4.prod.creodrop.com`. This URL is fine for development and testing, but for a live site you should connect your own domain.

See [Custom Domains](/docs/custom-domains) for the complete setup guide.

### Domain Status

If you have already added a domain, the settings page shows its current status:

- **Pending** -- DNS records have not been verified yet
- **Verified** -- DNS is correct, SSL certificate is being provisioned
- **SSL Provisioning** -- Certificate generation is in progress
- **Active** -- Domain is fully configured with SSL
- **Failed** -- Verification or SSL provisioning failed

You can re-verify a pending domain or delete a domain to start over.

## Site Information

Displays your site's current configuration:

- **Display Name** -- The name shown in the dashboard. Contact support to change it.
- **Tier** -- Your current plan and pricing. Contact support to upgrade or downgrade.

## Danger Zone

Contains the **Delete Site** button. This permanently removes your site, all its data, databases, backups, and custom domain configuration. You will be asked to confirm before deletion.
