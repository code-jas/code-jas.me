'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import data from '@/data/data.json';
import { About, Home, Projects, Contact, Experience, Technologies } from '@/components/Modules';
import { GridPatterns } from '@/components/UI/Patterns';
import { BlurFade } from '@/components/UI/Misc';

const HomePage: React.FC = () => {
   const controls = useAnimation();

   useEffect(() => {
      const handleHashChange = () => {
         const hash = window.location.hash.substring(1);
         const section = document.getElementById(hash);
         if (section) {
            controls.start({
               y: section.offsetTop,
               transition: { duration: 0.8, ease: 'easeInOut' },
            });
         }
      };

      window.addEventListener('hashchange', handleHashChange);

      return () => {
         window.removeEventListener('hashchange', handleHashChange);
      };
   }, [controls]);

   return (
      <main>
         <BlurFade duration={0.1}>
            <div className="absolute top-0 left-0 h-[1300px] w-full">
               <GridPatterns
                  width={100}
                  height={100}
                  x={-1}
                  y={-1}
                  className={cn(
                     '[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] ',
                  )}
               />
            </div>
         </BlurFade>
         <motion.div animate={controls} initial={{ y: 0 }} className="z-10 font-tt-norms relative">
            <Home home={data.home} />
            <Projects projects={data.projects} />
            <Experience experience={data.experience} />
            <Technologies tech={data.technologies} />
            <About about={data.about} />
            <Contact contact={data.contact} />
         </motion.div>
      </main>
   );
};

export default HomePage;
