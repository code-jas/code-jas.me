import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import DotPattern from '../DotPatterns';
import SocialDock from '../SocialDock';
import { ContactSection } from '@/types/profile';

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
      <section
         id="contact"
         className="relative flex flex-col justify-center py-36 w-full overflow-hidden"
      >
         <div className="z-10 max-w-screen-sm mx-auto">
            <h1 className="text-center text-5xl font-medium dark:text-white">{header}</h1>
            <p className="whitespace-pre-wrap text-center font-medium text-lg text-dark-60 dark:text-white py-3">
               {description}
            </p>
            <div className="flex flex-col items-center my-6 space-y-4">
               <Link href={`mailto:${email}`} className={emailButtonClasses}>
                  {emailButtonLabel}
               </Link>
            </div>

            <p className="text-dark-50 text-center py-4 font-medium leading-relaxed">
               {socialMessage}
            </p>
            <SocialDock social={social} />
         </div>
         <DotPattern
            width={20}
            height={20}
            className={cn('[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]')}
         />
      </section>
   );
};

export default Contact;
