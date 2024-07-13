import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

import { gitlabmono, incognito, ttNorms } from '@/app/assets/font/font';
import ClientLayout from './ClientLayout';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'John Angelo Silvestre - Full-Stack Developer Portfolio',
   description:
      "Hey, I'm John Angelo! Explore my digital world and discover my passions. I'm a Full Stack Developer with a love for creating seamless user experiences and solving problems with innovative digital solutions.",
   keywords:
      'Full-Stack Developer, Software Engineer, React, Vue, Flutter, Portfolio, Web Development, Mobile Development, Projects, Contact Information',
   authors: [{ name: 'John Angelo Silvestre' }],
   viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <Head>
            <link rel="icon" href="/src/app/favicon.ico" type="image/x-icon" />
         </Head>
         <body
            className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} ${ttNorms.variable} font-tt-norms dark:bg-zinc-900 bg-white dark:text-white text-dark`}
         >
            <ClientLayout>{children}</ClientLayout>
         </body>
      </html>
   );
}
