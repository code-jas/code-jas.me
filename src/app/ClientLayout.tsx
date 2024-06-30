'use client';
import React from 'react';
import { Providers } from './providers';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import FullPageModal from '@/components/FullPageModal';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <Providers>
         <CustomCursor />
         <FullPageModal />
         <Navbar />
         {children}
         {/* <Footer /> */}
      </Providers>
   );
};

export default ClientLayout;
