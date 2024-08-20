'use client';

import React, { useState } from 'react';
import IconList from '../UI/Icons/IconList';
import IconCloud from '../UI/Icons/IconCloud';
import { TechnologiesSection } from '@/types/profile';
import { SegmentedControl } from '../UI/Buttons';
import { H1, H4, H5, Paragraph } from '../UI/Typography/Typography';
import { SectionBlock } from '../UI/Common';
import { BlurFade } from '../UI/Misc';

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
      <SectionBlock
         id="technologies"
         className="!bg-surface-01 items-center justify-center !py-12 !px-0 gap-0 overflow-x-hidden"
      >
         <div className="max-w-4xl mx-auto text-center">
            <H1 variant="branding" className="text-center ">
               {header}
            </H1>
            <H4 duration={0.6} className="text-center">
               {subheader}
            </H4>
            <BlurFade inView duration={0.8}>
               <div className="my-6">
                  <SegmentedControl
                     options={options}
                     value={selectedValue}
                     onChange={setSelectedValue}
                  />
               </div>
            </BlurFade>
         </div>
         <BlurFade inView duration={1}>
            <div className="w-screen overflow-x-hidden">
               {selectedValue === 'cards' ? (
                  <div className="relative flex h-full w-screen flex-col items-center justify-center py-12 md:py-20 ">
                     <IconList iconSlugs={technologies} />
                  </div>
               ) : (
                  <div className="relative flex flex-col  max-w-2xl mx-auto items-center justify-center px-20 pb-12 pt-8 ">
                     <IconCloud iconSlugs={technologies.flatMap((slugs) => slugs)} />
                  </div>
               )}
            </div>
         </BlurFade>
         <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 md:w-1/3 bg-gradient-to-r !from-surface-01"></div>
         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 md:w-1/3 bg-gradient-to-l !from-surface-01"></div>
      </SectionBlock>
   );
};

export default Technologies;
