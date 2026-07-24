# Hlam — hlam.hr

Website for **Hlam**, a nature retreat and artisanal cheese & olive oil producer (Sirana Hlam) in Punat, on the island of Krk, Croatia.

**Live at [hlam.hr](http://hlam.hr)**

## Pages

- `/` — home: olive grove hero, about, cheese teaser, contact
- `/stay` — the two houses (Vela & Mala), photo galleries, grounds album, booking via WhatsApp
- `/cheese` — Sirana Hlam: cheeses, olive & truffle oil, guest reviews, tasting visits

## Tech

- [Next.js](https://nextjs.org) (App Router, TypeScript) with static export (`output: "export"`)
- Tailwind CSS, custom earthy palette (sage / terracotta / olive / cream) in `app/globals.css`
- Fonts: Playfair Display (headings) + Poppins (body) via `next/font`
- No backend, no forms — contact goes through WhatsApp deep links (`components/WhatsAppCTA.tsx`)

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and deploys it to **GitHub Pages** with the custom domain `hlam.hr` (DNS on Cloudflare, `public/CNAME`).

## Images

- `public/images/` — web-optimised photos (max 1920 px JPEG)
- `originals/` — full-resolution originals, kept out of the deployed site
- Gallery crops can be tuned per image in `components/ImageGallery.tsx`

## What's next

See [TODO.md](TODO.md) — top of the list: multi-language support (HR/DE/IT).
