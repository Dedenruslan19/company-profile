import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { navigationConfig } from "@/config/siteConfig";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // track if viewport is narrower than 600px so we can hide desktop links exactly below that width
  useEffect(() => {
    const mq = window.matchMedia('(max-width:599px)');
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => setIsNarrow(e.matches);
    // set initial
    setIsNarrow(mq.matches);
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onChange as any);
    } else {
      // old browsers
      // @ts-ignore
      mq.addListener(onChange as any);
    }
    return () => {
      if (typeof mq.removeEventListener === 'function') {
        mq.removeEventListener('change', onChange as any);
      } else {
        // @ts-ignore
        mq.removeListener(onChange as any);
      }
    };
  }, []);

  // expose header height as CSS variable so sections can size to viewport minus header
  useEffect(() => {
    const setHeaderHeight = () => {
      if (navRef.current) {
        const h = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${h}px`);
        // debug log to help confirm the value is being set
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.debug('[Navbar] set --header-height ->', `${h}px`);
        }
      }
    };
    // call immediately, then again on next animation frame and after a short timeout
    setHeaderHeight();
    requestAnimationFrame(setHeaderHeight);
    const t = setTimeout(setHeaderHeight, 120);
    window.addEventListener("resize", setHeaderHeight);
    return () => {
      window.removeEventListener("resize", setHeaderHeight);
      clearTimeout(t);
    };
  }, []);

  const scrollToTop = (smooth = true) => {
    try {
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    } catch (e) {
      // fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
      aria-label="Site header"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => scrollToTop()}>
            <span className="font-display text-base xs:text-lg sm:text-2xl font-bold text-foreground">
              <span className="text-gradient">Nando</span> Properties
            </span>
          </Link>

          {/* Desktop Navigation (hidden exactly under 600px when isNarrow) */}
          {!isNarrow && (
            <div className="hidden lg:flex items-center gap-8">
            {navigationConfig.main.map((link) => {
              const isHash = link.href.startsWith("#");
              const to = isHash ? `/${link.href}` : link.href;
              const clickHandler = () => {
                // If the link points to the site root or to a top anchor,
                // scroll to top. Otherwise let navigation handle it.
                if (to === '/' || link.href === '#top' || link.name.toLowerCase() === 'home') {
                  scrollToTop();
                }
              };

              return isHash && isHomePage ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { clickHandler(); }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={to}
                  onClick={() => { clickHandler(); }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              );
            })}
            </div>
          )}

          {/* CTA Button (hide on narrow viewports) */}
          {!isNarrow && (
            <div className="hidden lg:block">
              <Button variant="gold" size="lg">
                {navigationConfig.cta}
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navigationConfig.main.map((link) => (
                link.href.startsWith("#") && isHomePage ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href.startsWith("#") ? `/${link.href}` : link.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Button variant="gold" className="mt-4 w-full">
                {navigationConfig.cta}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
