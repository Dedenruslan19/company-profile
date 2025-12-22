import * as React from "react";
import { ArrowUpRight, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  slug: string;
  image?: string | null;
  title: string;
  subtitle?: string;
  description?: string;
  price?: string;
  location?: string;
  specs?: {
    bedrooms?: number;
    bathrooms?: number;
    area?: number | string;
  };
  featured?: boolean;
  forceAspectVideo?: boolean; // when true, force a shorter (16:9) aspect ratio useful for mobile carousel
  centerContent?: boolean; // center content (vertical + horizontal) instead of bottom-aligned overlay
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  slug,
  image,
  title,
  subtitle,
  description,
  location,
  price,
  specs,
  featured,
  forceAspectVideo = false,
  centerContent = false,
}) => {
  const aspectClass = forceAspectVideo ? "aspect-video" : "aspect-[4/3]";

  return (
    <Link
      to={`/property/${slug}`}
      className={cn(
        "group block bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300",
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className={cn("relative w-full overflow-hidden", aspectClass)}>
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // Placeholder when image is not available (e.g., ongoing construction)
          <div className="w-full h-full bg-muted/30 flex items-center justify-center">
            <span className="font-display text-white/90 text-2xl sm:text-3xl">ONGOING</span>
          </div>
        )}

        {/* Overlay content positioned inside the image to avoid overflow */}
        <div
          className={cn(
            // make overlay content bottom-left aligned even when centerContent is true
            centerContent
              ? "absolute inset-0 px-9 py-4 flex flex-col justify-end items-start"
              : "absolute inset-0 px-4 py-4 flex flex-col justify-end items-start"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            <div className={cn("relative z-10 w-full text-white", centerContent ? "text-left max-w-[92%]" : "text-left")}>
             

              <h3
                className={cn(
                  "font-display font-bold text-white",
                  // bumped sizes ~20% for carousel centerContent
                  centerContent ? "text-xl sm:text-3xl md:text-4xl" : "text-lg md:text-xl"
                )}
              >
                {title}
              </h3>

              {subtitle && (
                <div className="flex items-center text-white/90 text-sm font-medium tracking-widest">
                  <span className="leading-tight">{description}</span>
                </div>
              )}

              {price && (
                <div className="flex items-baseline gap-2 justify-start">
                  <p className="text-white/80 text-xs sm:text-sm">Mulai dari</p>
                  <p className="font-display text-white font-bold text-sm sm:text-xl">{price}</p>
                </div>
              )} 

              <div className={cn("w-full flex items-center justify-between z-10", centerContent ? "flex-col gap-2" : "")}> 
                {!centerContent && specs && (
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    {specs.bedrooms !== undefined && <span>{specs.bedrooms} KT</span>}
                    {specs.bathrooms !== undefined && <span>{specs.bathrooms} KM</span>}
                    {specs.area !== undefined && <span>{specs.area} m²</span>}
                  </div>
                )}

                {/* Visible CTA for carousel (centerContent) */}
              {centerContent ? (
                <div className="w-full flex">
                  <Link to={`/property/${slug}`} className="block">
                  </Link>
                </div>
              ) : (
                <span className="text-white/90 text-sm font-medium">View Details →</span>
              )}
              </div>
            </div>
        </div>
      </div>

      {/* Desktop extra block removed — only image + overlay will be shown (text lives inside the image) */}
    </Link>
  );
};

export default PropertyCard;
