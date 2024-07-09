import React, { useMemo } from 'react';
import experienceData from '@/data/experience.json';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LinkPreview } from '../LinkPreview';

const Experience: React.FC = () => {
   const calculateWorkDuration = (startDate: string, endDate: string): string => {
      const start = new Date(startDate);
      const end = endDate.toLowerCase() === 'present' ? new Date() : new Date(endDate);
      const diff = end.getTime() - start.getTime();

      const diffDays = Math.floor(diff / (1000 * 3600 * 24));
      const diffMonths = Math.floor(diffDays / 30);
      const diffYears = Math.floor(diffMonths / 12);
      const remainingMonths = diffMonths % 12;

      let duration = '';
      if (diffYears > 0) {
         duration += `${diffYears} year${diffYears > 1 ? 's' : ''}`;
      }
      if (remainingMonths > 0) {
         duration += `${diffYears > 0 ? ' and ' : ''}${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
      }
      return duration;
   };

   return (
      <section id="experience" className="mx-auto px-6 py-36 flex flex-col gap-16">
         <div className="max-w-4xl mx-auto text-center">
            <h4 className="callout mb-4">Work Experience</h4>
            <h2 className="heading-2">Highlights of My Professional Journey</h2>
         </div>
         {experienceData.map((company, index) => {
            return (
               <div
                  key={index}
                  className="flex place-content-start items-start flex-none flex-row gap-2 h-auto overflow-visible p-0 relative w-full max-w-4xl mx-auto"
               >
                  <motion.div
                     className="flex flex-col justify-start shrink-0 w-1/2 sticky top-4"
                     style={{ zIndex: 10 }}
                  >
                     <LinkPreview url={company.url}>
                        <p className="text-2xl font-semibold bg-white">{company.company}</p>
                     </LinkPreview>
                  </motion.div>
                  <div className="w-1/2 flex flex-col gap-12">
                     {company.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="flex flex-col gap-2">
                           <div className="flex flex-col justify-start shrink-0">
                              <p className="text-2xl font-semibold leading-relaxed">{role.title}</p>
                           </div>
                           <div className="flex flex-col justify-start shrink-0  text-dark-60 text-md font-medium leading-loose">
                              <p>
                                 {role.startDate} - {role.endDate} <span> • </span>
                                 {calculateWorkDuration(role.startDate, role.endDate)}
                              </p>
                           </div>
                           <div className="flex flex-col justify-start gap-4 shrink-0 font-medium mt-4">
                              {role.descriptions.length > 0 &&
                                 role.descriptions.map((description, idx) => (
                                    <p
                                       key={idx}
                                       className="text-dark-60 text-lg font-medium leading-loose"
                                    >
                                       {description}
                                    </p>
                                 ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            );
         })}
      </section>
   );
};

export default Experience;
