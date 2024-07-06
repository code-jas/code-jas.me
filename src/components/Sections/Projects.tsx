import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ProjectCard from '../ProjectCard';
import projectsData from '../../data/projects.json';

const Projects: React.FC = () => {
   return (
      <section id="projects" className=" mx-auto px-6">
         <div className="max-w-4xl mx-auto">
            <h4 className="callout">A Selection of My Recent Work</h4>
            <h2 className="heading-2">
               Discover my user-focused digital solutions that solve real-world problems and
               streamline processes.
            </h2>
         </div>
         <div className="mt-28">
            <div>
               <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                  {projectsData.projects.map((project, index) => (
                     <ProjectCard key={index} {...project} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
