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
  { slug: 'lamps', name: 'Lamps', available: true },
  { slug: 'trays', name: 'Trays', available: false },
  { slug: 'planters', name: 'Planters', available: false },
  { slug: 'candle-holders', name: 'Candle holders', available: false },
];

export const products: Product[] = [
  {
    slug: 'volcanic-ashtray',
    name: 'Volcanic ashtray',
    category: 'ashtrays',
    price: 34,
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
    images: ['/images/ashtray-1.webp'],
  },
  {
    slug: 'twist-lamp', // TODO: confirm the name
    name: 'Twist lamp',
    category: 'lamps',
    price: 67,
    material: '3D printed', // TODO: confirm material
    dimensions: 'Ø 000 × 000 mm', // TODO: real dimensions
    finishes: ['White'], // TODO: confirm finishes
    summary: 'A table lamp in a single twisting form. The light glows through the printed walls.',
    description: [
      'The shell twists as it rises, so the light and shadow change as you walk around it.',
      'It is printed layer by layer, and the fine ridges of the print are part of the surface.',
    ],
    care: 'Wipe with a dry or slightly damp cloth. Keep away from direct heat.',
    shopifyId: null,
    images: ['/images/twist-lamp-1.jpg'],
  },
];

export const formatPrice = (p: number | null) =>
  p === null
    ? 'Coming soon'
    : new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(p);
