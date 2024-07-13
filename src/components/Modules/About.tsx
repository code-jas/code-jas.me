import React from 'react';
import Image from 'next/image';
import { AboutSection } from '@/types/profile';
import { H2, H4, Paragraph } from '../UI/Common/Typography';

interface AboutProps {
   about: AboutSection;
}

const About: React.FC<AboutProps> = ({ about }) => {
   const { header, subheader, content } = about;
   return (
      <section id="about" className="mx-auto px-6 py-12 flex flex-col gap-16">
         <div className="max-w-4xl mx-auto">
            <H4 variant="branding">{header}</H4>
            <H2>{subheader}</H2>
         </div>
         <div className="max-w-4xl mx-auto">
            {content.map((item, index) => (
               <div key={index} className="flex flex-col md:flex-row my-8 gap-6">
                  {index % 2 === 0 ? (
                     <>
                        <div className="md:w-1/2 p-6">
                           <H4 className="leading-relaxed my-4">{item.title}</H4>
                           <div className="flex flex-col gap-5">
                              {item.text.map((paragraph, i) => (
                                 <Paragraph
                                    // className='fl'
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                 />
                              ))}
                           </div>
                        </div>
                        <div className="relative md:w-1/2 h-[560px] p-6 overflow-hidden rounded-2xl">
                           <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100"
                              className="object-cover"
                           />
                        </div>
                     </>
                  ) : (
                     <>
                        <div className="relative md:w-1/2 h-[560px] p-6 overflow-hidden rounded-2xl order-2 md:order-1">
                           <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100"
                              className="object-cover"
                           />
                        </div>
                        <div className="md:w-1/2 p-6 order-1 md:order-2">
                           <H4 className="leading-relaxed my-4">{item.title}</H4>
                           <div className="flex flex-col gap-5">
                              {item.text.map((paragraph, i) => (
                                 <Paragraph
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                 />
                              ))}
                           </div>
                        </div>
                     </>
                  )}
               </div>
            ))}
         </div>
      </section>
   );
};

export default About;
