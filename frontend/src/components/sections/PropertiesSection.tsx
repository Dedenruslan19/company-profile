import { useEffect, useRef, useState, useCallback } from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import { propertiesConfig } from "@/config/siteConfig";

const BASE_CARD_WIDTH = 320;
const MIN_CARD_WIDTH = 300;
const GAP = 24;
const CONTAINER_PADDING = 2;

export default function PropertiesSection() {
  // Scroll to this section if #properties is in the URL hash on load
  useEffect(() => {
    if (window.location.hash === "#properties") {
      const section = document.getElementById("properties");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);
  const [items, setItems] = useState(propertiesConfig);
  const [visibleCount, setVisibleCount] = useState(4);
  const [cardWidth, setCardWidth] = useState(BASE_CARD_WIDTH);
  const isAnimatingRef = useRef(false);
  const [isVeryNarrow, setIsVeryNarrow] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 331 : false
  );

  const calculateVisibleCount = useCallback(() => {
    const containerWidth = window.innerWidth - (CONTAINER_PADDING * 2);
    let maxCards = 4;
    let calculatedCardWidth = BASE_CARD_WIDTH;

    for (let cards = 4; cards >= 1; cards--) {
      const totalWidth = cards * BASE_CARD_WIDTH + (cards - 1) * GAP;
      if (totalWidth <= containerWidth) {
        maxCards = cards;
        if (cards === 1) {
          calculatedCardWidth = Math.min(MIN_CARD_WIDTH, containerWidth);
        } else {
          calculatedCardWidth = (containerWidth - (cards - 1) * GAP) / cards;
          calculatedCardWidth = Math.max(MIN_CARD_WIDTH, Math.min(BASE_CARD_WIDTH, calculatedCardWidth));
        }
        break;
      }
    }

    setVisibleCount(maxCards);
    setCardWidth(calculatedCardWidth);
  }, []);

  useEffect(() => {
    calculateVisibleCount();
    window.addEventListener('resize', calculateVisibleCount);
    const onSmall = () => setIsVeryNarrow(window.innerWidth < 331);
    window.addEventListener('resize', onSmall);
    // set initial
    onSmall();
    return () => window.removeEventListener('resize', calculateVisibleCount);
  }, [calculateVisibleCount]);
  
  useEffect(() => {
    const onSmall = () => setIsVeryNarrow(window.innerWidth < 331);
    // keep listener in case calculateVisibleCount effect is not present
    window.addEventListener('resize', onSmall);
    return () => window.removeEventListener('resize', onSmall);
  }, []);

  const slide = (dir: 1 | -1) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    setItems((prev) => {
      const copy = [...prev];
      if (dir === 1) {
        const first = copy.shift()!;
        copy.push(first);
      } else {
        const last = copy.pop()!;
        copy.unshift(last);
      }
      return copy;
    });

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 300);
  };

  const containerWidth = visibleCount * cardWidth + (visibleCount - 1) * GAP;

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 10 || isAnimatingRef.current) return;
      slide(delta > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section id="properties" className="overflow-hidden py-2">
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

        {/* CENTERED CAROUSEL */}
        <div className="w-full flex justify-center items-center mb-6">
          <div 
            className="flex items-center justify-center transition-all duration-300 ease-out"
            style={{ 
              width: '100%',
              maxWidth: `calc(100% - ${CONTAINER_PADDING * 2}px)`,
              padding: `${CONTAINER_PADDING}px 0`
            }}
          >
            <div
              className="flex shrink-0"
              style={{
                gap: `${GAP}px`,
                width: `${containerWidth}px`
              }}
            >
              {items.slice(0, visibleCount).map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="shrink-0 flex-shrink-0"
                  style={{ 
                    width: `${cardWidth}px`,
                    flex: `0 0 ${cardWidth}px`,
                    height: '100%'
                  }}
                >
                  {(() => {
                    // find the house with the smallest numeric price
                    const parsePriceNumber = (p?: string) => {
                      if (!p) return Infinity;
                      const digits = p.replace(/[^0-9]/g, "");
                      return digits ? parseInt(digits, 10) : Infinity;
                    };

                    const houses = item.houses || [];
                    let lowestHouse = null as any;
                    if (houses.length > 0) {
                      lowestHouse = houses.reduce((prev, cur) => {
                        return parsePriceNumber(cur.price) < parsePriceNumber(prev.price) ? cur : prev;
                      }, houses[0]);
                    }

                    const cardPrice = lowestHouse?.price ?? item.price ?? undefined;
                    const cardSpecs = {
                      bedrooms: lowestHouse?.bedrooms ?? item.specs?.bedrooms,
                      bathrooms: lowestHouse?.bathrooms ?? item.specs?.bathrooms,
                      area: lowestHouse?.land ?? item.specs?.area,
                    };

                    return (
                      <PropertyCard
                        {...item}
                        price={cardPrice}
                        specs={cardSpecs}
                      />
                    );
                  })()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center">
            
            {/* Previous */}
            <button
                onClick={() => slide(-1)}
                className="
                  group
                  inline-flex items-center justify-center
                  bg-white/90 px-4 py-2
                  shadow-sm hover:shadow-md
                  hover:bg-white
                  transition-all duration-200
                  rounded-md
                "
              >
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary">
                {isVeryNarrow ? '←' : '← Sebelumnya'}
              </span>
            </button>
              
            <button className="h-8 w-8 text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-center rounded-md">
              ...
            </button>

            {/* Next */}
              <button
                onClick={() => slide(1)}
                className="
                  group
                  inline-flex items-center justify-center
                  bg-white/90 px-4 py-2
                  shadow-sm hover:shadow-md
                  hover:bg-white
                  transition-all duration-200
                  rounded-md
                "
              >
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary">
                {isVeryNarrow ? '→' : 'Selanjutnya →'}
              </span>
            </button>
        </div>
      </div>
    </section>
  );
}
