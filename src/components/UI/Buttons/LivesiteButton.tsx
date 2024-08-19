'use client';

import { motion, useAnimation } from 'framer-motion';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { LinkPreview } from '../Misc';

const LiveSiteButton: React.FC<{
   liveSiteLink: string;
   staticPreview?: boolean;
   srcPreview?: string;
   isOrdinary?: boolean;
   text?: string;
   icon?: React.ReactNode;
}> = ({ liveSiteLink, staticPreview, srcPreview, isOrdinary, text = 'Check Live Site', icon }) => {
   const controls = useAnimation();
   const linkControls = useAnimation();

   const handleHoverStart = () => {
      controls.start({ width: '100%' });
      linkControls.start({ scale: 1.4 });
   };

   const handleHoverEnd = () => {
      controls.start({ width: '0%' });
      linkControls.start({ scale: 1 });
   };

   const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation(); // Stop the event from bubbling up to parent elements
      window.open(liveSiteLink, '_blank');
   };

   return (
      <LinkPreview
         url={liveSiteLink}
         target="_blank"
         isStatic={staticPreview}
         imageSrc={srcPreview}
      >
         <motion.div
            className="relative flex justify-center items-center gap-2 rounded-full px-0 md:px-3 p-0 md:py-2 text-dark overflow-hidden"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            whileHover={{ scale: 1.1 }}
            onClick={handleClick}
         >
            <motion.div
               className="absolute inset-0 bg-sky-blue"
               initial={{ width: '0%' }}
               animate={controls}
               transition={{ duration: 0.3, ease: [0.1, 0, 0, 1] }}
            />
            <h1 className="relative z-10 text-lg font-medium md:text-xl">{text}</h1>
            <motion.div animate={linkControls} className="relative z-10">
               {icon || <MdOutlineArrowOutward size={24} />}
            </motion.div>
         </motion.div>
      </LinkPreview>
   );
};

export default LiveSiteButton;
