
import React from 'react';
import Button from '../../components/ui/ButtonWrapper';

interface ProjectModalProps {
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
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="absolute top-4 left-4 py-1 px-3 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm">
            {project.category}
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-foreground/70 mb-6">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Client</h3>
              <p className="text-foreground/70">{project.client}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <p className="text-foreground/70">{project.results}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Deliverables</h3>
            <ul className="list-disc list-inside space-y-1 text-foreground/70">
              {project.deliverables.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <Button href={project.url} variant="default">
            Visit Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
