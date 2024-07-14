// SectionBlock.tsx
import React from 'react';
import clsx from 'clsx';

type SectionBlockProps = {
   id: string;
   className?: string;
   variant?: 'default' | 'plain';
   children: React.ReactNode;
};

const SectionBlock: React.FC<SectionBlockProps> = ({
   id,
   className,
   variant = 'default',
   children,
}) => {
   return (
      <section
         id={id}
         className={clsx(
            {
               'relative mx-auto px-6 py-36 flex flex-col gap-16': variant !== 'plain',
            },
            className, // Custom className is applied last
         )}
      >
         {children}
      </section>
   );
};

export default SectionBlock;
