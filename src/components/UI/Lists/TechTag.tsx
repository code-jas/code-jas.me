// components/TechTag.tsx

import Image from 'next/image';

interface TechTagProps {
   label: string;
   icon: string;
}

const TechTag = ({ label, icon }: TechTagProps) => {
   return (
      <div className="flex items-center space-x-2 p-2 border border-primary rounded-md bg-surface-card">
         <Image src={icon} alt={`${label} icon`} width={24} height={24} />
         <span className="text-sm font-medium">{label}</span>
      </div>
   );
};

export default TechTag;
