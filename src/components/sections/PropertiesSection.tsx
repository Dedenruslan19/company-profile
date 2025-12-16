import PropertyCard from "@/components/ui/PropertyCard";
import grandManzilImg from "@/assets/grand-manzil.jpg";
import treResidenceImg from "@/assets/tre-residence.jpg";
import otherResidenceImg from "@/assets/other-residence.jpg";

const properties = [
  {
    id: 1,
    image: grandManzilImg,
    title: "Grand Manzil",
    subtitle: "Luxury Collection",
    description:
      "Hunian mewah bergaya Mediterranean dengan taman yang luas. Dirancang untuk keluarga yang menginginkan kemewahan dan kenyamanan maksimal.",
    price: "Rp 2.5 M",
    specs: { bedrooms: 5, bathrooms: 4, area: 350 },
    featured: true,
  },
  {
    id: 2,
    image: treResidenceImg,
    title: "Tre Residence",
    subtitle: "Modern Living",
    description:
      "Townhouse modern 3 lantai dengan desain kontemporer. Ideal untuk profesional muda dan keluarga urban.",
    price: "Rp 1.8 M",
    specs: { bedrooms: 4, bathrooms: 3, area: 200 },
    featured: false,
  },
  {
    id: 3,
    image: otherResidenceImg,
    title: "Other Residences",
    subtitle: "Smart Choice",
    description:
      "Pilihan hunian nyaman dengan berbagai tipe dan ukuran. Solusi ideal untuk keluarga muda yang sedang berkembang.",
    price: "Rp 850 Jt",
    specs: { bedrooms: 3, bathrooms: 2, area: 120 },
    featured: false,
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Koleksi Kami
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Pilihan Hunian
            <br />
            <span className="text-gradient">Eksklusif</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tiga pilihan hunian premium yang dirancang khusus untuk memenuhi
            kebutuhan keluarga modern Indonesia.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              subtitle={property.subtitle}
              description={property.description}
              price={property.price}
              specs={property.specs}
              featured={property.id === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
