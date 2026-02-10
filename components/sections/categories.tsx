import { productsData } from "@/lib/products-data";
import { CategoryCard } from "@/components/category-card";

export function CategoriesSection() {
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
          {productsData.categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
