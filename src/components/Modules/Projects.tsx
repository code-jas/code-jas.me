import React from 'react';
import ProjectCard from '../ProjectCard';
import { ProjectSection } from '@/types/profile';
import { H2, H4 } from '../UI/Common/Typography';

interface ProjectsProps {
   projects: ProjectSection;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
   const { header, subheader, projects: projectData } = projects;
   return (
      <section id="projects" className=" mx-auto px-6 py-36">
         <div className="max-w-4xl mx-auto">
            <H4 variant="branding" className="mb-1">
               {header}
            </H4>
            <H2>{subheader}</H2>
         </div>
         <div className="mt-28">
            <div>
               <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                  {projectData.map((project, index) => (
                     <ProjectCard key={index} {...project} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
