
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { projects, categories } from '../components/portfolio/PortfolioData';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import ProjectModal from '../components/portfolio/ProjectModal';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';

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

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PortfolioHero />
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <ProjectGrid 
          projects={filteredProjects} 
          onOpenProject={openProjectModal} 
        />
        <ProjectModal 
          project={selectedProject} 
          isOpen={modalOpen} 
          onClose={closeProjectModal} 
        />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
