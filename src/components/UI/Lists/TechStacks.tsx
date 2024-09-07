import React from 'react';
import Image from 'next/image';
import tippy from 'tippy.js';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { renderToStaticMarkup } from 'react-dom/server';
import useScreenSize from '@/hooks/useScreenSize';
import 'tippy.js/dist/tippy.css';

interface TechStackIconProps {
   techStacks: { icon: string; label: string }[];
}

const TechStacks: React.FC<TechStackIconProps> = ({ techStacks }) => {
   const displayedStacks = techStacks.slice(0, 5);
   const remainingStacks = techStacks.length - 5;

   const renderTooltipContent = (stacks: { icon: string; label: string }[]) => {
      return (
         <div className="tooltip-content flex flex-col items-start py-1">
            {stacks.map((stack, index) => (
               <div key={index} className="tooltip-item  flex items-center mb-1">
                  <Image
                     src={stack.icon}
                     alt={stack.label}
                     width={20}
                     height={20}
                     className="object-contain mr-2"
                  />
                  <span className="text-sm">{stack.label}</span>
               </div>
            ))}
         </div>
      );
   };

   const screenSize = useScreenSize();

   const getTranslateXValue = (index: number) => {
      switch (screenSize) {
         case 'lg':
         case 'md':
            return `${-5 - index * 10}px`;
         default:
            return `${-5 - index * 5}px`;
      }
   };
   return (
      <div className="flex items-center w-10 ">
         {displayedStacks.map((stack, index) => (
            <motion.div
               key={index}
               className="border border-primary dark:border-dark-10 bg-surface-01 rounded-full p-2 flex justify-center items-center"
               animate={{ translateX: getTranslateXValue(index) }}
               whileHover={{ scale: 1.2 }}
               transition={{ type: 'spring', stiffness: 300 }}
               ref={(el) => {
                  if (el) {
                     tippy(el, {
                        content: stack.label,
                        theme: 'techstack',
                        placement: 'top',
                        inertia: true,
                     });
                  }
               }}
            >
               <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                     src={stack.icon}
                     alt={stack.label}
                     width={30}
                     height={30}
                     className="object-contain"
                  />
               </div>
            </motion.div>
         ))}
         {remainingStacks > 0 && (
            <motion.div
               className="border border-primary dark:border-dark-10 bg-surface-01 rounded-full p-2 flex justify-center items-center"
               animate={{ translateX: getTranslateXValue(displayedStacks.length) }}
               whileHover={{ scale: 1.2 }}
               transition={{ type: 'spring', stiffness: 300 }}
               ref={(el) => {
                  if (el) {
                     tippy(el, {
                        content: renderToStaticMarkup(renderTooltipContent(techStacks.slice(5))),
                        allowHTML: true, // Allow rendering of custom HTML
                        placement: 'top',
                        theme: 'techstack', // Custom theme if needed
                        arrow: true, // Enable arrow
                        // onShow(instance) {
                        //    const tooltip = instance.popper.querySelector('.tippy-box');
                        //    tooltip?.classList.add('my-custom-tooltip'); // Add custom class if needed
                        // },
                     });
                  }
               }}
            >
               <div className="w-8 h-8 flex items-center justify-center">
                  <span>+{remainingStacks}</span>
               </div>
            </motion.div>
         )}
      </div>
   );
};

export default TechStacks;
