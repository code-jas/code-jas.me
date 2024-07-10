// components/TechStackList.tsx

import { TechStack } from '@/types/profile';
import TechTag from './TechTag';

interface TechStackListProps {
   techStacks: TechStack[];
}

const TechStackList: React.FC<TechStackListProps> = ({ techStacks }) => {
   return (
      <div className="flex flex-wrap gap-4">
         {techStacks.map((tech: TechStack) => (
            <TechTag key={tech.label} label={tech.label} icon={tech.icon} />
         ))}
      </div>
   );
};

export default TechStackList;
