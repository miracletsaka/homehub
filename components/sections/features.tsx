import { Check, Zap, Gauge, Code2 } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "Production Ready",
    description: "Responsive, tested, and launch-ready websites",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed and user experience",
  },
  {
    icon: Gauge,
    title: "Conversion Focused",
    description: "Designed to turn visitors into leads",
  },
  {
    icon: Code2,
    title: "Clean Codebase",
    description: "Scalable, maintainable, and future-proof",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 items-start animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-9 h-9 bg-gray-400 rounded-full flex items-center justify-center text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-zinc-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
