import { productsData } from "@/lib/products-data";
import { CategoryCard } from "@/components/category-card";
import { getAllCategories } from "@/lib/database";
import Link from "next/link";

export function CategoriesSection() {

   const categories = getAllCategories();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="block text-xs font-bold tracking-widest uppercase text-amber-700 mb-3">
            Shop by category
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
            Explore Our Collection
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link href={`/products?category=${category.id}`}
              key={category.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
