import { motion } from 'framer-motion';
import React from 'react';

const Home: React.FC = () => {
   return (
      <section
         id="home"
         className="flex flex-col items-center justify-center py-12 my-24 mx-auto max-w-5xl"
      >
         <div className="text-5xl font-bold leading-tight relative ">
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
      </section>
   );
};

export default Home;
