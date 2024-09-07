import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/store/modalSlice';
import { RootState } from '@/store/store';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { H1, H3, Paragraph } from '@/components/UI/Typography/Typography';
import { BlurFade } from '@/components/UI/Misc';
import LiveSiteButton from '@/components/UI/Buttons/LivesiteButton';
import { TechStackList } from '@/components/UI/Lists';
import { LuGithub } from 'react-icons/lu';

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
               className="fixed inset-0 glass-blur  z-50 flex flex-col overflow-auto"
               variants={backgroundVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               {/* HEADER */}
               <motion.div
                  className="w-[94%] sm:w-4/5 lg:w-full max-w-5xl mx-auto"
                  variants={headerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
               >
                  <BlurFade duration={0.4} inView inViewMargin="50px">
                     <div className="sticky top-0 z-50 flex items-center justify-between rounded-full border border-primary bg-surface-card p-2 lg:p-4 my-6">
                        <motion.button
                           type="button"
                           className="group h-10 w-10 flex items-center justify-center font-medium text-base border-[1px] border-primary rounded-3xl"
                           onClick={handleClose}
                           whileHover={{ scale: 1.1 }} // Adjust the scale value to control the pop effect
                        >
                           <MdClose className="h-6 w-6" />
                           <span className="sr-only">Close</span>
                        </motion.button>
                        <div className="flex">
                           {content.githubLink && (
                              <LiveSiteButton
                                 liveSiteLink={content.githubLink}
                                 isOrdinary
                                 text="View Github"
                                 icon={<LuGithub size={24} />}
                              />
                           )}
                           {content.liveSiteLink && (
                              <LiveSiteButton
                                 liveSiteLink={content.liveSiteLink}
                                 staticPreview={content.staticPreview ?? false}
                                 srcPreview={content.srcPreview ?? ''}
                              />
                           )}
                        </div>
                     </div>
                  </BlurFade>
               </motion.div>
               {/* CONTENT */}
               <motion.div
                  className="w-full max-w-5xl mx-auto"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
               >
                  <div className="flex justify-center flex-col py-8 px-4 sm:px-20">
                     <div className="flex-grow">
                        <H1 duration={0.6}>{content.title}</H1>
                        <Paragraph className="font-normal mt-2">
                           {content?.projectType.length > 0 && content.projectType.join(', ')}
                        </Paragraph>
                        {content.informations &&
                           content.informations.length > 0 &&
                           content.informations.map((info, idx) => (
                              <Paragraph duration={0.6 + idx * 0.1} key={idx} className="mt-4">
                                 {info}
                              </Paragraph>
                           ))}

                        {/* Check if the project is a collection */}
                        {content.isCollection &&
                           content.subprojects &&
                           content.subprojects.length > 0 && (
                              <div className="mt-8">
                                 {content.subprojects.map((subproject, idx) => (
                                    <div key={idx} className="mt-6 mb-20">
                                       <H3 duration={0.6}>{subproject.title}</H3>
                                       <Paragraph className="font-normal mt-2">
                                          {subproject.projectType.length > 0 &&
                                             subproject.projectType.join(', ')}
                                       </Paragraph>
                                       {subproject.informations &&
                                          subproject.informations.length > 0 &&
                                          subproject.informations.map((info, subIdx) => (
                                             <Paragraph
                                                duration={0.6 + subIdx * 0.1}
                                                key={subIdx}
                                                className="mt-4"
                                             >
                                                {info}
                                             </Paragraph>
                                          ))}
                                       {/* Tech Stack for the subproject */}
                                       <div className="mt-4">
                                          <BlurFade duration={0.8} inView>
                                             <div className="my-8 text-xl">Tech Stack</div>
                                             <TechStackList
                                                techStacks={subproject.techStacks ?? []}
                                             />
                                          </BlurFade>
                                       </div>
                                       {/* MOCKUP PREVIEW for the subproject */}
                                       {subproject.mockupImage && (
                                          <motion.div
                                             className="w-full h-auto mt-6"
                                             variants={modalVariants}
                                             initial="hidden"
                                             animate="visible"
                                             exit="exit"
                                          >
                                             <Image
                                                src={subproject.mockupImage}
                                                alt={`${subproject.title} mockup`}
                                                layout="responsive"
                                                width={100}
                                                height={50}
                                                className="w-full h-full rounded-xl"
                                             />
                                          </motion.div>
                                       )}
                                    </div>
                                 ))}
                              </div>
                           )}
                     </div>
                     {!content.isCollection && (
                        <div>
                           <BlurFade duration={0.8} inView>
                              <div className="my-8 text-xl">Tech Stack</div>
                              <TechStackList techStacks={content?.techStacks ?? []} />
                           </BlurFade>
                        </div>
                     )}
                  </div>
               </motion.div>
               {/* MOCKUP PREVIEW */}
               {content.mockupImage && (
                  <motion.div
                     className="w-full h-40 sm:h-80"
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
                        className="w-full h-full"
                     />
                  </motion.div>
               )}
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default FullPageModal;
