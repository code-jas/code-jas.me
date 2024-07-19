import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

const Highlight = ({
   children,
   style,
   className,
}: {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
}) => {
   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.1 });
   return (
      <span ref={ref} style={{ position: 'relative', display: 'inline' }}>
         {isInView && (
            <>
               <motion.span
                  initial={{
                     backgroundSize: '0% 100%',
                  }}
                  animate={{
                     backgroundSize: '100% 100%',
                  }}
                  transition={{
                     duration: 2,
                     ease: 'linear',
                     delay: 0.5,
                  }}
                  style={{
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'left center',
                     display: 'inline',
                  }}
                  className={cn(
                     `relative inline-block pb-1  px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
                     className,
                  )}
               >
                  {children}
               </motion.span>
            </>
         )}
      </span>
   );
};

export default Highlight;

// const Highlight = ({
//    children,
//    style,
// }: {
//    children: React.ReactNode;
//    style: React.CSSProperties;
// }) => {
//    const ref = React.useRef(null);
//    const isInView = useInView(ref, { once: true, amount: 0.1 });

//    return (
//       <span ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
//          {isInView && (
//             <>
//                <motion.span
//                   initial={{
//                      backgroundSize: '0% 100%',
//                   }}
//                   animate={{
//                      backgroundSize: '100% 100%',
//                   }}
//                   transition={{
//                      duration: 2,
//                      ease: 'linear',
//                      delay: 0.5,
//                   }}
//                   style={{
//                      backgroundRepeat: 'no-repeat',
//                      backgroundPosition: 'left center',
//                      display: 'inline',
//                   }}
//                   className="relative inline-block pb-1  px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
//                >
//                   {children}
//                </motion.span>
//                <motion.span
//                   initial={{
//                      backgroundSize: '0% 100%',
//                   }}
//                   animate={{
//                      backgroundSize: '100% 100%',
//                   }}
//                   transition={{ duration: 2, ease: 'linear', delay: 2 }}
//                   style={{
//                      position: 'absolute',
//                      top: 0,
//                      left: 0,
//                      bottom: 0,
//                      color: 'white',
//                      zIndex: 1,
//                      overflow: 'hidden',
//                      whiteSpace: 'wrap',
//                      display: 'inline',
//                   }}
//                   className="relative inline-block pb-1  px-1"
//                >
//                   {children}
//                </motion.span>
//             </>
//          )}
//          {/* <span style={{ position: 'relative', zIndex: 0 }}>{children}</span> */}
//       </span>
//    );
// };
