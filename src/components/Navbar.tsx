'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Theme from './Theme';
import MobileMenu from './MobileMenu';
import '@/styles/navbar.css';

export default function Navbar() {
   const [isScrolledUp, setIsScrolledUp] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         if (currentScrollY > lastScrollY) {
            setIsScrolledUp(false);
         } else {
            setIsScrolledUp(true);
         }
         setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [lastScrollY]);

   const data = [
      { title: 'Home', href: '#home' },
      { title: 'About', href: '#about' },
      { title: 'Experience', href: '#experience' },
      { title: 'Projects', href: '#projects' },
      { title: 'Technologies', href: '#technologies' },
      { title: 'Contact', href: '#contact' },
   ];

   return (
      <motion.header
         initial={{ y: -100 }}
         animate={{ y: isScrolledUp ? 0 : -100 }}
         // transition={{ type: 'spring', stiffness: 300, damping: 30 }}
         transition={{ duration: 0.5 }}
         className="fixed top-0 w-full text-sm py-4 md:px-16 px-4 z-30 bg-white dark:bg-black shadow-xs"
      >
         <div className="max-w-6xl mx-auto flex items-center justify-between ">
            <Link href="/">
               <Image src={'/logo.png'} width={35} height={35} alt="logo" />
            </Link>

            <nav className="md:block hidden">
               <ul className="flex items-center gap-x-8">
                  {data.map((link, id) => (
                     <li key={id}>
                        <Link
                           href={link.href}
                           className="cursor-none underlined font-incognito dark:text-white text-dark dark:hover:text-primary hover:text-primary duration-300 text-base"
                        >
                           {link.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>

            <div className="flex items-center gap-x-4">
               <Theme />
               <MobileMenu />
            </div>
         </div>
      </motion.header>
   );
}
