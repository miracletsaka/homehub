"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCategories } from "@/lib/database";

export function AstraCollectionSection() {
  const categories = getAllCategories().slice(0, 4);

  return (
    <section id="catalogue" className=" bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-700 mb-3">
            Browse Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover premium furniture for every room in your home. Handcrafted quality meets modern design.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`products?category=${category.id}`}
              className="group bg-white overflow-hidden shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Subtle overlay for better text visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Item Count Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-semibold text-amber-900">
                    {category.count}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {category.description}
                </p>
                
                {/* View More Link */}
                <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Banner - New Astra Collection */}
        <div className="relative bg-gradient-to-br from-amber-900 to-amber-800 overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12">
              <span className="inline-block px-4 py-1.5 bg-amber-600 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-4">
                New Arrival
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ASTRA Collection
              </h3>
              <p className="text-lg text-amber-100 mb-6 leading-relaxed">
                Introducing our newest line of premium furniture. Modern elegance meets timeless craftsmanship.
              </p>
              <Link
                href="/products?collection=astra"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
              >
                Explore Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-64 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="ASTRA Collection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-900 text-amber-900 font-semibold rounded-lg hover:bg-amber-900 hover:text-white transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}