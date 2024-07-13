'use client';
import React from 'react';
import { Providers } from './providers';
import { CustomCursor, FullPageModal } from '@/components/UI/Misc';
import { Footer, Navbar } from '@/components/UI/Common';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <Providers>
         <CustomCursor />
         <FullPageModal />
         <Navbar />
         {children}
         <Footer />
      </Providers>
   );
};

export default ClientLayout;
