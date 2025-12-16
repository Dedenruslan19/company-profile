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
                Contact Us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Build
              <br />
              <span className="text-gradient">Your Dream Home?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our consultants are ready to help you find the perfect home for your family. 
              Free consultation, no commitment.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
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
                  <p className="text-muted-foreground text-sm">Address</p>
                  <p className="font-medium">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            <Button variant="gold" size="xl">
              Schedule Free Visit
            </Button>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-lg">
            <h3 className="font-display text-2xl font-bold mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="+62 812-xxxx-xxxx"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="john@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Property Interest
                </label>
                <select className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                  <option>Select Property</option>
                  {propertiesConfig.map((property) => (
                    <option key={property.id}>{property.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Tell us about your housing needs..."
                />
              </div>
              <Button variant="gold" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
