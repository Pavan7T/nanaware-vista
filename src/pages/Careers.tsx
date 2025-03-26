
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/ButtonWrapper';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Job categories
const categories = [
  'All',
  'Engineering',
  'Design',
  'Project Management',
  'Marketing',
  'Sales'
];

// Job listings
const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re looking for a Senior Frontend Developer to join our team and help create exceptional user experiences for our clients.',
    requirements: [
      'Minimum 5 years of experience in frontend development',
      'Strong proficiency in React, TypeScript, and modern JS frameworks',
      'Experience with responsive design and CSS frameworks',
      'Knowledge of performance optimization techniques',
      'Experience with version control systems like Git'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work schedule and remote work options',
      'Professional development budget',
      'Regular team events and activities'
    ]
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our DevOps team to help build and maintain our cloud infrastructure and CI/CD pipelines.',
    requirements: [
      'Minimum 3 years of experience in DevOps or SRE roles',
      'Strong knowledge of AWS or Azure cloud services',
      'Experience with containerization (Docker, Kubernetes)',
      'Proficiency in infrastructure as code tools (Terraform, CloudFormation)',
      'Experience with CI/CD pipelines (Jenkins, GitHub Actions)'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work schedule and remote work options',
      'Professional development budget',
      'Regular team events and activities'
    ]
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re seeking a talented UX/UI Designer to create intuitive and engaging interfaces for our web and mobile applications.',
    requirements: [
      'Minimum 3 years of experience in UX/UI design',
      'Proficiency in design tools like Figma or Adobe XD',
      'Strong portfolio showing your design process and solutions',
      'Experience with user research and usability testing',
      'Knowledge of responsive design principles'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work schedule and remote work options',
      'Professional development budget',
      'Regular team events and activities'
    ]
  },
  {
    id: 4,
    title: 'Project Manager',
    department: 'Project Management',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re looking for an experienced Project Manager to lead our client projects from inception to delivery.',
    requirements: [
      'Minimum 5 years of experience in IT project management',
      'PMP, Scrum Master, or similar certification preferred',
      'Strong communication and client management skills',
      'Experience with Agile development methodologies',
      'Ability to manage multiple projects simultaneously'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work schedule and remote work options',
      'Professional development budget',
      'Regular team events and activities'
    ]
  }
];

const Careers = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers - Nanaware Tech';
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter(job => job.department === activeCategory));
    }
  }, [activeCategory]);

  const openJobModal = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeJobModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
    // Reset application form state when closing modal
    if (applicationSubmitted) {
      setTimeout(() => {
        setApplicationSubmitted(false);
      }, 300);
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setApplicationSubmitted(true);
    }, 1000);
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
                Careers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Join Our Team
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals who are passionate about 
                technology and innovation. Explore our open positions and find your next role.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 font-display">
                Why Work With Us
              </h2>
              <p className="text-foreground/70 text-lg mb-12">
                At Nanaware Tech, we're building a team of passionate individuals who 
                thrive on solving complex challenges and delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovative Work',
                  description: 'Work on cutting-edge projects using the latest technologies and best practices.',
                  icon: '💡'
                },
                {
                  title: 'Growth Opportunities',
                  description: 'Continuous learning, professional development, and clear career progression paths.',
                  icon: '📈'
                },
                {
                  title: 'Work-Life Balance',
                  description: 'Flexible working arrangements and a culture that respects your personal time.',
                  icon: '⚖️'
                },
                {
                  title: 'Inclusive Culture',
                  description: 'A diverse and inclusive workplace where all perspectives are valued.',
                  icon: '🤝'
                },
                {
                  title: 'Competitive Benefits',
                  description: 'Comprehensive benefits including health insurance, retirement plans, and more.',
                  icon: '🏆'
                },
                {
                  title: 'Collaborative Environment',
                  description: 'Work alongside talented colleagues in a supportive and collaborative setting.',
                  icon: '👥'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-border hover-card-animation"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 font-display">
                Open Positions
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                Explore our current openings and find a role that matches your skills and interests.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white hover:bg-primary/10 text-foreground/70'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-border hover-card-animation"
                  onClick={() => openJobModal(job)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-3">
                        {job.department}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-foreground/70 mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                      <p className="text-foreground/70">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button variant="secondary" className="w-full md:w-auto">
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-border">
                  <p className="text-foreground/70 mb-4">No open positions in this category at the moment.</p>
                  <Button 
                    onClick={() => setActiveCategory('All')}
                    variant="secondary"
                  >
                    View All Positions
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Job Modal */}
        {modalOpen && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              {!applicationSubmitted ? (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-2">
                        {selectedJob.department}
                      </span>
                      <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                      <div className="flex flex-wrap gap-3 text-sm text-foreground/70 mt-2">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {selectedJob.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {selectedJob.type}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={closeJobModal}
                      className="text-foreground/50 hover:text-foreground transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>

                  <div className="mb-8">
                    <p className="text-foreground/70 mb-6">{selectedJob.description}</p>
                    
                    <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedJob.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="text-xl font-semibold mb-4">Apply for this Position</h3>
                    <form onSubmit={handleApplicationSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label htmlFor="linkedin" className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                          <input
                            type="url"
                            id="linkedin"
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="https://linkedin.com/in/username"
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="resume" className="block text-sm font-medium mb-2">Resume/CV</label>
                        <input
                          type="file"
                          id="resume"
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                          required
                        />
                        <p className="text-xs text-foreground/50 mt-1">PDF, DOC, or DOCX files only. Max size 5MB.</p>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="cover" className="block text-sm font-medium mb-2">Cover Letter (Optional)</label>
                        <textarea
                          id="cover"
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Tell us why you're interested in this position and what you can bring to the team."
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <Button type="submit" className="flex items-center">
                          Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
                  <p className="text-foreground/70 mb-6">
                    Thank you for applying to the {selectedJob.title} position. We'll review your application and get back to you soon.
                  </p>
                  <Button onClick={closeJobModal} variant="secondary">
                    Close
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-display">
                Don't See a Suitable Position?
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and we'll keep you in mind for future opportunities.
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

export default Careers;
