---
title: "Custom Domains"
description: "Connect your own domain to your Creodrop site with automatic SSL certificate provisioning."
section: "sites"
order: 3
---

# Custom Domains

Every Creodrop site comes with a platform URL, but for a professional presence you should connect your own domain (like `mybusiness.com`).

## Adding a Domain

1. Go to your site's **Settings** page
2. Click **Add Custom Domain**
3. Enter your domain name (for example, `mybusiness.com`)
4. Click **Add Domain**

Creodrop will display the DNS records you need to configure at your domain registrar.

## Configuring DNS

You will need to add the following records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

### CNAME Record

| Field | Value |
|-------|-------|
| Type | CNAME |
| Host | `www` (or your subdomain) |
| Value | `proxy.creodrop.com` |

This routes traffic from your domain to Creodrop.

### TXT Record

| Field | Value |
|-------|-------|
| Type | TXT |
| Host | `_acme-challenge.yourdomain.com` |
| Value | (provided by Creodrop) |

This proves you own the domain and is required for SSL certificate generation.

### A Record (Optional Fallback)

| Field | Value |
|-------|-------|
| Type | A |
| Host | `@` (root domain) |
| Value | (provided by Creodrop) |

Use this if your registrar does not support CNAME records on the root domain.

## Verifying Your Domain

After configuring DNS records at your registrar:

1. Return to your site's **Settings** page
2. Click **Verify Domain**
3. Creodrop checks your DNS records

DNS propagation can take anywhere from a few minutes to 48 hours, depending on your registrar. If verification fails, wait a few minutes and try again.

## SSL Certificate

Once your domain is verified, Creodrop automatically provisions an SSL certificate via Let's Encrypt. This process usually takes under 5 minutes. Once complete, your site is accessible at `https://yourdomain.com`.

## Domain Status Timeline

1. **Pending** -- Domain added, waiting for DNS verification
2. **Verified** -- DNS records confirmed, SSL provisioning started
3. **SSL Provisioning** -- Certificate is being generated
4. **Active** -- Domain is live with HTTPS

## Removing a Domain

To disconnect a custom domain from your site:

1. Go to **Settings**
2. Click **Delete Domain**
3. Confirm the removal

Your site will revert to using its platform URL. You can add a different domain at any time.

## Troubleshooting

**Verification keeps failing**
- Double-check the DNS records match exactly what Creodrop shows
- Wait at least 15 minutes after making DNS changes before retrying
- Some registrars take up to 48 hours for DNS propagation

**SSL not provisioning**
- Make sure the TXT record for `_acme-challenge` is correctly set
- The CNAME or A record must be active before SSL can provision
- Try verifying the domain again to restart the SSL process

**Site shows security warning**
- SSL provisioning can take a few minutes after domain verification
- Wait 5-10 minutes and refresh the page
- If the warning persists after 30 minutes, contact support
