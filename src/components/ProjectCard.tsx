'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import TechStacks from './TechStacks';
import LiveSiteButton from './LivesiteButton';
import { useDispatch } from 'react-redux';
import { openModal, setModalContent } from '@/store/modalSlice';
import { Project } from '@/types/types';

const Card: React.FC<Project> = ({
   title,
   projectType,
   description,
   informations,
   techStacks,
   liveSiteLink,
   bgImage,
   coverImage,
   mockupImage,
}) => {
   const dispatch = useDispatch();
   const coverImageControls = useAnimation();

   const handleClick = () => {
      dispatch(
         setModalContent({
            title,
            projectType,
            description,
            informations,
            techStacks,
            liveSiteLink,
            bgImage,
            coverImage,
            mockupImage,
         }),
      );
      dispatch(openModal());
   };

   const handleMouseEnter = () => {
      coverImageControls.start({ width: '100%', height: '100%' });
   };

   const handleMouseLeave = () => {
      coverImageControls.start({ width: '80%', height: '256px' });
   };

   return (
      <div className="flex items-center justify-center">
         <motion.div
            className="flex justify-start items-start max-w-full md:max-w-xl lg:max-w-lg 2xl:max-w-xl rounded-2xl shadow-lg p-4 lg:p-6 transition duration-700 overflow-hidden"
            whileHover={{
               boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)',
            }}
            transition={{ duration: 0.1 }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                     animate={coverImageControls}
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
