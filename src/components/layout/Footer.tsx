import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    properti: [
      { name: "Grand Manzil", href: "#" },
      { name: "Tre Residence", href: "#" },
      { name: "Other Residences", href: "#" },
      { name: "Semua Properti", href: "#properties" },
    ],
    perusahaan: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Tim Kami", href: "#" },
      { name: "Karir", href: "#" },
      { name: "Berita", href: "#" },
    ],
    bantuan: [
      { name: "FAQ", href: "#" },
      { name: "Kontak", href: "#contact" },
      { name: "Syarat & Ketentuan", href: "#" },
      { name: "Kebijakan Privasi", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold">
                <span className="text-gradient">Manzil</span> Properties
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Mewujudkan hunian impian keluarga Indonesia dengan kualitas premium
              dan pelayanan terbaik sejak 2015.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Properti</h4>
            <ul className="space-y-3">
              {footerLinks.properti.map((link) => (
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
            <h4 className="font-display font-semibold text-lg mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
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
              {footerLinks.bantuan.map((link) => (
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
            © {currentYear} Manzil Properties. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed for modern families 🏠
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
