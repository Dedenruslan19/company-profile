import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig, footerConfig } from "@/config/siteConfig";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Youtube, href: siteConfig.social.youtube, label: "Youtube" },
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold">
                <span className="text-gradient">Nando</span> Properties
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building dream homes for Indonesian families with premium quality
              and excellent service since 2015.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Properties</h4>
            <ul className="space-y-3">
              {footerConfig.properties.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
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
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
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
            <h4 className="font-display font-semibold text-lg mb-4">Support</h4>
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
            © 2025 Nando Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
