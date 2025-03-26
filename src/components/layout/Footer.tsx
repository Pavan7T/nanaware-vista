
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-semibold font-display">Nanaware<span className="text-primary">Tech</span></span>
            </Link>
            <p className="text-foreground/80 text-sm">
              Premium IT solutions for modern businesses. We turn your tech challenges into opportunities for growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-foreground/70 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="text-foreground/70 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">Business Applications</Link></li>
              <li><Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">DevOps Services</Link></li>
              <li><Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/70">123 Tech Avenue, Suite 456<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:+14155551234" className="text-foreground/70 hover:text-primary transition-colors">+1 (415) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:info@nanawaretech.com" className="text-foreground/70 hover:text-primary transition-colors">info@nanawaretech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-sm text-foreground/60 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Nanaware Tech. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
