import { productsData } from "@/lib/products-data";
import { ProductCard } from "@/components/product-card";

export function FeaturedSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="block text-xs font-bold tracking-widest uppercase text-amber-700 mb-3">
              Bestsellers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
              Customer Favorites
            </h2>
          </div>

          <a
            href="#"
            className="text-sm font-medium text-slate-700 hover:text-amber-900 transition-colors flex items-center gap-1"
          >
            View All →
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.featured.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
