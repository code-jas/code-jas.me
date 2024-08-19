'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import profile from '@/data/data.json';
import '@/styles/navbar.css';
import { MobileMenu, Theme } from '.';

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

   return (
      <motion.header
         initial={{ y: -100 }}
         animate={{ y: isScrolledUp ? 0 : -100 }}
         transition={{ duration: 0.5 }}
         className="fixed top-0 w-full text-sm py-4 md:px-16 px-4 z-30 bg-surface shadow-xs"
      >
         <div className="max-w-6xl mx-auto flex items-center justify-between ">
            <Link href="/">
               <Image
                  src={'/logo.png'}
                  width={30}
                  height={30}
                  alt="logo"
                  style={{ width: 'auto', height: 'auto' }}
               />
            </Link>

            <nav className="md:block hidden">
               <ul className="flex items-center gap-x-8">
                  {profile.navbar
                     .filter((link) => link.isActive)
                     .map((link, id) => (
                        <li key={id}>
                           <Link
                              href={link.href}
                              className="cursor-none underlined font-incognito  text-primary hover:text-branding-primary duration-300 text-base"
                           >
                              {link.title}
                           </Link>
                        </li>
                     ))}
               </ul>
            </nav>

            <div className="flex items-center gap-x-4">
               <Theme />
               <MobileMenu data={profile.navbar.filter((link) => link.isActive)} />
            </div>
         </div>
      </motion.header>
   );
}
