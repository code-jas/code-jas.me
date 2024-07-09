import React from 'react';
import Image from 'next/image';
import aboutData from '@/data/about.json';

const About: React.FC = () => {
   return (
      <section id="about" className="mx-auto px-6 py-12 flex flex-col gap-16">
         <div className="max-w-4xl mx-auto">
            <h4 className="callout mb-4">About me</h4>
            <h2 className="heading-2">
               Web development is my innovative space, where I push boundaries and explore new
               horizons, and turn creative ideas into reality
            </h2>
         </div>
         <div className="max-w-4xl mx-auto">
            {aboutData.content.map((item, index) => (
               <div key={index} className="flex flex-col md:flex-row my-8 gap-6">
                  {index % 2 === 0 ? (
                     <>
                        <div className="md:w-1/2 p-6">
                           <h4 className="text-primary text-2xl font-semibold leading-relaxed my-4">
                              {item.title}
                           </h4>
                           <div className="flex flex-col gap-5">
                              {item.text.map((p, i) => (
                                 <p
                                    key={i}
                                    className="text-dark-60 text-lg font-medium leading-loose"
                                 >
                                    {p}
                                 </p>
                              ))}
                           </div>
                        </div>
                        <div className="relative md:w-1/2 h-[560px] p-6 overflow-hidden rounded-2xl">
                           {/* <div className="relative w-[404px] h-[560px]"> */}
                           <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100"
                              className="object-cover"
                           />
                           {/* </div> */}
                        </div>
                     </>
                  ) : (
                     <>
                        <div className="relative md:w-1/2 h-[560px] p-6 overflow-hidden rounded-2xl order-2 md:order-1">
                           {/* <div className=" w-[404px] h-[560px]"> */}
                           <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100"
                              className="object-cover"
                           />
                           {/* </div> */}
                        </div>
                        <div className="md:w-1/2 p-6 order-1 md:order-2">
                           <h4 className="text-primary text-2xl font-semibold leading-relaxed my-4">
                              {item.title}
                           </h4>
                           <div className="flex flex-col gap-5">
                              {item.text.map((p, i) => (
                                 <p
                                    key={i}
                                    className="text-dark-60 text-lg font-medium leading-loose"
                                 >
                                    {p}
                                 </p>
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
