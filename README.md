# personal-webpage

Source for [douyang.org](https://douyang.org/), the personal site of David Ouyang.

Static site served by GitHub Pages (`CNAME` -> douyang.org). Mirrors the content of
[douyang.github.io](https://douyang.github.io/).

## Pages
- `index.html` — homepage (bio, research, publications, trials, honors, service, InVision).
- `publications.html` — full publication list, with local PDFs in `pdfs/`.
- `research-film.html` — self-playing research overview, embedded in the homepage. Marked `noindex`.

## SEO and AEO
- Per-page `<title>`, meta description, `rel=canonical`, and robots directives.
- Open Graph and Twitter Card tags.
- Structured data: `Person`, `WebSite`, and `ProfilePage` JSON-LD in `index.html`.
- `sitemap.xml`, `robots.txt`, and `favicon.svg`.
- `llms.txt` — machine-readable profile for AI answer engines.
