import { Shield, Leaf, Zap, Home, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Keamanan 24 Jam",
    description:
      "Sistem keamanan modern dengan CCTV, akses kartu, dan petugas profesional.",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description:
      "Dilengkapi panel surya, sistem pengolahan air, dan area hijau yang asri.",
  },
  {
    icon: Zap,
    title: "Siap Smart Home",
    description:
      "Teknologi terintegrasi untuk pengaturan lampu, AC, dan sistem keamanan.",
  },
  {
    icon: Home,
    title: "Desain Premium",
    description:
      "Material berkualitas tinggi dengan finishing rapi di setiap detail.",
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
      "Lingkungan pilihan bagi keluarga profesional dengan gaya hidup modern.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Keunggulan</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Fitur Unggulan</h2>
          <p className="text-muted-foreground">Fitur-fitur yang membuat properti kami menonjol dan nyaman untuk ditinggali.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white/60 p-6 rounded-md shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-md mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-medium mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
