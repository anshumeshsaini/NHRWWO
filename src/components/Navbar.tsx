import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/NHRWWOLOGO.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDonateClick = () => {
    const upiId = "9905933352@hdfcbank";
    const upiUrl = `upi://pay?pa=${upiId}&pn=NHRWWO&cu=INR`;

    window.location.href = upiUrl;

    setTimeout(() => {
      if (!document.hidden) {
        alert(`UPI ID: ${upiId}\n\nPlease use this UPI ID in your preferred payment app to donate.`);
      }
    }, 500);

    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Blog", path: "/blog" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-2 sm:py-3"
          : "bg-background border-b border-transparent py-4 sm:py-5"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group flex-shrink-0 min-w-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={logo}
                  alt="NHRWWO Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary rounded-full opacity-10 blur-lg group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div className="hidden sm:block min-w-0">
                <div className="font-display font-extrabold text-xl tracking-tight text-foreground leading-none group-hover:text-primary transition-colors">
                  NHRWWO
                </div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest leading-none mt-1 group-hover:text-foreground/80 transition-colors">
                  National human rights & women welfare 
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Asymmetric Underlines */}
            <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors whitespace-nowrap group ${location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className={`absolute bottom-1.5 left-4 right-4 h-[2px] bg-primary transition-transform duration-300 origin-left ${location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <Button
                onClick={handleDonateClick}
                variant="default"
                className="bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider px-5 py-5 rounded-none transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Donate Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors flex-shrink-0"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay - Fixed positioning and sizing */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed inset-0 top-[70px] z-50"
          >
            {/* Backdrop overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile menu panel */}
            <div className="absolute top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-foreground/5 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top duration-500 ease-out">
              <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-none text-lg font-display font-bold tracking-wide uppercase transition-all ${location.pathname === link.path
                        ? "text-primary border-l-4 border-primary pl-6 bg-primary/5"
                        : "text-foreground hover:text-primary hover:pl-6 border-l-4 border-transparent"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Mobile CTA Button */}
                  <div className="pt-6 mt-4 border-t border-foreground/10">
                    <Button
                      onClick={handleDonateClick}
                      variant="default"
                      className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-6 rounded-none text-sm uppercase tracking-widest transition-all"
                    >
                      <Heart className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Donate Now</span>
                    </Button>
                  </div>

                  {/* Organization Info for Mobile */}
                  <div className="pt-6 mt-4 text-center">
                    <div className="font-display font-black text-xl text-foreground tracking-tight">NHRWWO</div>
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-1">
                      National human rights & women welfare
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;