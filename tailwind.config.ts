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
         },
         colors: {
            'primary-color': '#33E092',
            'secondary-color': '#0CCE6B',
            'tertiary-color': '#16a34a',
            'primary-bg': 'rgba(39, 39, 43, 0.4)',
            'secondary-bg': 'rgba(250, 250, 250, 0.4)',
         },
      },
   },
   plugins: [],
};
export default config;
