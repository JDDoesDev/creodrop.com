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

## Starting Images

When creating a Developer tier site, you choose a starting image that determines what code is pre-installed:

| Image | What You Get | Best For |
|-------|-------------|----------|
| **Creodrop Drupal CMS** (default) | Full Drupal CMS with Redis, Drush, and platform integration | New projects, content sites |
| **Vanilla Drupal 11** | Clean Drupal 11 with Drush and Redis module | Developers wanting a blank slate |
| **Bring Your Own Code** | Empty runtime (PHP + Nginx + Composer + git) | Migrating from another host |

The **Bring Your Own Code** option starts with an empty environment. After creating the site, add your git remote and push your existing Drupal codebase:

```bash
git remote add creodrop ssh://{site-id}-dev@ssh.creodrop.com:2222/srv/git/repo.git
git push creodrop main
```

Your project must follow the standard Drupal Composer structure with `composer.json` at the root and the webroot at `web/`.

## Managing Environments

On the site detail page, Developer tier sites display an **Environments** panel with cards for each environment. Each card shows:

- Environment name and status
- Direct URL to the environment
- A **Restart** button for that specific environment

Environments are fully independent. Restarting development does not affect staging or production. Each has its own database, container, and URL.

## SSH Access

Connect to any environment via SSH using your public key. The SSH gateway runs on port 2222.

### Connecting

Use your site's short ID and environment name as the SSH username:

```
ssh {site-id}-dev@ssh.creodrop.com -p 2222
ssh {site-id}-stage@ssh.creodrop.com -p 2222
ssh {site-id}-prod@ssh.creodrop.com -p 2222
```

The connection string for each environment is shown on your site's detail page with a copy button.

### Setting Up SSH Keys

Before you can connect, add your SSH public key in [Account Settings](/docs/account-settings):

1. Go to **Account Settings**
2. Scroll to the **SSH Keys** section
3. Click **Add Key**
4. Enter a name (e.g., "Work Laptop") and paste your public key
5. Click **Add Key** to save

Your keys work across all your Developer tier sites. Creodrop supports ed25519, RSA, ECDSA, and DSS key types.

To generate a new key if you do not have one:

```bash
ssh-keygen -t ed25519 -C "your@email.com"
cat ~/.ssh/id_ed25519.pub
```

### What You Can Do via SSH

Once connected, you have a shell inside the environment's container as the `drupal` user. Available tools:

- **Drush** -- `drush cr`, `drush cex`, `drush cim`, `drush uli`, `drush sql-dump`
- **Composer** -- `composer require`, `composer update`, `composer install`
- **PHP CLI** -- `php` for running scripts
- **MySQL client** -- `mysql` for database access
- **Git** -- `git` for version control operations

### SSH Key Management

From your [Account Settings](/docs/account-settings), you can:

- View all your saved keys with fingerprint and key type
- See when each key was last used for authentication
- Delete keys you no longer need

## Git Push-to-Deploy

Every Developer tier environment comes with a built-in git repository. Push code directly and the deploy pipeline runs automatically.

### Setting Up Your Git Remote

Each environment has its own git remote URL. Find it on the **SSH** tab of your site detail page, or construct it manually:

```
ssh://{site-id}-dev@ssh.creodrop.com:2222/srv/git/repo.git
ssh://{site-id}-stage@ssh.creodrop.com:2222/srv/git/repo.git
ssh://{site-id}-prod@ssh.creodrop.com:2222/srv/git/repo.git
```

Add the remote to your local repository:

```bash
git remote add creodrop ssh://{site-id}-dev@ssh.creodrop.com:2222/srv/git/repo.git
```

### Pushing Code

```bash
git push creodrop main
```

After the push completes, you will see a message confirming the deployment was triggered:

```
-----> Creodrop: Received push to branch 'main'
-----> Triggering deployment for dev...
-----> Deployment queued (ID: abc123)
-----> View status in the Creodrop control panel
```

The deploy pipeline runs in the background: `composer install`, `drush updatedb`, `drush cache:rebuild`, and a health check. View progress on the **Deployments** tab.

### Branch-to-Environment Mapping

By default, pushes are mapped to environments based on branch name:

| Branch | Environment |
|--------|-------------|
| `main` | Production |
| `stage` | Staging |
| `dev` | Development |

You can customize these mappings in the **Git** tab of your site settings.

## Remote Command Execution

Run Drush, Composer, PHP, and other commands on your environments without SSH -- directly from the control panel or the Creodrop CLI.

### From the Control Panel

The site detail page includes a **Developer Tools** panel for Developer tier sites with:

- **Quick actions** -- One-click buttons for Cache Rebuild, Login Link (drush uli), and Config Export
- **Custom command input** -- Run any allowed command and see the output
- **Environment selector** -- Choose which environment to run commands against
- **Drush alias download** -- Download a `.yml` file for native Drush remote access

### From the Command Line

Use the [Creodrop CLI](/docs/cli) to run commands from your terminal:

```bash
creodrop drush @a1b2c3d4.prod cache:rebuild
creodrop drush @a1b2c3d4.dev sql-dump > local.sql
```

Or use native Drush aliases after generating them:

```bash
creodrop drush-aliases
drush @creodrop.a1b2c3d4.prod cr
```

See [Creodrop CLI](/docs/cli) for installation and full command reference.

### Allowed Commands

For security, only specific commands can be executed remotely:

| Command | Examples |
|---------|----------|
| **drush** | `cache:rebuild`, `cex`, `cim`, `uli`, `sql-dump`, `status` |
| **composer** | `require`, `update`, `install` |
| **php** | Run PHP scripts |
| **mysql** | Database queries |
| **cat, ls, find, grep** | File inspection |

Shell metacharacters, pipes, redirects, and dangerous operations (`rm -rf`, `sudo`, `wget`) are blocked.

## Deploying Code

Developer tier sites use a structured promotion model to move code from development through to production. Each environment has its own deployment rules.

| Environment | How to deploy |
|-------------|---------------|
| **Development** | Deploy any branch |
| **Staging** | Promote from development only |
| **Production** | Deploy a git tag only |

This model ensures that only tested, tagged code reaches production. See [Deployments](/docs/deployments) for the full workflow.

### Quick Summary

1. Push your branch to the git remote
2. Deploy the branch to **dev** to test it
3. **Promote** dev to **stage** for client review or QA
4. Tag a release (`git tag v1.2.3 && git push --tags`)
5. Deploy the tag to **prod**

### Database Sync

You can pull database content downward between environments -- production data into staging for a realistic test, or staging data into dev. See [Database Sync](/docs/database-sync) for details.

## Resource Allocation

| Resource | Production | Dev / Stage |
|----------|-----------|-------------|
| CPU | 2 cores | 0.5 cores |
| Memory | 2 GB | 512 MB |
| PHP Workers | 8 | 2 |
| Max Upload | 128 MB | 64 MB |

Development and staging environments use reduced resources to keep costs manageable while still providing a functional environment for testing.