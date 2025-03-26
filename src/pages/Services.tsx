
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, LayoutGrid, Cloud, Cog, BarChart, Database, Server, Smartphone } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const services = [
  {
    id: 'website-development',
    icon: Globe,
    name: 'Website Development',
    shortDesc: 'Custom websites tailored to your brand, optimized for performance and conversions.',
    description: 'Our expert web developers craft responsive, user-friendly websites that engage visitors and drive conversions. From simple brochure sites to complex e-commerce platforms, we create digital experiences that align with your business goals.',
    features: [
      'Responsive design that works on all devices',
      'SEO-friendly structure and coding',
      'Content management system integration',
      'E-commerce functionality and payment processing',
      'Performance optimization for fast loading',
      'Analytics setup for tracking user behavior'
    ]
  },
  {
    id: 'business-applications',
    icon: LayoutGrid,
    name: 'Business Applications',
    shortDesc: 'Streamlined applications that automate workflows and improve business efficiency.',
    description: 'We develop custom business applications that automate processes, streamline operations, and improve productivity. Our solutions are tailored to your specific requirements, helping you save time and reduce costs.',
    features: [
      'Custom workflow automation',
      'Integration with existing systems',
      'Scalable architecture for growth',
      'User-friendly interfaces',
      'Robust security features',
      'Comprehensive documentation and support'
    ]
  },
  {
    id: 'cloud-infrastructure',
    icon: Cloud,
    name: 'Cloud Infrastructure',
    shortDesc: 'Secure, scalable cloud solutions for your growing business needs.',
    description: 'Our cloud infrastructure services help you leverage the full potential of cloud computing. We design, implement, and manage cloud environments that are secure, cost-effective, and aligned with your business objectives.',
    features: [
      'Cloud migration planning and execution',
      'Infrastructure as Code (IaC) implementation',
      'Multi-cloud environment management',
      'Cost optimization strategies',
      'Security and compliance monitoring',
      '24/7 support and management'
    ]
  },
  {
    id: 'devops-services',
    icon: Cog,
    name: 'DevOps Services',
    shortDesc: 'Automated pipelines that enable continuous integration and deployment.',
    description: 'Our DevOps services bridge the gap between development and operations, enabling faster delivery of high-quality software. We implement practices and tools that streamline your development pipeline and improve collaboration.',
    features: [
      'CI/CD pipeline implementation',
      'Infrastructure automation',
      'Containerization with Docker and Kubernetes',
      'Configuration management',
      'Monitoring and alerting setup',
      'Performance optimization'
    ]
  },
  {
    id: 'qa-solutions',
    icon: BarChart,
    name: 'QA Solutions',
    shortDesc: 'Rigorous testing methodologies to ensure high-quality software.',
    description: 'Our quality assurance services ensure that your software meets the highest standards of quality and reliability. We implement comprehensive testing strategies that identify issues early and reduce the cost of fixes.',
    features: [
      'Functional and regression testing',
      'Automated testing frameworks',
      'Performance and load testing',
      'Security vulnerability assessment',
      'Test planning and documentation',
      'Continuous quality monitoring'
    ]
  },
  {
    id: 'data-migrations',
    icon: Database,
    name: 'Data Migrations',
    shortDesc: 'Seamless transfer of your valuable data between platforms and systems.',
    description: 'We specialize in complex data migrations that minimize downtime and ensure data integrity. Our methodical approach handles the challenges of moving data between different systems, formats, and structures.',
    features: [
      'Comprehensive data assessment',
      'Migration planning and strategy',
      'Data cleansing and transformation',
      'Minimal business disruption',
      'Validation and verification processes',
      'Post-migration support'
    ]
  },
  {
    id: 'web-hosting',
    icon: Server,
    name: 'Web Hosting',
    shortDesc: 'Fast, reliable hosting services with dedicated support and security.',
    description: 'Our web hosting solutions provide the foundation for your online presence with reliable performance, robust security, and expert support. We offer options tailored to your specific needs and traffic requirements.',
    features: [
      'Managed hosting services',
      'High-performance server configurations',
      'Regular backups and recovery options',
      'Security monitoring and updates',
      'Scalable resources for traffic spikes',
      '24/7 technical support'
    ]
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    name: 'Mobile App Development',
    shortDesc: 'Native and cross-platform apps that deliver exceptional user experiences.',
    description: 'We create engaging mobile applications for iOS and Android platforms that extend your digital reach. Our development process focuses on user experience, performance, and alignment with your business goals.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design for mobile interfaces',
      'Integration with backend systems',
      'App Store optimization',
      'Ongoing maintenance and updates'
    ]
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services - Nanaware Tech';
  }, []);
  
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Comprehensive IT Solutions
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
                From web development to cloud infrastructure, we offer end-to-end services 
                to help your business thrive in the digital landscape.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-border rounded-xl overflow-hidden hover-card-animation"
                  id={service.id}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                    <p className="text-foreground/70 mb-4">{service.shortDesc}</p>
                    <a 
                      href={`#${service.id}-details`}
                      className="text-primary flex items-center text-sm font-medium hover:underline"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Detailed Service Descriptions */}
        {services.map((service, index) => (
          <section 
            key={service.id}
            id={`${service.id}-details`}
            className={`py-20 ${index % 2 === 0 ? 'bg-secondary' : 'bg-white'}`}
          >
            <Container>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-${index % 2 === 0 ? '1' : '2'} lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
                    {service.name}
                  </span>
                  <h2 className="text-3xl font-bold mb-4 font-display">
                    {service.name}
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact">Request a Quote</Button>
                </div>
                <div className={`order-${index % 2 === 0 ? '2' : '1'} lg:order-${index % 2 === 0 ? '2' : '1'} flex justify-center`}>
                  <div className="w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </motion.div>
            </Container>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/90 to-primary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white font-display">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Contact us today to discuss how our IT solutions can help your business thrive.
              </p>
              <Button 
                href="/contact" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Contact Us
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
