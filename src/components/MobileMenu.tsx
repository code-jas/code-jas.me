'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuHome, LuMenu, LuUser2, LuBraces, LuContact2, LuX } from 'react-icons/lu';
import { AiOutlineExperiment } from 'react-icons/ai';

export default function MobileMenu() {
   const [navShow, setNavShow] = useState(false);
   const data = [
      { title: 'Home', href: '#home', icon: LuHome },
      { title: 'About', href: '#about', icon: LuUser2 },
      { title: 'Projects', href: '#projects', icon: AiOutlineExperiment },
      { title: 'Technologies', href: '#technologies', icon: LuBraces },
      { title: 'Contact', href: '#contact', icon: LuContact2 },
   ];

   const onToggleNav = () => {
      setNavShow((status) => {
         if (status) {
            document.body.style.overflow = 'auto';
         } else {
            document.body.style.overflow = 'hidden';
         }
         return !status;
      });
   };

   return (
      <>
         <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className="md:hidden rounded-full p-2"
         >
            <LuMenu className="text-xl" />
         </button>
         <motion.div
            initial={{ x: '100%' }}
            animate={{ x: navShow ? '0%' : '100%' }}
            transition={{ duration: 0.6, ease: [0.1, 0, 0, 1] }}
            className={`md:hidden fixed left-0 top-0 z-10 h-full w-full dark:bg-zinc-900 bg-white`}
         >
            <div className="flex items-center justify-between mt-6 px-8">
               <Link href="/" onClick={onToggleNav}>
                  <Image src={'/vercel.svg'} width={35} height={35} alt="logo" />
               </Link>

               <button
                  aria-label="Toggle Menu"
                  onClick={onToggleNav}
                  className={`md:hidden rounded-full p-2 duration-500 ${
                     !navShow ? '-rotate-[360deg]' : null
                  }`}
               >
                  <LuX className="text-xl" />
               </button>
            </div>
            <nav className="flex flex-col mt-6">
               {data.map((link, index) => (
                  <motion.div
                     key={link.title}
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: navShow ? 1 : 0, y: navShow ? 0 : -20 }}
                     transition={{ delay: navShow ? index * 0.1 + 0.2 : 0 }}
                     className="group"
                  >
                     <Link
                        href={link.href}
                        className="flex items-center gap-x-4 font-incognito font-semibold text-xl dark:shadow-line-dark shadow-line-light p-6"
                        onClick={onToggleNav}
                     >
                        <link.icon
                           className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                           aria-hidden="true"
                        />
                        {link.title}
                     </Link>
                  </motion.div>
               ))}
            </nav>
         </motion.div>
      </>
   );
}
