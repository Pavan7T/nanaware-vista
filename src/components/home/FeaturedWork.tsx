
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80',
    description: 'A complete e-commerce solution with inventory management and analytics dashboard.',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Business Application',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80',
    description: 'A comprehensive solution for healthcare providers to manage patient records and appointments.',
  },
  {
    id: 3,
    title: 'Financial Services Portal',
    category: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80',
    description: 'A secure platform for financial services with real-time data processing capabilities.',
  },
];

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [60, 0, 0, 60]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <Container>
        <motion.div 
          style={{ opacity, y }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Featured Work
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            Explore our recent projects that showcase our expertise in delivering 
            innovative IT solutions across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white border border-border hover-card-animation"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Button variant="primary" size="sm" className="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    View Project
                  </Button>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 py-1 px-3 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <a href="/portfolio" className="text-primary flex items-center text-sm font-medium group-hover:underline">
                  Read case study <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
