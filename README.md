# 217 / Duvdevan

Commemorative landing page for **"217" — 40 Years of the Duvdevan Unit**, a
book marking four decades of the IDF's Duvdevan counter-terrorism unit. The
page introduces the book, walks through its five chapters, honors the
unit's fallen, and leads to a purchase link. One hundred percent of the
book's proceeds support the Commemoration Department of Friends of
Duvdevan.

Built with Next.js (App Router), Tailwind CSS v4, and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — root layout, global styles, and the single page (`page.tsx`)
  that assembles every section.
- `components/duvdevan/` — the page's sections (Nav, Hero, Introduction,
  Chapters, FeaturedQuote, Gallery, Memorial, Purchase, Footer).
- `components/Container.tsx` — the shared max-width/padding wrapper every
  section aligns to.
- `public/photos/duvdevan/` — all imagery, extracted directly from the
  book and its cover (no stock or AI-generated imagery).
- `lib/purchase.ts` — the single `PURCHASE_URL` constant every purchase
  button on the page reads from.

## Configuring the purchase link

Edit `lib/purchase.ts` and replace the placeholder:

```ts
export const PURCHASE_URL = "ADD_PURCHASE_LINK_HERE";
```

## Deployment

`next.config.ts` is set up for a static export (`output: "export"`).
`.github/workflows/gh-pages.yml` builds and deploys a preview to GitHub
Pages on push to `main`, or on demand via `workflow_dispatch`.
