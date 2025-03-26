
import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Apply subtle parallax to gradient
      if (heroRef.current) {
        heroRef.current.style.setProperty('--x', `${x * 100}%`);
        heroRef.current.style.setProperty('--y', `${y * 100}%`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(73, 160, 255, 0.1) 0%, rgba(0, 0, 0, 0) 50%)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10 text-center px-4 md:px-6">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
          Innovative IT Solutions
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display tracking-tight animate-slide-in">
          Transforming Business<br className="hidden sm:block" /> Through <span className="text-gradient">Technology</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
          We deliver cutting-edge IT solutions that help businesses innovate, 
          optimize operations, and achieve their digital transformation goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Button href="/contact" size="lg" className="px-8 rounded-full">
            Get Started
          </Button>
          <Button href="/services" variant="outline" size="lg" className="px-8 rounded-full">
            Explore Services
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Technical Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center glass-card py-6 px-4">
              <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
