// HomeHub Malawi - Complete Product Database
// All prices are in Malawian Kwacha (MWK)
// Last updated: February 2026

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // in MWK
  originalPrice?: number; // in MWK
  discount?: number; // percentage
  image: string;
  featured?:boolean;
  dimensions?:string;
  description: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  inStock: boolean;
  supportingImages?: {
    url: string;
    alt: string;
    caption: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  slug?: string;
  description: string;
  image: string;
  count: string;
}

// All Products Database
export const allProducts: Product[] = [
   {
    id: "flagship-1",
    name: "Luxury U-Shape Corner Sofa",
    category: "Sitting Room",
    price: 7600000,
    originalPrice: 8000000,
    discount: 29,
    image:
      "/flagship.jpeg?w=1200&h=600&fit=crop",
    description: "The statement piece that instantly upgrades any living room. This luxury U-shape corner sofa is designed for modern homes that want space, comfort, and serious style. With clean lines, deep seating, and premium finishing, it's perfect for family movie nights, entertaining guests, luxury lounging, and high-end interior spaces. Custom-built in Blantyre in 10-14 days. FREE delivery around Blantyre. Limited build slots available.",
    rating: 5.0,
    reviews: 89,
    badge: "Flagship",
    inStock: true,
    featured: true,
    dimensions: "Length: 3.1m | Short end: 1.7m | Long end: 2.2m",
    supportingImages: [
      {
        url: "https://neuroflow.lon1.digitaloceanspaces.com/images/WhatsApp%20Image%202026-02-06%20at%2010.19.13.jpeg",
        alt: "Luxury U-Shape Corner Sofa - Front angle view",
        caption: "Front view showing elegant design",
      },
      {
        url: "https://neuroflow.lon1.digitaloceanspaces.com/images/WhatsApp%20Image%202026-02-06%20at%2010.19.12.jpeg",
        alt: "Luxury U-Shape Corner Sofa - Detail view of cushions",
        caption: "Premium deep cushioning detail",
      },
      
    ],
  },
  // Crimson Affair Collection
    {
    id: "garden-1",
    name: "Fiddle Leaf Fig (Minimalist White Pot + Saucer)",
    category: "Garden",
    price: 100000,
    originalPrice: 100000,
    discount: 0,
    image: "https://neuroflow.lon1.digitaloceanspaces.com/images/garden-1.jpeg",
    description:
      "Bring effortless elegance into your space with this Fiddle Leaf Fig styled in a minimalist white ceramic pot with matching saucer. Finished with white decorative pebbles for a clean, modern look, this piece instantly elevates any room — perfect for living rooms, offices, bedrooms, or entryways. Simple, timeless, and luxurious, it’s the kind of décor that makes your home feel thoughtfully designed in seconds.",
    rating: 4.9,
    reviews: 21,
    badge: "New",
    inStock: true,
    featured: true,
    dimensions: "Indoor décor piece | Pot + saucer included",
    supportingImages: [
      {
        url: "https://neuroflow.lon1.digitaloceanspaces.com/images/garden-1.jpeg",
        alt: "Fiddle Leaf Fig in white ceramic pot",
        caption: "Minimalist plant décor with premium finish",
      },
    ],
  },

  {
    id: "garden-2",
    name: "Luxury Solid-Wood Console Table",
    category: "Garden",
    price: 1100000,
    originalPrice: 0,
    discount: 0,
    image: "https://neuroflow.lon1.digitaloceanspaces.com/images/garden-2.jpeg",
    description:
      "This luxury solid-wood console table is the perfect statement piece for an entryway, hallway, or behind-the-sofa styling. With its thick premium top, clean architectural legs, and rich natural wood grain, it instantly adds warmth and high-end character to any space. Designed for modern homes that love timeless elegance, it’s the ideal surface for décor, mirrors, candles, and everyday essentials — simple, bold, and effortlessly beautiful.",
    rating: 5.0,
    reviews: 14,
    badge: "Premium",
    inStock: true,
    featured: true,
    dimensions: "Console table | Custom sizing available",
    supportingImages: [
      {
        url: "https://neuroflow.lon1.digitaloceanspaces.com/images/garden-2.jpeg",
        alt: "Luxury solid-wood console table",
        caption: "Thick top + architectural legs for a premium look",
      },
    ],
  },

  {
    id: "garden-7",
    name: "Organic-Shaped Statement Mirror (Wood-Toned Frame)",
    category: "Garden",
    price: 4500000,
    originalPrice: 0,
    discount: 0,
    image: "https://neuroflow.lon1.digitaloceanspaces.com/images/garden-7.jpeg",
    description:
      "This organic-shaped statement mirror is designed to bring instant elegance and depth to any space. With its smooth, freeform silhouette and rich wood-toned frame, it adds a high-end designer feel while softening the room with natural curves. Perfect for entryways, bedrooms, or above a console table, it reflects light beautifully and turns any wall into a stylish focal point.",
    rating: 4.9,
    reviews: 17,
    badge: "Designer",
    inStock: true,
    featured: true,
    dimensions: "Wall mirror | Organic freeform shape",
    supportingImages: [
      {
        url: "https://neuroflow.lon1.digitaloceanspaces.com/images/garden-7.jpeg",
        alt: "Organic-shaped statement mirror with wood-toned frame",
        caption: "Freeform silhouette for a high-end designer look",
      },
    ],
  },

  {
    id: "crimson-4",
    name: "Modern Lounge Chairs",
    category: "Sitting Room",
    price: 92000,
    originalPrice: 155000,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1200&h=600&fit=crop",
    description: "Contemporary lounge chair with premium upholstery",
    rating: 4.7,
    reviews: 38,
    badge: "Sale",
    inStock: true,
  },

  // General Products Collection
  {
    id: "prod-1",
    name: "Modern Sofa Set",
    category: "Sitting Room",
    price: 185000,
    originalPrice: 285000,
    discount: 35,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop",
    description: "Comfortable 3-seater sofa with premium fabric and wooden frame",
    rating: 4.9,
    reviews: 67,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "prod-2",
    name: "Wooden Dining Table",
    category: "Dining Room",
    price: 245000,
    originalPrice: 360000,
    discount: 32,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=600&fit=crop",
    description: "Solid wood dining table with seating for 6-8 people",
    rating: 4.7,
    reviews: 42,
    inStock: true,
  },
  {
    id: "prod-3",
    name: "Storage Bed Frame",
    category: "Bedroom",
    price: 128000,
    originalPrice: 215000,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=600&fit=crop",
    description: "Queen size bed with built-in storage compartments",
    rating: 4.6,
    reviews: 35,
    inStock: true,
  },
  {
    id: "prod-4",
    name: "Modern Kitchen Island",
    category: "Kitchen",
    price: 330000,
    originalPrice: 515000,
    discount: 36,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
    description: "Contemporary kitchen island with granite countertop and storage",
    rating: 4.8,
    reviews: 28,
    badge: "Premium",
    inStock: false,
  },
  {
    id: "prod-5",
    name: "Spacious Office Desk",
    category: "Office",
    price: 115000,
    originalPrice: 185000,
    discount: 38,
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=600&fit=crop",
    description: "Executive desk with built-in storage and cable management",
    rating: 4.6,
    reviews: 19,
    inStock: true,
  },
  {
    id: "prod-6",
    name: "Bathroom Cabinet",
    category: "Bathroom",
    price: 57000,
    originalPrice: 100000,
    discount: 43,
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=600&fit=crop",
    description: "Wall-mounted bathroom vanity with mirror and storage",
    rating: 4.5,
    reviews: 22,
    inStock: true,
  },
  {
    id: "prod-7",
    name: "Contemporary Lounge Chair",
    category: "Sitting Room",
    price: 92000,
    originalPrice: 157000,
    discount: 41,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1200&h=600&fit=crop",
    description: "Modern accent chair with elegant design and comfort",
    rating: 4.7,
    reviews: 31,
    inStock: true,
  },
  {
    id: "prod-8",
    name: "Wooden Shoe Rack",
    category: "Bedroom",
    price: 42000,
    originalPrice: 71000,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1595518892051-a120a6471a90?w=1200&h=600&fit=crop",
    description: "Multi-shelf wooden shoe storage solution for bedrooms",
    rating: 4.5,
    reviews: 18,
    inStock: true,
  },

  // Additional Premium Products
  {
    id: "prod-9",
    name: "Leather Recliner",
    category: "Sitting Room",
    price: 280000,
    originalPrice: 420000,
    discount: 33,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop",
    description: "Premium leather reclining chair with footrest",
    rating: 4.9,
    reviews: 51,
    badge: "Premium",
    inStock: true,
  },
  {
    id: "prod-10",
    name: "Extending Dining Table",
    category: "Dining Room",
    price: 320000,
    originalPrice: 480000,
    discount: 33,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=600&fit=crop",
    description: "Expandable dining table that extends to seat 10+ people",
    rating: 4.8,
    reviews: 38,
    inStock: true,
  },
  {
    id: "prod-11",
    name: "Platform Bed Frame",
    category: "Bedroom",
    price: 165000,
    originalPrice: 250000,
    discount: 34,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=600&fit=crop",
    description: "Modern platform bed in walnut finish with underbed storage",
    rating: 4.7,
    reviews: 29,
    inStock: true,
  },
  {
    id: "prod-12",
    name: "Kitchen Pantry Cabinet",
    category: "Kitchen",
    price: 220000,
    originalPrice: 350000,
    discount: 37,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
    description: "Large pantry storage cabinet with adjustable shelves",
    rating: 4.6,
    reviews: 25,
    inStock: true,
  },
  {
    id: "prod-13",
    name: "Computer Workstation",
    category: "Office",
    price: 185000,
    originalPrice: 290000,
    discount: 36,
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=600&fit=crop",
    description: "L-shaped desk with monitor stand and storage compartments",
    rating: 4.7,
    reviews: 24,
    inStock: true,
  },
  {
    id: "prod-14",
    name: "Bathroom Vanity Unit",
    category: "Bathroom",
    price: 95000,
    originalPrice: 160000,
    discount: 41,
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=600&fit=crop",
    description: "Double sink bathroom vanity with marble countertop",
    rating: 4.8,
    reviews: 33,
    inStock: false,
  },
  {
    id: "prod-15",
    name: "Wingback Accent Chair",
    category: "Sitting Room",
    price: 135000,
    originalPrice: 225000,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1200&h=600&fit=crop",
    description: "Classic wingback chair with high back support",
    rating: 4.6,
    reviews: 27,
    inStock: true,
  },
  {
    id: "prod-16",
    name: "Bedroom Wardrobe",
    category: "Bedroom",
    price: 210000,
    originalPrice: 335000,
    discount: 37,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=600&fit=crop",
    description: "4-door wardrobe with mirror and hanging rails",
    rating: 4.7,
    reviews: 31,
    inStock: true,
  },
  {
    id: "garden-1",
    name: "Premium Outdoor Lounge Set",
    category: "Garden",
    price: 720000,
    originalPrice: 950000,
    discount: 24,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=600&fit=crop",
    description:
      "Turn your outdoor space into a luxury hangout. A premium outdoor lounge set built for comfort, style, and durability. Perfect for gardens, patios, poolside spaces, and modern outdoor living. Custom-built in Blantyre in 10–14 days. FREE delivery around Blantyre.",
    rating: 4.9,
    reviews: 61,
    badge: "Outdoor",
    inStock: true,
    featured: true,
    dimensions: "2-Seater + 2 Chairs + Table | Custom sizes available",
    supportingImages: [
      {
        url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&fit=crop",
        alt: "Outdoor lounge set - wide view",
        caption: "Wide view for a modern outdoor setup",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&fit=crop",
        alt: "Outdoor lounge seating - detail",
        caption: "Comfort and clean finishing details",
      },
    ],
  },

  {
    id: "garden-5",
    name: "Solid Wood Garden Bench",
    category: "Garden",
    price: 280000,
    originalPrice: 350000,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop",
    description:
      "A timeless solid wood garden bench that instantly elevates your outdoor space. Great for gardens, walkways, balconies, and porches. Built strong with premium finishing and comfort-friendly seating height.",
    rating: 4.8,
    reviews: 44,
    badge: "Bestseller",
    inStock: true,
    featured: false,
    dimensions: "Length: 1.6m | Depth: 0.45m | Height: 0.85m",
    supportingImages: [
      {
        url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&fit=crop",
        alt: "Garden bench - outdoor scene",
        caption: "Perfect placement for garden and patio",
      },
    ],
  },

  {
    id: "garden-7",
    name: "Modern Pergola Frame (Custom Build)",
    category: "Garden",
    price: 980000,
    originalPrice: 1250000,
    discount: 22,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&h=600&fit=crop",
    description:
      "A modern pergola frame designed for premium outdoor spaces. Ideal for shade, outdoor dining areas, and luxury garden setups. Custom sizes, finishes, and add-ons available (privacy panels, lighting, roofing options).",
    rating: 4.9,
    reviews: 27,
    badge: "Premium",
    inStock: true,
    featured: true,
    dimensions: "Standard: 3m x 3m | Custom sizes available",
    supportingImages: [
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&fit=crop",
        alt: "Pergola - wide outdoor view",
        caption: "Clean modern lines for luxury outdoor living",
      },
    ],
  },

  {
    id: "garden-4",
    name: "Large Planter Box Set (2pcs)",
    category: "Garden",
    price: 160000,
    originalPrice: 200000,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=1200&h=600&fit=crop",
    description:
      "A premium planter box set for modern gardens and patios. Great for flowers, herbs, and decorative plants. Built to last with clean finishing and sturdy structure.",
    rating: 4.7,
    reviews: 38,
    badge: "New",
    inStock: true,
    featured: false,
    dimensions: "Each: 1.0m x 0.4m x 0.45m",
    supportingImages: [
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&fit=crop",
        alt: "Planter boxes with plants",
        caption: "Perfect for decorative plants and herbs",
      },
    ],
  },
];

