# Estudio Joannes — project notes for Claude

Shop site for Estudio Joannes, a small Madrid design studio making home objects in concrete. First product: the volcanic ashtray (cast concrete, silicone mould from a 3D-printed master).

## Stack
- Astro 7 (static), deployed on Vercel from GitHub, domain estudiojoannes.com (registered at Namecheap)
- Checkout: Shopify Buy Button SDK, loaded only on product pages with a live product (`src/components/BuyButton.astro`)
- Workflow: design in Figma, build in VS Code, preview at localhost before pushing; deploy = `git add . && git commit -m "..." && git push`

## Where things live
- Products: `src/data/products.ts` (price `null` shows "Coming soon"; `shopifyId` turns on the Buy Button)
- Shopify keys, email, Instagram: `src/data/shop.ts`
- Tokens (colours, type scale): `src/styles/global.css`
- Logo symbol path (square with two drips, viewBox 0 0 200 286): `src/data/brand.ts`; lockup in `src/components/Logo.astro`
- Photos go in `public/images/`

## Design rules
- Brand: elegant design studio, MoMA-like restraint; IKEA-style shop structure (categories, clear product pages with dimensions/material)
- Colours from the Figma logo file: paper #e9e6e1, stone #d6d2cb, line #c3beb6, mute #73706b, ink #1a1a1a, basalt #171717. No accent colour.
- Type: Geist (all text), Geist Mono only for "ESTUDIO" in the logo
- The one bold moment is the home hero: basalt block with the logo's two drips running out of it. Keep everything else quiet.
- Square corners, hairline rules, sentence case, no all-caps labels

## Open items
- Real ashtray price, dimensions, weight and photos
- Shopify store not created yet: needs domain + Storefront token in `shop.ts` and product ID
- hola@estudiojoannes.com inbox not set up; Instagram handle missing
- Possible Spanish version of the site
