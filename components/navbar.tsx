"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { getAllCategories, getAllProducts } from "@/lib/database";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Get categories from database
  const categories = getAllCategories();
  const allProducts = getAllProducts();

  // Create category structure with product counts
  const categoryStructure = categories.map((category) => {
    // Count products in this category
    const productCount = allProducts.filter(
      (product) => product.category === category.name
    ).length;

    // Get sample products for this category (for subcategories)
    const categoryProducts = allProducts.filter(
      (product) => product.category === category.name
    );

    // Create subcategories based on actual products
    const subcategories: { name: string; href: string; count: number }[] = [];
    
    // Add "View All" option
    subcategories.push({
      name: `All ${category.name}`,
      href: `/products?category=${category.slug}`,
      count: productCount,
    });

    // Add featured products if any
    const featuredInCategory = categoryProducts.filter((p) => p.featured);
    if (featuredInCategory.length > 0) {
      subcategories.push({
        name: "Featured Items",
        href: `/products?category=${category.slug}&featured=true`,
        count: featuredInCategory.length,
      });
    }

    // Add sale items if any
    const saleInCategory = categoryProducts.filter((p) => p.discount && p.discount > 0);
    if (saleInCategory.length > 0) {
      subcategories.push({
        name: "On Sale",
        href: `/products?category=${category.slug}&sale=true`,
        count: saleInCategory.length,
      });
    }

    return {
      id: category.slug || category.id,
      label: category.name,
      slug: category.slug,
      description: category.description,
      productCount,
      subcategories,
    };
  });

  // Search functionality
  const filteredProducts = searchQuery.trim()
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5) // Limit to 5 results
    : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileDropdown = (categoryId: string) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen === categoryId ? null : categoryId);
  };

  const navigation = (url:string) =>{
    window.location.href = url
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        <div className="flex items-center justify-between py-4 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1 flex-shrink-0">
            <Image
              src="/h-f.png"
              alt="HomeHub Malawi - Premium Furniture Store"
              width={60}
              height={30}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation - Categories */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {categoryStructure.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`/products?category=${category.slug}`}
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-lg ${
                    activeDropdown === category.id
                      ? "text-amber-900 bg-amber-50"
                      : "text-slate-700 hover:text-amber-900 hover:bg-slate-50"
                  }`}
                >
                  {category.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === category.id ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === category.id && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Category Header */}
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 px-4 py-3 border-b border-amber-200">
                      <h3 className="font-bold text-amber-900">{category.label}</h3>
                      <p className="text-xs text-amber-700">{category.description}</p>
                    </div>

                    {/* Subcategories */}
                    <div className="py-2">
                      {category.subcategories.map((item) => (
                        <button
                        onClick={()=>navigation(item.href)}
                          key={item.href}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                        >
                          <span>{item.name}</span>
                          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {item.count}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* View All CTA */}
                    <div className="border-t border-slate-200 p-2">
                      <button
                        onClick={()=>navigation(`/products?category=${category.slug}`)}
                        className="block w-full text-center px-4 py-2 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors text-sm"
                      >
                        Browse All {category.label}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/products"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              All Products
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search */}
            <div className="relative hidden sm:block" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-slate-700" />
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-slate-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-900 focus:outline-none"
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* Search Results */}
                  <div className="max-h-96 overflow-y-auto">
                    {searchQuery.trim() ? (
                      filteredProducts.length > 0 ? (
                        <div>
                          {filteredProducts.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.id}`}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="flex items-center gap-4 p-4 hover:bg-amber-50 transition-colors border-b border-slate-100 last:border-0"
                            >
                              <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-slate-900 truncate">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-slate-500">{product.category}</p>
                                <p className="text-sm font-bold text-amber-900 mt-1">
                                  MWK {product.price.toLocaleString()}
                                </p>
                              </div>
                              {product.featured && (
                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                              )}
                            </Link>
                          ))}
                          <div className="p-3 border-t border-slate-200 bg-slate-50">
                            <Link
                              href={`/products?search=${encodeURIComponent(searchQuery)}`}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
                            >
                              View all results →
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="p-8 text-center text-slate-500">
                          <p>No products found for "{searchQuery}"</p>
                          <Link
                            href="/products"
                            onClick={() => setIsSearchOpen(false)}
                            className="text-amber-700 hover:text-amber-900 text-sm font-medium mt-2 inline-block"
                          >
                            Browse all products →
                          </Link>
                        </div>
                      )
                    ) : (
                      <div className="p-8 text-center text-slate-500">
                        <p className="text-sm">Start typing to search products</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) setSearchQuery("");
              }}

              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col gap-2 pt-4">
              {/* Mobile Search */}
              <div className="px-4 pb-4 border-b border-slate-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border-2 border-slate-300 rounded-lg focus:border-amber-900 focus:outline-none"
                    autoFocus
                  />
                </div>

                {/* Mobile Search Results (same logic as desktop) */}
                {searchQuery.trim() && (
                  <div className="mt-3 bg-white rounded-lg border border-slate-200 overflow-hidden">
                    {filteredProducts.length > 0 ? (
                      <div>
                        {filteredProducts.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-4 p-4 hover:bg-amber-50 transition-colors border-b border-slate-100 last:border-0"
                          >
                            <div className="relative w-14 h-14 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-900 truncate">{product.name}</h4>
                              <p className="text-xs text-slate-500">{product.category}</p>
                              <p className="text-sm font-bold text-amber-900 mt-1">
                                MWK {product.price.toLocaleString()}
                              </p>
                            </div>

                            {product.featured && (
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            )}
                          </Link>
                        ))}

                        <div className="p-3 border-t border-slate-200 bg-slate-50">
                          <Link
                            href={`/products?search=${encodeURIComponent(searchQuery)}`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setSearchQuery("");
                            }}
                            className="text-sm text-amber-700 hover:text-amber-900 font-medium"
                          >
                            View all results →
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 text-center text-slate-500">
                        <p>No products found for "{searchQuery}"</p>
                        <Link
                          href="/products"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setSearchQuery("");
                          }}
                          className="text-amber-700 hover:text-amber-900 text-sm font-medium mt-2 inline-block"
                        >
                          Browse all products →
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {!searchQuery.trim() && (
                  <div className="mt-3 text-center text-slate-500 text-sm">
                    Start typing to search products
                  </div>
                )}
              </div>


              {/* Mobile Categories */}
              {categoryStructure.map((category) => (
                <div key={category.id} className="border-b border-slate-100 last:border-0">
                  <button
                    onClick={() => toggleMobileDropdown(category.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {category.label}
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {category.productCount}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMobileDropdownOpen === category.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown Items */}
                  {isMobileDropdownOpen === category.id && (
                    <div className="pl-4 pb-2 space-y-1 bg-slate-50">
                      {category.subcategories.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:text-amber-900 hover:bg-amber-50 rounded transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <span className="text-xs text-slate-500">{item.count}</span>
                        </Link>
                      ))}
                      <Link
                        href={`/products?category=${category.slug}`}
                        className="block px-4 py-2 mt-2 text-sm font-semibold text-center bg-amber-900 text-white rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Browse All
                      </Link>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Additional Links */}
              <Link
                href="/#flagship"
                className="px-4 py-3 text-sm font-semibold text-amber-700 hover:bg-amber-50 rounded-lg transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star className="w-4 h-4 fill-amber-700" />
                Flagship Product
              </Link>
              <Link
                href="/products"
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                href="/#about"
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}