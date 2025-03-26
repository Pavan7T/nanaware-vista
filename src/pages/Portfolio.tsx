import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/ButtonWrapper';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Project categories
const categories = [
  'All',
  'Web Development',
  'Business Applications',
  'Cloud Infrastructure',
  'Mobile Apps'
];

// Portfolio projects
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A complete e-commerce solution with inventory management and analytics dashboard.',
    client: 'RetailTech Inc.',
    deliverables: ['Responsive website', 'Admin dashboard', 'Payment integration', 'Inventory management'],
    results: 'Increased online sales by 45% in the first three months.',
    url: '#'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Business Applications',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A comprehensive solution for healthcare providers to manage patient records and appointments.',
    client: 'MediCare Group',
    deliverables: ['Patient management system', 'Appointment scheduling', 'Medical records database', 'Reporting tools'],
    results: 'Reduced administrative workload by 60% and improved patient satisfaction.',
    url: '#'
  },
  {
    id: 3,
    title: 'Financial Services Portal',
    category: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A secure platform for financial services with real-time data processing capabilities.',
    client: 'Global Finance Ltd.',
    deliverables: ['Secure cloud infrastructure', 'Real-time data processing', 'Compliance framework', 'Disaster recovery'],
    results: 'Achieved 99.99% uptime and passed all security audits.',
    url: '#'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A mobile application for tracking workouts, nutrition, and fitness progress.',
    client: 'FitLife Solutions',
    deliverables: ['iOS and Android apps', 'Workout tracking', 'Nutrition planning', 'Progress analytics'],
    results: 'Over 100,000 downloads in the first month with 4.8-star average rating.',
    url: '#'
  },
  {
    id: 5,
    title: 'Real Estate Listing Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A comprehensive platform for real estate listings with advanced search capabilities.',
    client: 'Property Connect',
    deliverables: ['Property listing website', 'Advanced search', 'Virtual tours', 'Agent dashboard'],
    results: 'Increased property inquiries by 78% compared to the previous solution.',
    url: '#'
  },
  {
    id: 6,
    title: 'Supply Chain Management System',
    category: 'Business Applications',
    image: 'https://images.unsplash.com/photo-1494961104209-3c223057bd26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'An end-to-end supply chain management solution for manufacturing businesses.',
    client: 'Industrial Innovations Inc.',
    deliverables: ['Inventory tracking', 'Supplier management', 'Order processing', 'Analytics dashboard'],
    results: 'Reduced inventory costs by 32% and improved delivery times by 40%.',
    url: '#'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Portfolio - Nanaware Tech';
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
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

        {/* Portfolio Filter */}
        <section className="py-12 border-b border-border">
          <Container>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary hover:bg-primary/10 text-foreground/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white border border-border hover-card-animation"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <Button variant="default" size="sm" className="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
                    <div className="text-primary flex items-center text-sm font-medium">
                      View case study <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground/70">No projects found in this category.</p>
              </div>
            )}
          </Container>
        </section>

        {/* Project Modal */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="absolute top-4 left-4 py-1 px-3 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                  {selectedProject.category}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-foreground/70 mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Client</h3>
                    <p className="text-foreground/70">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results</h3>
                    <p className="text-foreground/70">{selectedProject.results}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">Deliverables</h3>
                  <ul className="list-disc list-inside space-y-1 text-foreground/70">
                    {selectedProject.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Button href={selectedProject.url} variant="default">
                  Visit Project
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
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
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
