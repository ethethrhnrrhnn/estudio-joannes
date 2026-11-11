// Every object in the shop lives here. Add a product by copying an entry.
//
// price:      number in euros, or null to show "Coming soon"
// shopifyId:  the numeric product ID from Shopify (Products → open product →
//             the number at the end of the URL). Leave null until it exists.
// images:     files in /public/images. Leave [] to show the drawn placeholder.

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number | null;
  material: string;
  dimensions: string;
  weight?: string;
  finishes: string[];
  summary: string;
  description: string[];
  care: string;
  shopifyId: string | null;
  images: string[];
};

export const categories = [
  { slug: 'ashtrays', name: 'Ashtrays', available: true },
  { slug: 'trays', name: 'Trays', available: false },
  { slug: 'planters', name: 'Planters', available: false },
  { slug: 'candle-holders', name: 'Candle holders', available: false },
];

export const products: Product[] = [
  {
    slug: 'volcanic-ashtray',
    name: 'Volcanic ashtray',
    category: 'ashtrays',
    price: null,
    material: 'Cast concrete',
    dimensions: 'Ø 000 × 00 mm', // TODO: real dimensions
    finishes: ['Basalt', 'Ash'],
    summary: 'A crater in solid concrete. Each one is cast by hand in Madrid.',
    description: [
      'The form comes from a volcanic cone: a heavy base that rises to a crater.',
      'It is cast in concrete from a silicone mould, so every piece carries its own pores, air bubbles and tone.',
    ],
    care: 'Wipe with a damp cloth. The concrete is sealed but will patina with use.',
    shopifyId: null,
    images: [],
  },
];

export const formatPrice = (p: number | null) =>
  p === null
    ? 'Coming soon'
    : new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(p);
