import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWhatsapp } from "@/context/whatsappContext";
import { ArrowLeft, Bed, Bath, Maximize, Check, ArrowRight, Home, Shield, Star, X } from "lucide-react";
// Features data for the features section
const features = [
  {
    icon: Home,
    title: "Lokasi Strategis",
    description: "Dekat dengan pusat kota, sekolah, dan fasilitas umum untuk kemudahan hidup Anda."
  },
  {
    icon: Shield,
    title: "Keamanan 24 Jam",
    description: "Lingkungan aman dengan sistem keamanan modern dan petugas berjaga setiap saat."
  },
  {
    icon: Star,
    title: "Fasilitas Premium",
    description: "Dilengkapi fasilitas eksklusif seperti kolam renang, gym, dan taman bermain anak."
  },
];
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { propertiesConfig, PropertyConfig, siteConfig } from "@/config/siteConfig";

const PropertyDetail = () => {
  // Scroll to top when this page is loaded (navigated)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const [isNarrowScreen, setIsNarrowScreen] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 400 : false
  );

  useEffect(() => {
    const onResize = () => setIsNarrowScreen(window.innerWidth < 400);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize);
      }
    };
  }, []);
  // track if viewport is large (>= 1024px) so we only render the sticky preview on large screens
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const onResizeLarge = () => setIsLargeScreen(window.innerWidth >= 1024);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResizeLarge);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResizeLarge);
      }
    };
  }, []);
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

  const [selectedHouseId, setSelectedHouseId] = useState<string>(property.houses?.[0]?.id ?? "");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setVisible } = useWhatsapp();
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselCount, setCarouselCount] = useState(1);
  // titles for each carousel slide (kept in sync with carouselIndex)
  const slideTitles = ["Siteplan", "Kolam Renang", "Jogging Track", "Taman"];
  const [isVeryNarrow, setIsVeryNarrow] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < 331 : false);

  useEffect(() => {
    const onResize = () => setIsVeryNarrow(window.innerWidth < 331);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
      onResize();
    }
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      try {
        const snaps = carouselApi.scrollSnapList ? carouselApi.scrollSnapList() : [];
        setCarouselCount(snaps.length || 1);
        const sel = typeof carouselApi.selectedScrollSnap === 'function' ? carouselApi.selectedScrollSnap() : 0;
        setCarouselIndex(sel ?? 0);
      } catch (e) {
        // ignore
      }
    };
    update();
    carouselApi.on('select', update);
    carouselApi.on('reInit', update);
    return () => {
      carouselApi.off('select', update);
      carouselApi.off('reInit', update);
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[220px] sm:h-[60vh] sm:min-h-[500px] fade-in">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <div className="container mx-auto px-2 sm:px-4">
            <Link
              to="/#properties"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary mb-6 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowLeft size={18} />
              Back to Properties
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
              <div>
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 hide-below-347">
                  {property.subtitle}
                </p>
                <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {property.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-foreground/70 text-sm sm:text-base">
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
                <p className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  {property.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for small screens */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => {
            setIsModalOpen(false);
            setVisible(true);
          }}
        >
          <div className="w-full max-w-lg mx-4" onClick={(e) => e.stopPropagation()}>
              {(() => {
              const selected = property.houses.find((h) => h.id === selectedHouseId) || property.houses[0];
              return (
                // add a solid background so modal content below the image isn't transparent
                <div className="rounded-2xl overflow-hidden bg-background">
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                    </div>
                    <button
                      className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow"
                      onClick={() => {
                        setIsModalOpen(false);
                        setVisible(true);
                      }}
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                    <div className="p-6">
                    <p className="text-sm text-primary font-medium">{selected.type}</p>
                    <h3 className="font-display text-2xl font-bold mt-1 mb-2">{selected.name}</h3>

                    {/* On small-screen modal we intentionally omit the long description to avoid overflowing text */}

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-foreground/70">
                      <div>
                        <p className="text-muted-foreground">LT</p>
                        <p className="font-bold">{selected.land ?? '-'} m²</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">LB</p>
                        <p className="font-bold">{selected.building ?? '-'} m²</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Kamar</p>
                        <p className="font-bold">{selected.bedrooms ?? '-'}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Kamar Mandi</p>
                        <p className="font-bold">{selected.bathrooms ?? '-'}</p>
                      </div>
                    </div>

                    <div className={`flex ${isNarrowScreen ? 'flex-col items-stretch gap-3' : 'items-center justify-between'}`}>
                      <div>
                        <p className="text-sm text-muted-foreground">Harga</p>
                        <p className="font-display text-xl font-bold text-primary">{selected.price}</p>
                      </div>
                      <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className={isNarrowScreen ? 'w-full' : ''}>
                        <Button className={isNarrowScreen ? 'w-full' : ''}>Hubungi via WhatsApp</Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Content */}
  <section className="py-8 sm:py-16 md:py-24 fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="container mx-auto px-6">
          {/* Features */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group flex gap-5 items-start"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* House Types / Pilihan Tipe Rumah - Vertical list left, sticky right preview */}
      <section className="py-8 sm:py-12 fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-8">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center">Pilihan Tipe Rumah</h2>
            <p className="text-muted-foreground mt-2 text-center">Pilih tipe rumah sesuai kebutuhan — klik untuk melihat preview dan hubungi kami lewat WhatsApp.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: vertical list */}
            <div className="space-y-4">
              {property.houses.map((house) => (
                <button
                  key={house.id}
                  onClick={() => {
                    // on small screens show modal, on large screens update sticky preview
                    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                        setSelectedHouseId(house.id);
                        setIsModalOpen(true);
                        setVisible(false);
                      } else {
                        setSelectedHouseId(house.id);
                      }
                  }}
                  className={`w-full text-left rounded-2xl p-4 flex items-center gap-4 border ${selectedHouseId === house.id ? 'border-primary/50 ring-1 ring-primary/10' : 'border-border/50'} hover:shadow-lg transition-shadow duration-200`}
                >
                  <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <img src={house.image} alt={house.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-primary font-medium">{house.type}</p>
                        <h3 className="font-display text-lg font-bold mt-1">{house.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">LT {house.land ?? '-'}</p>
                        <p className="text-sm text-muted-foreground">LB {house.building ?? '-'}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm line-clamp-2">{house.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: sticky preview — only render on large screens and when modal is closed */}
            {isLargeScreen && !isModalOpen && (
              <div className="lg:sticky lg:top-[6rem]">
              {(() => {
                const selected = property.houses.find((h) => h.id === selectedHouseId) || property.houses[0];
                return (
                  <div className="rounded-2xl overflow-hidden">
                    <div className="h-80 overflow-hidden">
                      <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-primary font-medium">{selected.type}</p>
                      <h3 className="font-display text-2xl font-bold mt-1 mb-2">{selected.name}</h3>
                      <p className="text-muted-foreground mb-4">{selected.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-foreground/70">
                        <div>
                          <p className="text-muted-foreground">LT</p>
                          <p className="font-bold">{selected.land ?? '-' } m²</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">LB</p>
                          <p className="font-bold">{selected.building ?? '-'} m²</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Kamar</p>
                          <p className="font-bold">{selected.bedrooms}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Kamar Mandi</p>
                          <p className="font-bold">{selected.bathrooms}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Harga</p>
                          <p className="font-display text-xl font-bold text-primary">{selected.price}</p>
                        </div>
                        <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer">
                          <Button>Hubungi via WhatsApp</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Siteplan card (show current property's siteplan) */}
      <section className="py-8 sm:py-16 bg-muted/30 fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="container mx-auto px-2 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Detail Fasilitas
            </h2>
            <h3 className="font-display text-base sm:text-lg lg:text-xl font-semibold mt-2">
              {slideTitles[carouselIndex] ?? "Siteplan"}
            </h3>
          </div>
            <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden">
              <Carousel setApi={setCarouselApi} className="relative">
                {/* override carousel default gutters so slides use full width */}
                <CarouselContent className="w-full -ml-0">
                  {/* Slide 1: Siteplan */}
                  <CarouselItem className="pl-0">
                    <div className="aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={property.siteplan ?? property.image}
                        alt={`${property.title} siteplan`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>

                  {/* Slide 2: Pool (fallback to siteplan) */}
                  <CarouselItem className="pl-0">
                    <div className="aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={property.siteplan ?? property.image}
                        alt={`${property.title} pool`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>

                  {/* Slide 3: Garden (fallback to siteplan) */}
                  <CarouselItem className="pl-0">
                    <div className="aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={property.siteplan ?? property.image}
                        alt={`${property.title} garden`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>

                  {/* Slide 4: Jogging track (fallback to siteplan) */}
                  <CarouselItem className="pl-0">
                    <div className="aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={property.siteplan ?? property.image}
                        alt={`${property.title} jogging track`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>

                {/* Controls (Previous / index / Next) */}
                <div className="flex items-center justify-center gap-2 mt-4 p-4">
                  <button
                    onClick={() => carouselApi?.scrollPrev && carouselApi.scrollPrev()}
                    className="group inline-flex items-center justify-center bg-white/90 px-4 py-2 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 rounded-md"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary">{isVeryNarrow ? '←' : '← Sebelumnya'}</span>
                  </button>

                  <span className="h-8 w-8 rounded-md text-sm font-medium text-gray-700 flex items-center justify-center">
                    {carouselIndex + 1} / {carouselCount}
                  </span>

                  <button
                    onClick={() => carouselApi?.scrollNext && carouselApi.scrollNext()}
                    className="group inline-flex items-center justify-center bg-white/90 px-4 py-2 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 rounded-md"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary">{isVeryNarrow ? '→' : 'Selanjutnya →'}</span>
                  </button>
                </div>
              </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
