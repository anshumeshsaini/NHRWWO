import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/Logopit_1690716648215.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDonateClick = () => {
    const upiId = "9905933352@hdfcbank";
    // Create UPI payment URL
    const upiUrl = `upi://pay?pa=${upiId}&pn=NHRWWO&cu=INR`;
    
    // Try to open UPI app directly
    window.location.href = upiUrl;
    
    // Fallback: If direct UPI link doesn't work, show alert with UPI ID
    setTimeout(() => {
      if (!document.hidden) {
        alert(`UPI ID: ${upiId}\n\nPlease use this UPI ID in your preferred payment app to donate.`);
      }
    }, 500);
    
    // Close mobile menu if open
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
            <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="NHRWWO Logo" 
                  className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12" // Larger on mobile
                />
                <div className="absolute inset-0 bg-secondary rounded-full opacity-20 blur-md group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg sm:text-xl text-foreground">NHRWWO</div>
                <div className="text-xs text-muted-foreground leading-tight">
                  National human rights & women welfare organisations
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                onClick={handleDonateClick}
                variant="default" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-sm px-4 py-2"
              >
                Donate Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 py-6 h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-4 rounded-lg text-base font-medium transition-all border-l-4 ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/10 border-primary"
                        : "text-foreground hover:text-primary hover:bg-muted border-transparent"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile CTA Button */}
                <div className="pt-4 mt-4 border-t border-border">
                  <Button 
                    onClick={handleDonateClick}
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 text-base"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                </div>

                {/* Organization Info for Mobile */}
                <div className="pt-6 mt-6 border-t border-border text-center">
                  <div className="font-bold text-lg text-foreground mb-1">NHRWWO</div>
                  <div className="text-sm text-muted-foreground">
                    National human rights & women welfare organisations
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