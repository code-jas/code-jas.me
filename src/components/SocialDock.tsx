import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaDiscord, FaGithub, FaFacebook } from 'react-icons/fa';
import { LinkPreview } from './LinkPreview'; // Adjust the import path as needed
import { Dock, DockIcon } from './Dock';
import { Social } from '@/types/profile';

interface SocialDockProps {
   social: Social[];
}

const iconComponents = {
   FaLinkedin: FaLinkedin,
   FaDiscord: FaDiscord,
   FaGithub: FaGithub,
   FaFacebook: FaFacebook,
};

const SocialDock: React.FC<SocialDockProps> = ({ social }) => {
   const renderIcon = (iconName: string) => {
      const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
      return <IconComponent className="h-6 w-6" />;
   };

   return (
      <Dock
         className="m-0 mx-auto w-max border-none dark:border-none"
         distance={50}
         magnification={50}
      >
         {social.map((link, index) => (
            <DockIcon key={index} className={`text-dark ${link.hoverColor}`}>
               {link.preview ? (
                  <LinkPreview url={link.url} target="_blank">
                     {renderIcon(link.icon)}
                  </LinkPreview>
               ) : (
                  <Link href={link.url} target="_blank">
                     {renderIcon(link.icon)}
                  </Link>
               )}
            </DockIcon>
         ))}
      </Dock>
   );
};

export default SocialDock;
