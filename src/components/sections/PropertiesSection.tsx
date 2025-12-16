import PropertyCard from "@/components/ui/PropertyCard";
import { propertiesConfig } from "@/config/siteConfig";

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Our Collection
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Exclusive
            <br />
            <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Three premium property options designed specifically for modern Indonesian families.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesConfig.map((property) => (
            <PropertyCard
              key={property.id}
              slug={property.slug}
              image={property.image}
              title={property.title}
              subtitle={property.subtitle}
              description={property.description}
              price={property.price}
              specs={property.specs}
              featured={property.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
