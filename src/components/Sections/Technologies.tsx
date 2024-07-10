'use client';

import React, { useState } from 'react';
import IconList from '../IconList';
import IconCloud from '../IconCloud';
import SegmentedControl from '../SegmentedControl';
import { TechnologiesSection } from '@/types/profile';

interface TechnologiesProps {
   tech: TechnologiesSection;
}

const Technologies: React.FC<TechnologiesProps> = ({ tech }) => {
   const { header, subheader, technologies } = tech;
   const [selectedValue, setSelectedValue] = useState('cards');
   const options = [
      { label: 'Cards', value: 'cards' },
      { label: 'Clouds', value: 'clouds' },
   ];

   return (
      <section
         id="technologies"
         className="bg-surface-2 flex flex-col items-center justify-center py-12"
      >
         <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-center text-5xl font-medium text-primary py-4">
               Technologies & Skills
            </h4>
            <h2 className="text-center font-medium text-xl  text-dark leading-relaxed">
               Empowering development with these essential tools and frameworks.
            </h2>
            <div className="my-4">
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
                  <IconList iconSlugs={technologies} />
               </div>
            ) : (
               <div className="relative flex flex-col  max-w-2xl mx-auto items-center justify-center overflow-hidden  px-20 pb-12 pt-8 ">
                  <IconCloud iconSlugs={technologies.flatMap((slugs) => slugs)} />
               </div>
            )}
         </div>
      </section>
   );
};

export default Technologies;
