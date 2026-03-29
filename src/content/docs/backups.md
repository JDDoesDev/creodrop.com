---
title: "Backups"
description: "Create and manage database backups for your Creodrop Drupal sites."
section: "sites"
order: 4
---

# Backups

Creodrop provides database backups to protect your site data. You can create backups manually at any time and view recent backup history.

## Creating a Backup

1. Navigate to your site's [detail page](/docs/site-details)
2. Click the **Create Backup** button in the Quick Actions section
3. The backup begins immediately

Backups capture your site's MySQL database, including all content, configuration, and user data.

## Backup Status

Each backup goes through these stages:

| Status | Meaning |
|--------|---------|
| **Pending** | Backup has been requested |
| **In Progress** | Database is being exported |
| **Completed** | Backup finished successfully |
| **Failed** | Something went wrong during the backup |

## Viewing Backups

The site detail page shows your 5 most recent backups with:

- Backup type (manual or scheduled)
- Current status
- When it was created
- File size (once completed)

## Backup Restoration

If you need to restore from a backup, contact Creodrop support. We will work with you to restore your site to a previous state.
