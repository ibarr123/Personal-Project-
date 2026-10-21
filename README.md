# Ivan Barrera Rivera — Portfolio

A responsive portfolio presenting Ivan’s MIS education, AI and analytics projects, business skills, and contact links. Built with HTML, CSS, and vanilla JavaScript; no build step or production dependencies.

## Run locally

From `/workspace/Personal-Project-`:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

The site is served on port 3000. The files can also be deployed to a static hosting service such as GitHub Pages.

## Edit content

- `index.html`: introduction, project cards, skills, education, email, and LinkedIn.
- `script.js`: project detail dialogs and category filtering.
- `styles.css`: colors, illustrations, typography, and mobile layouts.

Project descriptions and outcomes are drawn from the supplied résumé. Replit and n8n experience was supplied separately. Project visuals are illustrative rather than screenshots of the underlying applications. Live demos and repository links can be added when available.

Google Fonts optionally supplies DM Sans and Manrope. System fonts are used when unavailable. The uploaded résumé is not included in the public site.

## Validation

JavaScript syntax can be checked with `node --check script.js`. Browser validation covered project filtering, all four project dialogs, Escape dismissal, email links, JavaScript errors, and horizontal overflow at widths of 375, 768, and 1440 pixels.
