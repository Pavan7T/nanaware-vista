
import React from 'react';
import Container from '../../components/ui/Container';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Array<{
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    client: string;
    deliverables: string[];
    results: string;
    url: string;
  }>;
  onOpenProject: (project: ProjectGridProps['projects'][0]) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onOpenProject }) => {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70">No projects found in this category.</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectGrid;
