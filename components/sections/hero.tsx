"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newArrivals = [
  {
    id: 1,
    name: "Minimalist Gray Sofa",
    category: "Sitting Room",
    price: "₹18,999",
    description: "Blantyre's finest custom-built furniture for your living space",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Walnut Dining Set",
    category: "Dining Room",
    price: "₹24,999",
    description: "Premium handcrafted dining furniture made to last",
    tag: "TRENDING",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Modern Storage Bed",
    category: "Bedroom",
    price: "₹15,999",
    description: "Luxury bedroom furniture with modern design elements",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Premium Kitchen Island",
    category: "Kitchen",
    price: "₹32,999",
    description: "Custom-built kitchen solutions for your home",
    tag: "EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newArrivals.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newArrivals.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + newArrivals.length) % newArrivals.length
    );
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Images with Carousel Effect */}
      {newArrivals.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Animated with slide transitions */}
          <div className="relative z-10 md:col-span-2 lg:col-span-1">
            {newArrivals.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute top-0 -translate-x-8 pointer-events-none"
                }`}
              >
                <span className="inline-block px-4 py-2 bg-amber-600 rounded-full text-xs font-bold tracking-widest uppercase text-white mb-4">
                  {slide.tag}
                </span>

                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                  {slide.name}
                  <br />
                  <span className="text-amber-400">{slide.category}</span>
                </h1>

                <p className="text-lg text-gray-100 leading-relaxed mb-4 max-w-xl">
                  {slide.description}
                </p>

                <p className="text-4xl font-bold text-amber-400 mb-8">
                  {slide.price}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`#product-${slide.id}`}
                    className="inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 transition-colors text-center"
                  >
                    View Details
                  </a>
                  <a
                    href="#catalogue"
                    className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors text-center"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center md:justify-start gap-4 mt-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex gap-2">
            {newArrivals.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-amber-600 w-8"
                    : "bg-white/50 w-3 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}