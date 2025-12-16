import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Hubungi Kami
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Siap Mewujudkan
              <br />
              <span className="text-gradient">Rumah Impian?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tim konsultan kami siap membantu Anda menemukan hunian yang sempurna
              untuk keluarga. Konsultasi gratis, tanpa komitmen.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Telepon</p>
                  <p className="font-medium">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="font-medium">info@manzilproperties.id</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Alamat</p>
                  <p className="font-medium">Jakarta Selatan, Indonesia</p>
                </div>
              </div>
            </div>

            <Button variant="gold" size="xl">
              Jadwalkan Kunjungan Gratis
            </Button>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50">
            <h3 className="font-display text-2xl font-bold mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nomor HP
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="0812-xxxx-xxxx"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="john@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Properti yang Diminati
                </label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                  <option>Pilih Properti</option>
                  <option>Grand Manzil</option>
                  <option>Tre Residence</option>
                  <option>Other Residences</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Ceritakan kebutuhan hunian Anda..."
                />
              </div>
              <Button variant="gold" className="w-full" size="lg">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
