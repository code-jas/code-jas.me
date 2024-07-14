import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceSection } from '@/types/profile';
import { BlurFade, LinkPreview } from '../UI/Misc';
import { H2, H4, Paragraph } from '../UI/Common/Typography';
import { PiChartBarHorizontal } from 'react-icons/pi';
import { SectionBlock } from '../UI/Common';

interface ExperienceProps {
   experience: ExperienceSection;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
   const { header, subheader, timeline } = experience;

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
      <SectionBlock id="experience">
         <div className="max-w-4xl mx-auto text-center">
            <H4 variant="branding" className="mb-1">
               {header}
            </H4>
            <H2>{subheader}</H2>
         </div>
         {timeline.map((company, index) => {
            return (
               <div
                  key={index}
                  className="flex place-content-start items-start flex-none flex-row gap-2 h-auto overflow-visible p-0 relative w-full max-w-4xl mx-auto"
               >
                  <motion.div
                     className="flex flex-col justify-start  w-1/2 sticky top-4"
                     style={{ zIndex: 10 }}
                  >
                     <BlurFade duration={1} inView>
                        <LinkPreview url={company.url}>
                           <p className="text-2xl font-semibold bg-white">{company.company}</p>
                        </LinkPreview>
                     </BlurFade>
                  </motion.div>
                  <div className="w-1/2 flex flex-col gap-12">
                     {company.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="flex flex-col gap-2">
                           <div className="flex flex-col justify-start shrink-0">
                              <BlurFade duration={0.6} inView>
                                 <H4 className="text-2xl leading-relaxed">{role.title}</H4>
                              </BlurFade>
                           </div>
                           <div className="flex flex-col justify-start shrink-0">
                              <BlurFade duration={0.6} inView>
                                 <Paragraph className="text-[16px]">
                                    {role.startDate} - {role.endDate} <span> • </span>
                                    {calculateWorkDuration(role.startDate, role.endDate)}
                                 </Paragraph>
                              </BlurFade>
                           </div>
                           <div className="flex flex-col justify-start gap-4 shrink-0 mt-4">
                              {role.descriptions.length > 0 &&
                                 role.descriptions.map((description, idx) => (
                                    <BlurFade key={idx} duration={0.8 + idx * 0.2} inView>
                                       <Paragraph key={idx}>{description}</Paragraph>
                                    </BlurFade>
                                 ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            );
         })}
      </SectionBlock>
   );
};

export default Experience;
