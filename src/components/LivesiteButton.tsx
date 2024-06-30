'use client';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { openModal } from '@/store/modalSlice';

const LiveSiteButton: React.FC<{ liveSiteLink: string }> = ({ liveSiteLink }) => {
   const dispatch = useDispatch();

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

   return (
      <>
         <motion.div
            className="relative flex justify-center items-center gap-2 rounded-full px-3 py-2 overflow-hidden "
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            whileHover={{ scale: 1.05 }}
         >
            <motion.div
               className="absolute inset-0 bg-sky-blue"
               initial={{ width: '0%' }}
               animate={controls}
               transition={{ duration: 0.3, ease: [0.1, 0, 0, 1] }}
            />
            <p className="relative z-10 font-medium text-[20px] text-purple">Check Live Site</p>
            <Link href={liveSiteLink} target="_blank">
               <motion.div animate={linkControls} className="relative z-10">
                  <MdOutlineArrowOutward size={24} />
               </motion.div>
            </Link>
            {/* <motion.div animate={linkControls} className="relative z-10">
               <MdOutlineArrowOutward size={24} />
            </motion.div> */}
         </motion.div>
      </>
   );
};

export default LiveSiteButton;
