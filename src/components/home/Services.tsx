
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, LayoutGrid, Cloud, Cog, BarChart, Database, Server, Smartphone } from 'lucide-react';
import Container from '../ui/Container';

const services = [
  {
    icon: Globe,
    name: 'Website Development',
    description: 'Custom websites tailored to your brand, optimized for performance and conversions.',
  },
  {
    icon: LayoutGrid,
    name: 'Business Applications',
    description: 'Streamlined applications that automate workflows and improve business efficiency.',
  },
  {
    icon: Cloud,
    name: 'Cloud Infrastructure',
    description: 'Secure, scalable cloud solutions for your growing business needs.',
  },
  {
    icon: Cog,
    name: 'DevOps Services',
    description: 'Automated pipelines that enable continuous integration and deployment.',
  },
  {
    icon: BarChart,
    name: 'QA Solutions',
    description: 'Rigorous testing methodologies to ensure high-quality software.',
  },
  {
    icon: Database,
    name: 'Data Migrations',
    description: 'Seamless transfer of your valuable data between platforms and systems.',
  },
  {
    icon: Server,
    name: 'Web Hosting',
    description: 'Fast, reliable hosting services with dedicated support and security.',
  },
  {
    icon: Smartphone,
    name: 'Mobile App Development',
    description: 'Native and cross-platform apps that deliver exceptional user experiences.',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-1 px-3 rounded-full bg-egshell text-primary-red text-sm font-medium mb-4 inline-block"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive IT Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/60 text-lg max-w-3xl mx-auto"
          >
            From web development to cloud infrastructure, we offer end-to-end services 
            to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-black/5 hover:border-primary-red/20 shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-red/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-black/60 text-sm mb-4">
                {service.description}
              </p>
              <a 
                href={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary-red flex items-center text-sm font-medium hover:underline"
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="entrata-button">
            View All Services
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
