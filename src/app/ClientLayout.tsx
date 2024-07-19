'use client';
import React from 'react';
import { Providers } from './providers';
import { CustomCursor, FullPageModal } from '@/components/UI/Misc';
import { Footer, Navbar } from '@/components/UI/Common';
import useScreenSize from '@/hooks/useScreenSize';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const screenSize = useScreenSize();
   const isLgOrAbove = screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl';

   return (
      <Providers>
         {isLgOrAbove && <CustomCursor />}
         <FullPageModal />
         <Navbar />
         {children}
         <Footer />
      </Providers>
   );
};

export default ClientLayout;
