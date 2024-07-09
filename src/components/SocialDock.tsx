import { FaLinkedin, FaDiscord, FaGithub, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import { LinkPreview } from './LinkPreview'; // Adjust the import path as needed
import { Dock, DockIcon } from './Dock';

interface SocialLink {
   url: string;
   icon: JSX.Element;
   hoverColor: string;
   preview: boolean;
}

const socialLinks: SocialLink[] = [
   {
      url: 'https://www.linkedin.com/in/johnangelo-silvestre/',
      icon: <FaLinkedin className="h-6 w-6" />,
      hoverColor: 'hover:text-[#0e76a8]',
      preview: true,
   },
   {
      url: 'https://discordapp.com/users/742020338270863450',
      icon: <FaDiscord className="h-6 w-6" />,
      hoverColor: 'hover:text-[#5865F2]',
      preview: true,
   },
   {
      url: 'https://github.com/code-jas',
      icon: <FaGithub className="h-6 w-6" />,
      hoverColor: 'hover:text-[#24292e]',
      preview: true,
   },
   {
      url: 'https://www.facebook.com/angelobsilvestre',
      icon: <FaFacebook className="h-6 w-6" />,
      hoverColor: 'hover:text-[#1877F2]',
      preview: true,
   },
];

const SocialDock: React.FC = () => {
   return (
      <Dock
         className="m-0 mx-auto w-max border-none dark:border-none"
         distance={50}
         magnification={50}
      >
         {socialLinks.map((link, index) => (
            <DockIcon key={index} className={`text-dark ${link.hoverColor}`}>
               {link.preview ? (
                  <LinkPreview url={link.url} target="_blank">
                     {link.icon}
                  </LinkPreview>
               ) : (
                  <Link href={link.url} target="_blank">
                     {link.icon}
                  </Link>
               )}
            </DockIcon>
         ))}
      </Dock>
   );
};

export default SocialDock;
