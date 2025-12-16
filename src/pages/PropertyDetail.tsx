import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Maximize, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { propertiesConfig, PropertyConfig } from "@/config/siteConfig";

const PropertyDetail = () => {
  const { slug } = useParams();
  const property = propertiesConfig.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Property Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <Link
              to="/#properties"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Properties
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
                  {property.subtitle}
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-6 text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Bed size={20} />
                    <span>{property.specs.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={20} />
                    <span>{property.specs.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize size={20} />
                    <span>{property.specs.area} m²</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-foreground/60 text-sm">Starting from</p>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {property.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold mb-6">About {property.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {property.longDescription}
              </p>

              {/* Highlights */}
              <h3 className="font-display text-2xl font-bold mb-4">Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {property.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="text-foreground/80">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* House Collection */}
              <h3 className="font-display text-2xl font-bold mb-6">House Collection</h3>
              <div className="space-y-6">
                {property.houses.map((house, index) => (
                  <div
                    key={house.id}
                    className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={house.image}
                          alt={house.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-primary text-sm font-medium uppercase tracking-wider">
                              {house.type}
                            </span>
                          </div>
                          <h4 className="font-display text-2xl font-bold mb-2">
                            {house.name}
                          </h4>
                          <p className="text-muted-foreground mb-4">
                            {house.description}
                          </p>
                          <div className="flex items-center gap-4 text-foreground/60 text-sm">
                            <div className="flex items-center gap-1">
                              <Bed size={16} />
                              <span>{house.bedrooms} Beds</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath size={16} />
                              <span>{house.bathrooms} Baths</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Maximize size={16} />
                              <span>{house.area} m²</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                          <p className="font-display text-xl font-bold text-primary">
                            {house.price}
                          </p>
                          <Button variant="gold-outline" size="sm">
                            Inquire Now
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-2xl border border-border/50 p-6 md:p-8">
                <h3 className="font-display text-xl font-bold mb-6">
                  Interested in {property.title}?
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="+62 xxx-xxxx-xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="I'm interested in..."
                    />
                  </div>
                  <Button variant="gold" className="w-full" size="lg">
                    Send Inquiry
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-border/50 text-center">
                  <p className="text-muted-foreground text-sm mb-2">
                    Prefer to call?
                  </p>
                  <a
                    href="tel:+6281234567890"
                    className="text-primary font-medium hover:underline"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Properties */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">
            Explore Other Properties
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {propertiesConfig
              .filter((p) => p.slug !== slug)
              .map((otherProperty) => (
                <Link
                  key={otherProperty.id}
                  to={`/property/${otherProperty.slug}`}
                  className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={otherProperty.image}
                      alt={otherProperty.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-primary text-sm font-medium uppercase tracking-wider mb-1">
                      {otherProperty.subtitle}
                    </p>
                    <h3 className="font-display text-xl font-bold mb-2">
                      {otherProperty.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {otherProperty.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                      <span className="font-display font-bold text-primary">
                        {otherProperty.price}
                      </span>
                      <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
