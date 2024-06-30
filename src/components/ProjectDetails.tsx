import Link from 'next/link';

interface ProjectDetailsProps {
   liveSiteLink: string;
   onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ liveSiteLink, onClose }) => {
   return (
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto p-5 space-y-4 rounded-xl">
         <h1 className="text-2xl">Project Details</h1>
         <p>This is the content inside the modal. The modal opened from the bottom.</p>
         <div className="flex space-x-4">
            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
               Close
            </button>
            <Link href={liveSiteLink} target="_blank" rel="noopener noreferrer">
               <a className="px-4 py-2 bg-blue-500 text-white rounded">Go to Live Site</a>
            </Link>
         </div>
      </div>
   );
};

export default ProjectDetails;
