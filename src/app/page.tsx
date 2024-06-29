'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { About, Home, Projects, Technologies, Contact } from '@/components/Sections';

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
         <div className="absolute top-0 left-0 bg-grid-pattern -z-10"></div>
         <motion.div animate={controls} initial={{ y: 0 }} className="font-tt-norms relative">
            <Home />
            <About />
            <Projects />
            <Technologies />
            <Contact />
         </motion.div>
      </>
   );
};

export default HomePage;
