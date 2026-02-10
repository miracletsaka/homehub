"use client";

import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { ProductCard } from "@/components/product-card";

export function CrimsonAffairSection() {
  const products = [
    {
      id: "crimson-1",
      name: "Dining Sets",
      category: "Dining Room",
      price: 16999,
      originalPrice: 28999,
      discount: 40,
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 45,
      badge: "Sale",
    },
    {
      id: "crimson-2",
      name: "Storage Beds",
      category: "Bedroom",
      price: 6999,
      originalPrice: 12999,
      discount: 45,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 32,
      badge: "Sale",
    },
    {
      id: "crimson-3",
      name: "Shoe Racks",
      category: "Storage",
      price: 2999,
      originalPrice: 5999,
      discount: 50,
      image:
        "https://images.unsplash.com/photo-1595518892051-a120a6471a90?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 28,
      badge: "Sale",
    },
    {
      id: "crimson-4",
      name: "Lounge Chairs",
      category: "Living Room",
      price: 6499,
      originalPrice: 10999,
      discount: 40,
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 38,
      badge: "Sale",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-stretch">
          {/* Left: Promotional Banner */}
          <div className="lg:col-span-1 relative bg-gradient-to-br from-red-600 to-red-700 overflow-hidden shadow-xl">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full min-h-[500px] p-8 md:p-12">
              {/* Sale Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Tag className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white tracking-wider">SPECIAL OFFER</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                The
                <br />
                <span className="text-red-200 italic">Crimson</span>
                <br />
                <span className="font-serif">Affair</span>
              </h2>

              <div className="mb-8">
                <p className="text-white/90 text-lg mb-2">Save up to</p>
                <p className="text-6xl md:text-7xl font-bold text-white">70%</p>
                <p className="text-white/90 text-lg mt-2">on selected items</p>
              </div>

              <Link
                href="/products?sale=crimson-affair"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-700 font-bold rounded-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Shop Sale Now
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-white/70 text-sm mt-6">Limited time offer</p>
            </div>
          </div>

          {/* Right: Product Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* View All Sale Items */}
            <div className="mt-6">
              <Link
                href="/products?sale=crimson-affair"
                className="block text-center py-4 rounded-xl border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                View All Sale Items →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}