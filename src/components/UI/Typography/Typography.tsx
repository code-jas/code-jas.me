import React from 'react';
import clsx from 'clsx';
import { BlurFade } from '../Misc';

// Type for Title component props
type TitleProps = {
   variant?: 'primary' | 'secondary' | 'tertiary' | 'branding';
   as?: React.ElementType;
   className?: string;
   id?: string;
   style?: React.CSSProperties;
   duration?: number; // Add duration prop
   inView?: boolean; // Add inView prop
} & ({ children: React.ReactNode } | { dangerouslySetInnerHTML: { __html: string } });

// Mapping of font sizes for different heading levels
const fontSize = {
   h1: 'text-4xl md:text-5xl font-bold leading-none md:leading-tight',
   h2: 'text-3xl font-medium leading-snug md:text-[40px]',
   h3: 'text-2xl font-semibold md:text-3xl',
   h4: 'text-xl font-semibold leading-snug md:text-[22px]',
   h5: 'text-lg font-medium md:text-xl',
   h6: 'text-md font-medium',
};

// Mapping of color classes based on variant
const titleColors = {
   primary: 'text-primary',
   secondary: 'text-secondary',
   tertiary: 'text-tertiary',
   branding: 'text-branding-primary',
};

// Duration mapping based on font size
const durationMapping = {
   h1: 0.4,
   h2: 0.6,
   h3: 0.6,
   h4: 0.4,
   h5: 0.6,
   h6: 0.6,
};

// Title component with dynamic tag, size, and styling
const Title: React.FC<TitleProps & { size: keyof typeof fontSize }> = ({
   variant = 'primary',
   size,
   as,
   className,
   duration, // Add duration prop
   inView = true, // Default inView to true
   ...rest
}) => {
   const Tag = as ?? size; // Use provided tag or fallback to size (h1-h6)
   const fadeDuration = duration ?? durationMapping[size]; // Use provided duration or fallback to default

   return (
      <div>
         <BlurFade duration={fadeDuration} inView={inView}>
            <Tag className={clsx(fontSize[size], titleColors[variant], className)} {...rest} />
         </BlurFade>
      </div>
   );
};

// Utility function to create title components (H1, H2, H3, etc.)
const createTitleComponent = (size: keyof typeof fontSize) => {
   const TitleComponent: React.FC<TitleProps> = (props) => <Title {...props} size={size} />;
   TitleComponent.displayName = `Title${size.toUpperCase()}`;
   return TitleComponent;
};

const H1 = createTitleComponent('h1');
const H2 = createTitleComponent('h2');
const H3 = createTitleComponent('h3');
const H4 = createTitleComponent('h4');
const H5 = createTitleComponent('h5');
const H6 = createTitleComponent('h6');

// Type for Paragraph component props
type ParagraphProps = {
   className?: string;
   textColorClassName?: string;
   as?: React.ElementType;
   duration?: number; // Add duration prop
   inView?: boolean; // Add inView prop
} & ({ children: React.ReactNode } | { dangerouslySetInnerHTML: { __html: string } });

// Paragraph component with dynamic tag and styling
const Paragraph: React.FC<ParagraphProps> = ({
   className,
   as = 'p',
   textColorClassName = 'text-secondary',
   duration = 0.6, // Add duration prop
   inView = true, // Default inView to true
   ...rest
}) => {
   return (
      <BlurFade duration={duration} inView={inView}>
         {React.createElement(as, {
            className: clsx(
               'max-w-full text-base md:text-lg font-medium leading-relaxed',
               textColorClassName,
               className,
            ),
            ...rest,
         })}
      </BlurFade>
   );
};
export { H1, H2, H3, H4, H5, H6, Paragraph };
