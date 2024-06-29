import Image from 'next/image'; // Assuming you are using Next.js for image optimization
import Link from 'next/link'; // Assuming you are using Next.js for routing\
import { MdOutlineArrowOutward } from 'react-icons/md';

interface ProjectCardProps {
   title: string;
   description: string;
   techStacks: string[];
   liveSiteLink: string;
   bgImage: string;
   coverImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
   title,
   description,
   techStacks,
   liveSiteLink,
   bgImage,
   coverImage,
}) => {
   return (
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
         <div className=" flex items-center justify-center">
            <div className="flex justify-start items-start max-w-2xl rounded-2xl shadow-lg p-6 transition duration-700 overflow-hidden">
               <div>
                  <div className="relative flex items-center justify-center w-full overflow-hidden  h-[419.2px] mb-10">
                     <div className="relative w-full h-full overflow-hidden rounded-3xl bg-sky-blue">
                        <div className="w-full h-full">
                           {/* <Image
                              src={bgImage}
                              alt="Background Image"
                              fill
                              sizes="100"
                              className="object-cover w-full h-full"
                           /> */}
                        </div>
                     </div>
                     {/* w-[570px] h-[447.46px] */}
                     <div className="w-[90%] h-80  z-10 absolute bottom-0 rounded-lg overflow-hidden">
                        <div className="w-full h-full">
                           <Image
                              src={coverImage}
                              alt="Cover Image"
                              fill
                              sizes="100"
                              className="w-full h-full object-cover"
                           />
                        </div>
                     </div>
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                     {title}
                  </h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-block-75">
                     {description}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                     <div className="flex items-center">
                        {techStacks.map((icon, index) => (
                           <div
                              key={index}
                              className="border border-dark bg-gray-50 rounded-full p-2 flex justify-center items-center"
                              style={{ transform: `translateX(${-5 - index * 5}px)` }}
                           >
                              <div className="w-8 h-8 flex items-center justify-center">
                                 <Image
                                    src={icon}
                                    alt={`Tech Icon ${index}`}
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                 />
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="flex justify-center items-center gap-3">
                        <p className="font-medium text-[20px] text-purple">Check Live Site</p>
                        <Link href={liveSiteLink} target="_blank">
                           <MdOutlineArrowOutward size={24} />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
