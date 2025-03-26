
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-egshell relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-2xl md:text-3xl xl:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-primary-red">Business</span> Through Technology
            </h1>
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mb-8">
              We deliver cutting-edge IT solutions that help businesses innovate, 
              optimize operations, and achieve their digital transformation goals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="entrata-button">
                Get Started
              </Button>
              <Button variant="outline" className="rounded-full px-6 py-3 font-medium">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <p className="text-sm text-black/60">Trusted by leading companies:</p>
              <div className="flex space-x-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-20 bg-black/10 rounded" />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-xl mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-primary-red/5 rounded-full" />
            <div className="absolute inset-4 bg-white rounded-full shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-egshell via-grey to-white-smoke" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-1/3 bg-primary-red" />
              <div className="p-6">
                <div className="h-4 w-2/3 bg-bg-grey rounded-full mb-4" />
                <div className="h-4 w-1/2 bg-bg-grey rounded-full mb-4" />
                <div className="h-4 w-3/4 bg-bg-grey rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 72C672 72 768 60 864 54C960 48 1056 48 1152 48C1248 48 1344 48 1392 48L1440 48V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
