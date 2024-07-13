import React from 'react';
import clsx from 'clsx';

// Type for Title component props
type TitleProps = {
   variant?: 'primary' | 'secondary' | 'tertiary' | 'branding';
   as?: React.ElementType;
   className?: string;
   id?: string;
   style?: React.CSSProperties;
} & ({ children: React.ReactNode } | { dangerouslySetInnerHTML: { __html: string } });

// Mapping of font sizes for different heading levels
const fontSize = {
   h1: 'text-5xl font-bold leading-tight',
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

// Title component with dynamic tag, size, and styling
const Title: React.FC<TitleProps & { size: keyof typeof fontSize }> = ({
   variant = 'primary',
   size,
   as,
   className,
   ...rest
}) => {
   const Tag = as ?? size; // Use provided tag or fallback to size (h1-h6)
   return <Tag className={clsx(fontSize[size], titleColors[variant], className)} {...rest} />;
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
} & ({ children: React.ReactNode } | { dangerouslySetInnerHTML: { __html: string } });

// Paragraph component with dynamic tag and styling
const Paragraph: React.FC<ParagraphProps> = ({
   className,
   as = 'p',
   textColorClassName = 'text-secondary',
   ...rest
}) => {
   return React.createElement(as, {
      className: clsx(
         'max-w-full text-lg font-medium leading-relaxed',
         textColorClassName,
         className,
      ),
      ...rest,
   });
};

export { H1, H2, H3, H4, H5, H6, Paragraph };
