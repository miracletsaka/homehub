"use client";

import { productsData } from "@/lib/products-data";
import { ProductCard } from "@/components/product-card";
import { CountdownTimer } from "@/components/countdown-timer";

export function DealsSection() {
  return (
    <section id="catalogue" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <span className="block text-xs font-bold tracking-widest uppercase text-amber-700 mb-3">
              Limited Time
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
              Exclusive Offers
            </h2>
          </div>

          <CountdownTimer />
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {productsData.deals.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded hover:border-amber-900 hover:text-amber-900 transition-colors">
            View All Deals
          </button>
        </div>
      </div>
    </section>
  );
}
