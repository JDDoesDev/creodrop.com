---
title: "Developer Tier"
description: "Multi-environment Drupal hosting with SSH, git, and Drush access for developers and agencies."
section: "sites"
order: 5
---

# Developer Tier

The Developer tier is designed for developers and agencies who need full control over their Drupal sites. It includes everything in the Pro tier plus multi-environment support and developer tooling.

## Multiple Environments

Every Developer tier site comes with three independent environments:

### Development

Your sandbox for trying new things. Test module installations, theme changes, and custom code without risk to your live site.

- URL: `{site-id}.dev.creodrop.com`
- Resources: 0.5 CPU, 512 MB RAM, 2 PHP workers
- Use for: Feature development, experimentation, debugging

### Staging

A pre-production environment for final testing before going live. Share with clients or team members for review.

- URL: `{site-id}.stage.creodrop.com`
- Resources: 0.5 CPU, 512 MB RAM, 2 PHP workers
- Use for: Client review, QA testing, deployment rehearsal

### Production

Your live, public-facing site with full resources.

- URL: `{site-id}.prod.creodrop.com` (or your custom domain)
- Resources: 2 CPU, 2 GB RAM, 8 PHP workers
- Use for: Live traffic, custom domain, full performance

## Managing Environments

On the site detail page, Developer tier sites display an **Environments** panel with cards for each environment. Each card shows:

- Environment name and status
- Direct URL to the environment
- A **Restart** button for that specific environment

Environments are fully independent. Restarting development does not affect staging or production. Each has its own database, container, and URL.

## Developer Tools (Coming Soon)

The following features are planned for the Developer tier:

### SSH Access

Connect to any environment via SSH using your public key:

```
ssh {site-id}-dev@ssh.creodrop.com -p 2222
```

Manage SSH keys from your account settings. Keys work across all your Developer tier sites.

### Git Deployments

Push code directly to your environments using git:

```
git remote add creodrop git@git.creodrop.com:{site-id}.git
git push creodrop main
```

Branch-to-environment mapping deploys code automatically:
- `dev` branch deploys to Development
- `stage` branch deploys to Staging
- `main` branch deploys to Production

### Drush CLI

Run Drush commands remotely from your local machine:

```bash
drush @creodrop.{site-id}.prod cache:rebuild
drush @creodrop.{site-id}.dev sql-dump > local.sql
```

Or SSH into any environment and use Drush directly -- it is preinstalled in every container along with Composer and PHP CLI.

### Creodrop CLI

A command-line tool for managing your sites locally:

```bash
creodrop login
creodrop sites
creodrop drush @mysite.prod cr
creodrop ssh mysite dev
creodrop logs mysite prod --follow
```

## Resource Allocation

| Resource | Production | Dev / Stage |
|----------|-----------|-------------|
| CPU | 2 cores | 0.5 cores |
| Memory | 2 GB | 512 MB |
| PHP Workers | 8 | 2 |
| Max Upload | 128 MB | 64 MB |

Development and staging environments use reduced resources to keep costs manageable while still providing a functional environment for testing.
