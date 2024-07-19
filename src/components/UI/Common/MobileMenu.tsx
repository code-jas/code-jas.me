'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuHome, LuMenu, LuUser2, LuBraces, LuContact2, LuX } from 'react-icons/lu';
import { TbAlignRight } from 'react-icons/tb';
import { AiOutlineExperiment } from 'react-icons/ai';
import { Navbar } from '@/types/profile';
import { IconType } from 'react-icons';

interface MobileMenuProps {
   data: Navbar[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ data }) => {
   const [navShow, setNavShow] = useState(false);

   const icons: { [key: string]: IconType } = {
      Home: LuHome,
      About: LuUser2,
      Experience: AiOutlineExperiment,
      Projects: AiOutlineExperiment,
      Technologies: LuBraces,
      Contact: LuContact2,
   };

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
            className="md:hidden bg-surface-01 text-primary  border border-primary rounded-full p-2"
         >
            <TbAlignRight className="text-xl" />
         </button>
         <motion.div
            initial={{ x: '100%' }}
            animate={{ x: navShow ? '0%' : '100%' }}
            transition={{ duration: 0.6, ease: [0.1, 0, 0, 1] }}
            className={`md:hidden fixed left-0 top-0 z-10 h-full w-full dark:bg-zinc-900 bg-white`}
         >
            <div className="flex items-center justify-between mt-6 px-8">
               <Link href="/" onClick={onToggleNav}>
                  <Image src={'/logo.png'} width={35} height={35} alt="logo" />
               </Link>

               <button
                  aria-label="Toggle Menu"
                  onClick={onToggleNav}
                  className={`md:hidden  bg-surface-01 text-primary  border border-primary rounded-full p-2 duration-500 ${!navShow ? '-rotate-[360deg]' : null}`}
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
                        {icons[link.title] &&
                           React.createElement(icons[link.title], {
                              className:
                                 'text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300',
                              'aria-hidden': 'true',
                           })}
                        {link.title}
                     </Link>
                  </motion.div>
               ))}
            </nav>
         </motion.div>
      </>
   );
};

export default MobileMenu;
