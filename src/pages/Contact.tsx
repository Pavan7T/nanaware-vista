import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/ButtonWrapper';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us - Nanaware Tech';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Get In Touch
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
                We're here to answer your questions and discuss your IT needs.
                Reach out to us today to get started.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Form & Details */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold mb-6 font-display">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold mb-6 font-display">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-foreground/70">
                        123 Tech Park, Innovation Blvd
                        <br />
                        Cityville, State 54321
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-foreground/70">
                        <a href="mailto:info@nanawaretech.com">
                          info@nanawaretech.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-foreground/70">
                        <a href="tel:+15551234567">+1 (555) 123-4567</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-foreground/70">
                        Monday - Friday: 9am - 6pm
                        <br />
                        Saturday: 10am - 4pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <Container>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9374273435346!2d-122.41447838474525!3d37.79916497975338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a5a80a835%3A0x5b259a5b311a7c3!2sMarket%20Street!5e0!3m2!1sen!2sus!4v1625781499984!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
