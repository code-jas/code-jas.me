import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ContactSection } from '@/types/profile';
import { BlurFade, SocialDock } from '../UI/Misc';
import { DotPatterns } from '../UI/Patterns';
import { H1, H2, Paragraph } from '../UI/Common/Typography';
import { SectionBlock } from '../UI/Common';

interface ContactProps {
   contact: ContactSection;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
   const {
      header,
      description,
      email,
      emailButtonLabel,
      emailButtonClasses,
      socialMessage,
      social,
   } = contact;

   return (
      <SectionBlock id="contact" className="relative justify-center  overflow-hidden">
         <div className="z-10 max-w-screen-sm mx-auto">
            <H1 className="text-center font-medium">{header}</H1>
            <Paragraph className="whitespace-pre-wrap text-center font-medium  py-3">
               {description}
            </Paragraph>
            <BlurFade duration={0.6} inView className="flex flex-col items-center my-6 space-y-4">
               <Link href={`mailto:${email}`} className={emailButtonClasses}>
                  {emailButtonLabel}
               </Link>
            </BlurFade>

            <Paragraph className="text-center py-4 font-medium text-tertiary">
               {socialMessage}
            </Paragraph>
            <BlurFade duration={0.6} inView>
               <SocialDock social={social} />
            </BlurFade>
         </div>
         <DotPatterns
            width={20}
            height={20}
            className={cn('[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]')}
         />
      </SectionBlock>
   );
};

export default Contact;
