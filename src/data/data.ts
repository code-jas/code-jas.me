import { Project } from '@/types/types';

export const projects: Project[] = [
   {
      title: 'Ph Festival',
      projectType: ['Web App', 'Cultural Showcase', 'Festival Guide', 'Educational Blog'],
      description:
         'Experience the vibrancy of Filipino culture through its diverse and colorful festivals. Share our similarities, celebrate our differences.',
      informations: [
         'Ph Festival is my first web application project from college.',
         'I designed it using Figma to ensure a visually appealing and user-friendly interface.',
         'The goal was to showcase Philippine festivals with a focus on aesthetics and user experience.',
         'This application educates readers about various annual festivals in the Philippines.',
         'I led the end-to-end development using HTML, CSS, JavaScript, PHP, and MySQL.',
         'The app features vibrant galleries, timelines, detailed pages, animations, search, and filters for an enhanced experience.',
         'In 2024, I revamped the app using Next.js, Tailwind CSS, Redux, Prisma, and MongoDB.',
         'Improvements included better structure, state management, data fetching, UI enhancements, and responsiveness.',
      ],
      techStacks: [
         { label: 'Next.js', icon: '/brand/next-js.svg' },
         { label: 'TypeScript', icon: '/brand/typescript.svg' },
         { label: 'Redux', icon: '/brand/redux.svg' },
         { label: 'CSS', icon: '/brand/css.svg' },
         { label: 'Prisma', icon: '/brand/prisma.svg' },
         { label: 'Vercel', icon: '/brand/vercel.svg' },
      ],
      liveSiteLink: 'https://ph-festival.code-jas.me',
      bgImage: '/gradient-part-bg.png',
      coverImage: '/ph-festival-screenshot.png',
      mockupImage: '/ph-festival-mockup.jpg',
   },
   {
      title: 'Bookly',
      projectType: ['Web App', 'E-commerce', 'Marketplace', 'Bookstore'],
      description:
         'A digital marketplace for secondhand books in the Philippines, making affordable literature accessible through an organized online platform.',
      informations: [
         'Ph Festival is my first web application project from college.',
         'I designed it using Figma to ensure a visually appealing and user-friendly interface.',
         'The goal was to showcase Philippine festivals with a focus on aesthetics and user experience.',
         'This application educates readers about various annual festivals in the Philippines.',
         'I led the end-to-end development using HTML, CSS, JavaScript, PHP, and MySQL.',
         'The app features vibrant galleries, timelines, detailed pages, animations, search, and filters for an enhanced experience.',
         'In 2024, I revamped the app using Next.js, Tailwind CSS, Redux, Prisma, and MongoDB.',
         'Improvements included better structure, state management, data fetching, UI enhancements, and responsiveness.',
      ],
      techStacks: [
         { label: 'React', icon: '/brand/react.svg' },
         { label: 'Vite', icon: '/brand/vite.svg' },
         { label: 'Node.js', icon: '/brand/node-js.svg' },
         { label: 'Sequelize', icon: '/brand/sequelize.svg' },
         { label: 'Digital Ocean', icon: '/brand/digital-ocean.svg' },
         { label: 'PostgreSQL', icon: '/brand/postgresql.svg' },
         { label: 'Docker', icon: '/brand/docker.svg' },
      ],
      liveSiteLink: 'https://example.com/live-site-link-2',
      bgImage: '/gradient-part-bg.png',
      coverImage: 'COMINGSOON',
      mockupImage: '/test.jpg',
   },
];
