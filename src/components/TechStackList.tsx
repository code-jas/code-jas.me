// components/TechStackList.tsx

import TechTag from './TechTag';

const techStacks = [
   { label: 'Next.js', icon: '/brand/next-js.svg' },
   { label: 'TypeScript', icon: '/brand/typescript.svg' },
   { label: 'Redux', icon: '/brand/redux.svg' },
   { label: 'CSS', icon: '/brand/css.svg' },
   { label: 'Prisma', icon: '/brand/prisma.svg' },
   { label: 'Vercel', icon: '/brand/vercel.svg' },
];

const TechStackList = () => {
   return (
      <div className="flex flex-wrap gap-4">
         {techStacks.map((tech) => (
            <TechTag key={tech.label} label={tech.label} icon={tech.icon} />
         ))}
      </div>
   );
};

export default TechStackList;
