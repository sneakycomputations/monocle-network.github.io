# Monocle Network website

Static website reconstruction based on the supplied design mockups, local assets, and Markdown copy. The intended host is GitHub Pages.

## Local preview

Run a local HTTP server from this directory; do not open `index.html` using `file://`, because the shared header and footer are loaded with `fetch()`.

For example, with Python installed:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

## Project structure

- `index.html` — first-pass homepage implementation based on `web pages - desktop/Home.jpg`.
- `download.html` — first-pass Download page based on `web pages - desktop/Download.jpg`; download controls remain disabled pending official release URLs.
- `partials/` — shared header and footer markup.
- `css/style.css` — local fonts, theme variables, responsive layouts, and shared styles.
- `js/main.js` — partial loading, mobile navigation and theme control.
- `assets/` — supplied graphics and icons.
- `fonts/` — supplied IBM Plex font files.
- `copy/` — original Markdown page copy, retained as the source of truth.
- `web pages - desktop/` and `web pages - mobile/` — authoritative visual references.
- `PROJECT_STATE.md` — phase record, decisions, caveats and next steps.

## Current status

The homepage and Download page are the first implemented page batch. Other page destinations are still being built, so some navigation links will not resolve yet. Do not enable download controls until the official release and verification URLs are confirmed.

## GitHub Pages

The site is designed as static files and requires no framework or package installation. Publishing from a branch and folder is supported by GitHub Pages; confirm the repository's current Pages settings before deployment. Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
