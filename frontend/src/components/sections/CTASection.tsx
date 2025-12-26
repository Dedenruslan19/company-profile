import { Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { siteConfig, propertiesConfig } from "@/config/siteConfig";
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import trSiteplan from '@/assets/tre-residence-assets/tre-residence-siteplan.webp';
import tmSiteplan from '@/assets/the-mansa-assets/the-mansa-siteplan.webp';
import gmSiteplan from '@/assets/grand-manzil-assets/grand-manzil-siteplan.webp';
import avSiteplan from '@/assets/the-avalon-assets/the-avalon-siteplan.webp';

const CTASection = () => {
  return (
    <section id="contact" className="py-16 mb-16 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
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
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp className="w-5 h-5 text-primary" />
                </a>
                <div>
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:underline"
                  >
                    WhatsApp
                  </a>
                  <div>
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline text-primary"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
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

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block' }}
            >
              <Button variant="gold" size="xl" asChild>
                <span>Jadwalkan Kunjungan Gratis</span>
              </Button>
            </a>
          </div>
          {/* Right Content: Carousel */}
          <div id="siteplans" className="w-full hidden lg:block">
            <SiteplanCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};


// Carousel for siteplan images
function SiteplanCarousel() {
  const images = [
    { src: trSiteplan, label: 'Tre Residence' },
    { src: tmSiteplan, label: 'The Mansa' },
    { src: gmSiteplan, label: 'Grand Manzil' },
    { src: avSiteplan, label: 'The Avalon' },
  ];
  const [index, setIndex] = React.useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-white">
        <img
          src={images[index].src}
          alt={images[index].label + ' Siteplan'}
          className="object-contain w-full h-full select-none"
          draggable={false}
        />
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={prev}
          className="group inline-flex items-center justify-center bg-white/90 px-4 py-2 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 rounded-md"
        >
          <span className="text-sm font-medium text-gray-700 group-hover:text-primary">← Sebelumnya</span>
        </button>
        <span className="h-8 w-8 rounded-md text-sm font-medium text-gray-700 flex items-center justify-center">
          {index + 1} / {images.length}
        </span>
        <button
          onClick={next}
          className="group inline-flex items-center justify-center bg-white/90 px-4 py-2 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 rounded-md"
        >
          <span className="text-sm font-medium text-gray-700 group-hover:text-primary">Selanjutnya →</span>
        </button>
      </div>
      <div className="mt-2 text-sm font-medium text-center text-primary">
        {images[index].label} Siteplan
      </div>
    </div>
  );
}

export default CTASection;
