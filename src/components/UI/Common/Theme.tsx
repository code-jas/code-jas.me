'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import SunIcon from '../../../../public/icons/SunIcon';
import MoonIcon from '../../../../public/icons/MoonIcon';
import { LuMoon } from 'react-icons/lu';

export default function Theme() {
   const { systemTheme, theme, setTheme } = useTheme();
   const [hasMounted, setHasMounted] = useState(false);
   const currentTheme = theme === 'system' ? systemTheme : theme;
   // console.log('theme :>> ', theme);
   // console.log('currentTheme :>> ', currentTheme);

   function toggleTheme() {
      return currentTheme === 'light' ? setTheme('dark') : setTheme('light');
   }
   useEffect(() => setHasMounted(true), []);

   if (!hasMounted)
      return (
         <span className="animate-pulse min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300"></span>
      );

   return (
      <button
         onClick={toggleTheme}
         className={`bg-surface-01 text-primary  border border-primary rounded-full p-2 duration-300 transition-transform group: ${currentTheme === 'light' ? '-rotate-180' : 'rotate-0'}`}
         aria-label="Toggle Theme"
      >
         {currentTheme === 'light' ? <SunIcon /> : <LuMoon size={22} />}
      </button>
   );
}
