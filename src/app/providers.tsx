'use client';

import ReduxProvider from '@/providers/ReduxProvider';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
   return (
      <ReduxProvider>
         <ThemeProvider enableSystem={true} attribute="class">
            {children}
         </ThemeProvider>
      </ReduxProvider>
   );
}
