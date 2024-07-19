import { useState, useEffect } from 'react';

// Define the breakpoints
const breakpoints = {
   sm: 640,
   md: 768,
   lg: 1024,
   xl: 1280,
   '2xl': 1536,
};

const getScreenSize = (width: number) => {
   if (width >= breakpoints['2xl']) return '2xl';
   if (width >= breakpoints.xl) return 'xl';
   if (width >= breakpoints.lg) return 'lg';
   if (width >= breakpoints.md) return 'md';
   if (width >= breakpoints.sm) return 'sm';
   return 'default';
};

const useScreenSize = () => {
   const [screenSize, setScreenSize] = useState(() => getScreenSize(window.innerWidth));

   useEffect(() => {
      const handleResize = () => {
         setScreenSize(getScreenSize(window.innerWidth));
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return screenSize;
};

export default useScreenSize;
