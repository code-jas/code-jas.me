'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import TechStacks from './TechStacks';
import LiveSiteButton from './LivesiteButton';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store/modalSlice';

interface CardProps {
   bgImage: string;
   coverImage: string;
   title: string;
   description: string;
   techStacks: { icon: string; label: string }[];
   liveSiteLink: string;
}

const Card: React.FC<CardProps> = ({
   bgImage,
   coverImage,
   title,
   description,
   techStacks,
   liveSiteLink,
}) => {
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(openModal());
   };

   return (
      <div className="flex items-center justify-center">
         <motion.div
            className="flex justify-start items-start max-w-full md:max-w-xl lg:max-w-lg 2xl:max-w-xl rounded-2xl shadow-lg p-4 lg:p-6 transition duration-700 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={handleClick}
         >
            <div>
               <div className="relative flex items-center justify-center w-50 overflow-hidden h-[419.2px] mb-10">
                  <div
                     className="relative w-full h-full overflow-hidden rounded-3xl bg-white bg-cover bg-center"
                     style={{
                        backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
                     }}
                  >
                     <div className="w-full h-full">
                        <Image
                           src={bgImage}
                           alt="Background Image"
                           fill
                           sizes="100"
                           className="object-cover w-full h-full"
                        />
                     </div>
                  </div>
                  <motion.div
                     className="w-[80%] h-64 z-10 absolute bottom-0 rounded-lg overflow-hidden"
                     initial={{ width: '80%', height: '256px' }}
                     whileHover={{ width: '100%', height: '100%' }}
                     transition={{ duration: 0.3 }}
                  >
                     <div className="w-full h-full">
                        {coverImage === 'COMINGSOON' ? (
                           <div className="heading-2 text-center flex items-center justify-center w-full h-full bg-gray-100 text-dark-60">
                              Coming Soon
                           </div>
                        ) : (
                           <Image
                              src={coverImage}
                              alt="Cover Image"
                              fill
                              sizes="100"
                              className="w-full h-full object-cover"
                           />
                        )}
                     </div>
                  </motion.div>
               </div>
               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
               <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3 text-block-75">
                  {description}
               </p>
               <div className="flex items-center justify-between mt-7 mb-3">
                  <TechStacks techStacks={techStacks} />
                  <LiveSiteButton liveSiteLink={liveSiteLink} />
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default Card;
