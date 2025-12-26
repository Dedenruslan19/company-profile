// Floating WhatsApp Button (conditionally rendered via context)
const FloatingWhatsapp = () => (
  <a
    href={siteConfig.social.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="fixed z-[100] bottom-5 right-5 md:bottom-8 md:right-8 w-14 h-14 rounded-3xl bg-primary flex items-center justify-center text-white hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-lg"
    style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
  >
    <SiWhatsapp size={32} />
  </a>
);
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { siteConfig, footerConfig } from "@/config/siteConfig";
import { useWhatsapp } from "@/context/whatsappContext";

const Footer = () => {
  const socialLinks = [
    { icon: SiInstagram, href: siteConfig.social.instagram, label: "Instagram", isExternal: true },
    { icon: SiWhatsapp, href: siteConfig.social.whatsapp, label: "WhatsApp", isExternal: true },
  ];

  const { visible } = useWhatsapp();

  return (
    <>
      {visible && <FloatingWhatsapp />}
      <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold">
                <span className="text-gradient">Rumah</span> Properties
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Menghadirkan hunian berkualitas tinggi bagi keluarga Indonesia
              dengan pelayanan profesional sejak 2024.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                  social.isExternal ? (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <social.icon size={18} />
                    </a>
                  ) : (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      <social.icon size={18} />
                    </a>
                  )
                ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Properti</h4>
            <ul className="space-y-3">
              {footerConfig.properties.map((link) => (
                <li key={link.name}>
                  {link.name === "Semua Properti" ? (
                    <a
                      href="#properties"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      onClick={e => {
                        e.preventDefault();
                        if (window.location.pathname === "/" || window.location.pathname === "") {
                          const section = document.getElementById("properties");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          } else {
                            window.location.hash = "#properties";
                          }
                        } else {
                          // If not on home, go to home then set hash after load
                          window.location.href = "/#properties";
                          setTimeout(() => {
                            window.location.hash = "#properties";
                          }, 100);
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  ) : link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      onClick={() => {
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 0);
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Informasi</h4>
            <ul className="space-y-3">
              {footerConfig.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerConfig.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Rumah Pilihan. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
