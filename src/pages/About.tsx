
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/ButtonWrapper';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us - Nanaware Tech';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared goals.'
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Innovation',
      description: 'Pursuing creative solutions to complex challenges.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Reliability',
      description: 'Delivering consistent results that clients can depend on.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Samantha Lee',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Emily Wilson',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ];

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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                We're a Team of Tech Enthusiasts
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
                Founded in 2012, Nanaware Tech has been at the forefront of digital transformation, 
                helping businesses leverage technology to achieve their goals.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
                  Our Story
                </span>
                <h2 className="text-3xl font-bold mb-4 font-display">
                  From Startup to Industry Leader
                </h2>
                <p className="text-foreground/70 mb-4">
                  What started as a small web development studio has grown into a comprehensive 
                  IT solutions provider serving clients across various industries. Our journey 
                  has been defined by continuous learning, adaptation, and a commitment to excellence.
                </p>
                <p className="text-foreground/70 mb-6">
                  Today, we're proud to be trusted by businesses ranging from ambitious startups 
                  to established enterprises. Our team brings together expertise across the technology 
                  spectrum to deliver solutions that drive real business value.
                </p>
                <Button href="/contact">Get In Touch</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-xl font-bold text-primary">10+</p>
                  <p className="text-sm text-foreground/70">Years of Excellence</p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-secondary">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
                Our Values
              </span>
              <h2 className="text-3xl font-bold mb-4 font-display">
                Principles That Guide Us
              </h2>
              <p className="text-foreground/70 text-lg">
                Our values shape how we work, interact with clients, and approach challenges.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl border border-border hover-card-animation"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
                Our Team
              </span>
              <h2 className="text-3xl font-bold mb-4 font-display">
                Meet the Experts
              </h2>
              <p className="text-foreground/70 text-lg">
                Our talented team brings together diverse expertise to deliver exceptional solutions.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl border border-border overflow-hidden hover-card-animation"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-foreground/70">{member.position}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <Button href="/careers" variant="secondary">
                Join Our Team
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
