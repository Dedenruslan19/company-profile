import { ArrowUpRight, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  specs: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  featured?: boolean;
}

const PropertyCard = ({
  image,
  title,
  subtitle,
  description,
  price,
  specs,
  featured = false,
}: PropertyCardProps) => {
  return (
    <div
      className={`group relative rounded-lg overflow-hidden hover-lift ${
        featured ? "col-span-2 row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        {/* Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-sm">
            <span className="text-primary-foreground text-xs font-medium uppercase tracking-wider">
              Premium
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="space-y-3">
          <div>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-1">
              {subtitle}
            </p>
            <h3 className="font-display text-2xl font-bold text-foreground">
              {title}
            </h3>
          </div>

          <p className="text-foreground/70 text-sm line-clamp-2">{description}</p>

          {/* Specs */}
          <div className="flex items-center gap-4 text-foreground/60 text-sm">
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{specs.bedrooms} Kamar</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} />
              <span>{specs.bathrooms} Toilet</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize size={16} />
              <span>{specs.area} m²</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <div>
              <p className="text-foreground/50 text-xs">Mulai dari</p>
              <p className="font-display text-xl font-bold text-primary">{price}</p>
            </div>
            <Button
              variant="gold-outline"
              size="sm"
              className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            >
              Lihat Detail
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
