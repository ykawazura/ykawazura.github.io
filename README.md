# ykawazura.github.io

Personal academic CV website for Yohei Kawazura, built with [Hugo](https://gohugo.io/) and a custom theme.

Live site: **https://ykawazura.github.io/**

## Site Structure

```
/                   ← English About
/publications/      ← English publications list
/cv/                ← English CV
/ja/                ← Japanese About
/ja/publications/   ← Japanese publications list
/ja/cv/             ← Japanese CV
```

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.120.0 or later

### Run the development server

```bash
hugo server -D
```

Visit http://localhost:1313 to preview the site.

### Build for production

```bash
hugo --minify
```

Output goes to `public/`.

## Updating Content

All content lives in `content/en/` (English) and `content/ja/` (Japanese).

### Update the About page

Edit `content/en/_index.md` or `content/ja/_index.md`.

### Update publications

Edit `content/en/publications/_index.md` (and the Japanese version).

Each publication is a `<div class="pub-item">` block. Template:

```html
<div class="pub-item">
  <div class="pub-item__authors"><strong>Y. Kawazura</strong> and Co-Author Name</div>
  <div class="pub-item__title">"Title of the paper"</div>
  <div class="pub-item__journal"><em>Journal Name</em> <strong>Vol</strong>, Pages (Year)
    <a class="pub-item__doi" href="https://doi.org/10.XXXX/XXXXX">doi:10.XXXX/XXXXX</a>
  </div>
</div>
```

Add `<span class="pub-item__editors-pick">★ Editor's pick</span>` inside `.pub-item__journal` for editor's picks.

### Update the CV

Edit `content/en/cv/_index.md` or `content/ja/cv/_index.md`.

Each CV entry uses:

```html
<div class="cv-entry">
  <div class="cv-entry__date">2024 – present</div>
  <div class="cv-entry__content">
    <strong>Position Title</strong>
    Institution Name
  </div>
</div>
```

## Deployment

The site deploys automatically via GitHub Actions on every push to `main`.

**One-time GitHub setup** (only needed once):

1. Go to repository **Settings → Pages**
2. Set **Source** to **GitHub Actions**

The workflow file is at `.github/workflows/hugo.yml`.

## Theme

Custom theme at `themes/kawazura-academic/`. Key files:

- `assets/css/main.css` — all styles (edit colors in `:root` variables at the top)
- `assets/js/lang-toggle.js` — language switcher
- `layouts/_default/baseof.html` — main HTML shell with sidebar

### Design tokens

```css
--color-bg:      #f8f6f1   /* off-white background */
--color-primary: #0d1b2a   /* deep navy */
--color-accent:  #b5893a   /* dusty gold */
--sidebar-width: 220px
```
