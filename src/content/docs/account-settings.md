---
title: "Account Settings"
description: "Manage your Creodrop profile, password, and account preferences."
section: "settings"
order: 1
---

# Account Settings

Access your account settings by clicking **Account** in the sidebar navigation.

## Profile

Update your personal information:

- **First Name** -- Your first name (2-100 characters)
- **Last Name** -- Your last name (2-100 characters)
- **Email** -- Your email address (read-only; contact support to change)

Click **Save Changes** after editing your name. Changes take effect immediately.

## Password

### Changing Your Password

If you registered with email and password:

1. Enter your current password
2. Enter a new password (minimum 8 characters)
3. Confirm the new password
4. Click **Update Password**

### Setting a Password (Social Login Users)

If you signed up with Google or GitHub and want to also log in with a password:

1. Enter a new password (minimum 8 characters)
2. Confirm the password
3. Click **Set Password**

After setting a password, you can log in with either your social account or your email and password.

## SSH Keys

If you have any Developer tier sites, an **SSH Keys** section appears on the account page. This is where you manage the public keys used for SSH access to your environments.

### Adding a Key

1. Click **Add Key**
2. Enter a name for the key (e.g., "Work Laptop" or "CI Server")
3. Paste your SSH public key into the text area
4. Click **Add Key** to save

Creodrop validates the key format and computes a SHA256 fingerprint. Duplicate keys are rejected.

Supported key types: ssh-ed25519, ssh-rsa, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521.

### Viewing Keys

Each saved key shows:

- **Name** -- The label you gave it
- **Key type** -- The algorithm (e.g., ssh-ed25519)
- **Fingerprint** -- SHA256 fingerprint for identification
- **Last used** -- When the key was last used to authenticate an SSH connection

### Deleting a Key

Click the trash icon next to any key to remove it. Deleted keys can no longer be used for SSH access. This takes effect immediately.

### Key Scope

SSH keys are per-account, not per-site. A single key works across all your Developer tier sites and all environments (dev, stage, prod).

See [Developer Tier](/docs/developer-tier) for details on SSH access.

## Account Information

View read-only details about your account:

- **Member Since** -- The date you created your account
- **Account Status** -- Active, Suspended, or Pending Verification

## Deleting Your Account

To permanently delete your Creodrop account:

1. Scroll to the **Danger Zone** section
2. Click **Delete Account**
3. Type `DELETE` in the confirmation field
4. Click **Confirm Deletion**

This permanently removes:

- Your account and profile information
- All your sites and their data
- All databases and backups
- All custom domain configurations

This action cannot be undone. You will be logged out immediately after deletion.
