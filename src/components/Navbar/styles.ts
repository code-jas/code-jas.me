const styles = {
   navbar: `
    fixed top-0 left-0 right-0 py-4 px-8 transition-all duration-300 ease-in-out
    flex justify-center items-center z-50
  `,
   initial: `
    bg-transparent border-none
  `,
   scrolled: `
    bg-white bg-opacity-10 backdrop-blur shadow-xs
  `,
   navList: `
    flex space-x-8
  `,
   navItem: `
    text-md  text-gray-800 hover:text-gray-600 transition-colors z-10
  `,
};

export default styles;
