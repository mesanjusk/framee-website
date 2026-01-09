# Framee Website (React / Next.js)

This is a lightweight, policy-friendly website designed for Meta/WhatsApp Business verification.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run start
```

## Deploy
- Vercel (recommended): import Git repo and deploy.
- Any Node host (Render/Railway/etc.) works with `npm run build` then `npm run start`.

## What to edit
- `src/config/business.ts` for business details (name, email, phone, address, website).
- Page content in `src/app/**/page.tsx`.
