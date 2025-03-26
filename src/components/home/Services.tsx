
import React from 'react';
import { ArrowRight, Globe, LayoutGrid, Cloud, Cog, BarChart, Database, Server, Smartphone } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

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
    <section className="py-20 bg-secondary">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Comprehensive IT Solutions
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            From web development to cloud infrastructure, we offer end-to-end services 
            to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-border hover-card-animation"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-foreground/70 text-sm mb-4">
                {service.description}
              </p>
              <a 
                href={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary flex items-center text-sm font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary" size="lg">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
