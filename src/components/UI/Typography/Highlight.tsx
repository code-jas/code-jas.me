import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import cn from 'classnames';

interface HighlightProps {
   children: React.ReactNode;
   className?: string;
   delay?: number; // Delay prop for customizing animation delay
   inView?: boolean; // Optional prop to control inView externally
}

const Highlight = ({ children, className, delay = 0.8, inView }: HighlightProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return (
      <motion.span
         ref={ref}
         initial={{
            backgroundSize: '0% 100%',
         }}
         animate={{
            backgroundSize:
               inView !== undefined
                  ? inView
                     ? '100% 100%'
                     : '0% 100%'
                  : isInView
                    ? '100% 100%'
                    : '0% 100%',
         }}
         transition={{
            duration: 2,
            ease: 'linear',
            delay: delay,
         }}
         style={{
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            display: 'inline',
         }}
         className={cn(
            `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-highlight to-highlight`,
            className,
         )}
      >
         {children}
      </motion.span>
   );
};

export default Highlight;
