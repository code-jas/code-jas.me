import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ProjectCard from '../ProjectCard';
import projectsData from '../../data/projects.json';
import { ProjectSection } from '@/types/profile';

interface ProjectsProps {
   projects: ProjectSection;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
   const { header, subheader, projects: projectData } = projects;
   return (
      <section id="projects" className=" mx-auto px-6 py-36">
         <div className="max-w-4xl mx-auto">
            <h4 className="callout">{header}</h4>
            <h2 className="heading-2">{subheader}</h2>
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
