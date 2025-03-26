
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold">Nanaware<span className="text-primary-red">Tech</span></span>
            </Link>
            <p className="text-white/70 max-w-md">
              Premium IT solutions for modern businesses. We turn your tech challenges into opportunities for growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/auto.matrix__?igsh=YmszNWU1cGRlZmMz"
                target='_blank'
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-red transition-colors"
                aria-label="instagram"
              >
                <Instagram />
              </a>
              <a
                href="http://linkedin.com/in/pavan-nanaware"
                target='_blank'
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-red transition-colors"
                aria-label="linkdin"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Pavan7T"
                target='_blank'
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-red transition-colors"
                aria-label="github"
              >
                <Github />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About', 'Services', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Business Apps', 'Cloud Services', 'DevOps', 'Mobile Apps'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary-red shrink-0 mt-0.5" />
                <span className="text-white/70">Nanaware Tech, Malwadi Rd, near Khandoba Temple, Malawadi, Malavadi, Maharashtra 415508</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary-red" />
                <a href="tel:+917770067324" className="text-white/70 hover:text-white transition-colors">+91 7770067324</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary-red" />
                <a href="mailto:info@nanawaretech.com" className="text-white/70 hover:text-white transition-colors">info@nanawaretech.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Nanaware Tech. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-white/50">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
