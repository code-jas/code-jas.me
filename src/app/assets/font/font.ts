import localFont from 'next/font/local';

export const ttNorms = localFont({
   src: [
      {
         path: 'tt_norms_pro_black.woff2',
         weight: '900',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_bold_italic.woff2',
         weight: '700',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_bold.woff2',
         weight: '700',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_extra_black_italic.woff2',
         weight: '900',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_extra_black.woff2',
         weight: '900',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_extra_bold_italic.woff2',
         weight: '800',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_extra_bold.woff2',
         weight: '800',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_extra_light_italic.woff2',
         weight: '200',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_extra_light.woff2',
         weight: '200',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_italic.woff2',
         weight: '400',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_light_italic.woff2',
         weight: '300',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_light.woff2',
         weight: '300',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_medium_italic.woff2',
         weight: '500',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_medium.woff2',
         weight: '500',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_regular.woff2',
         weight: '400',
         style: 'normal',
      },
      {
         path: 'tt_norms_pro_thin_italic.woff2',
         weight: '100',
         style: 'italic',
      },
      {
         path: 'tt_norms_pro_thin.woff2',
         weight: '100',
         style: 'normal',
      },
   ],
   variable: '--tt-norms',
   display: 'swap',
});

export const incognito = localFont({
   src: [
      {
         path: 'incognito_bold.woff2',
         weight: '800',
         style: 'normal',
      },
      {
         path: 'incognito_condensed.woff2',
         weight: '700',
         style: 'normal',
      },
      {
         path: 'incognito_medium.woff2',
         weight: '600',
         style: 'normal',
      },
      {
         path: 'incognito_regular.woff2',
         weight: '400',
         style: 'normal',
      },
   ],
   variable: '--incognito',
   display: 'swap',
});

export const gitlabmono = localFont({
   src: [
      {
         path: 'gitlab-mono.woff2',
         weight: '300',
         style: 'normal',
      },
      {
         path: 'gitlab-mono.woff2',
         weight: '400',
         style: 'normal',
      },
      {
         path: 'gitlab-mono.woff2',
         weight: '500',
         style: 'normal',
      },
      {
         path: 'gitlab-mono.woff2',
         weight: '600',
         style: 'normal',
      },
   ],
   variable: '--gitlabmono',
   display: 'swap',
});
