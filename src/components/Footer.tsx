import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../assets/NHRWWOLOGO.jpeg";

const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 text-zinc-300 border-t border-zinc-900 pt-20 pb-12 overflow-hidden bg-noise">
      {/* Decorative large backdrop letters */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none text-[20vw] font-display font-black text-white/[0.01] leading-none translate-y-12 translate-x-12">
        NHRWWO
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="NHRWWO Logo" 
                  className="w-12 h-12 object-contain filter brightness-110"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
              </div>
              <div>
                <div className="font-display font-black text-xl text-white tracking-tight leading-none">NHRWWO</div>
                <div className="text-[9px] font-semibold text-zinc-500 uppercase tracking-widest leading-none mt-1">
                  Human Rights & Women Welfare
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans font-light">
              We stand firm in our commitment to protect fundamental human rights, empower women, and advocate for child protection across India.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.facebook.com/share/16VYBTH9d4/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-none bg-zinc-900 text-zinc-400 hover:bg-primary hover:text-white transition-all duration-300 border border-zinc-800 hover:border-primary hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/ssf.in?igsh=NnkxYXEyd2IwMTNj" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-none bg-zinc-900 text-zinc-400 hover:bg-primary hover:text-white transition-all duration-300 border border-zinc-800 hover:border-primary hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6 border-l-2 border-primary pl-3">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">About Us</Link></li>
              <li><Link to="/programs" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Our Programs</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">News & Stories</Link></li>
              <li><Link to="/team" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Our Team</Link></li>
              <li><Link to="/resources" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Resources</Link></li>
              <li><Link to="/emergency" className="text-zinc-400 hover:text-primary hover:pl-2 transition-all duration-350 font-medium">Emergency Help</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6 border-l-2 border-primary pl-3">
              Take Action
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/get-involved" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Volunteer</Link></li>
              <li><Link to="/get-involved" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Donate Now</Link></li>
              <li><Link to="/get-involved" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Partnership</Link></li>
              <li><Link to="/get-involved" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Internships</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-350">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-6 border-l-2 border-primary pl-3">
              Get in Touch
            </h3>
            <div className="space-y-4 text-sm text-zinc-450">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">
                  Basudeo Vihar Apartment, Patna, Bihar 800001
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">
                  +91-79924 81330
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-400 group-hover:text-white transition-colors break-all">
                  sevasamarpitfoundaiton@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-zinc-500 text-center md:text-left">
              © {new Date().getFullYear()} National Human Rights and Women Welfare Organization. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-zinc-500">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
