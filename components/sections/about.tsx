const aboutFeatures = [
  {
    title: "Why HomeHub Exists",
    description:
      "Because Malawi deserves a higher standard. Too much furniture in the market is overpriced for the quality, weakly built, limited in style, and uncomfortable. HomeHub was created to raise the standard.",
  },
  {
    title: "Our Quality Standard",
    description:
      "Every HomeHub piece is built using strong internal framing, high-density foam for long-lasting comfort, premium fabrics & durable finishes, and clean stitching with modern detailing.",
  },
  {
    title: "The Experience",
    description:
      "Choose from our catalogue or send your custom idea. Confirm measurements, fabric, and pricing. We build your furniture and deliver to your home. Simple, professional, and built with pride in Blantyre.",
  },
];

const stats = [
  { number: "10-14", label: "Days Production" },
  { number: "100%", label: "Custom Made" },
  { number: "Premium", label: "Quality Materials" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="md:col-span-2">
            <span className="block text-xs font-bold tracking-widest uppercase text-amber-700 mb-4">
              About HomeHub
            </span>

            <h2 className="text-5xl md:text-5xl font-bold text-amber-900 mb-4">
              Blantyre's Premium Custom Furniture Specialists
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Welcome to HomeHub Malawi — where luxury furniture and stylish
              home décor are made simple, affordable, and built around your
              taste.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="animate-in fade-in slide-in-from-left-8 duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h4 className="text-xl font-bold text-amber-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded p-6 text-center animate-in fade-in slide-in-from-right-8 duration-500 hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-amber-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-widest text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
