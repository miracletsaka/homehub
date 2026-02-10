import { Check } from "lucide-react";

const customFeatures = [
  "Choose any design you've seen online",
  "Custom sizing for your space",
  "Premium fabrics & finishes",
  "Professional craftsmanship",
];

export function CustomCtaSection() {
  return (
    <section
      id="custom"
      className="py-20 bg-amber-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-300 mb-4">
              Made to order
            </span>

            <h2 className="text-5xl md:text-5xl font-bold mb-6">
              Have a design in mind?
            </h2>

            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Send us a reference photo, your measurements, and preferred fabric
              colour. We'll custom-build furniture that perfectly matches your
              vision.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {customFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber-300 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-amber-900 font-semibold rounded hover:bg-amber-100 transition-colors"
            >
              Start Custom Order
            </a>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="relative h-96 bg-opacity-20 bg-white rounded-lg overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="grad2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <rect width="400" height="400" fill="url(#grad2)" />
                <path
                  d="M100,200 Q200,100 300,200 T500,200"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="#ffffff"
                  opacity="0.15"
                />
                <rect
                  x="80"
                  y="150"
                  width="240"
                  height="200"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                  opacity="0.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
