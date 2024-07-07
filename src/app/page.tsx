'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { About, Home, Projects, Contact } from '@/components/Sections';
import Experience from '@/components/Sections/Experience';
import Technologies from '@/components/Sections/Technologies';
import GridPattern from '@/components/GridPatterns';
import { cn } from '@/lib/utils';

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
      <>
         <div className="absolute top-0 left-0 h-[1300px] w-full">
            <GridPattern
               width={100}
               height={100}
               x={-1}
               y={-1}
               className={cn(
                  '[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] ',
               )}
            />
         </div>
         <motion.div animate={controls} initial={{ y: 0 }} className="z-10 font-tt-norms relative">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Technologies />
            <Contact />
         </motion.div>
      </>
   );
};

export default HomePage;
