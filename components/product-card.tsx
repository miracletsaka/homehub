import { Heart, Eye } from "lucide-react";
import type { Product } from "@/lib/products-data";
import { formatCurrency, calculateDiscount } from "@/lib/format";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.oldPrice
    ? calculateDiscount(product.oldPrice, product.price)
    : null;

  return (
    <div className="group bg-white rounded border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded ${
              product.badge === "Sale" ? "bg-red-600" : "bg-green-700"
            }`}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-medium">
          {product.category}
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-amber-900 mb-3 leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Price Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-amber-900">
              {formatCurrency(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-slate-400 line-through">
                {formatCurrency(product.oldPrice)}
              </span>
            )}
          </div>

        </div>

        {/* Discount Badge */}
        {discount && (
          <div className="mt-3 text-xs text-red-600 font-semibold">
            Save {discount}%
          </div>
        )}
      </div>
    </div>
  );
}
