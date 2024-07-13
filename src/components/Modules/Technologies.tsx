'use client';

import React, { useState } from 'react';
import IconList from '../UI/Icons/IconList';
import IconCloud from '../UI/Icons/IconCloud';
import { TechnologiesSection } from '@/types/profile';
import { SegmentedControl } from '../UI/Buttons';
import { H1, H4, H5, Paragraph } from '../UI/Common/Typography';

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
         className="bg-surface flex flex-col items-center justify-center py-12"
      >
         <div className="max-w-4xl mx-auto text-center">
            <H1 variant="branding" className="text-center ">
               {header}
            </H1>
            <H4 className="text-center">{subheader}</H4>
            <div className="my-6">
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
