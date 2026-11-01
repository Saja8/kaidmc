# KaiLinks DMC Website

Static KaiLinks DMC website and Vercel preview, maintained separately from the `Saja8/kaiweb` repository that publishes kailinks.com.

Preview: https://kaidmc.vercel.app/

## Structure

- `index.html`: website content
- `assets/`: styles, scripts, images, and other media
- `sw.js` and `site.webmanifest`: existing browser caching and manifest
- `vercel.json`: static build and output settings

## Local preview and build

Serve the checkout over HTTP, for example with `python3 -m http.server 8779`, and open http://localhost:8779.

```sh
npm run build
```

The build copies the static site to `dist/`, which Vercel publishes. There is no dependency installation or automated browser test suite configured in this repository.

## Release notes

Review changes in the Vercel preview before publishing. Do not assume changes here update kailinks.com; check the intended repository and hosting project first.

The legacy `deploy.sh` and `deploy-check.sh` scripts stage all working-tree changes and push to `main`; `deploy-check.sh` also contains links to the separate KaiLinks repository. Prefer an explicit, reviewed commit and the configured Vercel deployment instead of those scripts.
