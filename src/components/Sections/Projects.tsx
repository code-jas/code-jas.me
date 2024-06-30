import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ProjectCard from '../ProjectCard';

const Projects: React.FC = () => {
   const projects = [
      {
         title: 'Ph Festival',
         description:
            'Experience the vibrancy of Filipino culture through its diverse and colorful festivals. Share our similarities, celebrate our differences.',
         techStacks: [
            { label: 'Next.js', icon: '/brand/next-js.svg' },
            { label: 'TypeScript', icon: '/brand/typescript.svg' },
            { label: 'Redux', icon: '/brand/redux.svg' },
            { label: 'CSS', icon: '/brand/css.svg' },
            { label: 'Prisma', icon: '/brand/prisma.svg' },
            { label: 'Vercel', icon: '/brand/vercel.svg' },
         ],
         liveSiteLink: 'https://ph-festival.code-jas.me',
         bgImage: '/gradient-part-bg.png',
         coverImage: '/ph-festival-screenshot.png',
      },
      {
         title: 'Bookly',
         description:
            'A digital marketplace for secondhand books in the Philippines, making affordable literature accessible through an organized online platform.',
         techStacks: [
            { label: 'React', icon: '/brand/react.svg' },
            { label: 'Vite', icon: '/brand/vite.svg' },
            { label: 'Node.js', icon: '/brand/node-js.svg' },
            { label: 'Sequelize', icon: '/brand/sequelize.svg' },
            { label: 'Digital Ocean', icon: '/brand/digital-ocean.svg' },
            { label: 'PostgreSQL', icon: '/brand/postgresql.svg' },
            { label: 'Docker', icon: '/brand/docker.svg' },
         ],

         liveSiteLink: 'https://example.com/live-site-link-2',
         bgImage: '/gradient-part-bg.png',
         coverImage: 'COMINGSOON',
      },
   ];
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
                  {projects.map((project, index) => (
                     <ProjectCard key={index} {...project} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
