'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HomeSection } from '@/types/profile';
import { H1 } from '../UI/Typography/Typography';
import { SectionBlock } from '../UI/Common';
import { BlurFade } from '../UI/Misc';
import useScreenSize from '@/hooks/useScreenSize';

interface HomeProps {
   home: HomeSection;
}

const Home: React.FC<HomeProps> = ({ home }) => {
   const { header, subheader, avatar, hoverMessages } = home;
   const screenSize = useScreenSize();
   const isBelowMd = screenSize === 'default' || screenSize === 'sm';

   const [hovered, setHovered] = useState(false);
   const [mounted, setMounted] = useState(false);
   const [dimensions, setDimensions] = useState({ width: 350, height: 275 });

   useEffect(() => {
      setMounted(true);
      setHovered(true);
      // Set the dimensions after the component has mounted
      const screenDimensions: { [key: string]: { width: number; height: number } } = {
         default: { width: 350, height: 275 },
         sm: { width: 350, height: 325 },
         md: { width: 300, height: 400 },
         lg: { width: 350, height: 475 },
         xl: { width: 400, height: 550 },
         '2xl': { width: 450, height: 625 },
      };

      setDimensions(screenDimensions[screenSize] || screenDimensions.default);
   }, [screenSize]);

   const textClass = 'text-white rounded-lg shadow-lg';
   const bubbleMessages = [
      {
         key: 'message1',
         initial: { opacity: 0, x: -50 },
         animate: { opacity: 1, x: 0 },
         exit: { opacity: 0, x: -50 },
         transition: { duration: 0.5 },
         className: `absolute top-0 left-[-150px] w-40 p-3 bg-accent-green ${textClass}`,
         message: hoverMessages[0],
      },
      {
         key: 'message2',
         initial: { opacity: 0, x: 50 },
         animate: { opacity: 1, x: 0 },
         exit: { opacity: 0, x: 50 },
         transition: { duration: 0.5 },
         className: `absolute top-0 right-[-150px] w-60 p-3 bg-accent-red ${textClass}`,
         message: hoverMessages[1],
      },
      {
         key: 'message3',
         initial: { opacity: 0, y: 50 },
         animate: { opacity: 1, y: 0 },
         exit: { opacity: 0, y: 50 },
         transition: { duration: 0.5 },
         className: `absolute top-64 left-[-250px] w-60 p-3 bg-primary ${textClass}`,
         message: hoverMessages[2],
      },
      {
         key: 'message4',
         initial: { opacity: 0, y: 50 },
         animate: { opacity: 1, y: 0 },
         exit: { opacity: 0, y: 50 },
         transition: { duration: 0.5 },
         className: `absolute top-56 sm:right-[-150px] md:right-[-225px] lg:right-[-262px] w-40 p-3 bg-accent-purple ${textClass}`,
         message: hoverMessages[3],
      },
   ];

   // const dimensions: { [key: string]: { width: number; height: number } } = {
   //    default: { width: 350, height: 275 },
   //    sm: { width: 350, height: 325 },
   //    md: { width: 300, height: 400 },
   //    lg: { width: 350, height: 475 },
   //    xl: { width: 400, height: 550 },
   //    '2xl': { width: 450, height: 625 },
   // };

   // const { width, height } = dimensions[screenSize] || dimensions.default;

   return (
      <SectionBlock id="home" variant="plain" className="relative">
         <div className="relative flex flex-col items-center justify-center  py-12 my-24 w-full sm:w-4/5  md:w-full mx-auto max-w-5xl overflow-hidden">
            <div className="relative">
               <H1 duration={0.2} className="text-center">
                  {header}
               </H1>
               {mounted && !isBelowMd && (
                  <div className="absolute right-3 top-2 z-10 flex items-center justify-center py-11">
                     <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="22"
                        viewBox="0 0 235 19"
                     >
                        <motion.path
                           d="M 2.482 2.478 L 232.239 2.478 C 222.96 2.478 213.775 3.222 204.615 3.935 C 183.159 5.607 161.793 7.369 140.492 9.546 C 125.177 11.112 109.85 12.662 94.488 14.094 C 93.799 14.158 75.111 15.985 75.259 16.22 C 75.824 17.122 96.352 15.716 98.334 15.669 C 111.787 15.347 125.283 15.397 138.716 14.881"
                           stroke="#0aa5ff"
                           strokeWidth="2.8"
                           strokeLinecap="round"
                           fill="transparent"
                           initial={{ pathLength: 0, strokeDasharray: 0, strokeDashoffset: 0 }}
                           animate={{ pathLength: 1, strokeDashoffset: 0 }}
                           transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.6 }}
                        />
                     </motion.svg>
                  </div>
               )}
            </div>
            <H1 duration={0.3} className="text-center max-w-3xl leading-loose">
               {subheader}
            </H1>
            <div className="relative mt-10 avatar-container">
               <BlurFade delay={0.2} inView>
                  <Image
                     src={avatar}
                     alt="3D Avatar"
                     width={dimensions.width}
                     height={dimensions.height}
                     className="relative z-10 avatar"
                     priority
                  />
               </BlurFade>
               {mounted && (
                  <AnimatePresence>
                     {!isBelowMd &&
                        hovered &&
                        bubbleMessages.map(
                           ({ key, initial, animate, exit, transition, className, message }) => (
                              <motion.div
                                 key={key}
                                 initial={initial}
                                 animate={animate}
                                 exit={exit}
                                 transition={transition}
                                 className={className}
                              >
                                 {message}
                              </motion.div>
                           ),
                        )}
                  </AnimatePresence>
               )}
            </div>
         </div>
         <div
            className="z-10 pointer-events-none absolute inset-y-0 bottom-0 w-full bg-gradient-to-t"
            style={{
               background: `linear-gradient(to top, var(--bg-gradient-start) 10%, var(--bg-gradient-middle) 20%, var(--bg-gradient-end) 35%)`,
            }}
         />
      </SectionBlock>
   );
};

export default Home;
