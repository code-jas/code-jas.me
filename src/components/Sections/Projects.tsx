import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ProjectCard from '../ProjectCard';

const Projects: React.FC = () => {
   const projects = [
      {
         title: 'Ph Festival',
         description:
            'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
         techStacks: [
            '/brand/next-js.svg',
            '/brand/typescript.svg',
            '/brand/redux.svg',
            '/brand/css.svg',
            '/brand/prisma.svg',
            '/brand/vercel.svg',
         ],
         liveSiteLink: 'https://ph-festival.code-jas.me',
         bgImage: '/grid-pattern.png',
         coverImage: '/ph-festival-screenshot.png',
      },
      {
         title: 'Yoom - Video Conferencing App',
         description:
            'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
         techStacks: ['/vercel.svg'],
         liveSiteLink: 'https://example.com/live-site-link-2',
         bgImage: '/grid-pattern.png',
         coverImage: '/no-image.png',
      },
   ];
   return (
      <section id="projects" className="max-w-4xl mx-auto px-6">
         <h4 className="callout">Works that matter</h4>
         <h2 className="heading-2">
            Helping companies produce digital solutions for over a decade
         </h2>
         <div className="text-block-85">
            We have shipped <span className="text-span-7">more than 200</span> &nbsp;
            <br />
            digital products and services
         </div>
         <div className="mt-28">
            {/* <div className="my-6">
               <div className="grid grid-cols-2 gap-16  justify-between">
                  <div className="relative w-auto h-60">
                     <Link href={'#'} className="w-full h-full">
                        <Image
                           src={'/no-image.png'}
                           alt="No image"
                           fill
                           sizes="100"
                           className="object-cover w-full h-full"
                        />
                     </Link>
                  </div>
                  <div className="col-span-1 flex flex-col gap-y-2">
                     <h3 className="text-block-74">Ph Festival</h3>
                     <div className="text-block-75">
                        The website you&apos;re currently exploring was crafted by me using Next.js,
                        chosen for its speed and excellent SEO capabilities, aligning with my vision
                        for a dynamic portfolio. To streamline data management, Firebase serves as
                        the backend, providing a seamless repository for all portfolio items. As a
                        continuous enhancement, I am implementing a light/dark mode switch for a
                        personalized user experience. The design, conceptualized by me, was brought
                        to life using Figma, ensuring a cohesive and visually appealing showcase of
                        my work.
                     </div>
                     <div>Tech stacks</div>
                     <Link href={'#'}>Button</Link>
                  </div>
               </div>
            </div> */}
            <div>
               {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
