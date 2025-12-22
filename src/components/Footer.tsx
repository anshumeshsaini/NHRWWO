import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../assets/Logopit_1690716648215.png";
const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup functionality would go here
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">

    <img 
      src={logo} 
      alt="NHRWWO Logo" 
      className="w-10 h-10" // Adjust size here
    />
              <div>
                <div className="font-bold text-lg">NHRWWO</div>
                <div className="text-xs text-muted-foreground">National human rights & women welfare organisations</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
             Dedicated to protecting rights, empowering communities, and creating lasting change.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/16VYBTH9d4/
" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              
              <a href="https://www.instagram.com/ssf.in?igsh=NnkxYXEyd2IwMTNj
" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              
              <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-muted-foreground hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">News & Stories</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/emergency" className="text-muted-foreground hover:text-primary transition-colors">Emergency Help</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
              <li><Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">Partnership</Link></li>
              <li><Link to="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">Internships</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground mb-6">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Basudeo Vihar Apartment, Patna, Bihar 800001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+91-79924 81330</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>sevasamarpitfoundaiton@gmail.com</span>
              </div>
            </div>

            <div>

             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} National Human Rights and Women Welfare Organization. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">

              <span></span>
              <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
