import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

interface Option {
   label: string;
   value: string;
}

interface SegmentedControlProps {
   options: Option[];
   value: string;
   onChange: (value: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({ value, options, onChange }) => {
   const selectionRef = useRef<HTMLSpanElement>(null);

   useLayoutEffect(() => {
      const updatePillPosition = () => {
         const selectedOption = document.querySelector(
            `input[name="segmentedControl"][value="${value}"]`,
         );
         if (selectedOption && selectionRef.current) {
            const inputElement = selectedOption as HTMLInputElement;
            const optionParent = inputElement.parentElement;
            if (optionParent) {
               selectionRef.current.style.transform = `translateX(${optionParent.offsetLeft}px)`;
               selectionRef.current.style.width = `${optionParent.offsetWidth - 8}px`;
            }
         }
      };

      updatePillPosition();
      window.addEventListener('resize', updatePillPosition);

      return () => {
         window.removeEventListener('resize', updatePillPosition);
      };
   }, [value]);

   return (
      <div className="segmented-control relative bg-gray-200 dark:bg-gray-500 rounded-lg p-1 inline-flex">
         <span
            ref={selectionRef}
            className="selection absolute shadow-md rounded-lg transition-transform duration-200 h-[80%] ease-in-out"
         ></span>

         {options.map((option) => (
            <div key={option.value} className="option relative cursor-pointer">
               <input
                  type="radio"
                  id={option.value}
                  name="segmentedControl"
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => onChange(option.value)}
                  className="absolute inset-0 opacity-0"
               />
               <label
                  htmlFor={option.value}
                  className="block text-center py-2 px-4 text-primary font-medium text-sm leading-5 relative z-10"
               >
                  <span>{option.label}</span>
               </label>
            </div>
         ))}
      </div>
   );
};

SegmentedControl.propTypes = {
   value: PropTypes.string.isRequired,
   options: PropTypes.arrayOf(
      PropTypes.shape({
         value: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
      }).isRequired,
   ).isRequired,
   onChange: PropTypes.func.isRequired,
};

export default SegmentedControl;
