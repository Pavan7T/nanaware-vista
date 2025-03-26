
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us - Nanaware Tech';
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ ...prev, submitted: true, loading: false }));
      toast.success('Message sent successfully! We\'ll get back to you soon.');
    }, 1500);
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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Get in Touch
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
                Have a question or ready to start your next project? 
                Reach out to us and our team will get back to you shortly.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold mb-6 font-display">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:info@nanawaretech.com" className="text-foreground/70 hover:text-primary transition-colors">
                          info@nanawaretech.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full bg-primary/10 p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a href="tel:+14155551234" className="text-foreground/70 hover:text-primary transition-colors">
                          +1 (415) 555-1234
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Office</h3>
                        <p className="text-foreground/70">
                          123 Tech Avenue, Suite 456<br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Support Hours</h3>
                    </div>
                    <p className="text-foreground/70 mb-2">
                      Monday - Friday: 9:00 AM - 6:00 PM (PST)
                    </p>
                    <p className="text-foreground/70">
                      Weekend: Emergency support available
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-xl border border-border p-8">
                  <h2 className="text-2xl font-bold mb-6 font-display">Send us a Message</h2>
                  
                  {formState.submitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <Check className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-foreground/70 mb-6">
                        Thank you for contacting us. We'll get back to you shortly.
                      </p>
                      <Button 
                        onClick={() => setFormState(prev => ({ ...prev, submitted: false, name: '', email: '', phone: '', subject: '', message: '' }))}
                        variant="secondary"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                          <select
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            required
                          >
                            <option value="">Select a Subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="services">Service Information</option>
                            <option value="support">Technical Support</option>
                            <option value="quote">Request a Quote</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto flex items-center justify-center"
                        disabled={formState.loading}
                      >
                        {formState.loading ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            Send Message <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Map Section */}
        <section className="py-10">
          <Container>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0967641681794!2d-122.39907528499852!3d37.78795431922684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c15%3A0xd6c296f71e84b985!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
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
