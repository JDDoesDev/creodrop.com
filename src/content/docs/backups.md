---
title: "Backups"
description: "Create and manage database backups for your Creodrop Drupal sites."
section: "sites"
order: 4
---

# Backups

Creodrop provides database backups to protect your site data. Backups are stored securely in cloud object storage (Cloudflare R2) and can be downloaded at any time.

## Creating a Backup

1. Navigate to your site's [detail page](/docs/site-details)
2. Select the environment you want to back up (prod, stage, or dev)
3. Click the **Create Backup** button in the Quick Actions section
4. The backup begins immediately

Backups capture your site's MySQL database, including all content, configuration, and user data. Each backup is compressed (gzip) and stored in isolated cloud storage — your backups are not accessible to other customers.

## Backup Status

Each backup goes through these stages:

| Status | Meaning |
|--------|---------|
| **Pending** | Backup has been requested |
| **In Progress** | Database is being exported and uploaded |
| **Completed** | Backup finished successfully and is available for download |
| **Failed** | Something went wrong during the backup |

## Viewing Backups

The site detail page shows your recent backups with:

- Environment (prod, stage, or dev)
- Backup type (manual or scheduled)
- Current status
- When it was created
- File size (once completed)

You can filter backups by environment using the environment selector.

## Downloading Backups

Once a backup is completed, you can download it:

1. Find the backup in your backup list
2. Click the **Download** button
3. You will receive a secure, time-limited download link (expires after 15 minutes)
4. The file downloads as a `.sql.gz` compressed MySQL dump

The download link is unique to you and cannot be shared — it expires quickly for security.

## Environment-Aware Backups

If you are on the Developer tier, each environment (dev, stage, prod) has its own independent backup history. Backups are stored under the environment they were created from:

- A prod backup captures your production database
- A dev backup captures your development database
- Backups do not cross environments

## Backup Restoration

If you need to restore from a backup, contact Creodrop support. We will work with you to restore your site to a previous state.

For Developer tier customers: you can use the **environment sync** feature to copy a database from one environment to another (e.g., pull production data into your dev environment for debugging).
