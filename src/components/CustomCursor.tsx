'use client';

// components/CustomCursor.tsx
import React, { useEffect, useState } from 'react';
import '@/styles/cursor.css';

const CustomCursor = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
         setPosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <div
         id="pointer f-cursor"
         style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            width: '.5cm',
            height: '.5cm',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9999,
         }}
      >
         <svg width="1cm" height="1cm">
            <g transform="scale(.8)">
               <path
                  d="M 5 5 L 30 15 L 20 20 L 15 30 L 5 5"
                  fill="#0AA5FF"
                  stroke="#B2E3FF"
                  strokeWidth="3px"
                  strokeLinejoin="round"
               />
            </g>
         </svg>
         {/* <div className="bubble">
            <p>you</p>
         </div> */}
      </div>
   );
};

export default CustomCursor;
