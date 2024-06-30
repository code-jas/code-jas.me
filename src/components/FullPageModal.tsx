import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/store/modalSlice';
import { RootState } from '@/store/store';
import { MdClose, MdOutlineArrowOutward } from 'react-icons/md';
import LiveSiteButton from './LivesiteButton';
import TechStackList from './TechStackList';
import Image from 'next/image';

const FullPageModal = () => {
   const dispatch = useDispatch();
   const isOpen = useSelector((state: RootState) => state.modal.isOpen);

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
      return () => {
         document.body.style.overflow = '';
      };
   }, [isOpen]);

   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-white dark:bg-zinc-900 z-50 flex flex-col">
         <div className=" w-full max-w-5xl  mx-auto">
            <div className="sticky top-0 z-50 flex  items-center justify-between rounded-full border border-gray-30 bg-white p-4 my-6">
               <button
                  type="button"
                  className="group h-10 w-10  flex items-center justify-center font-medium text-base border-[1px] border-gray-30 rounded-3xl "
                  onClick={() => dispatch(closeModal())}
               >
                  <MdClose className="h-6 w-6" />
                  <span className="sr-only">Close</span>
               </button>
               <LiveSiteButton liveSiteLink="#" />
            </div>
         </div>
         <div className="w-full">
            <Image
               src="/test.jpg" // replace with your image path
               alt="Description of the image"
               layout="responsive"
               width={100}
               height={50}
               className="w-full h-64"
            />
         </div>
         <div className=" w-full max-w-5xl  mx-auto">
            <div className="flex justify-center flex-col py-8 px-20">
               <div className=" flex-grow overflow-auto">
                  <h1 className="text-5xl font-bold">Ph Festival</h1>
                  <h2 className="text-5xl font-bold">Festival, Show casing</h2>

                  <p className="text-block-75 mt-4 text-lg">
                     The story of Davai hits close to home.
                  </p>
                  <p className="text-block-75 mt-4 text-lg">
                     Davai is a company that is doing essential work in the pharmaceutical sector,
                     aiming to make quality universal healthcare affordable for all Indians.
                  </p>
                  <p className="text-block-75 mt-4 text-lg">
                     In a country like India, with its diverse and challenging landscape, this
                     mission is crucial.
                  </p>
                  <p className="text-block-75 mt-4 text-lg">
                     Their goal was to prioritize health and make it accessible to everyone.
                  </p>
                  <p className="text-block-75 mt-4 text-lg">
                     I was contacted on Upwork by their founder, Saransh Chaudhary.
                  </p>
                  <p className="text-block-75 mt-4 text-lg">
                     His in-house tech team was overwhelmed and needed assistance to clear their
                     backlogs.
                  </p>
                  <p className="text-block-75 mt-4 text-lg">That&apos;s where I came in.</p>
                  <p className="text-block-75 mt-4 text-lg">
                     They entrusted me with the entire project of developing their website and blog,
                     working full-stack with technologies like Astro.js and integrating DatoCMS on
                     the backend.
                  </p>
                  <p className="text-block-75 mt-4 text-lg">
                     My role also included ensuring robust SEO practices and optimizing performance
                     on the web.
                  </p>
               </div>
               <div>
                  <div className="my-8 text-xl">Tech Stack</div>
                  <TechStackList />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FullPageModal;
