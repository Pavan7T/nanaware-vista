
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Clock, Search } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Blog categories
const categories = [
  'All',
  'Web Development',
  'Cloud Computing',
  'DevOps',
  'Mobile Development',
  'Technology Trends'
];

// Blog posts
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing in 2023',
    excerpt: 'Explore the emerging trends in cloud computing and how businesses are leveraging cloud services to scale operations.',
    category: 'Cloud Computing',
    author: 'Alex Johnson',
    date: 'May 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
    content: ''
  },
  {
    id: 2,
    title: 'Building Scalable Web Applications with React',
    excerpt: 'Learn best practices for developing scalable and maintainable web applications using React and modern JavaScript.',
    category: 'Web Development',
    author: 'Samantha Lee',
    date: 'April 28, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
    content: ''
  },
  {
    id: 3,
    title: 'Implementing CI/CD Pipelines for Faster Deployment',
    excerpt: 'Discover how continuous integration and deployment pipelines can streamline your software delivery process.',
    category: 'DevOps',
    author: 'Michael Chen',
    date: 'April 12, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
    content: ''
  },
  {
    id: 4,
    title: 'UX Design Principles for Mobile Applications',
    excerpt: 'Explore key user experience design principles that will help your mobile applications stand out in the crowded marketplace.',
    category: 'Mobile Development',
    author: 'Emily Wilson',
    date: 'March 30, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
    content: ''
  },
  {
    id: 5,
    title: 'The Impact of AI on Software Development',
    excerpt: 'How artificial intelligence is transforming the way we build, test, and deploy software applications.',
    category: 'Technology Trends',
    author: 'Alex Johnson',
    date: 'March 15, 2023',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
    content: ''
  },
  {
    id: 6,
    title: 'Securing Your Web Applications: Best Practices',
    excerpt: 'Learn essential security practices to protect your web applications from common vulnerabilities and threats.',
    category: 'Web Development',
    author: 'Samantha Lee',
    date: 'February 28, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80',
    content: ''
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blog - Nanaware Tech';
  }, []);

  useEffect(() => {
    let filtered = blogPosts;
    
    // Filter by category if it's not 'All'
    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
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
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Insights & Updates
              </h1>
              <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
                Explore the latest articles, industry insights, and company updates from our team.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12 border-b border-border">
          <Container>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="w-full md:w-auto order-2 md:order-1">
                <div className="flex flex-wrap gap-3">
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
              </div>
              <div className="w-full md:w-auto order-1 md:order-2">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-64 px-4 py-2 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/50" />
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white border border-border hover-card-animation"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 py-1 px-3 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-foreground/60 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-foreground/70">{post.author}</span>
                      </div>
                      <span className="text-primary flex items-center text-sm font-medium">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground/70 mb-4">No articles found matching your criteria.</p>
                <Button 
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  variant="secondary"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </Container>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-display">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                Stay updated with our latest articles and industry insights.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
              </form>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
