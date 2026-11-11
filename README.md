# Estudio Joannes

Shop site for Estudio Joannes. Astro, deployed on Vercel, checkout through Shopify Buy Button.

## Run it

```bash
cd ~/Documents/estudio-joannes
npm install
npm run dev        # http://localhost:4321
```

## Where things live

| What | File |
| --- | --- |
| Products (name, price, dimensions, photos, Shopify ID) | `src/data/products.ts` |
| Shopify keys, email, Instagram | `src/data/shop.ts` |
| Colours and type | `src/styles/global.css` |
| Logo symbol path | `src/data/brand.ts` |
| Photos | `public/images/` (then list them in `images: ['/images/ashtray-1.jpg']`) |

Pages: `/` home, `/shop` all objects by category, `/shop/<slug>` product, `/studio`, `/contact`.

## Turn on checkout (Shopify)

1. Create the Shopify store, add the ashtray as a product (with Basalt / Ash as variants).
2. Add the **Buy Button** sales channel.
3. Settings → Apps → Develop apps → create an app with Storefront API access → copy the Storefront access token.
4. Put the `xxx.myshopify.com` domain and token in `src/data/shop.ts`.
5. Put the product's numeric ID in `shopifyId` in `src/data/products.ts`, and set `price`.

Until both are filled in, the product page shows "Not yet on sale" with Instagram and email links.

## Publish (Vercel)

```bash
git init && git add . && git commit -m "first version"
# create an empty repo called estudio-joannes on GitHub, then:
git remote add origin https://github.com/<you>/estudio-joannes.git
git push -u origin main
```

Import the repo in Vercel (framework: Astro), then add estudiojoannes.com under Project → Settings → Domains and set the DNS records Vercel shows at your domain registrar.

## Still to fill in

- Real dimensions, weight and price for the ashtray
- Product photos (replace the drawn placeholders)
- Create the hola@estudiojoannes.com inbox and add the Instagram handle in `src/data/shop.ts`
