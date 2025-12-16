import { ArrowUpRight, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  slug: string;
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
  slug,
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
      className={`group relative rounded-xl overflow-hidden hover-lift bg-card border border-border/50 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full">
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
            <p className="text-primary-foreground/80 text-sm font-medium tracking-wider uppercase mb-1">
              {subtitle}
            </p>
            <h3 className="font-display text-2xl font-bold text-primary-foreground">
              {title}
            </h3>
          </div>

          <p className="text-primary-foreground/70 text-sm line-clamp-2">{description}</p>

          {/* Specs */}
          <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{specs.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} />
              <span>{specs.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize size={16} />
              <span>{specs.area} m²</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-primary-foreground/20">
            <div>
              <p className="text-primary-foreground/50 text-xs">Starting from</p>
              <p className="font-display text-xl font-bold text-primary-foreground">{price}</p>
            </div>
            <Link to={`/property/${slug}`}>
              <Button
                variant="secondary"
                size="sm"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                View Details
                <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
