// import React, { useState, useEffect } from 'react';
// import { Scale, Gavel, Shield, BookOpen, Calendar, ChevronRight } from 'lucide-react';

// const AnimatedLawCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isClicking, setIsClicking] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const [cursorVariant, setCursorVariant] = useState('default');

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setIsClicking(true);
//     const handleMouseUp = () => setIsClicking(false);

//     const handleMouseEnter = (e) => {
//       if (e.target.tagName === 'BUTTON') {
//         setCursorVariant('button');
//         setIsHovering(true);
//       } else if (e.target.tagName === 'A') {
//         setCursorVariant('link');
//         setIsHovering(true);
//       } else if (e.target.getAttribute('data-cursor') === 'gavel') {
//         setCursorVariant('gavel');
//         setIsHovering(true);
//       } else if (e.target.getAttribute('data-cursor') === 'shield') {
//         setCursorVariant('shield');
//         setIsHovering(true);
//       } else {
//         setCursorVariant('default');
//         setIsHovering(false);
//       }
//     };

//     const handleMouseLeave = () => {
//       setCursorVariant('default');
//       setIsHovering(false);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mouseup', handleMouseUp);
    
//     // Add event listeners to all interactive elements
//     const interactiveElements = document.querySelectorAll('button, a, [data-cursor]');
//     interactiveElements.forEach(element => {
//       element.addEventListener('mouseenter', handleMouseEnter);
//       element.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mouseup', handleMouseUp);
//       interactiveElements.forEach(element => {
//         element.removeEventListener('mouseenter', handleMouseEnter);
//         element.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   const getCursorIcon = () => {
//     switch (cursorVariant) {
//       case 'button':
//         return <Scale className="w-6 h-6" />;
//       case 'link':
//         return <ChevronRight className="w-5 h-5" />;
//       case 'gavel':
//         return <Gavel className="w-6 h-6" />;
//       case 'shield':
//         return <Shield className="w-6 h-6" />;
//       default:
//         return <Scale className="w-5 h-5" />;
//     }
//   };

//   return (
//     <div className=" bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
//       {/* Custom Cursor */}
//       <div
//         className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
//           isClicking ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
//         }`}
//         style={{
//           left: mousePosition.x - 16,
//           top: mousePosition.y - 16,
//           transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isHovering ? 1.2 : 1})`,
//         }}
//       >
//         {/* Main cursor circle */}
//         <div className={`relative w-8 h-8 rounded-full border-2 transition-all duration-300 ${
//           isHovering 
//             ? 'border-amber-400 bg-amber-400/20' 
//             : 'border-amber-400/60 bg-amber-400/10'
//         }`}>
//           {/* Cursor icon */}
//           <div className={`absolute inset-0 flex items-center justify-center text-amber-400 transition-all duration-300 ${
//             isHovering ? 'rotate-12' : ''
//           }`}>
//             {getCursorIcon()}
//           </div>
          
//           {/* Animated rings */}
//           <div className={`absolute inset-0 rounded-full border border-amber-400/30 transition-all duration-700 ${
//             isHovering ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
//           }`}></div>
//           <div className={`absolute inset-0 rounded-full border border-amber-400/20 transition-all duration-1000 ${
//             isHovering ? 'scale-200 opacity-0' : 'scale-125 opacity-100'
//           }`}></div>
//         </div>
        
//         {/* Cursor trail dots */}
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute w-2 h-2 bg-amber-400 rounded-full opacity-60 transition-all duration-500`}
//               style={{
//                 left: `${12 + i * 4}px`,
//                 top: `${12 + i * 4}px`,
//                 animationDelay: `${i * 100}ms`,
//                 transform: `scale(${1 - i * 0.3})`,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedLawCursor;

// import React, { useState, useEffect } from 'react';
// import { Gavel } from 'lucide-react';

// const AnimatedLawCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isClicking, setIsClicking] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => {
//       setIsClicking(true);
//       setTimeout(() => setIsClicking(false), 300); // reset click after 300ms
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mousedown', handleMouseDown);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mousedown', handleMouseDown);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
//       {/* Custom Cursor */}
//       <div
//         className={`fixed pointer-events-none z-50 transition-all ease-out duration-150`}
//         style={{
//           left: mousePosition.x - 16,
//           top: mousePosition.y - 16,
//           transform: `translate(-50%, -50%) scale(${isClicking ? 0.95 : 1})`,
//         }}
//       >
//         {/* Cursor Circle */}
//         <div
//           className={`relative w-10 h-10 rounded-full border-2 transition-all duration-150 ${
//             isClicking ? 'border-amber-700 bg-amber-800/30' : 'border-amber-400/60 bg-amber-400/10'
//           }`}
//         >
//           {/* Cursor Icon with animation and color change */}
//           <div
//             className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
//               isClicking ? 'rotate-12 scale-125 animate-bounce text-[#8B4513]' : 'text-amber-400'
//             }`}
//           >
//             <Gavel className="w-6 h-6 -scale-x-100" />

//           </div>

//           {/* Faster animated rings */}
//           <div
//             className={`absolute inset-0 rounded-full border border-amber-400/40 transition-all duration-300 ${
//               isClicking ? 'scale-[2.2] opacity-0' : 'scale-100 opacity-100'
//             }`}
//           ></div>
//           <div
//             className={`absolute inset-0 rounded-full border border-amber-400/20 transition-all duration-400 ${
//               isClicking ? 'scale-[2.8] opacity-0' : 'scale-125 opacity-100'
//             }`}
//           ></div>
//         </div>

//         {/* Cursor trail dots */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-60 transition-all duration-300"
//               style={{
//                 left: `${12 + i * 4}px`,
//                 top: `${12 + i * 4}px`,
//                 transform: `scale(${1 - i * 0.9})`,
//               }}
//             />
//           ))} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedLawCursor;




import React, { useState, useEffect } from 'react';
import { Gavel } from 'lucide-react';

const AnimatedLawCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 300); // reset click after 300ms
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-all ease-out duration-100`}
        style={{
          left: mousePosition.x - 8, // Reduced offset for real cursor feel
          top: mousePosition.y - 8,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.95 : 1})`,
        }}
      >
        {/* Cursor Circle */}
        <div
          className={`relative w-14 h-14 rounded-full border-2 transition-all duration-100 ${
            isClicking ? 'border-amber-700 bg-amber-800/30' : 'border-amber-400/60 bg-amber-400/10'
          }`}
        >
          {/* Cursor Icon with animation and color change */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out ${
              isClicking ? 'rotate-12 scale-125 animate-bounce' : ''
            }`}
          >
            <Gavel className="w-8 h-8 -scale-x-100" fill="#f59e0b" stroke="#f59e0b" />
          </div>

          {/* Faster animated rings */}
          <div
            className={`absolute inset-0 rounded-full border border-amber-400/40 transition-all duration-200 ease-out ${
              isClicking ? 'scale-[2.2] opacity-0' : 'scale-100 opacity-100'
            }`}
          ></div>
          <div
            className={`absolute inset-0 rounded-full border border-amber-400/20 transition-all duration-300 ease-out ${
              isClicking ? 'scale-[2.8] opacity-0' : 'scale-125 opacity-100'
            }`}
          ></div>
        </div>

        {/* Cursor trail dots */}
        <div className="absolute inset-0 pointer-events-none">
          {/* {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-60 transition-all duration-300"
              style={{
                left: `${12 + i * 4}px`,
                top: `${12 + i * 4}px`,
                transform: `scale(${1 - i * 0.9})`,
              }}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLawCursor;