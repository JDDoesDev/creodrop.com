# Creodrop Landing Page

Pre-launch landing page for [creodrop.com](https://creodrop.com).

## Setup

### 1. Create GitHub Repository

Create a new repo (e.g., `creodrop-landing` or just `creodrop.com`).

### 2. Configure Buttondown

1. Sign up at [buttondown.com](https://buttondown.com)
2. Go to **Settings → Embedding**
3. Copy your username
4. Replace `YOUR_USERNAME` in `index.html` (appears twice in the form actions)

### 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Save

### 5. Configure Custom Domain

#### In GitHub:
The `CNAME` file is already set to `creodrop.com`.

#### In your DNS provider:
Add these records:

**For apex domain (creodrop.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### 6. Enable HTTPS

Once DNS propagates (can take up to 24 hours):
1. Go to repo **Settings → Pages**
2. Check **Enforce HTTPS**

## File Structure

```
creodrop-landing/
├── index.html          # Main page
├── css/
│   └── styles.css      # Styles
├── images/
│   ├── logo.svg        # Light mode logo
│   ├── logo-dark.svg   # Dark mode logo
│   └── favicon.svg     # Browser favicon
├── CNAME               # Custom domain config
└── README.md           # This file
```

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #0891b2;      /* Cyan */
    --color-secondary: #2dd4bf;    /* Teal */
    --color-text: #134e4a;         /* Dark teal */
}
```

### Content

Edit `index.html` to change:
- Tagline and descriptions
- Feature blocks
- How it works steps

## Local Development

Just open `index.html` in a browser. No build step required.

For live reload, use any simple server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve
```

## License

Proprietary — Creodrop
