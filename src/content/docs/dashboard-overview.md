---
title: "Dashboard Overview"
description: "Learn how to use the Creodrop dashboard to view and manage all your Drupal sites."
section: "dashboard"
order: 1
---

# Dashboard Overview

The dashboard is your home base in Creodrop. It shows all your sites at a glance and gives you quick access to common actions.

## Sites Grid

Your sites appear in a responsive grid. Each site card displays:

- **Site name** -- The display name you chose when creating the site
- **Status badge** -- Current health of the site (Running, Starting, Provisioning, Stopped, or Error)
- **Tier badge** -- Which plan the site is on (Starter, Standard, Pro, or Developer)

Click any site card to open its [detail page](/docs/site-details).

## Status Indicators

| Status | Meaning |
|--------|---------|
| **Running** | Site is healthy and accessible |
| **Starting** | Container is healthy, SSL is still provisioning |
| **Provisioning** | Site is being created for the first time |
| **Stopped** | Site container is not running |
| **Error** | Something went wrong -- check the site detail page |

The dashboard automatically polls for status updates. When a site is provisioning or starting, updates happen every few seconds. Once all sites are stable, polling slows to every 30 seconds.

## Creating a New Site

Click the **Create Site** button in the top right corner of the dashboard. This opens the [site creation wizard](/docs/creating-a-site).

If you have no sites yet, the dashboard shows a welcome message with a prominent button to create your first site.

## Navigation

The sidebar on the left provides access to:

- **Dashboard** -- The main sites overview (this page)
- **Account** -- Your profile, password, and account settings
- **Logout** -- Sign out of your account

On mobile devices, tap the menu icon to open the sidebar.
