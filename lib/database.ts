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
    price: 850000,
    originalPrice: 1200000,
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
  },
  // Crimson Affair Collection
  {
    id: "crimson-1",
    name: "Premium Dining Sets",
    category: "Dining Room",
    price: 245000,
    originalPrice: 410000,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=600&fit=crop",
    description: "Elegant wooden dining set for 6-8 people with premium finish",
    rating: 4.8,
    reviews: 45,
    badge: "Sale",
    inStock: true,
  },
  {
    id: "crimson-2",
    name: "Storage Beds",
    category: "Bedroom",
    price: 99000,
    originalPrice: 185000,
    discount: 45,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=600&fit=crop",
    description: "Queen size storage bed with built-in drawers and headboard",
    rating: 4.6,
    reviews: 32,
    badge: "Sale",
    inStock: true,
  },
  {
    id: "crimson-3",
    name: "Wooden Shoe Racks",
    category: "Storage",
    price: 42000,
    originalPrice: 85000,
    discount: 50,
    image:
      "https://images.unsplash.com/photo-1595518892051-a120a6471a90?w=1200&h=600&fit=crop",
    description: "Multi-tier wooden shoe storage rack with elegant design",
    rating: 4.5,
    reviews: 28,
    badge: "Sale",
    inStock: true,
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