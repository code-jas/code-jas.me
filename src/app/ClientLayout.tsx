// src/app/ClientLayout.tsx

'use client';

import Navbar from '@/components/Navbar';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <>
         <Navbar />
         <div>is client working?</div>
         <div>{children}</div>
         {/* <Footer /> */}
      </>
   );
};

export default ClientLayout;
