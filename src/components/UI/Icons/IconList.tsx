'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchSimpleIcons, SimpleIcon } from 'react-icon-cloud';
import { useTheme } from 'next-themes';
import Marquee from '../Misc/Marquee';
import useScreenSize from '@/hooks/useScreenSize';

export type IconCardProps = {
   iconSlugs: string[][];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

const renderCustomIcon = (icon: SimpleIcon, theme: string, screenSize: string) => {
   // const bgHex = theme === 'light' ? 'bg-white' : 'bg-black';
   const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
   const minContrastRatio = theme === 'dark' ? 2 : 1.2;

   const sizes: { [key: string]: string } = {
      default: '32px',
      sm: '32px',
      md: '42px',
      lg: '42px',
      xl: '42px',
      '2xl': '42px',
   };

   const iconSize = sizes[screenSize] || sizes.large;
   return (
      <div
         key={icon.slug}
         className={`flex flex-col items-center justify-center p-2 md:p-4 border border-primary rounded-lg shadow-md bg-surface`}
      >
         <div
            style={{
               color: fallbackHex,
               borderRadius: '50%',
               padding: '10px',
            }}
            className="text-4xl mb-2"
         >
            <svg
               viewBox="0 0 24 24"
               fill={icon.hex}
               style={{ width: iconSize, height: iconSize }}
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d={icon.path} />
            </svg>
         </div>
      </div>
   );
};

const IconCard = ({ iconSlugs }: IconCardProps) => {
   const [data, setData] = useState<IconData | null>(null);
   const { theme } = useTheme();
   const screenSize = useScreenSize();
   // console.log('icon card screenSize :>> ', screenSize);

   useEffect(() => {
      fetchSimpleIcons({ slugs: iconSlugs.flat() }).then(setData);
   }, [iconSlugs]);

   const renderedIcons = useMemo(() => {
      if (!data) return [];

      return iconSlugs.map((group) =>
         group
            .map((slug) => {
               const icon = data.simpleIcons[slug];
               if (!icon) return null;
               return renderCustomIcon(icon, theme || 'light', screenSize);
            })
            .filter((icon) => icon !== null),
      );
   }, [data, theme, iconSlugs, screenSize]);
   return (
      <div className="space-y-4">
         {renderedIcons.map((icons, index) => (
            <Marquee
               key={index}
               pauseOnHover
               className="[--duration:20s]"
               reverse={index % 2 === 0}
            >
               {icons}
            </Marquee>
         ))}
         <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 md:w-1/3 bg-gradient-to-r from-surface-01"></div>
         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 md:w-1/3 bg-gradient-to-l from-surface-01"></div>
      </div>
   );
};

export default IconCard;
