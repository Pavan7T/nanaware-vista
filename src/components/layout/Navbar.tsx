
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white shadow-md'
        : 'py-5 bg-transparent'
    }`}>
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">Nanaware<span className="text-primary-red">Tech</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary-red ${
                location.pathname === link.path
                  ? 'text-primary-red'
                  : 'text-black/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/client-portal" className="ml-2 px-4 py-2 text-sm font-medium rounded-md bg-black/5 hover:bg-black/10 transition-colors">
            Client Portal
          </Link>
          <button className="ml-2 px-6 py-2 rounded-full bg-primary-red text-white hover:bg-primary-red/90 transition-colors text-sm font-medium">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md p-2 text-black/80 hover:text-black hover:bg-black/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-3 text-base font-medium rounded-md hover:bg-black/5 ${
                location.pathname === link.path
                  ? 'text-primary-red'
                  : 'text-black/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/client-portal" className="px-4 py-3 text-base font-medium rounded-md hover:bg-black/5">
            Client Portal
          </Link>
          <button className="mt-4 w-full py-3 rounded-full bg-primary-red text-white hover:bg-primary-red/90 transition-colors text-base font-medium">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
