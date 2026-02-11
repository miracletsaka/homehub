"use client";

import { useState } from "react";
import { getAllCategories } from "@/lib/database";

interface ProductsSidebarProps {
  selectedCategory: string;
  selectedPrice: string;
  selectedStock: string;
  onCategoryChange: (cat: string) => void;
  onPriceChange: (price: string) => void;
  onStockChange: (stock: string) => void;
}

export function ProductsSidebar({
  selectedCategory,
  selectedPrice,
  selectedStock,
  onCategoryChange,
  onPriceChange,
  onStockChange,
}: ProductsSidebarProps) {
  const categories = getAllCategories();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border-2 border-slate-300 rounded-lg font-semibold text-slate-900 hover:border-amber-900 hover:shadow-md transition-all"
        >
          <span>Filters</span>
          <span className="text-xl">{isOpen ? "−" : "+"}</span>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`lg:block ${
          isOpen
            ? "fixed inset-0 z-40 bg-black/50 lg:static lg:bg-transparent"
            : "hidden lg:block"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="bg-white w-full lg:w-64 h-full lg:h-auto p-6 rounded-lg border-2 border-slate-200 shadow-lg lg:shadow-md sticky top-0 max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Categories */}
          <h3 className="text-xl font-playfair font-bold text-slate-900 mb-4">
            Categories
          </h3>
          <nav className="space-y-1 mb-6">
            <button
              onClick={() => {
                onCategoryChange("all");
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                selectedCategory === "all"
                  ? "bg-amber-900 text-white"
                  : "text-slate-700 hover:bg-amber-50"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  onCategoryChange(cat.slug as string);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-amber-900 text-white"
                    : "text-slate-700 hover:bg-amber-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {/* Price Range */}
          <div className="border-t border-slate-200 pt-6 mb-6">
            <h4 className="font-semibold text-slate-900 mb-3">Price Range</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value="all"
                  checked={selectedPrice === "all"}
                  onChange={() => onPriceChange("all")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">All Prices</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value="under-5000"
                  checked={selectedPrice === "under-5000"}
                  onChange={() => onPriceChange("under-5000")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">Under MK5,000</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value="5000-15000"
                  checked={selectedPrice === "5000-15000"}
                  onChange={() => onPriceChange("5000-15000")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">MK5,000 - MK15,000</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value="15000-50000"
                  checked={selectedPrice === "15000-50000"}
                  onChange={() => onPriceChange("15000-50000")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">MK15,000 - MK50,000</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value="above-50000"
                  checked={selectedPrice === "above-50000"}
                  onChange={() => onPriceChange("above-50000")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">Above MK50,000</span>
              </label>
            </div>
          </div>

          {/* Stock Status */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="font-semibold text-slate-900 mb-3">Stock Status</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stock"
                  value="all"
                  checked={selectedStock === "all"}
                  onChange={() => onStockChange("all")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">All Items</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stock"
                  value="in-stock"
                  checked={selectedStock === "in-stock"}
                  onChange={() => onStockChange("in-stock")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">In Stock</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stock"
                  value="pre-order"
                  checked={selectedStock === "pre-order"}
                  onChange={() => onStockChange("pre-order")}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">Pre-Order</span>
              </label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}