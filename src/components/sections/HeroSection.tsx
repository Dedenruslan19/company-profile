import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury modern home at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-up">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Premium Properties
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up delay-100">
            Wujudkan
            <br />
            <span className="text-gradient">Rumah Impian</span>
            <br />
            Keluarga Anda
          </h1>

          {/* Description */}
          <p className="text-foreground/70 text-lg md:text-xl max-w-xl mb-10 opacity-0 animate-fade-up delay-200">
            Temukan hunian eksklusif yang dirancang khusus untuk keluarga modern. 
            Investasi terbaik untuk masa depan yang lebih cerah.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
            <Button variant="hero">
              Jelajahi Properti
            </Button>
            <Button variant="hero-outline">
              Konsultasi Gratis
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 opacity-0 animate-fade-up delay-400">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">150+</p>
              <p className="text-foreground/60 text-sm mt-1">Unit Terjual</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">3</p>
              <p className="text-foreground/60 text-sm mt-1">Tipe Hunian</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">98%</p>
              <p className="text-foreground/60 text-sm mt-1">Kepuasan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-up delay-500">
        <a
          href="#properties"
          className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
