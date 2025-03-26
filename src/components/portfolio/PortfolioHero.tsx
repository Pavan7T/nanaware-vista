
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/ui/Container';

const PortfolioHero: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      <Container className="relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Featured Work
          </h1>
          <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses 
            achieve their goals through innovative technology solutions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioHero;
