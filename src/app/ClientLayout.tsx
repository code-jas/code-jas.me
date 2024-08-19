'use client';
import React from 'react';
import { Providers } from './providers';
import { CustomCursor } from '@/components/UI/Misc';
import { Footer, Navbar } from '@/components/UI/Common';
import useScreenSize from '@/hooks/useScreenSize';
import ProjectDetailsModal from '@/components/Modules/Projects/ProjectDetailsModal';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const screenSize = useScreenSize();
   const isLgOrAbove = screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl';

   return (
      <Providers>
         {isLgOrAbove && <CustomCursor />}
         <ProjectDetailsModal />
         <Navbar />
         {children}
         <Footer />
      </Providers>
   );
};

export default ClientLayout;
