import Image from "next/image";
import type { Category } from "@/lib/products-data";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative h-72 rounded overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <Image
        src={category.image || "/placeholder.svg"}
        alt={category.name}
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 group-hover:from-black/85"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
        <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
        <p className="text-sm opacity-90">{category.count} Products</p>
      </div>
    </div>
  );
}
