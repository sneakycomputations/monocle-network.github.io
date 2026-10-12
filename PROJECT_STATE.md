# Monocle Network website — project state

Updated: 2026-10-11

## Current phase

Phase 4: first page batch implemented (homepage and Download), building on the shared foundation. The supplied archive has been inspected and extracted into this working project.

## Source archive inventory

- Source: `website assets.zip` from the ChatGPT Library.
- Archive: 309 entries, approximately 42.1 MB uncompressed.
- Extracted assets include the coin, icon, logo, OS, social and favicon directories; supplied IBM Plex Sans, Sans Condensed, Mono and Serif fonts; 15 desktop page mockups; four mobile mockups; feature-box references; and 33 Markdown copy files.
- The desktop mockups are 1920 px wide. `Download.jpg` is the authoritative Download page design; the WebP references linked in `copy/Download.md` are not treated as deliverables.
- Policy and other long-form copy pages will use the article layout modelled on `web pages - desktop/Peer Security Reserve.jpg` unless the copy itself requires a specialised arrangement.

## Implemented so far

- Extracted the original archive contents without modifying the supplied source assets or Markdown files.
- Added `css/style.css` with local IBM Plex font faces, colour and spacing tokens, article typography, shared header/footer styling, responsive breakpoints, focus indicators, reduced-motion handling, and the homepage/Download page component styles.
- Added `partials/header.html` and `partials/footer.html` as shared navigation partials.
- Added `js/main.js` to load the partials, toggle the mobile navigation, switch light/dark themes, and mark current navigation links.
- Rebuilt `index.html` into the first homepage implementation, following the structure of `Home.jpg`: hero and currency coins, values, feature cards, community reserves, download promotion, and get-involved panel.
- Added `download.html` following `Download.jpg`: platform cards, laptop visual, privacy feature panels, repeated download call-to-action, and GitHub promotion.
- Kept original Markdown files in `copy/` as source references.
- Download buttons are deliberately disabled until official release URLs are supplied; placeholder URLs from the source Markdown were not treated as real destinations.

## Technical decisions and caveats

- Target hosting is GitHub Pages and the repository is `monocle-network/monocle-network.github.io`.
- GitHub Pages does not provide server-side includes. Header/footer partials are fetched client-side, so successful rendering of those shared elements requires JavaScript and an HTTP(S) origin; do not test by opening HTML directly with `file://`.
- All current page files are planned for the site root, so `partials/...`, `css/...`, `js/...`, and `assets/...` are relative paths. If the final output is hosted below a repository subpath, verify paths in that context. The official custom domain is `monoclenetwork.org`.
- The starter header/footer links anticipate the page inventory; their final destinations and slugs must be reconciled against the 33 Markdown files before the site is considered complete.
- No framework or third-party runtime dependency has been introduced.

## Next steps

1. Review the homepage and Download page locally against their desktop mockups and mobile references; refine spacing and responsive behaviour.
2. Build the reusable article template using `Peer Security Reserve.jpg`, then implement policy and reserve pages.
3. Implement the remaining page families: overview/directories, structured information pages, and remaining landing pages.
4. Reconcile every page slug, internal link, sitemap destination, and supplied image against all 33 Markdown files.
5. Confirm official download, release, signature, source-repository, and installer-verification URLs before enabling download actions.
6. Test mobile navigation, theme switching, keyboard focus, image/font loading, and relative paths with a local HTTP server; then verify GitHub Pages deployment configuration.

## Known limitations at this checkpoint

- Homepage and Download are first-pass implementations, not yet pixel-matched to their mockups; spacing, mobile comparison, and detail-level visual QA remain.
- Several internal destinations and page links are not yet implemented because only the first page batch is complete.
- Official release URLs are not present in the supplied copy, so download controls remain disabled.
- Partial-loading failure currently leaves the header/footer containers empty; add a useful fallback or choose duplicated static markup before final release if robust no-JavaScript rendering is required.
