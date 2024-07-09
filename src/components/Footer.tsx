import Image from 'next/image';
import { BiLogoGithub } from 'react-icons/bi';
import footer from '@/data/footer.json';

export default function Footer() {
   return (
      <footer className="border-t dark:border-zinc-800 border-zinc-100  lg:min-h-[250px] min-h-full relative">
         <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
            <div className="flex md:flex-row flex-col items-center gap-x-2">
               <h3 className="font-inter">Built with:</h3>
               <ul className="flex items-center gap-x-2 text-sm dark:text-zinc-600 text-zinc-400 md:mt-0 mt-3">
                  {footer.builtWith.map((item, index) => (
                     <li key={index}>
                        <a
                           href={item.url}
                           rel="noreferrer noopener"
                           target="_blank"
                           className={`flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline`}
                        >
                           <div className={item.class}>
                              <Image
                                 src={item.icon}
                                 width={20}
                                 height={20}
                                 alt={`${item.name} logo`}
                              />
                           </div>
                           {item.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
               <small className="text-zinc-500">
                  Copyright &copy; {footer.copyright} {new Date().getFullYear()} All rights Reserved
               </small>
            </div>
         </div>
      </footer>
   );
}
