import { Shield, Leaf, Zap, Home, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "24/7 Security",
    description:
      "Modern security with CCTV, card access, and professional guards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Solar panels, water treatment systems, and lush green spaces.",
  },
  {
    icon: Zap,
    title: "Smart Home Ready",
    description:
      "Integrated technology for lighting, AC, and security control.",
  },
  {
    icon: Home,
    title: "Premium Design",
    description:
      "High-quality materials with perfect finishing in every corner.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description:
      "Easy access to city center, international schools, and malls.",
  },
  {
    icon: Users,
    title: "Exclusive Community",
    description:
      "Join a community of young professional families with modern lifestyles.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Why Choose Us
            </span>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Premium
            <span className="text-gradient"> Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are committed to providing the best for your family with premium facilities and exceptional benefits.
          </p>
        </div>

        {/* Features - Elegant Layout */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex gap-5 items-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to experience premium living?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Get in touch with us
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
