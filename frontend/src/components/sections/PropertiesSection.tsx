import PropertyCard from "@/components/ui/PropertyCard";
import { propertiesConfig } from "@/config/siteConfig";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-14 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Pilihan Properti
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Properti
            <br />
            <span className="text-gradient">Eksklusif</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Beragam pilihan hunian premium yang dirancang khusus untuk memenuhi kebutuhan dan gaya hidup keluarga modern Indonesia.
          </p>
        </div>

        {/* Properties Grid (desktop/tablet) OR mobile carousel */}
        <div>
          {/* Mobile: embla carousel */}
          <MobileCarousel items={propertiesConfig} />

          {/* Desktop / Tablet: horizontal slider (hidden on small screens) */}
          <div className="hidden sm:block">
            <div className="overflow-x-auto py-4 -mx-4 sm:mx-0">
              <div className="flex gap-6 px-4 sm:px-0 snap-x snap-mandatory">
                {propertiesConfig.map((property) => (
                  <div key={property.id} className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px]">
                    <PropertyCard
                      slug={property.slug}
                      image={property.image}
                      title={property.title}
                      subtitle={property.subtitle}
                      description={property.location}
                      price={property.price}
                      specs={property.specs}
                      featured={property.featured}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type Item = typeof propertiesConfig[number];

function MobileCarousel({ items }: { items: Item[] }) {
  // Simple index-based slider (no embla). Shows one card at a time and responds to prev/next buttons.
  const [index, setIndex] = useState(0);
  const maxIndex = items.length - 1;

  useEffect(() => {
    // ensure index in bounds if items change
    if (index > maxIndex) setIndex(maxIndex);
  }, [items, maxIndex]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const current = items[index];

  return (
    <div className="sm:hidden">
      <div className="relative">
        <div className="overflow-hidden max-h-[60vh] sm:max-h-none">
          <div className="w-full flex justify-center py-6">
            <div className="w-full max-w-[640px] box-border">
              <PropertyCard
                key={current.id}
                slug={current.slug}
                image={current.image}
                title={current.title}
                subtitle={current.subtitle}
                description={current.location}
                price={current.price}
                specs={current.specs}
                featured={current.featured}
                forceAspectVideo
                centerContent
              />
            </div>
          </div>
        </div>

        {/* Controls: simple prev/next that update index */}
        <div className="absolute top-1/2 -translate-y-1/2 left-3">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="p-2 rounded-full bg-background/70 backdrop-blur text-foreground disabled:opacity-30"
            aria-label="Previous"
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-3">
          <button
            onClick={goNext}
            disabled={index === maxIndex}
            className="p-2 rounded-full bg-background/70 backdrop-blur text-foreground disabled:opacity-30"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Small pager indicator */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn("w-2 h-2 rounded-full", i === index ? "bg-primary" : "bg-background/50")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertiesSection;
