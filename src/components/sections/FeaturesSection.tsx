import { Shield, Leaf, Zap, Home, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Keamanan 24/7",
    description:
      "Sistem keamanan modern dengan CCTV, akses kartu, dan petugas keamanan profesional.",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description:
      "Desain eco-friendly dengan panel surya, sistem pengolahan air, dan taman hijau.",
  },
  {
    icon: Zap,
    title: "Smart Home Ready",
    description:
      "Terintegrasi dengan teknologi smart home untuk kontrol pencahayaan, AC, dan keamanan.",
  },
  {
    icon: Home,
    title: "Desain Premium",
    description:
      "Material berkualitas tinggi dengan finishing detail yang sempurna di setiap sudut.",
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description:
      "Akses mudah ke pusat kota, sekolah internasional, dan pusat perbelanjaan.",
  },
  {
    icon: Users,
    title: "Komunitas Eksklusif",
    description:
      "Bergabung dengan komunitas keluarga muda profesional dengan gaya hidup modern.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Mengapa Memilih Kami
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Keunggulan
            <span className="text-gradient"> Manzil</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami berkomitmen memberikan yang terbaik untuk keluarga Anda dengan
            berbagai fasilitas dan keunggulan premium.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-lg border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-secondary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
