---
title: "Deployments"
description: "Deploy code to your Creodrop environments using branches for dev, promotion for stage, and tags for production."
section: "sites"
order: 7
---

# Deployments

Developer tier sites use a structured promotion workflow to move code safely from development through to production. Each environment has its own deployment rules designed to prevent untested code from reaching your live site.

## The Promotion Model

```
dev  (any branch)
 |
 | promote
 ↓
stage  (promoted from dev only)
 |
 | deploy tag
 ↓
prod  (git tags only)
```

| Environment | Accepts | How to trigger |
|-------------|---------|----------------|
| **Development** | Any branch | Deploy from the control panel or CLI |
| **Staging** | Promoted from dev | Use the Promote action in the control panel |
| **Production** | Git tags only | Deploy a tag from the control panel or CLI |

You cannot deploy directly to staging. Staging always reflects a specific commit that was verified in dev. You cannot deploy a branch to production — only a tagged release.

## Deploying to Development

Development accepts any branch that exists in your site's git repository.

1. Push your branch to the remote:

```bash
git push origin feature/my-new-module
```

2. In the control panel, open your site's detail page and go to the **Deployments** tab
3. Select **Development** as the environment
4. Choose your branch from the list and click **Deploy**

The deployment runs composer install, drush updatedb, and drush cache:rebuild automatically. You can follow the log in real time.

## Promoting dev to stage

Once your dev deployment looks good, promote it to staging. Promotion copies the exact commit SHA currently running in dev over to the stage environment — no branch selection needed.

1. Go to the **Deployments** tab
2. Click **Promote dev to stage**
3. Confirm the commit SHA shown and click **Promote**

Staging will run the same code that dev is currently running. This guarantees that what you tested in dev is exactly what your client or QA team reviews in stage.

## Deploying to Production

Production only accepts git tags. This ensures you always know exactly what version is live and can roll back with precision.

1. Create and push a tag:

```bash
git tag v1.2.3
git push origin v1.2.3
```

2. In the control panel, go to the **Deployments** tab
3. Select **Production** as the environment
4. Choose your tag from the list and click **Deploy**

Use [semantic versioning](https://semver.org/) for your tags (`v1.0.0`, `v1.1.0`, `v2.0.0`). The tag list is sorted newest first.

## Deployment Pipeline

Every deployment (regardless of environment) runs these steps automatically:

1. **Fetch** latest refs from the git remote
2. **Checkout** the specified branch, tag, or commit SHA
3. **Validate** project structure (`composer.json` and `web/` directory must exist)
4. **composer install** (dev environments include dev dependencies; stage and prod use `--no-dev --optimize-autoloader`)
5. **Validate** `web/index.php` exists after install
6. **Inject** Creodrop platform settings (done automatically, non-destructive)
7. **drush updatedb** to apply any pending database updates
8. **drush cache:rebuild** to clear all caches
9. **Health check** via HTTP to confirm the site is responding

If any required step fails, the deployment is marked as failed. The drush steps are non-fatal if the site is not yet fully installed (e.g., a fresh environment).

## Deployment Status

| Status | Meaning |
|--------|---------|
| **Pending** | Queued, waiting to start |
| **Validating** | Checking project structure |
| **Building** | Running composer install |
| **Deploying** | Running database updates and cache rebuild |
| **Success** | All steps completed, health check passed |
| **Failed** | A step failed — check the log |
| **Rolled back** | Deployment was rolled back |

## Viewing Deployment History

The **Deployments** tab on the site detail page shows:

- All deployments across all environments
- Status, environment, branch or tag, commit SHA, and duration
- Full log output for each deployment (click to expand)

Filter by environment using the tabs at the top of the list.

## Concurrent Deploys

Only one deployment can run per environment at a time. If you trigger a deployment while one is already running on the same environment, the new one will be rejected with a "deployment already in progress" error. Wait for the current deployment to complete before trying again.

## Requirements

Your git repository must use a standard Drupal Composer project structure:

- `composer.json` at the repository root
- Drupal webroot at `web/` (not the repository root)
- `web/index.php` present after `composer install`

If your project uses a different webroot (e.g., `docroot/`), contact support to discuss your setup.
