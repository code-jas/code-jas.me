'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
      <motion.div
         animate={controls}
         initial={{ y: 0 }}
         className="path"
         style={{ position: 'relative' }}
      >
         <section
            id="home"
            className="flex items-center justify-center h-screen p-5 font-bold uppercase text-2xl"
         >
            Home Content
         </section>
         <section
            id="about"
            className="flex items-center justify-center h-screen p-5 font-bold uppercase text-2xl"
         >
            About Content
         </section>
         <section
            id="projects"
            className="flex items-center justify-center h-screen p-5 font-bold uppercase text-2xl"
         >
            Projects Content
         </section>
         <section
            id="technologies"
            className="flex items-center justify-center h-screen p-5 font-bold uppercase text-2xl"
         >
            Technologies Content
         </section>
         <section
            id="contact"
            className="flex items-center justify-center h-screen p-5 font-bold uppercase text-2xl"
         >
            Contact Content
         </section>
      </motion.div>
   );
};

export default HomePage;
