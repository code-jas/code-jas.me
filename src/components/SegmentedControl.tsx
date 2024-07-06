import { motion } from 'framer-motion';

interface Option {
   label: string;
   value: string;
}

interface SegmentedControlProps {
   options: Option[];
   value: string;
   onChange: (value: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({ options, value, onChange }) => {
   return (
      <div className="flex mb-4 p-2 bg-gray-200 rounded">
         {options.map((option) => (
            <motion.div
               key={option.value}
               className={`p-2 cursor-pointer mx-1 ${
                  value === option.value ? 'bg-blue-500 text-white rounded' : 'text-gray-700'
               }`}
               onClick={() => onChange(option.value)}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
            >
               {option.label}
            </motion.div>
         ))}
      </div>
   );
};

export default SegmentedControl;
