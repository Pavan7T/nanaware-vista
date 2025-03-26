
import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedWork from '../components/home/FeaturedWork';
import CTASection from '../components/home/CTASection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Nanaware Tech - IT Solutions for Modern Business';
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
