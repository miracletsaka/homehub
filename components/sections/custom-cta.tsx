"use client"

import { getAllProducts } from "@/lib/database";
import { Check, Ruler, Sofa, Clock, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const flagshipFeatures = [
  {
    icon: Sofa,
    text: "Massive seating space - fits the whole family comfortably",
  },
  {
    icon: Ruler,
    text: "Modern minimalist design that looks expensive instantly",
  },
  {
    icon: Check,
    text: "Deep cushions for premium comfort",
  },
  {
    icon: Check,
    text: "Perfect for open-plan lounges",
  },
];

const specifications = [
  { label: "Length", value: "3.1m" },
  { label: "Short end depth", value: "1.7m" },
  { label: "Long end depth", value: "2.2m" },
];

export function CustomCtaSection() {

  const [selectedImage, setSelectedImage] = useState<string>('flagship.jpeg')

  const allProductsData = getAllProducts();
    
  const product = allProductsData.find(
    (p) => String(p.id) === "flagship-1" || p.id ==="flagship-1"
  );

  return (
    <section
      id="flagship"
      className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-top">
          {/* Left Content */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-amber-300 text-amber-900 px-3 py-1 rounded-full mb-4">
              ⭐ Flagship Product
            </span>

            <h2 className="text-zinc-200 text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Luxury U-Shape Corner Sofa
            </h2>

            <p className="text-xl mb-2 text-amber-100 font-medium">
              The statement piece that instantly upgrades any living room
            </p>

            <p className="text-sm text-white mb-8 opacity-90 leading-relaxed">
              Designed for modern homes that want space, comfort, and serious
              style — all in one. With clean lines, deep seating, and premium
              finishing, it's the perfect centrepiece for family movie nights,
              entertaining guests, and luxury lounging.
            </p>

            {/* Size & Specifications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-white text-sm text-white font-semibold mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-amber-300" />
                Dimensions
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-amber-300">
                      {spec.value}
                    </div>
                    <div className="text-sm opacity-80">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="text-sm underline text-white font-semibold mb-4">
                Why customers love it:
              </h3>
              <ul className="space-y-1">
                {flagshipFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <li key={index} className="flex text-[11px] items-start gap-3">
                      <IconComponent className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                      <span>{feature.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Exclusive Benefits */}
            <div className="bg-amber-950/50 rounded-lg p-5 mb-6 border border-amber-700/30">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-amber-300 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">
                    Custom-built in 10–14 days
                  </div>
                  <div className="text-sm opacity-90">
                    Made to order in Blantyre with quality craftsmanship
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-amber-300 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">
                    FREE delivery around Blantyre
                  </div>
                  <div className="text-sm opacity-90">
                    White-glove delivery and setup included
                  </div>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-amber-300">
                    MWK 850,000
                  </span>
                  <span className="text-sm text-white line-through opacity-60">
                    MWK 1,200,000
                  </span>
                </div>
                <div className="text-sm text-amber-200">
                  Save MWK 350,000 (29% off)
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-amber-900 font-bold rounded-lg hover:bg-amber-100 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Order Now - Limited Slots
              </a>
              <a
                href="https://wa.me/265888123456"
                className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all text-center"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="text-xs mt-4 opacity-75">
              ⚠️ Limited build slots available to maintain quality
            </p>
          </div>

          {/* Right Visual - Product Image */}
          <div className="">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-5">
                <img
                  src={selectedImage}
                  alt="Luxury U-Shape Corner Sofa"
                  className="w-full h-auto"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  29% OFF
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -left-4 top-1/4 bg-white text-amber-900 px-4 py-3 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">5.0 ⭐</div>
                <div className="text-xs">89 Reviews</div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-amber-300 text-amber-900 px-4 py-3 rounded-lg shadow-xl">
                <div className="text-sm font-bold">✓ In Stock</div>
                <div className="text-xs">Ready to Build</div>
              </div>
                {product?.supportingImages && product.supportingImages.length > 0 && (
                <div className="grid grid-cols-4 gap-3">
                  {/* Main product image thumbnail */}
                  <button
                    onClick={() => setSelectedImage(product.image)}
                    className={`relative h-20 bg-slate-100 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === product.image || !selectedImage
                        ? "border-amber-900 ring-2 ring-amber-900 ring-offset-2"
                        : "border-slate-200 hover:border-amber-900"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} - Main`}
                      fill
                      className="object-cover"
                    />
                  </button>

                  {/* Supporting images thumbnails */}
                  {product.supportingImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img.url)}
                      className={`relative h-20 bg-slate-100 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === img.url
                          ? "border-amber-900 ring-2 ring-amber-900 ring-offset-2"
                          : "border-slate-200 hover:border-amber-900"
                      }`}
                      title={img.caption || img.alt}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}