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
  paymentLink: string | null; // Stripe Payment Link URL (https://buy.stripe.com/...), null until created
  images: string[];
};

export const categories = [
  { slug: 'ashtrays', name: 'Ceniceros', available: true },
  { slug: 'lamps', name: 'Lámparas', available: true },
  { slug: 'trays', name: 'Bandejas', available: false },
  { slug: 'planters', name: 'Macetas', available: false },
  { slug: 'candle-holders', name: 'Portavelas', available: false },
];

export const products: Product[] = [
  {
    slug: 'volcanic-ashtray',
    name: 'Cenicero volcánico',
    category: 'ashtrays',
    price: 43,
    material: 'Hormigón moldeado',
    dimensions: 'Ø 000 × 00 mm', // TODO: real dimensions
    finishes: ['Basalto', 'Ceniza'],
    summary: 'Un cráter en hormigón macizo. Cada uno se moldea a mano en Madrid.',
    description: [
      'La forma parte de un cono volcánico: una base pesada que se eleva hasta un cráter.',
      'Se cuela en hormigón con un molde de silicona, así que cada pieza tiene sus propios poros, burbujas de aire y tono.',
    ],
    care: 'Límpialo con un paño húmedo. El hormigón está sellado, pero irá cogiendo pátina con el uso.',
    shopifyId: null,
    paymentLink: null,
    images: ['/images/hero-1.jpg'],
  },
  {
    slug: 'twist-lamp', // TODO: confirm the name
    name: 'Lámpara Twist',
    category: 'lamps',
    price: 76,
    material: 'Impresa en 3D', // TODO: confirm material
    dimensions: 'Ø 000 × 000 mm', // TODO: real dimensions
    finishes: ['Blanco'], // TODO: confirm finishes
    summary: 'Una lámpara de mesa de una sola forma retorcida. La luz se filtra por las paredes impresas.',
    description: [
      'La carcasa se retuerce al subir, así que la luz y la sombra cambian al caminar a su alrededor.',
      'Se imprime capa a capa, y las finas estrías de la impresión forman parte de la superficie.',
    ],
    care: 'Límpiala con un paño seco o ligeramente húmedo. Mantenla alejada del calor directo.',
    shopifyId: null,
    paymentLink: null,
    images: ['/images/twist-lamp-1.jpg', '/images/twist-lamp-3.jpg', '/images/twist-lamp-4.jpg', '/images/twist-lamp-5.jpg'],
  },
];

export const formatPrice = (p: number | null) =>
  p === null
    ? 'Próximamente'
    : new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(p);
