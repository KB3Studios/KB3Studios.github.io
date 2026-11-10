# KB3 Studios Docs

Documentation site for KB3 Studios FiveM resources, built with [VitePress](https://vitepress.dev).

## Run it locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173). Pages reload as you edit.

## Deploy to GitHub Pages (free)

1. Create a new GitHub repository (for example `kb3-docs`) and push this folder to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial docs"
   git branch -M main
   git remote add origin https://github.com/YOUR_NAME/kb3-docs.git
   git push -u origin main
   ```

2. On GitHub, open the repo's **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. The first run takes about a minute. Your site will be at `https://YOUR_NAME.github.io/kb3-docs/`.

### Custom domain (e.g. docs.kb3studios.com)

1. In **Settings → Pages → Custom domain**, enter your domain and save.
2. At your DNS provider, add a `CNAME` record from `docs` to `YOUR_NAME.github.io`.
3. Push any change (or re-run the workflow). The base path switches to `/` automatically.

## Deploy to Cloudflare Pages, Netlify or Vercel instead

Connect the repo and use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `docs/.vitepress/dist` |
| Node version | 20 |

## Editing content

| What | Where |
| --- | --- |
| Pages | `docs/<resource>/*.md` (plain Markdown) |
| Home page | `docs/index.md` |
| Sidebar, navbar, Store and Discord links | `docs/.vitepress/config.mjs` |
| Brand colours | `docs/.vitepress/theme/custom.css` (`--kb3-*` variables) |
| Logo / favicon | `docs/public/logo.webp` (hero), `logo-nav.webp` (navbar), `favicon.png`, `apple-touch-icon.png` |
| Item icons | `docs/public/items/` |

### Adding a new resource

1. Create a folder, e.g. `docs/my-script/`, with an `index.md`.
2. Add it to `nav` and `sidebar` in `docs/.vitepress/config.mjs`.
3. Add a card to `features` in `docs/index.md` and to `docs/guide/getting-started.md`.

### Useful Markdown extras

~~~~md
::: tip
Helpful note.
:::

::: warning
Be careful.
:::

::: code-group
```cfg [Qbox]
ensure qbx_core
```
```cfg [QBCore]
ensure qb-core
```
:::

# Page title <Badge type="tip" text="v1.2.3" />
~~~~

Search, dark mode, "last updated" dates and mobile layout are built in.
