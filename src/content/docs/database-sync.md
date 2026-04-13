---
title: "Database Sync"
description: "Pull database content between environments on Developer tier sites. Data flows downward: prod to stage, prod to dev, stage to dev."
section: "sites"
order: 8
---

# Database Sync

Database sync lets you copy a database from one environment into another. This is useful when you want to work with real content in dev, or when you want staging to reflect what is currently in production before a deployment.

Data flows **downward only**. You can pull from a higher environment into a lower one, but never the other way around.

## Valid Sync Directions

| From | To | Use case |
|------|----|----------|
| Production | Staging | Refresh stage with live data before a QA cycle |
| Production | Development | Work with real content locally |
| Staging | Development | Test against the content QA is using |

You cannot sync from dev to stage or from stage to prod. This prevents development or testing data from overwriting production content.

## What Happens During a Sync

1. The **target** environment is put into maintenance mode
2. The source database is exported via mysqldump
3. The target database is dropped and recreated from the dump
4. Drupal's cache is rebuilt on the target
5. Maintenance mode is disabled

The sync runs as a background job. Your dev and stage environments remain accessible during the export phase — only the target environment shows a maintenance page while the restore is in progress.

## Triggering a Sync

### From the control panel

1. Go to your site's detail page
2. Click the **Database** tab
3. Select the source environment and target environment
4. Click **Sync Database**
5. Confirm the direction — this will overwrite the target database

The sync appears in the history table with status, size, and duration once complete.

### Via the API

```bash
curl -X POST https://api.creodrop.com/api/v1/sites/{siteId}/database/sync \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{"from": "prod", "to": "stage"}'
```

The response is a `202 Accepted` with a sync ID. Poll the sync history endpoint to check completion.

## Sync History

The **Database** tab shows your recent syncs with:

- Direction (e.g., prod → stage)
- Status (pending, in progress, completed, failed)
- Database size
- Duration
- When the sync was triggered

## Warnings

**This operation is destructive.** Syncing overwrites the entire target database. Any content, configuration, or user accounts in the target that are not in the source will be permanently lost.

Before syncing production to dev or stage, make sure you do not have uncommitted configuration or content in the target that you still need.

**Passwords and user data from production** will be present in dev and stage after a sync from prod. Be careful about who has access to those environments. Creodrop isolates each environment's database so production credentials are never exposed to other environments at the infrastructure level, but the content of the database will reflect production data.

## Concurrent Operations

A sync cannot run on a target environment that already has a deployment or another sync in progress. If you try to sync while a deployment is running on the target, the sync will be rejected. Wait for the in-progress operation to complete first.
