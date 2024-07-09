import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
   const [hovered, setHovered] = useState(false);

   return (
      <section id="home" className="relative">
         <div className="relative flex flex-col items-center justify-center py-12 my-24 mx-auto max-w-5xl overflow-hidden">
            <div className="text-5xl font-bold leading-tight relative">
               Hey, I&apos;m John Angelo!
               <div className="absolute right-3 top-2 flex items-center justify-center py-11">
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
                        initial={{ pathLength: 0, strokeDasharray: 1, strokeDashoffset: 1 }}
                        animate={{ pathLength: 1, strokeDashoffset: 0 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                     />
                  </motion.svg>
               </div>
            </div>
            <div className="text-5xl font-bold leading-tight text-center max-w-3xl text-dark">
               Explore my digital world and discover my passions!
            </div>
            <div
               className="relative mt-10 avatar-container"
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setTimeout(() => setHovered(false), 500)}
            >
               <Image
                  src="/avatar.png"
                  alt="3D Avatar"
                  width={400}
                  height={550}
                  className="relative z-10 avatar"
               />
               <AnimatePresence>
                  {hovered && (
                     <>
                        <motion.div
                           initial={{ opacity: 0, x: -50 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -50 }}
                           transition={{ duration: 0.5 }}
                           className="absolute top-0 left-[-150px] w-40 p-3 bg-blue-green text-white rounded-lg shadow-lg"
                        >
                           Hi there! I&apos;m a Full Stack Developer.
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, x: 50 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: 50 }}
                           transition={{ duration: 0.5 }}
                           className="absolute top-0 right-[-150px] w-60 p-3 bg-tomato text-white rounded-lg shadow-lg"
                        >
                           Passionate about creating seamless user experiences.
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: 50 }}
                           transition={{ duration: 0.5 }}
                           className="absolute top-64 left-[-250px] w-60 p-3 bg-primary text-white rounded-lg shadow-lg"
                        >
                           Always curious and seeking continuous improvement through learning.
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: 50 }}
                           transition={{ duration: 0.5 }}
                           className="absolute top-56 right-[-262px] w-40 p-3 bg-purple text-white rounded-lg shadow-lg"
                        >
                           Driven by a love for solving problems with digital solutions.
                        </motion.div>
                     </>
                  )}
               </AnimatePresence>
            </div>
            );
         </div>
         <div
            className="z-10 pointer-events-none absolute inset-y-0 bottom-0 w-full bg-gradient-to-t"
            style={{
               background:
                  'linear-gradient(to top, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.7) 20%, transparent 35%)',
            }}
         ></div>
      </section>
   );
};

export default Home;
