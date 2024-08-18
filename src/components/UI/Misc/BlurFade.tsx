'use client';

import { useRef } from 'react';
import { AnimatePresence, motion, useInView, Variants } from 'framer-motion';

import { MarginType } from 'framer-motion';

interface BlurFadeProps {
   children: React.ReactNode;
   className?: string;
   variant?: {
      hidden: { y: number };
      visible: { y: number };
   };
   duration?: number;
   delay?: number;
   yOffset?: number;
   inView?: boolean;
   inViewMargin?: MarginType | undefined;
   blur?: string;
}

/**
 * Renders a component with a blur fade effect.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the component.
 * @param {string} props.className - The CSS class name for the component.
 * @param {Variants} props.variant - The animation variants for the component.
 * @param {number} props.duration - The duration of the animation in seconds (default: 0.4).
 * @param {number} props.delay - The delay before the animation starts in seconds (default: 0).
 * @param {number} props.yOffset - The vertical offset of the animation in pixels (default: 6).
 * @param {boolean} props.inView - Determines if the animation should be triggered when the component is in view (default: false).
 * @param {string} props.inViewMargin - The margin around the component in pixels for triggering the animation (default: '-50px').
 * @param {string} props.blur - The amount of blur to apply to the component (default: '6px').
 * @returns {JSX.Element} The rendered BlurFade component.
 */
export default function BlurFade({
   children,
   className,
   variant,
   duration = 0.4,
   delay = 0,
   yOffset = 6,
   inView = false,
   inViewMargin = '-50px',
   blur = '6px',
}: BlurFadeProps): JSX.Element {
   const ref = useRef(null);
   const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
   const isInView = !inView || inViewResult;
   const defaultVariants: Variants = {
      hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
      visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
   };
   const combinedVariants = variant || defaultVariants;
   return (
      <AnimatePresence>
         <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            exit="hidden"
            variants={combinedVariants}
            transition={{
               delay: 0.04 + delay,
               duration,
               ease: 'easeOut',
            }}
            className={className}
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
}
