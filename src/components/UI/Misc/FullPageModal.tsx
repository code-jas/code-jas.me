import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/store/modalSlice';
import { RootState } from '@/store/store';
import { MdClose } from 'react-icons/md';
import LiveSiteButton from '../Buttons/LivesiteButton';
import TechStackList from '../Lists/TechStackList';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { H1, H4, H5, Paragraph } from '../Common/Typography';
import BlurFade from './BlurFade';

const backgroundVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { duration: 0.1 } },
   exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
   hidden: { y: '40vh', opacity: 0 },
   visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
   exit: { y: '40vh', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const headerVariants = {
   hidden: { y: '-20vh', opacity: 0 },
   visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2, ease: 'easeInOut' } },
   exit: { y: '-20vh', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const FullPageModal: React.FC = () => {
   const dispatch = useDispatch();
   const { isOpen, content } = useSelector((state: RootState) => state.modal);
   const [showModal, setShowModal] = useState(isOpen);

   useEffect(() => {
      if (isOpen) {
         setShowModal(true);
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
      return () => {
         document.body.style.overflow = '';
      };
   }, [isOpen]);

   const handleClose = () => {
      setShowModal(false);
      setTimeout(() => {
         dispatch(closeModal());
      }, 500); // Delay to allow exit animation to play
   };

   if (!showModal && !isOpen) return null;

   if (!content) return null;

   return (
      <AnimatePresence>
         {showModal && (
            <motion.div
               className="fixed inset-0 glass-blur dark:bg-zinc-900 z-50 flex flex-col overflow-auto"
               variants={backgroundVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               <motion.div
                  className="w-full max-w-5xl mx-auto"
                  variants={headerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
               >
                  <BlurFade duration={0.4} inView inViewMargin="50px">
                     <div className="sticky top-0 z-50 flex items-center justify-between rounded-full border border-gray-30 bg-white p-4 my-6">
                        <button
                           type="button"
                           className="group h-10 w-10 flex items-center justify-center font-medium text-base border-[1px] border-gray-30 rounded-3xl"
                           onClick={handleClose}
                        >
                           <MdClose className="h-6 w-6" />
                           <span className="sr-only">Close</span>
                        </button>
                        <LiveSiteButton
                           liveSiteLink={content.liveSiteLink}
                           staticPreview={content.staticPreview ?? false}
                           srcPreview={content.srcPreview ?? ''}
                        />
                     </div>
                  </BlurFade>
               </motion.div>
               <motion.div
                  className="w-full max-w-5xl mx-auto"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
               >
                  <div className="flex justify-center flex-col py-8 px-20">
                     <div className="flex-grow overflow-auto">
                        <H1 duration={0.6}>{content.title}</H1>
                        <Paragraph className="font-normal mt-2">
                           {content &&
                              content.projectType.length > 0 &&
                              content.projectType.join(', ')}
                        </Paragraph>
                        {content &&
                           content.informations.length > 0 &&
                           content.informations.map((info, idx) => (
                              <Paragraph duration={0.6 + idx * 0.1} key={idx} className="mt-4">
                                 {info}
                              </Paragraph>
                           ))}
                     </div>
                     <div>
                        <div className="my-8 text-xl">Tech Stack</div>
                        <TechStackList techStacks={content?.techStacks ?? []} />
                     </div>
                  </div>
               </motion.div>
               <motion.div
                  className="w-full h-full"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
               >
                  <Image
                     src={content?.mockupImage ?? ''}
                     alt="Description of the image"
                     layout="responsive"
                     width={100}
                     height={50}
                     className="w-full h-80"
                  />
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default FullPageModal;
