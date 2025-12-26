import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { siteConfig } from '@/config/siteConfig';

const faqs = [
  {
    q: 'Bagaimana cara memesan unit?',
    a: 'Anda dapat menghubungi kami melalui WhatsApp atau mengisi formulir di halaman kontak untuk menjadwalkan kunjungan dan mendapatkan penawaran resmi.'
  },
  {
    q: 'Apakah ada pilihan pembayaran bertahap (KPR)?',
    a: 'Ya, kami bekerja sama dengan beberapa bank untuk menyediakan skema KPR dan pembayaran bertahap. Hubungi tim sales kami untuk simulasi cicilan.'
  },
  {
    q: 'Apakah unit sudah termasuk furnitur?',
    a: 'Kebanyakan unit dijual dalam kondisi tanpa furnitur. Informasi lengkap tersedia pada halaman detail properti.'
  },
  {
    q: 'Bagaimana prosedur kunjungan ke lokasi?',
    a: 'Hubungi kami lewat WhatsApp untuk menjadwalkan kunjungan. Tim kami akan mengatur waktu kunjungan dan panduan lokasi.'
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h3 className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Pertanyaan Umum</h3>
          <h2 className="font-display text-3xl md:text-4xl font-bold">FAQ</h2>
          <p className="text-muted-foreground mt-3">Jawaban singkat atas pertanyaan yang sering diajukan calon pembeli.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    {f.a.split(/WhatsApp/).map((part, idx, arr) => (
                      idx < arr.length - 1 ? (
                        <React.Fragment key={idx}>
                          {part}
                          <a
                            href={siteConfig.contact.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            WhatsApp
                          </a>
                        </React.Fragment>
                      ) : (
                        <React.Fragment key={idx}>{part}</React.Fragment>
                      )
                    ))}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
