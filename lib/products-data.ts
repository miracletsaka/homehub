export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "Sale" | "New" | string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  count?: number | string;
  image: string;
  description: string;
}

