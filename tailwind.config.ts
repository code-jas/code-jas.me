import type { Config } from 'tailwindcss';

const config: Config = {
   darkMode: 'class',
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         boxShadow: {
            xs: '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
            'line-light': 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
            'line-dark': 'rgb(29, 29, 32) 0px 1px 0px',
         },
         fontFamily: {
            incognito: ['var(--incognito)'],
            inter: ['var(--inter)'],
            'tt-norms': ['var(--tt-norms)'],
         },
         colors: {
            primary: '#0aa5ff',
            'washed-blue': '#808f98',
            secondary: '#9747ff',
            pink: '#febdff',
            green: '#bdffd7',
            lavender: '#bdc0ff', // Fixed spelling to 'lavender'
            'surface-2': '#edf4f8',
            charcoal: '#0064c8',
            dark: '#282828',
            'dark-60': '#636465',
            'dark-50': '#939393',
            'sky-blue': '#bde3ff',
            'surface-1': 'transparent',
            'dark-blue': '#3b515f',
         },
      },
      animation: {
         marquee: 'marquee var(--duration) linear infinite',
         'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
         marquee: {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(calc(-100% - var(--gap)))' },
         },
         'marquee-vertical': {
            from: { transform: 'translateY(0)' },
            to: { transform: 'translateY(calc(-100% - var(--gap)))' },
         },
      },
   },
   variants: {
      extend: {
         backgroundColor: ['dark'],
         textColor: ['dark'],
      },
   },
   plugins: [],
};
export default config;
