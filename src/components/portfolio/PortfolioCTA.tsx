
import React from 'react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/ButtonWrapper';

const PortfolioCTA: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-display">
            Ready to Start Your Project?
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Let's discuss how we can help bring your vision to life with our expertise.
          </p>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioCTA;
