import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { renderToStaticMarkup } from 'react-dom/server';

interface TechStackIconProps {
   techStacks: { icon: string; label: string }[];
}

const TechStacks: React.FC<TechStackIconProps> = ({ techStacks }) => {
   const displayedStacks = techStacks.slice(0, 5);
   const remainingStacks = techStacks.length - 5;

   const renderTooltipContent = (stacks: { icon: string; label: string }[]) => {
      return (
         <div className="flex flex-col items-start py-1">
            {stacks.map((stack, index) => (
               <div key={index} className="flex items-center mb-1">
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

   return (
      <div className="flex items-center">
         {displayedStacks.map((stack, index) => (
            <motion.div
               key={index}
               className="border border-primary dark:border-dark-10 bg-surface-01 rounded-full p-2 flex justify-center items-center"
               initial={{ translateX: `${-5 - index * 5}px` }}
               whileHover={{ scale: 1.2 }}
               transition={{ type: 'spring', stiffness: 300 }}
               data-tooltip-id={`techstack-tooltip-${index}`}
               data-tooltip-content={stack.label}
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
               <Tooltip
                  id={`techstack-tooltip-${index}`}
                  className="!bg-surface-01 !text-primary  !shadow-lg"
                  place="top"
               />
            </motion.div>
         ))}
         {remainingStacks > 0 && (
            <motion.div
               className="border border-primary dark:border-dark-10 bg-surface-01 rounded-full p-2 flex justify-center items-center"
               initial={{ translateX: `${-5 - displayedStacks.length * 5}px` }}
               whileHover={{ scale: 1.2 }}
               transition={{ type: 'spring', stiffness: 300 }}
               data-tooltip-id="techstack-tooltip-more"
               data-tooltip-html={renderToStaticMarkup(renderTooltipContent(techStacks.slice(5)))}
            >
               <div className="w-8 h-8 flex items-center justify-center">
                  <span>+{remainingStacks}</span>
               </div>
               <Tooltip
                  id="techstack-tooltip-more"
                  className="!bg-white !text-primary !shadow-xs"
                  place="top"
               />
            </motion.div>
         )}
      </div>
   );
};

export default TechStacks;
