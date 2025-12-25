import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/Logopit_1690716648215.png";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group flex-shrink-0 min-w-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative flex-shrink-0">
                <img 
                  src={logo} 
                  alt="NHRWWO Logo" 
                  className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                />
                <div className="absolute inset-0 bg-secondary rounded-full opacity-20 blur-md group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="hidden sm:block min-w-0">
                <div className="font-bold text-lg sm:text-xl text-foreground truncate">NHRWWO</div>
                <div className="text-xs text-muted-foreground leading-tight truncate">
                  National human rights & women welfare organisations
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Fixed for smaller screens */}
            <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Show on tablet and desktop */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <Button 
                onClick={handleDonateClick}
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-4 py-2 transition-colors whitespace-nowrap"
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
            className="lg:hidden fixed inset-0 top-16 z-50"
          >
            {/* Backdrop overlay */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <div className="absolute top-0 left-0 right-0 bg-background shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto animate-in slide-in-from-top duration-300">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <div className="pt-4 mt-2 border-t border-border">
                    <Button 
                      onClick={handleDonateClick}
                      variant="default" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base transition-colors"
                    >
                      <Heart className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="truncate">Donate Now</span>
                    </Button>
                  </div>

                  {/* Organization Info for Mobile */}
                  <div className="pt-4 mt-2 border-t border-border">
                    <div className="font-bold text-lg text-foreground mb-1 text-center truncate">NHRWWO</div>
                    <div className="text-sm text-muted-foreground text-center px-2 break-words">
                      National human rights & women welfare organisations
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