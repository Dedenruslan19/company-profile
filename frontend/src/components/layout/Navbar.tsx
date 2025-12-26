import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigationConfig } from "@/config/siteConfig";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();
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

  const scrollToHash = (hash: string) => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    const el = document.getElementById(id);
    if (el) {
      const root = getComputedStyle(document.documentElement);
      const headerVar = root.getPropertyValue('--header-height').trim();
      let headerHeight = 0;
      if (headerVar) {
        const parsed = parseInt(headerVar, 10);
        if (!Number.isNaN(parsed)) headerHeight = parsed;
      }
      if (!headerHeight && navRef.current) headerHeight = navRef.current.offsetHeight;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      try {
        window.scrollTo({ top, behavior: 'smooth' });
      } catch (e) {
        window.scrollTo(0, top || 0);
      }
      return true;
    }

    // if element not on page, navigate to home with hash
    try {
      window.location.href = `/#${id}`;
    } catch (e) {
      window.location.hash = `#${id}`;
    }
    return false;
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        // make navbar solid white when scrolled, not on homepage, or when mobile menu is open
        isScrolled || !isHomePage || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-border/50 py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
      aria-label="Site header"
    >
      <div className="container mx-auto px-8 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={(e) => {
            e.preventDefault();
            // always scroll to top and navigate home
            scrollToTop();
            if (!isHomePage) navigate('/');
          }}>
            <span className="font-display text-base xs:text-lg sm:text-2xl font-bold text-foreground">
              <span className="text-gradient">Rumah</span> Pilihan
            </span>
          </Link>

          {/* Desktop Navigation (hidden exactly under 600px when isNarrow) */}
          {!isNarrow && (
            <div className="hidden lg:flex items-center gap-8">
            {navigationConfig.main.map((link) => {
              const isHash = link.href.startsWith("#");

              // unified click handler for nav items
              const handleClick = async (e: any) => {
                e.preventDefault();
                // close mobile menu if open
                setIsMobileMenuOpen(false);

                // Home -> scroll to top and navigate if needed
                if (link.name.toLowerCase() === 'home') {
                  scrollToTop();
                  if (!isHomePage) navigate('/');
                  return;
                }

                // hash links: if on home page, smooth scroll; otherwise navigate to home first then scroll
                if (isHash) {
                  if (isHomePage) {
                    scrollToHash(link.href);
                  } else {
                    // navigate to home with hash in URL then attempt to scroll after a short delay
                    navigate(`/${link.href}`);
                    // small timeout to allow DOM to update
                    setTimeout(() => scrollToHash(link.href), 120);
                  }
                } else {
                  // absolute link - navigate normally
                  navigate(link.href);
                }
              };

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleClick}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </a>
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
              {navigationConfig.main.map((link) => {
                const isHash = link.href.startsWith('#');
                const handleMobileClick = (e: any) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);

                  if (link.name.toLowerCase() === 'home') {
                    scrollToTop();
                    if (!isHomePage) navigate('/');
                    return;
                  }

                  if (isHash) {
                    if (isHomePage) {
                      scrollToHash(link.href);
                    } else {
                      navigate(`/${link.href}`);
                      setTimeout(() => scrollToHash(link.href), 120);
                    }
                  } else {
                    navigate(link.href);
                  }
                };

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
                    onClick={handleMobileClick}
                  >
                    {link.name}
                  </a>
                );
              })}
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
