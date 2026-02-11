"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

// Furniture categories with subcategories
const furnitureCategories = [
  {
    id: "living-room",
    label: "Living Room",
    items: [
      { name: "Sofas & Couches", href: "#sofas" },
      { name: "Coffee Tables", href: "#coffee-tables" },
      { name: "TV Stands", href: "#tv-stands" },
      { name: "Armchairs", href: "#armchairs" },
      { name: "Bookshelves", href: "#bookshelves" },
    ],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    items: [
      { name: "Beds & Frames", href: "#beds" },
      { name: "Wardrobes", href: "#wardrobes" },
      { name: "Dressers", href: "#dressers" },
      { name: "Nightstands", href: "#nightstands" },
      { name: "Mattresses", href: "#mattresses" },
    ],
  },
  {
    id: "dining",
    label: "Dining Room",
    items: [
      { name: "Dining Tables", href: "#dining-tables" },
      { name: "Dining Chairs", href: "#dining-chairs" },
      { name: "Dining Sets", href: "#dining-sets" },
      { name: "Buffets & Sideboards", href: "#buffets" },
      { name: "Bar Stools", href: "#bar-stools" },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen",
    items: [
      { name: "Kitchen Cabinets", href: "#kitchen-cabinets" },
      { name: "Kitchen Islands", href: "#kitchen-islands" },
      { name: "Pantry Storage", href: "#pantry" },
      { name: "Kitchen Carts", href: "#kitchen-carts" },
      { name: "Bar Units", href: "#bar-units" },
    ],
  },
  {
    id: "storage",
    label: "Storage",
    items: [
      { name: "Consoles", href: "#consoles" },
      { name: "Shelving Units", href: "#shelving" },
      { name: "Storage Cabinets", href: "#storage-cabinets" },
      { name: "Display Units", href: "#display-units" },
      { name: "Shoe Racks", href: "#shoe-racks" },
    ],
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileDropdown = (categoryId: string) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen === categoryId ? null : categoryId);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
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
            {furnitureCategories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
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
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === category.id && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {category.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Additional Links */}
            <a
              href="#flagship"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Flagship
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-900 hover:bg-slate-50 rounded-lg transition-colors"
            >
              About
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              className="p-2.5 rounded-full hover:bg-slate-100 transition-colors hidden sm:flex"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-slate-700" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              {/* Mobile Categories */}
              {furnitureCategories.map((category) => (
                <div key={category.id} className="border-b border-slate-100 last:border-0">
                  <button
                    onClick={() => toggleMobileDropdown(category.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <span>{category.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMobileDropdownOpen === category.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown Items */}
                  {isMobileDropdownOpen === category.id && (
                    <div className="pl-4 pb-2 space-y-1">
                      {category.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-amber-900 hover:bg-amber-50 rounded transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Additional Links */}
              <a
                href="#custom"
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Custom Orders
              </a>
              <a
                href="#about"
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>

              {/* Mobile Search */}
              <div className="sm:hidden pt-2 border-t border-slate-200 mt-2">
                <button
                  className="w-full px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                  Search Products
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}