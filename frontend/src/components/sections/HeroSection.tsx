import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-home.jpg";
import { statsConfig } from "@/config/siteConfig";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showIndicator, setShowIndicator] = useState(true);

  // JS fallback: ensure hero fills viewport minus header on small screens
  useEffect(() => {
    const updateMinHeight = () => {
      const el = sectionRef.current;
      if (!el) return;

      // try CSS var first
      const root = getComputedStyle(document.documentElement);
      const headerVar = root.getPropertyValue("--header-height").trim();

      // try to find header element if CSS var missing
      let headerHeight = 0;
      if (headerVar) {
        // headerVar like '72px' -> parse
        const parsed = parseInt(headerVar, 10);
        if (!Number.isNaN(parsed)) headerHeight = parsed;
      }

      if (!headerHeight) {
        const nav = document.querySelector('nav[aria-label="Site header"]') as HTMLElement | null;
        if (nav) headerHeight = nav.offsetHeight;
      }

      const smallBreakpoint = 640; // match Tailwind md
      if (window.innerWidth < smallBreakpoint) {
        const h = Math.max(0, window.innerHeight - headerHeight);
        el.style.minHeight = `${h}px`;
      } else {
        el.style.minHeight = "100vh";
      }
    };

    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);

  // Hide/show scroll indicator based on scroll position (inside hero)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = sectionRef.current?.getBoundingClientRect();

        // compute header height (CSS var fallback to nav height)
        const root = getComputedStyle(document.documentElement);
        const headerVar = root.getPropertyValue("--header-height").trim();
        let headerHeight = 0;
        if (headerVar) {
          const parsed = parseInt(headerVar, 10);
          if (!Number.isNaN(parsed)) headerHeight = parsed;
        }
        if (!headerHeight) {
          const nav = document.querySelector('nav[aria-label="Site header"]') as HTMLElement | null;
          if (nav) headerHeight = nav.offsetHeight;
        }

        const buffer = 48; // smaller buffer for earlier hide
        const visible = rect ? rect.bottom > headerHeight + buffer : window.scrollY < 100;
        setShowIndicator(visible);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToProperties = () => {
    const el = document.getElementById("properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // If the properties section isn't on this page (user on another route),
    // navigate to the home anchor which should land them at the section.
    try {
      window.location.href = "/#properties";
    } catch (e) {
      // fallback: set location.pathname and hash
      window.location.hash = "#properties";
    }
  };
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // If the properties section isn't on this page (user on another route),
    // navigate to the home anchor which should land them at the section.
    try {
      window.location.href = "/#properties";
    } catch (e) {
      // fallback: set location.pathname and hash
      window.location.hash = "#properties";
    }
  };
  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-full relative flex items-center justify-center overflow-hidden mb-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury modern home at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
  <div className="relative z-10 container mx-auto px-6 sm:px-6 pt-16 sm:pt-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-up">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Properti Premium
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up delay-100">
            Buat
            <br />
            <span className="text-gradient">Rumah Impian</span>
            <br />
            Bersama Kami
          </h1>

          {/* Description */}
          <p className="text-foreground/70 text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-10 opacity-0 animate-fade-up delay-200">
            Temukan hunian eksklusif yang dirancang untuk keluarga modern. 
            Investasi terbaik untuk masa depan yang lebih cerah.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-up delay-300">
            <Button
              variant="hero"
              className="px-6 py-4 sm:px-8 sm:py-6"
              onClick={scrollToProperties}
            >
              Jelajahi Properti
            </Button>
            <Button
              variant="hero-outline"
              className="px-6 py-4 sm:px-8 sm:py-6"
              onClick={scrollToContact}
            >
              Konsultasi Gratis
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 opacity-0 animate-fade-up delay-400">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                {statsConfig.unitsSold}+
              </p>
              <p className="text-foreground/60 text-sm mt-1">Unit Terjual</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                {statsConfig.propertyTypes}
              </p>
              <p className="text-foreground/60 text-sm mt-1">Jenis Properti</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                {statsConfig.satisfactionRate}%
              </p>
              <p className="text-foreground/60 text-sm mt-1">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <a
          href="#properties"
          className={
            `flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors transition-opacity duration-300 ` +
            (showIndicator
              ? "opacity-100 pointer-events-auto animate-fade-up delay-500"
              : "opacity-0 pointer-events-none")
          }
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
