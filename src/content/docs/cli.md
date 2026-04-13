---
title: "Creodrop CLI"
description: "Install and use the Creodrop command-line tool to manage your sites, run Drush commands, and SSH into environments."
section: "sites"
order: 6
---

# Creodrop CLI

The Creodrop CLI lets you manage your Developer tier sites from the terminal. Run Drush commands, SSH into environments, generate aliases, and more.

## Installation

```bash
npm install -g @creodrop/cli
```

Or with pnpm:

```bash
pnpm add -g @creodrop/cli
```

## Authentication

Before using any commands, log in with your Creodrop account:

```bash
creodrop login
```

You will be prompted for your email and password. Your session token is stored locally at `~/.creodrop/config.json`.

To log out:

```bash
creodrop logout
```

## Commands

### List Sites

View all your sites:

```bash
creodrop sites
```

Displays a table with site name, ID, tier, and status.

### Run Drush Commands

Execute Drush commands on a specific environment:

```bash
creodrop drush @{site-id}.{env} {command}
```

Examples:

```bash
# Rebuild cache on production
creodrop drush @a1b2c3d4.prod cache:rebuild

# Get a login link on development
creodrop drush @a1b2c3d4.dev uli

# Export config on staging
creodrop drush @a1b2c3d4.stage config:export -y

# Dump the dev database locally
creodrop drush @a1b2c3d4.dev sql-dump > dev-backup.sql
```

The command output is streamed to your terminal, and the CLI exits with the same exit code as the remote command.

### SSH into an Environment

Open an SSH session to any environment:

```bash
creodrop ssh {site-id} {env}
```

Examples:

```bash
creodrop ssh a1b2c3d4 dev
creodrop ssh a1b2c3d4 prod
```

This spawns a local SSH connection to `{site-id}-{env}@ssh.creodrop.com` on port 2222. You must have an SSH key configured in [Account Settings](/docs/account-settings).

### View Logs

Stream container logs from an environment:

```bash
creodrop logs {site-id} {env}
creodrop logs {site-id} {env} --follow
```

### Generate Drush Aliases

Create a Drush alias file so you can use native `drush @alias` syntax:

```bash
creodrop drush-aliases
```

This generates `~/.drush/sites/creodrop.site.yml` with aliases for all your Developer tier sites. Each site gets entries for all three environments:

```bash
# After running drush-aliases, you can use native drush:
drush @creodrop.a1b2c3d4.prod cache:rebuild
drush @creodrop.a1b2c3d4.dev sql-dump > backup.sql
drush @creodrop.a1b2c3d4.stage status
```

Aliases use SSH transport through the Creodrop SSH gateway, so your SSH key must be configured.

## Configuration

The CLI stores configuration at `~/.creodrop/config.json`:

```json
{
  "apiUrl": "https://api.creodrop.com",
  "token": "your-jwt-token"
}
```

To point the CLI at a different API (e.g., local development):

```bash
# Edit ~/.creodrop/config.json and change apiUrl
```

## Troubleshooting

**"Not authenticated" errors**
Run `creodrop login` to refresh your session.

**"Command not allowed" errors**
Only allowlisted commands can be executed remotely. See [Developer Tier](/docs/developer-tier) for the list of allowed commands.

**SSH connection refused**
Make sure you have added your SSH public key in [Account Settings](/docs/account-settings). Keys must be added before SSH or Drush aliases will work.

**Drush aliases not working**
Run `creodrop drush-aliases` to regenerate the alias file. Make sure your SSH key is configured and that you have at least one Developer tier site.
