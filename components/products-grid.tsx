"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/database";
import type { Product } from "@/lib/database";

interface ProductsGridProps {
  products: Product[];
}

export function ProductsGrid({ products }: ProductsGridProps) {
  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-slate-600">
          No products found matching your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <div className="relative h-64 bg-gray-200 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {product.price < product.originalPrice && (
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                -{calculateDiscount(product.originalPrice, product.price)}%
              </div>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-slate-900 group-hover:text-amber-900 transition-colors mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-slate-600 mb-3 line-clamp-1">
              {product.description}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-slate-900">
                {formatPrice(product.price)}
              </span>
              {product.price < product.originalPrice && (
                <span className="text-sm text-slate-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}