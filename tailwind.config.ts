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
            primary: 'var(--clr-branding-primary)',
            dark: 'var(--clr-txt-primary)',
            'dark-10': 'var(--clr-txt-secondary)',
            'dark-20': 'var(--clr-txt-tertiary)',
            'surface-card': 'var(--surface-card)',
            surface: 'var(--surface)',
            'surface-01': 'var(--surface-01)',
            'surface-02': 'var(--surface-02)',
            'accent-red': 'var(--accent-red)',
            'accent-orange': 'var(--accent-orange)',
            'accent-green': 'var(--accent-green)',
            'accent-purple': 'var(--accent-purple)',
         },
         textColor: {
            primary: 'var(--clr-txt-primary)',
            secondary: 'var(--clr-txt-secondary)',
            tertiary: 'var(--clr-txt-tertiary)',
            quaternary: 'var(--clr-txt-quaternary)',
            'branding-primary': 'var(--clr-branding-primary)',
         },
         borderColor: {
            primary: 'var(--border)',
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
         backgroundColor: ['dark', 'hover'],
         textColor: ['dark', 'hover'],
      },
   },
   plugins: [],
};
export default config;
