// Shopify Buy Button settings.
// 1. Shopify admin → Sales channels → add "Buy Button".
// 2. Settings → Apps and sales channels → Develop apps → create an app with
//    Storefront API access, and copy the Storefront access token.
// The token is public by design (it only reads products and creates checkouts).
export const shopify = {
  domain: '', // e.g. 'estudio-joannes.myshopify.com'
  storefrontAccessToken: '',
};

export const shopReady = () => Boolean(shopify.domain && shopify.storefrontAccessToken);

export const site = {
  name: 'Estudio Joannes',
  city: 'Madrid',
  email: 'hola@estudiojoannes.com', // set up this inbox on estudiojoannes.com
  instagram: 'https://instagram.com/', // TODO: handle
};
