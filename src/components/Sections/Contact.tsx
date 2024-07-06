import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '../Dock';
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import DotPattern from '../DotPatterns';

const Contact: React.FC = () => {
   return (
      <section
         id="contact"
         className="relative flex flex-col justify-center  py-36 w-full  overflow-hidden"
      >
         <div className="z-10 max-w-screen-sm  mx-auto">
            <h1 className="text-center text-5xl font-medium dark:text-white">
               Let&apos;s keep in touch
            </h1>
            <p className="whitespace-pre-wrap text-center font-medium text-lg  text-dark-60 dark:text-white py-3">
               Eager to share my tech insights and business know-how as I continue learning and
               applying my skills. Let’s connect!
            </p>
            <div className="flex flex-col items-center my-6 space-y-4 ">
               <Link
                  href="mailto:johnangelo.silvestre04@gmail.com"
                  className="text-white bg-primary rounded-full px-8 p-3 font-medium transition duration-400 hover:bg-charcoal"
               >
                  Send Email
               </Link>
            </div>

            <p className="text-dark-50 text-center py-4 font-medium leading-relaxed">
               Connect with me on my socials.
            </p>
            <Dock
               className="m-0 mx-auto w-max border-none dark:border-none"
               distance={50}
               magnification={50}
            >
               <DockIcon className="text-dark hover:text-[#0e76a8]">
                  <Link href={'https://www.linkedin.com/in/johnangelo-silvestre/'} target="_blank">
                     <FaLinkedin className="h-6 w-6" />
                  </Link>
               </DockIcon>

               <DockIcon className="text-dark hover:text-[#5865F2]">
                  <Link href={'https://discordapp.com/users/742020338270863450'} target="_blank">
                     <FaDiscord className="h-6 w-6" />
                  </Link>
               </DockIcon>
               <DockIcon className="text-dark hover:text-[#24292e]">
                  <Link href={'https://github.com/code-jas'} target="_blank">
                     <FaGithub className="h-6 w-6" />
                  </Link>
               </DockIcon>
               <DockIcon className="text-dark hover:text-[#1877F2]">
                  <Link href={'https://www.facebook.com/angelobsilvestre'} target="_blank">
                     <FaFacebook className="h-6 w-6" />
                  </Link>
               </DockIcon>
            </Dock>
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
