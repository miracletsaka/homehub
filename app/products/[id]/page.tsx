"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Heart, Share2, ShoppingCart, Ruler, Clock, Truck, Star } from "lucide-react";
import { getAllProducts, formatPrice, type Product } from "@/lib/database";
import { CustomCtaSection } from "@/components/sections/custom-cta";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const allProductsData = getAllProducts();
  
  // Find product by ID (handle both string and number IDs)
  const product = allProductsData.find(
    (p) => String(p.id) === productId || p.id === productId
  );

  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-amber-900 mb-4">Product Not Found</h1>
            <p className="text-slate-600 mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/#catalogue"
              className="inline-block px-8 py-3 bg-amber-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors"
            >
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate discount percentage
  const discount = product.originalPrice && product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Get related products from the same category
  const relatedProducts = allProductsData
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-amber-900 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>

          {/* Flagship Badge (if featured) */}
          {product.featured && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <Star className="w-4 h-4 fill-white" />
                FLAGSHIP PRODUCT
              </span>
            </div>
          )}

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative h-96 lg:h-[500px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src={selectedImage || product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {discount > 0 && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    -{discount}%
                  </div>
                )}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>
               {product.supportingImages && product.supportingImages.length > 0 && (
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

            {/* Details Section */}
            <div className="space-y-6">
              {/* Title & Category */}
              <div>
                <p className="text-sm text-amber-700 font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              {product.rating && product.reviews && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-xl">
                        {i < Math.floor(product.rating!) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="text-slate-600 font-medium">
                    {product.rating.toFixed(1)} ({product.reviews} reviews)
                  </span>
                </div>
              )}

              {/* Dimensions Section (if available) */}
              {product.dimensions && (
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Ruler className="w-5 h-5 text-amber-700" />
                    <h3 className="text-lg font-bold text-amber-900">
                      Product Dimensions
                    </h3>
                  </div>
                  <p className="text-amber-900 font-semibold">
                    {product.dimensions}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Built to fill the room beautifully — not look small or cheap
                  </p>
                </div>
              )}

              {/* Price */}
              <div className="space-y-2 py-4 border-y border-slate-200">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl lg:text-5xl font-bold text-amber-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-xl text-slate-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.originalPrice && product.originalPrice > product.price && (
                  <p className="text-green-600 font-semibold text-lg">
                    You Save: {formatPrice(product.originalPrice - product.price)} ({discount}% OFF)
                  </p>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full ${
                    product.inStock ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className="text-slate-700 font-medium">
                  {product.inStock ? "In Stock - Ready to Ship" : "Currently Out of Stock"}
                </span>
              </div>

              {/* Featured Product Benefits (if featured) */}
              {product.featured && (
                <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-bold mb-3">Exclusive Benefits</h3>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Custom-built in 10–14 days</div>
                      <div className="text-sm text-amber-100">
                        Made to order in Blantyre with quality craftsmanship
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">FREE delivery around Blantyre</div>
                      <div className="text-sm text-amber-100">
                        White-glove delivery and setup included
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-700">
                    <p className="text-xs text-amber-200">
                      ⚠️ Limited build slots available to maintain quality
                    </p>
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-slate-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-5 py-3 text-slate-600 hover:bg-slate-100 transition-colors font-semibold text-lg"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="px-8 py-3 border-l border-r border-slate-300 font-semibold text-lg min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-5 py-3 text-slate-600 hover:bg-slate-100 transition-colors font-semibold text-lg"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-slate-600">
                    Total: <span className="font-bold text-amber-900">{formatPrice(product.price * quantity)}</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Link href={`${product.id}#contact`}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-lg transition-all ${
                    product.inStock
                      ? "bg-amber-900 text-white hover:bg-amber-800 shadow-lg hover:shadow-xl"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart size={20} />
                  {product.inStock ? "Contact us to buy" : "Out of Stock"}
                </Link>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`px-5 py-4 rounded-lg border-2 transition-all ${
                    liked
                      ? "border-red-500 bg-red-50"
                      : "border-slate-300 hover:border-amber-900 hover:bg-amber-50"
                  }`}
                  aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    size={20}
                    className={liked ? "fill-red-500 text-red-500" : "text-slate-600"}
                  />
                </button>
                <button
                  className="px-5 py-4 rounded-lg border-2 border-slate-300 hover:border-amber-900 hover:bg-amber-50 transition-all"
                  aria-label="Share product"
                >
                  <Share2 size={20} className="text-slate-600" />
                </button>
              </div>

              {/* WhatsApp CTA for Featured Products */}
              {product.featured && (
                <a
                  href="https://wa.me/265888123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Order via WhatsApp
                </a>
              )}

              {/* Additional Info */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="font-semibold">SKU:</span>
                  <span>{product.id}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="font-semibold">Category:</span>
                  <Link href={`/#catalogue`} className="text-amber-700 hover:underline">
                    {product.category}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Product Highlights Section (if featured) */}
          {product.featured && (
            <div className="mb-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Why Customers Love This Product
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Massive Seating Space
                  </h3>
                  <p className="text-sm text-slate-600">
                    Fits the whole family comfortably
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Modern Design
                  </h3>
                  <p className="text-sm text-slate-600">
                    Looks expensive instantly
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🛋️</div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Premium Comfort
                  </h3>
                  <p className="text-sm text-slate-600">
                    Deep cushions for luxury lounging
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🏡</div>
                  <h3 className="font-semibold text-amber-900 mb-1">
                    Perfect for Open-Plan
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ideal centerpiece for modern homes
                  </p>
                </div>
              </div>
            </div>
          )}
        
          <CustomCtaSection />

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-amber-900">
                  You May Also Like
                </h2>
                <Link
                  href="/#catalogue"
                  className="text-amber-700 hover:text-amber-900 font-semibold flex items-center gap-2"
                >
                  View All
                  <span>→</span>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct) => {
                  const relDiscount = relProduct.originalPrice && relProduct.price
                    ? Math.round(((relProduct.originalPrice - relProduct.price) / relProduct.originalPrice) * 100)
                    : 0;

                  return (
                    <Link
                      key={relProduct.id}
                      href={`/products/${relProduct.id}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
                    >
                      <div className="relative h-56 bg-slate-100 overflow-hidden">
                        <Image
                          src={relProduct.image}
                          alt={relProduct.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {relDiscount > 0 && (
                          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            -{relDiscount}%
                          </div>
                        )}
                        {relProduct.featured && (
                          <div className="absolute top-3 right-3">
                            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                          {relProduct.category}
                        </p>
                        <h3 className="font-bold text-amber-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors">
                          {relProduct.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <p className="text-xl font-bold text-amber-900">
                            {formatPrice(relProduct.price)}
                          </p>
                          {relProduct.originalPrice && relProduct.originalPrice > relProduct.price && (
                            <p className="text-sm text-slate-400 line-through">
                              {formatPrice(relProduct.originalPrice)}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}