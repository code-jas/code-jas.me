'use client';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

const LiveSiteButton: React.FC<{ liveSiteLink: string }> = ({ liveSiteLink }) => {
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
      <Link href={liveSiteLink} target="_blank">
         <motion.div
            className="relative flex justify-center items-center gap-2 rounded-full px-3 py-2 overflow-hidden "
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            whileHover={{ scale: 1.05 }}
            onClick={handleClick}
         >
            <motion.div
               className="absolute inset-0 bg-sky-blue"
               initial={{ width: '0%' }}
               animate={controls}
               transition={{ duration: 0.3, ease: [0.1, 0, 0, 1] }}
            />
            <p className="relative z-10 font-medium text-[20px] text-purple">Check Live Site</p>
            <motion.div animate={linkControls} className="relative z-10">
               <MdOutlineArrowOutward size={24} />
            </motion.div>
            {/* <motion.div animate={linkControls} className="relative z-10">
               <MdOutlineArrowOutward size={24} />
            </motion.div> */}
         </motion.div>
      </Link>
   );
};

export default LiveSiteButton;
