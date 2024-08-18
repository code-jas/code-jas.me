'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import TechStacks from './Lists/TechStacks';
import { useDispatch } from 'react-redux';
import { openModal, setModalContent } from '@/store/modalSlice';
import { Project } from '@/types/profile';
import LiveSiteButton from './Buttons/LivesiteButton';
import { H2, H4, Paragraph } from './Typography/Typography';
import { BlurFade } from './Misc';
import useScreenSize from '@/hooks/useScreenSize';

const Card: React.FC<Project> = ({
   id,
   title,
   projectType,
   description,
   informations,
   techStacks,
   liveSiteLink,
   bgImage,
   coverImage,
   mockupImage,
   staticPreview,
   srcPreview,
}) => {
   const dispatch = useDispatch();
   const coverImageControls = useAnimation();
   const screenSize = useScreenSize();
   const isBelowSm = screenSize === 'default';

   const [initialValues, setInitialValues] = useState({
      width: '80%',
      height: '256px',
   });

   useEffect(() => {
      const newValues = isBelowSm
         ? { width: '100%', height: '128px' }
         : { width: '80%', height: '256px' };
      setInitialValues(newValues);
      coverImageControls.start(newValues); // Sync the animation control with the new state
   }, [isBelowSm, coverImageControls]);

   const handleClick = () => {
      dispatch(
         setModalContent({
            id,
            title,
            projectType,
            description,
            informations,
            techStacks,
            liveSiteLink,
            bgImage,
            coverImage,
            mockupImage,
            staticPreview,
            srcPreview,
         }),
      );
      dispatch(openModal());
   };

   const handleMouseEnter = () => {
      coverImageControls.start({ width: '100%', height: '100%' });
   };

   const handleMouseLeave = () => {
      const newValues = isBelowSm
         ? { width: '100%', height: '100%' }
         : { width: '80%', height: '256px' };
      coverImageControls.start(newValues);
   };

   return (
      <div className="flex items-center justify-center">
         <motion.div
            className="bg-surface-card flex justify-start items-start max-w-full md:max-w-xl lg:max-w-lg 2xl:max-w-xl rounded-2xl shadow-lg p-4 lg:p-6 transition duration-700 overflow-hidden"
            whileHover={{
               boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)',
            }}
            transition={{ duration: 0.1 }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            <div>
               <div className="relative flex items-center justify-center w-50 overflow-hidden h-80 sm:h-[419.2px] mb-10">
                  <div
                     className="relative w-full h-full overflow-hidden rounded-3xl bg-white bg-cover bg-center"
                     style={{
                        backgroundImage: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
                     }}
                  >
                     <div className="relative w-full h-full">
                        <Image
                           src={bgImage}
                           alt="Background Image"
                           fill
                           sizes="100"
                           className="object-cover w-full h-full"
                           priority
                        />
                     </div>
                  </div>
                  <motion.div
                     className="h-full sm:h-64 w-full sm:w-20 z-10 absolute bottom-0 rounded-lg overflow-hidden"
                     initial={initialValues}
                     animate={coverImageControls}
                     transition={{ duration: 0.3 }}
                  >
                     <div className="relative w-full h-full">
                        {coverImage === 'COMINGSOON' ? (
                           <H2 className="text-center flex items-center justify-center w-full h-full bg-gray-100 text-dark-10">
                              Coming Soon
                           </H2>
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
               <H4 className="line-clamp-1 mb-1">{title}</H4>
               <Paragraph className="line-clamp-3">{description}</Paragraph>
               <BlurFade duration={0.6} inView>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-5 md:gap-y-0 mt-7 mb-0 md:mb-3">
                     <TechStacks techStacks={techStacks} />
                     <LiveSiteButton
                        liveSiteLink={liveSiteLink}
                        staticPreview={staticPreview ?? false}
                        srcPreview={srcPreview ?? ''}
                     />
                  </div>
               </BlurFade>
            </div>
         </motion.div>
      </div>
   );
};

export default Card;