// Categories Database
export const categories: Category[] = [
  {
    id: "sitting-room",
    name: "Sitting Room",
    slug: "sitting-room",
    description: "Sofas, Coffee Tables & More",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
    count: "24 Items",
  },
  {
    id: "dining-room",
    name: "Dining Room",
    slug: "dining-room",
    description: "Tables, Chairs & Dining Sets",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=400&fit=crop",
    count: "18 Items",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    slug: "bedroom",
    description: "Beds, Wardrobes & Storage",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop",
    count: "32 Items",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    slug: "kitchen",
    description: "Cabinets, Islands & Storage",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
    count: "15 Items",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    slug: "bathroom",
    description: "Vanities, Cabinets & Accessories",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop",
    count: "12 Items",
  },
  {
    id: "office",
    name: "Office",
    slug: "office",
    description: "Desks, Chairs & Work Furniture",
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop",
    count: "14 Items",
  },
  {
    id: "storage",
    name: "Storage",
    slug: "storage",
    description: "Storage Solutions & Organizers",
    image:
      "https://images.unsplash.com/photo-1595518892051-a120a6471a90?w=500&h=400&fit=crop",
    count: "20 Items",
  },
  {
    id: "garden",
    name: "Garden",
    slug: "garden",
    description: "Outdoor Furniture & Garden Décor",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&h=400&fit=crop",
    count: "16 Items",
  },
];

// Utility Functions
export function getProductById(id: string | number): Product | undefined {
  return allProducts.find((product) => product.id === id || product.id === String(id));
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id || cat.slug === id);
}

export function getNewArrivals(limit: number = 4): Product[] {
  return allProducts.slice(0, limit);
}

export function getFeaturedProducts(limit: number = 6): Product[] {
  return allProducts.filter((p) => p.rating && p.rating >= 4.7).slice(0, limit);
}

export function getSaleProducts(): Product[] {
  return allProducts.filter((p) => p.discount && p.discount > 0);
}

export function getInStockProducts(): Product[] {
  return allProducts.filter((p) => p.inStock);
}

// Format price to display with MWK currency
export function formatPrice(price: number): string {
  return `MWK ${price.toLocaleString("en-US")}`;
}

// Calculate discount amount
export function getDiscountAmount(originalPrice: number, discount: number): number {
  return Math.round((originalPrice * discount) / 100);
}

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getAllCategories(): Category[] {
  return categories;
}