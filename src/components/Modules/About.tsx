import React from 'react';
import Image from 'next/image';
import { AboutSection } from '@/types/profile';
import { H2, H4, Paragraph } from '../UI/Typography/Typography';
import { SectionBlock } from '../UI/Common';
import { BlurFade } from '../UI/Misc';
import { replaceHighlightPlaceholders } from '../UI/Typography/TextHighlightUtils';

interface AboutProps {
   about: AboutSection;
}

const About: React.FC<AboutProps> = ({ about }) => {
   const { header, subheader, content } = about;
   return (
      <SectionBlock id="about">
         <div className="max-w-4xl mx-auto">
            <H4 variant="branding">{header}</H4>
            <H2>{subheader}</H2>
         </div>
         <div className="max-w-4xl mx-auto">
            {content.map((item, index) => (
               <div key={index} className="flex flex-col md:flex-row my-8 gap-6">
                  {index % 2 === 0 ? (
                     <>
                        <div className="md:w-1/2 p-0 sm:p-6">
                           <H4 className="leading-relaxed my-4">{item.title}</H4>
                           <div className="flex flex-col gap-5">
                              {item.text.map((paragraph, i) => (
                                 <Paragraph key={i} textColorClassName="text-highlight">
                                    {replaceHighlightPlaceholders(paragraph)}
                                 </Paragraph>
                              ))}
                           </div>
                        </div>
                        <BlurFade
                           duration={0.8}
                           inView
                           className="relative w-full md:w-1/2 h-[600px] md:h-[560px] p-2 sm:p-6 overflow-hidden rounded-2xl"
                        >
                           <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100"
                              className="object-cover"
                           />
                        </BlurFade>
                     </>
                  ) : (
                     <>
                        <BlurFade
                           duration={0.8}
                           inView
                           className="relative w-full md:w-1/2 h-[600px] md:h-[560px] p-2 sm:p-6 overflow-hidden rounded-2xl order-2 md:order-1"
                        >
                           <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100"
                              className="object-cover"
                           />
                        </BlurFade>
                        <div className="md:w-1/2 p-0 sm:p-6 order-1 md:order-2">
                           <H4 className="leading-relaxed my-4">{item.title}</H4>
                           <div className="flex flex-col gap-5">
                              {item.text.map((paragraph, i) => (
                                 <Paragraph key={i} textColorClassName="text-highlight">
                                    {replaceHighlightPlaceholders(paragraph)}
                                 </Paragraph>
                              ))}
                           </div>
                        </div>
                     </>
                  )}
               </div>
            ))}
         </div>
      </SectionBlock>
   );
};

export default About;
