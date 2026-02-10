export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Sale" | "New" | string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
  description: string;
}

export const productsData = {
  deals: [
    {
      id: "deal-001",
      name: "Premium L-Shape Sofa",
      category: "Sofas",
      price: 450000,
      oldPrice: 600000,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
      badge: "Sale",
      description: "Luxurious L-shape sofa with high-density foam and premium fabric",
    },
    {
      id: "deal-002",
      name: "Modern King Bed with Headboard",
      category: "Beds",
      price: 380000,
      oldPrice: 500000,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
      badge: "Sale",
      description: "Elegant king-size bed with upholstered headboard",
    },
    {
      id: "deal-003",
      name: "6-Seater Dining Set",
      category: "Dining",
      price: 520000,
      oldPrice: 700000,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
      badge: "Sale",
      description: "Complete dining set with solid wood table and 6 chairs",
    },
    {
      id: "deal-004",
      name: "Executive Office Desk",
      category: "Office",
      price: 280000,
      oldPrice: 350000,
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
      badge: "Sale",
      description: "Professional office desk with ample storage space",
    },
    {
      id: "deal-005",
      name: "Luxury Coffee Table Set",
      category: "Tables",
      price: 180000,
      oldPrice: 240000,
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80",
      badge: "Sale",
      description: "Modern coffee table with matching side tables",
    },
  ] as Product[],
  featured: [
    {
      id: "feat-001",
      name: "3-Seater Fabric Sofa",
      category: "Sofas",
      price: 350000,
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
      badge: "New",
      description: "Comfortable 3-seater sofa with removable cushions",
    },
    {
      id: "feat-002",
      name: "Queen Size Platform Bed",
      category: "Beds",
      price: 320000,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80",
      badge: "New",
      description: "Modern platform bed with storage drawers",
    },
    {
      id: "feat-003",
      name: "Tufted Velvet Armchair",
      category: "Chairs",
      price: 120000,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      description: "Elegant velvet armchair perfect for any room",
    },
    {
      id: "feat-004",
      name: "Modern TV Stand",
      category: "TV Stands",
      price: 150000,
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80",
      description: "Contemporary TV stand with cable management",
    },
    {
      id: "feat-005",
      name: "Ergonomic Office Chair",
      category: "Office",
      price: 95000,
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
      badge: "New",
      description: "Premium ergonomic chair with lumbar support",
    },
    {
      id: "feat-006",
      name: "4-Seater Dining Set",
      category: "Dining",
      price: 380000,
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600&q=80",
      description: "Compact dining set ideal for small spaces",
    },
  ] as Product[],
  categories: [
    {
      id: "cat-001",
      name: "Sofas",
      count: 24,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      description: "2-seater, 3-seater, L-shape, U-shape sofas",
    },
    {
      id: "cat-002",
      name: "Beds & Headboards",
      count: 18,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      description: "King, Queen, and custom bed frames",
    },
    {
      id: "cat-003",
      name: "Dining Sets",
      count: 15,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      description: "Complete dining room solutions",
    },
    {
      id: "cat-004",
      name: "Office Furniture",
      count: 20,
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      description: "Desks, chairs, and storage",
    },
    {
      id: "cat-005",
      name: "Tables",
      count: 16,
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
      description: "Coffee tables, side tables, consoles",
    },
    {
      id: "cat-006",
      name: "Home Accessories",
      count: 32,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      description: "Mirrors, rugs, wall décor",
    },
  ] as Category[],
};
