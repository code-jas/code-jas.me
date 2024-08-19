import React from 'react';
import { ProjectSection } from '@/types/profile';
import { H2, H4 } from '../../UI/Typography/Typography';
import { SectionBlock } from '../../UI/Common';
import { FadeText } from '../../UI/Misc/FadeText';
import { BlurFade } from '../../UI/Misc';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
   projects: ProjectSection;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
   const { header, subheader, projects: projectData } = projects;
   return (
      <SectionBlock id="projects" className="!py-12">
         <div className="max-w-4xl mx-auto">
            <H4 variant="branding" className="mb-1">
               {header}
            </H4>
            <H2>{subheader}</H2>
         </div>
         <div>
            <BlurFade inView duration={0.4}>
               <div className="flex flex-wrap items-center justify-center p-0 sm:p-4 gap-x-24 gap-y-8 mt-10">
                  {projectData.map((project, index) => (
                     <ProjectCard key={index} {...project} />
                  ))}
               </div>
            </BlurFade>
         </div>
      </SectionBlock>
   );
};

export default Projects;
