
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/ButtonWrapper';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    client: string;
    deliverables: string[];
    results: string;
    url: string;
  };
  index: number;
  onOpenProject: (project: ProjectCardProps['project']) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenProject }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer overflow-hidden rounded-xl bg-white border border-border hover-card-animation"
      onClick={() => onOpenProject(project)}
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
  );
};

export default ProjectCard;
