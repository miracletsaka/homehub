"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductsSidebar } from "@/components/products-sidebar";
import { ProductsGrid } from "@/components/products-grid";
import { getAllProducts } from "@/lib/database";
import { CustomCtaSection } from "@/components/sections/custom-cta";
import { ProductsLoading } from "@/components/loading";

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  const priceRange = searchParams.get("price") || "all";
  const stock = searchParams.get("stock") || "all";

  const allProducts = getAllProducts();

  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedPrice, setSelectedPrice] = useState(priceRange);
  const [selectedStock, setSelectedStock] = useState(stock);

  // Price range definitions (in MWK)
  const priceRanges: Record<string, [number, number]> = {
    "under-5000": [0, 5000],
    "5000-15000": [5000, 15000],
    "15000-50000": [15000, 50000],
    "above-50000": [50000, Infinity],
  };

  // Helper function to convert slug to category name
  function getCategoryNameFromSlug(slug: string): string {
    const categoryMap: Record<string, string> = {
      "sitting-room": "Sitting Room",
      "dining-room": "Dining Room",
      bedroom: "Bedroom",
      kitchen: "Kitchen",
      bathroom: "Bathroom",
      office: "Office",
      storage: "Storage",
      garden: "Garden",
    };
    return categoryMap[slug] || slug;
  }

  // Filter products based on all criteria
  const filteredProducts = allProducts.filter((product) => {
    // Category filter
    const categoryMatch =
      selectedCategory === "all" ||
      product.category === getCategoryNameFromSlug(selectedCategory);

    // Price filter
    let priceMatch = true;
    if (selectedPrice !== "all") {
      const [min, max] = priceRanges[selectedPrice] || [0, Infinity];
      priceMatch = product.price >= min && product.price <= max;
    }

    // Stock filter
    const stockMatch =
      selectedStock === "all" ||
      (selectedStock === "in-stock" && product.inStock) ||
      (selectedStock === "pre-order" && !product.inStock);

    return categoryMatch && priceMatch && stockMatch;
  });

  // Handle filter changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    updateURL(cat, selectedPrice, selectedStock);
  };

  const handlePriceChange = (range: string) => {
    setSelectedPrice(range);
    updateURL(selectedCategory, range, selectedStock);
  };

  const handleStockChange = (stockType: string) => {
    setSelectedStock(stockType);
    updateURL(selectedCategory, selectedPrice, stockType);
  };

  // Update URL with selected filters
  const updateURL = (cat: string, price: string, stockType: string) => {
    const params = new URLSearchParams();
    if (cat !== "all") params.append("category", cat);
    if (price !== "all") params.append("price", price);
    if (stockType !== "all") params.append("stock", stockType);

    const newUrl = `/products${params.toString() ? "?" + params.toString() : ""}`;
    window.history.replaceState({}, "", newUrl);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-slate-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900">
                Our Products
              </h1>
              {selectedCategory !== "all" && (
                <span className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold">
                  {getCategoryNameFromSlug(selectedCategory)}
                </span>
              )}
            </div>
            <p className="text-lg text-slate-600">
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {/* Layout: Sidebar + Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ProductsSidebar
                selectedCategory={selectedCategory}
                selectedPrice={selectedPrice}
                selectedStock={selectedStock}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                onStockChange={handleStockChange}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3 transition-opacity duration-300">
              <ProductsGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <CustomCtaSection />
      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}