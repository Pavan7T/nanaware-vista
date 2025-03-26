
import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/90 to-primary relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 backdrop-blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-white/5 backdrop-blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-display">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can help your business grow, 
            improve efficiency, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-none"
            >
              Schedule a Consultation
            </Button>
            <Button 
              href="/services" 
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
