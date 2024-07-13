'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';
import data from '@/data/data.json';
import { About, Home, Projects, Contact, Experience, Technologies } from '@/components/Modules';
import { GridPatterns } from '@/components/UI/Patterns';
import { H1, H2, H3, H4, H5, H6, Paragraph } from '@/components/UI/Common/Typography';

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
         <motion.div animate={controls} initial={{ y: 0 }} className="z-10 font-tt-norms relative">
            <Home home={data.home} />
            <div className="p-6">
               <H1 className="text-blue-500" id="main-title">
                  Custom Heading 1
               </H1>
               <H2 variant="secondary" style={{ fontStyle: 'italic' }}>
                  Custom Heading 2
               </H2>
               <H3 className="underline text-xl">Custom Heading 3</H3>
               <H4>Custom Heading 4</H4>
               <H5 as="h4" className="text-red-500">
                  Custom Heading 5 (as h4)
               </H5>
               <H6 className="text-green-500">Custom Heading 6</H6>
               <Paragraph className="mt-4 text-gray-700">
                  This is a custom paragraph with standard styling.
               </Paragraph>
               <Paragraph
                  textColorClassName="text-purple-500"
                  dangerouslySetInnerHTML={{
                     __html:
                        '<strong>This is a paragraph with custom text color and HTML content.</strong>',
                  }}
               />
            </div>
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
