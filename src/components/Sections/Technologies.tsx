'use client';

import React, { useState } from 'react';
import IconList from '../IconList';
import IconCloud from '../IconCloud';
import SegmentedControl from '../SegmentedControl';

const Technologies: React.FC = () => {
   const [selectedValue, setSelectedValue] = useState('cards');
   const options = [
      { label: 'Cards', value: 'cards' },
      { label: 'Icons', value: 'icons' },
   ];

   const slugs = [
      [
         'typescript',
         'javascript',
         'react',
         'vuedotjs',
         'nextdotjs',
         'nuxtdotjs',
         'tailwindcss',
         'material-ui',
         'antdesign',
         'html5',
         'css3',
         'flutter',
         'android',
         'androidstudio',
         'intellijidea',
         'figma',
         'vercel',
      ],
      [
         'nodedotjs',
         'express',
         'python',
         'prisma',
         'mysql',
         'postgresql',
         'mongodb',
         'firebase',
         'docker',
         'git',
         'github',
         'gitlab',
         'visualstudiocode',
      ],
   ];

   return (
      <section
         id="technologies"
         className="bg-surface-2 flex flex-col items-center justify-center  py-36 "
      >
         <div className="max-w-4xl mx-auto text-center">
            <h4 className="callout">Technologies & Skills</h4>
            <h2 className="heading-2">
               Empowering development with these essential tools and frameworks.
            </h2>
            <div>
               <SegmentedControl
                  options={options}
                  value={selectedValue}
                  onChange={setSelectedValue}
               />
            </div>
         </div>
         <div className="w-full">
            {selectedValue === 'cards' ? (
               <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20 ">
                  <IconList iconSlugs={slugs} />
               </div>
            ) : (
               <div className="relative flex flex-col  max-w-2xl mx-auto items-center justify-center overflow-hidden  px-20 pb-12 pt-8 ">
                  <IconCloud iconSlugs={slugs.flatMap((slugs) => slugs)} />
               </div>
            )}
         </div>
      </section>
   );
};

export default Technologies;
