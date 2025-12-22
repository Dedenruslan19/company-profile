import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, propertiesConfig } from "@/config/siteConfig";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
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
              <span className="text-gradient">Rumah Impian Anda?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tim konsultan kami siap membantu Anda menemukan hunian yang paling sesuai 
              untuk keluarga. Konsultasi gratis tanpa komitmen.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Telepon</p>
                  <p className="font-medium">{siteConfig.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="font-medium">{siteConfig.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Alamat</p>
                  <p className="font-medium">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            <Button variant="gold" size="xl">
              Jadwalkan Kunjungan Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
