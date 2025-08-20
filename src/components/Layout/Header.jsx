// import React, { useState, useEffect } from 'react';
// import { Calculator, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={`${
//       isScrolled 
//         ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
//         : 'bg-white'
//     } fixed top-0 w-full z-50 transition-all duration-300`}>
      
//       {/* Top Contact Bar */}
//       <div className={`${
//         isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
//       } bg-black text-white transition-all duration-300`}>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
//             <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <Phone className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform" />
//                 <span className="font-medium">+91 xxxxx 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <Mail className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">info@VittamIntegrityServices.com</span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <MapPin className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">Paryagraj</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
//               <span className="text-xs uppercase tracking-wider font-bold hidden sm:block">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-3">
//                 {['F', 'T', 'L'].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
//                   >
//                     {social}
//                   </a>
//                 ))}
//                 <a 
//                   href="https://wa.me/919354502422" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
//                 >
//                   W
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <nav className={`${
//           isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
//         } transition-all duration-300`}>
          
//           {/* Curved Navbar Container */}
//           <div className="bg-black rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-white shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            
//             {/* Logo */}
//             <div className="flex items-center space-x-2 sm:space-x-3 group">
//               <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
//                 <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
//               </div>
//               <div>
//                 <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white group-hover:scale-105 transition-transform">
//                   VIS
//                 </h1>
//                 <p className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider">
//                   Vittam Integrity Services
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
//               {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                       `#${item.toLowerCase()}`}
//                   className="relative group font-bold text-sm xl:text-base text-white hover:text-gray-300 transition-colors"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               ))}
//             </div>

//             {/* CTA Button & Mobile Menu */}
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               <button className="hidden md:block bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
//                 BOOK CONSULTATION
//               </button>
              
//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-white focus:outline-none p-2 hover:bg-gray-800 rounded-full transition-colors"
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-5 sm:w-6 h-5 sm:h-6 transform rotate-180 transition-transform" />
//                 ) : (
//                   <Menu className="w-5 sm:w-6 h-5 sm:h-6 transform hover:rotate-180 transition-transform duration-300" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className={`${
//           isMobileMenuOpen 
//             ? 'max-h-screen opacity-100 visible' 
//             : 'max-h-0 opacity-0 invisible'
//         } lg:hidden absolute top-full left-2 right-2 sm:left-4 sm:right-4 bg-black rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 shadow-lg z-40`}>
          
//           <div className="p-4  sm:p-6 md:p-8 space-y-4 sm:space-y-6">
//             {/* Mobile Navigation Links */}
//             <div className="space-y-3 sm:space-y-4">
//               {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                       `#${item.toLowerCase()}`}
//                   className="block text-white hover:text-gray-300 py-2 sm:py-3 font-bold text-base sm:text-lg border-b border-gray-800 hover:border-white transition-all transform hover:translate-x-2"
//                   onClick={toggleMobileMenu}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>

//             {/* Mobile CTA Button */}
//             <button 
//               className="w-full bg-white text-black py-3 sm:py-4 rounded-full font-black text-base sm:text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
//               onClick={toggleMobileMenu}
//             >
//               BOOK CONSULTATION
//             </button>

//             {/* Mobile Contact Info */}
//             <div className="space-y-3 pt-4 sm:pt-6 border-t border-gray-800">
//               <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
//                 <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">+91 xxxxx 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
//                 <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">info@VittamIntegrityServices.com</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
//                 <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">Paryagraj</span>
//               </div>
//             </div>

//             {/* Mobile Social Links */}
//             <div className="flex justify-center space-x-3 sm:space-x-4 pt-4">
//               {['F', 'T', 'L'].map((social, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="w-8 sm:w-10 h-8 sm:h-10 border border-white hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
//                 >
//                   {social}
//                 </a>
//               ))}
//               <a 
//                 href="https://wa.me/919354502422" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="w-8 sm:w-10 h-8 sm:h-10 border border-white hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
//               >
//                 W
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Background Elements (optimized for mobile) */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden sm:block">
//         <div className="absolute top-4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 border border-gray-200 rounded-full animate-pulse"></div>
//         <div className="absolute top-8 right-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
//         <div className="absolute bottom-4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 border border-gray-200 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
//       </div>
//     </header>
//   );
// };

// export default Header;










// import React, { useState, useEffect } from 'react';
// import { Calculator, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={`${
//       isScrolled 
//         ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200' 
//         : 'bg-white'
//     } fixed top-0 w-full z-50 transition-all duration-300`}>
      
//       {/* Top Contact Bar */}
//       <div className={`${
//         isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
//       } bg-gradient-to-r from-teal-600 to-teal-700 text-white transition-all duration-300`}>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
//             <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
//               <div className="flex items-center space-x-2 group cursor-pointer hover:text-emerald-300 transition-colors">
//                 <Phone className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform" />
//                 <span className="font-medium">+91 xxxxx 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer hover:text-emerald-300 transition-colors">
//                 <Mail className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">info@VittamIntegrityServices.com</span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer hover:text-emerald-300 transition-colors">
//                 <MapPin className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">Prayagraj</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
//               <span className="text-xs uppercase tracking-wider font-bold hidden sm:block text-slate-200">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-3">
//                 {['F', 'T', 'L'].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-emerald-400 hover:border-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full transform hover:scale-110"
//                   >
//                     {social}
//                   </a>
//                 ))}
//                 <a 
//                   href="https://wa.me/919354502422" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-emerald-400 hover:border-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full transform hover:scale-110"
//                 >
//                   W
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <nav className={`${
//           isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
//         } transition-all duration-300`}>
          
//           {/* Curved Navbar Container */}
//           <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-white shadow-2xl transform hover:scale-[1.01] transition-all duration-300 border border-teal-500">
            
//             {/* Logo */}
//             <div className="flex items-center space-x-3 sm:space-x-4 group">
//               <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
//                 <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600" />
//               </div>
//               <div>
//                 <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white group-hover:scale-105 transition-transform">
//                  वित्तम्
//                 </h1>
//                 <p className="text-xs sm:text-sm text-slate-200 font-medium uppercase tracking-wider">
//                   Vittam Integrity Services
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//               {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                       `#${item.toLowerCase()}`}
//                   className="relative group font-bold text-sm xl:text-base text-white hover:text-emerald-300 transition-colors duration-300"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
//                 </a>
//               ))}
//             </div>

//             {/* CTA Button & Mobile Menu */}
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               <button className="hidden md:block bg-white text-teal-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
//                 BOOK CONSULTATION
//               </button>
              
//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-white focus:outline-none p-2 hover:bg-teal-500 rounded-full transition-colors duration-300"
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-5 sm:w-6 h-5 sm:h-6 transform rotate-180 transition-transform" />
//                 ) : (
//                   <Menu className="w-5 sm:w-6 h-5 sm:h-6 transform hover:rotate-180 transition-transform duration-300" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className={`${
//           isMobileMenuOpen 
//             ? 'max-h-screen opacity-100 visible' 
//             : 'max-h-0 opacity-0 invisible'
//         } lg:hidden absolute top-full left-2 right-2 sm:left-4 sm:right-4 bg-gradient-to-b from-teal-600 to-teal-700 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl z-40 border border-teal-500`}>
          
//           <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
//             {/* Mobile Navigation Links */}
//             <div className="space-y-3 sm:space-y-4">
//               {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                       `#${item.toLowerCase()}`}
//                   className="block text-white hover:text-emerald-300 py-2 sm:py-3 font-bold text-base sm:text-lg border-b border-teal-500 hover:border-emerald-400 transition-all transform hover:translate-x-2 hover:bg-teal-500 hover:bg-opacity-30 px-2 rounded-lg"
//                   onClick={toggleMobileMenu}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>

//             {/* Mobile CTA Button */}
//             <button 
//               className="w-full bg-white text-teal-600 py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
//               onClick={toggleMobileMenu}
//             >
//               BOOK CONSULTATION
//             </button>

//             {/* Mobile Contact Info */}
//             <div className="space-y-3 pt-4 sm:pt-6 border-t border-teal-500">
//               <div className="flex items-center space-x-2 sm:space-x-3 text-slate-200 hover:text-emerald-300 transition-colors cursor-pointer">
//                 <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
//                 <span className="font-medium text-sm sm:text-base">+91 xxxxx 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-slate-200 hover:text-emerald-300 transition-colors cursor-pointer">
//                 <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
//                 <span className="font-medium text-sm sm:text-base">info@VittamIntegrityServices.com</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-slate-200 hover:text-emerald-300 transition-colors cursor-pointer">
//                 <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
//                 <span className="font-medium text-sm sm:text-base">Prayagraj</span>
//               </div>
//             </div>

//             {/* Mobile Social Links */}
//             <div className="flex justify-center space-x-3 sm:space-x-4 pt-4">
//               {['F', 'T', 'L'].map((social, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="w-8 sm:w-10 h-8 sm:h-10 border-2 border-white hover:bg-emerald-400 hover:border-emerald-400 hover:text-white text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full transform hover:scale-110 shadow-lg"
//                 >
//                   {social}
//                 </a>
//               ))}
//               <a 
//                 href="https://wa.me/919354502422" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="w-8 sm:w-10 h-8 sm:h-10 border-2 border-white hover:bg-emerald-400 hover:border-emerald-400 hover:text-white text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full transform hover:scale-110 shadow-lg"
//               >
//                 W
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden sm:block opacity-20">
//         <div className="absolute top-4 left-1/4 w-2 h-2 border-2 border-emerald-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce"></div>
//         <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 border border-slate-300 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
//         <div className="absolute top-6 right-1/4 w-3 h-3 border border-emerald-300 rotate-45 animate-pulse"></div>
//       </div>
//     </header>
//   );
// };

// export default Header;

















// import React, { useState, useEffect } from 'react';
// import { Calculator, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={`${
//       isScrolled 
//         ? 'bg-[#ffffff]/95 backdrop-blur-sm shadow-lg border-b border-[#c8d8e4]' 
//         : 'bg-[#ffffff]'
//     } fixed top-0 w-full z-50 transition-all duration-300`}>
      
//       {/* Top Contact Bar */}
//       <div className={`${
//         isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
//       } bg-[#0A2342] text-[#ffffff] transition-all duration-300`}>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
//             <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <Phone className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform" />
//                 <span className="font-medium">+919975835302 </span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <Mail className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">vittamintegrityservices@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <MapPin className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">Bangalore -560068, Karnataka, India </span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
//               <span className="text-xs uppercase tracking-wider font-bold hidden sm:block">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-3">
//                 {['F', 'T', 'L'].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-6 sm:w-7 h-6 sm:h-7 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
//                   >
//                     {social}
//                   </a>
//                 ))}
//                 <a 
//                   href="https://wa.me/919975835302" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="w-6 sm:w-7 h-6 sm:h-7 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
//                 >
//                   W
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <nav className={`${
//           isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
//         } transition-all duration-300`}>
          
//           {/* Curved Navbar Container */}
//           <div className="bg-[#123458] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-[#ffffff] shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            
//             {/* Logo */}
//             <div className="flex items-center space-x-2 sm:space-x-3 group">
//               <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#ffffff] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
//                 <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-[#2b6777]" />
//               </div>
//               <div>
//                 <h1 className="text-lg sm:text-xl md:text-2xl font-black text-[#ffffff] group-hover:scale-105 transition-transform">
//                  Vittam (वित्तम्)
//                 </h1>
//                 <p className="text-xs sm:text-sm text-[#c8d8e4] font-medium uppercase tracking-wider">
//                   Vittam Integrity Services
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
//               {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT', 'BLOGS'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                       item === 'CONTACT' ? '/contact':
//                          item === 'TEAM' ? '/team':
//                          item === 'BLOGS' ? '/blogs':
//                       `#${item.toLowerCase()}`}
//                   className="relative group font-bold text-sm xl:text-base text-[#ffffff] hover:text-[#c8d8e4] transition-colors"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffffff] transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               ))}
//             </div>

//             {/* CTA Button & Mobile Menu */}
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               <button className="hidden md:block bg-[#ffffff] text-[#2b6777] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base hover:bg-[#f2f2f2] transition-all duration-300 transform hover:scale-105 hover:shadow-md">
//                 BOOK CONSULTATION
//               </button>
              
//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-[#ffffff] focus:outline-none p-2 hover:bg-[#52ab98] rounded-full transition-colors"
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-5 sm:w-6 h-5 sm:h-6 transform rotate-180 transition-transform" />
//                 ) : (
//                   <Menu className="w-5 sm:w-6 h-5 sm:h-6 transform hover:rotate-180 transition-transform duration-300" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className={`${
//           isMobileMenuOpen 
//             ? 'max-h-screen opacity-100 visible' 
//             : 'max-h-0 opacity-0 invisible'
//         } lg:hidden absolute top-full left-2 right-2 sm:left-4 sm:right-4 bg-[#2b6777] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 shadow-lg z-40`}>
          
//           <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
//             {/* Mobile Navigation Links */}
//             <div className="space-y-3 sm:space-y-4">
//               {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                         item === 'CONTACT' ? '/contact':
//                         item === 'TEAM' ? '/team':
//                       `#${item.toLowerCase()}`}
//                   className="block text-[#ffffff] hover:text-[#c8d8e4] py-2 sm:py-3 font-bold text-base sm:text-lg border-b border-[#c8d8e4] hover:border-[#ffffff] transition-all transform hover:translate-x-2"
//                   onClick={toggleMobileMenu}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>

//             {/* Mobile CTA Button */}
//             <button 
//               className="w-full bg-[#ffffff] text-[#2b6777] py-3 sm:py-4 rounded-full font-black text-base sm:text-lg hover:bg-[#f2f2f2] transition-all duration-300 transform hover:scale-105"
//               onClick={toggleMobileMenu}
//             >
//               BOOK CONSULTATION
//             </button>

//             {/* Mobile Contact Info */}
//             <div className="space-y-3 pt-4 sm:pt-6 border-t border-[#c8d8e4]">
//               <div className="flex items-center space-x-2 sm:space-x-3 text-[#c8d8e4]">
//                 <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">+91 xxxxx 43210</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-[#c8d8e4]">
//                 <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">info@VittamIntegrityServices.com</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-[#c8d8e4]">
//                 <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">Paryagraj</span>
//               </div>
//             </div>

//             {/* Mobile Social Links */}
//             <div className="flex justify-center space-x-3 sm:space-x-4 pt-4">
//               {['F', 'T', 'L'].map((social, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="w-8 sm:w-10 h-8 sm:h-10 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] text-[#ffffff] transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
//                 >
//                   {social}
//                 </a>
//               ))}
//               <a 
//                 href="https://wa.me/919354502422" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="w-8 sm:w-10 h-8 sm:h-10 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] text-[#ffffff] transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
//               >
//                 W
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Background Elements (optimized for mobile) */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden sm:block">
//         <div className="absolute top-4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 border border-[#c8d8e4] rounded-full animate-pulse"></div>
//         <div className="absolute top-8 right-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#f2f2f2] rounded-full animate-bounce"></div>
//         <div className="absolute bottom-4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 border border-[#c8d8e4] rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
//       </div>
//     </header>
//   );
// };

// export default Header;












import React, { useState, useEffect } from 'react';
import { Calculator, Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${
      isScrolled 
        ? 'bg-[#ffffff]/95 backdrop-blur-sm shadow-lg border-b border-[#c8d8e4]' 
        : 'bg-[#ffffff]'
    } fixed top-0 w-full z-50 transition-all duration-300`}>
      
      {/* Top Contact Bar */}
      <div className={`${
        isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
      } bg-[#0A2342] text-[#ffffff] transition-all duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Phone className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform" />
                <a href="tel:+919623365775" className="font-medium">+91-9623365775</a>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Mail className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@vittamintegrityservices.com" className="font-medium">info@vittamintegrityservices.com</a>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <MapPin className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Bangalore, Karnataka 560068</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
              <span className="text-xs uppercase tracking-wider font-bold hidden sm:block">Follow Us:</span>
              <div className="flex space-x-2 sm:space-x-3">
                {[
                  { icon: Facebook, name: 'Facebook', href: 'https://facebook.com/vittamintegrityservices' },
                  { icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com/in/vittamintegrityservices' },
                  { icon: Instagram, name: 'Instagram', href: 'https://instagram.com/vittamintegrityservices' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 sm:w-7 h-6 sm:h-7 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
                  >
                    <social.icon className="w-3 sm:w-4 h-3 sm:h-4" />
                  </a>
                ))}
                <a 
                  href="https://wa.me/919623365775" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-6 sm:w-7 h-6 sm:h-7 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
                >
                  W
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <nav className={`${
          isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4'
        } transition-all duration-300`}>
          
          {/* Curved Navbar Container */}
          <div className="bg-[#123458] rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex justify-between items-center text-[#ffffff] shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#ffffff] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
                <Calculator className="w-4 sm:w-5 h-4 sm:h-5 text-[#2b6777]" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-black text-[#ffffff] group-hover:scale-105 transition-transform">
                  Vittam (वित्तम्)
                </h1>
                <p className="text-xs sm:text-sm text-[#c8d8e4] font-medium uppercase tracking-wider">
                  Vittam Integrity Services
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
              {['HOME', 'ABOUT', 'TEAM', 'SERVICES','CONTACT', ].map((item, index) => (
                <a 
                  key={index}
                  href={item === 'HOME' ? '/' :
                    item === 'ABOUT' ? '/about' :
                    item === 'TEAM' ? '/team' :
                    item === 'SERVICES' ? '/services' :
                    item === 'CONTACT' ? '/contact' :
                    `#${item.toLowerCase()}`}
                  className="relative group font-bold text-xs xl:text-sm text-[#ffffff] hover:text-[#c8d8e4] transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffffff] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <a
                href="https://calendly.com/vittamintegrityservices/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-[#ffffff] text-[#2b6777] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-black text-xs sm:text-sm hover:bg-[#f2f2f2] transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                BOOK CONSULTATION
              </a>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-[#ffffff] focus:outline-none p-2 hover:bg-[#52ab98] rounded-full transition-colors"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 sm:w-6 h-5 sm:h-6 transform rotate-180 transition-transform" />
                ) : (
                  <Menu className="w-5 sm:w-6 h-5 sm:h-6 transform hover:rotate-180 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } lg:hidden absolute top-full left-2 right-2 sm:left-3 sm:right-3 bg-[#2b6777] rounded-2xl overflow-hidden transition-all duration-500 shadow-lg z-40`}>
          
          <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 sm:space-y-3">
              {['HOME', 'ABOUT', 'TEAM', 'SERVICE' , 'CONTACT',  ].map((item, index) => (
                <a 
                  key={index}
                  href={item === 'HOME' ? '/' :
                    item === 'ABOUT' ? '/about' :
                    item === 'TEAM' ? '/team' :
                    item === 'SERVICE' ? '/services' :
                    item === 'CONTACT' ? '/contact' :
                    item === 'BLOGS' ? '/blogs' :
                    `#${item.toLowerCase()}`}
                  className="block text-[#ffffff] hover:text-[#c8d8e4] py-2 sm:py-2.5 font-bold text-sm sm:text-base border-b border-[#c8d8e4] hover:border-[#ffffff] transition-all transform hover:translate-x-2"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <a 
              href="https://calendly.com/vittamintegrityservices/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#ffffff] text-[#2b6777] py-2.5 sm:py-3 rounded-full font-black text-sm sm:text-base hover:bg-[#f2f2f2] transition-all duration-300 transform hover:scale-105 text-center"
              onClick={toggleMobileMenu}
            >
              BOOK CONSULTATION
            </a>

            {/* Mobile Contact Info */}
            <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-[#c8d8e4]">
              <div className="flex items-center space-x-2 sm:space-x-3 text-[#c8d8e4]">
                <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
                <a href="tel:+919623365775" className="font-medium text-sm sm:text-base">+91-9623365775</a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-[#c8d8e4]">
                <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
                <a href="mailto:info@vittamintegrityservices.com" className="font-medium text-sm sm:text-base">info@vittamintegrityservices.com</a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-[#c8d8e4]">
                <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="font-medium text-sm sm:text-base">Bangalore, Karnataka 560068</span>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-2 sm:space-x-3 pt-3 sm:pt-4">
              {[
                { icon: Facebook, name: 'Facebook', href: 'https://facebook.com/vittamintegrityservices' },
                { icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com/in/vittamintegrityservices' },
                { icon: Instagram, name: 'Instagram', href: 'https://instagram.com/vittamintegrityservices' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 sm:w-9 h-8 sm:h-9 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] text-[#ffffff] transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
                >
                  <social.icon className="w-3 sm:w-4 h-3 sm:h-4" />
                </a>
              ))}
              <a 
                href="https://wa.me/919623365775" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 sm:w-9 h-8 sm:h-9 border border-[#ffffff] hover:bg-[#ffffff] hover:text-[#2b6777] text-[#ffffff] transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
              >
                W
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements (optimized for mobile) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-3 sm:top-4 left-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 border border-[#c8d8e4] rounded-full animate-pulse"></div>
        <div className="absolute top-6 sm:top-8 right-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#f2f2f2] rounded-full animate-bounce"></div>
        <div className="absolute bottom-3 sm:bottom-4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 border border-[#c8d8e4] rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vittam Integrity Services",
          "description": "Bangalore's premier financial advisory firm providing expert taxation, audit, compliance, and business advisory services.",
          "url": "https://vittamintegrityservices.com",
          "telephone": "+91-9623365775",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "16046, Tower 16, Prestige Song of the South, Begur Road, Yelanahalli",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560068",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://facebook.com/vittamintegrityservices",
            "https://linkedin.com/in/vittamintegrityservices",
            "https://instagram.com/vittamintegrityservices"
          ]
        })
      }} />
    </header>
  );
};

export default Header;












// import React, { useState, useEffect } from 'react';
// import { Calculator, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={`${
//       isScrolled 
//         ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-sky-200' 
//         : 'bg-white'
//     } fixed top-0 w-full z-50 transition-all duration-300`}>
      
//       {/* Top Contact Bar */}
//       <div className={`${
//         isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
//       } bg-teal-600 text-white transition-all duration-300`}>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
//           <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
//             <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <Phone className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform" />
//                 <span className="font-medium">+91 9623365775</span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <Mail className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">sunitakulthe@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2 group cursor-pointer">
//                 <MapPin className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">Pune, Maharashtra</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
//               <span className="text-xs uppercase tracking-wider font-bold hidden sm:block">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-3">
//                 {['F', 'T', 'L'].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-white hover:text-teal-600 transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
//                   >
//                     {social}
//                   </a>
//                 ))}
//                 <a 
//                   href="https://wa.me/919623365775" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-white hover:text-teal-600 transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
//                 >
//                   W
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <nav className={`${
//           isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
//         } transition-all duration-300`}>
          
//           {/* Curved Navbar Container */}
//           <div className="bg-gradient-to-r from-teal-600 to-slate-600 rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-white shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            
//             {/* Logo */}
//             <div className="flex items-center space-x-2 sm:space-x-3 group">
//               <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
//                 <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600" />
//               </div>
//               <div>
//                 <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white group-hover:scale-105 transition-transform">
//                   CA Sunita Kulthe
//                 </h1>
//                 <p className="text-xs sm:text-sm text-sky-200 font-medium uppercase tracking-wider">
//                   Kulthe & Associates
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
//               {['HOME', 'ABOUT', 'SERVICES', 'EXPERTISE', 'CONTACT'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                       `#${item.toLowerCase()}`}
//                   className="relative group font-bold text-sm xl:text-base text-white hover:text-sky-200 transition-colors"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               ))}
//             </div>

//             {/* CTA Button & Mobile Menu */}
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               <button className="hidden md:block bg-white text-teal-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base hover:bg-gray-50 hover:shadow-md transition-all duration-300 transform hover:scale-105">
//                 BOOK CONSULTATION
//               </button>
              
//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-white focus:outline-none p-2 hover:bg-teal-700 rounded-full transition-colors"
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-5 sm:w-6 h-5 sm:h-6 transform rotate-180 transition-transform" />
//                 ) : (
//                   <Menu className="w-5 sm:w-6 h-5 sm:h-6 transform hover:rotate-180 transition-transform duration-300" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div className={`${
//           isMobileMenuOpen 
//             ? 'max-h-screen opacity-100 visible' 
//             : 'max-h-0 opacity-0 invisible'
//         } lg:hidden absolute top-full left-2 right-2 sm:left-4 sm:right-4 bg-gradient-to-br from-teal-600 to-slate-600 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 shadow-lg z-40`}>
          
//           <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
//             {/* Mobile Navigation Links */}
//             <div className="space-y-3 sm:space-y-4">
//               {['HOME', 'ABOUT', 'SERVICES', 'EXPERTISE', 'CONTACT'].map((item, index) => (
//                 <a 
//                   key={index}
//                   href={item === 'HOME' ? '/' :
//                      item === 'ABOUT' ? '/about' :
//                       item === 'SERVICES' ? '/services':
//                       `#${item.toLowerCase()}`}
//                   className="block text-white hover:text-sky-200 py-2 sm:py-3 font-bold text-base sm:text-lg border-b border-sky-200 hover:border-white transition-all transform hover:translate-x-2"
//                   onClick={toggleMobileMenu}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>

//             {/* Mobile CTA Button */}
//             <button 
//               className="w-full bg-white text-teal-600 py-3 sm:py-4 rounded-full font-black text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
//               onClick={toggleMobileMenu}
//             >
//               BOOK CONSULTATION
//             </button>

//             {/* Mobile Contact Info */}
//             <div className="space-y-3 pt-4 sm:pt-6 border-t border-sky-200">
//               <div className="flex items-center space-x-2 sm:space-x-3 text-sky-200">
//                 <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">+91 9623365775</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-sky-200">
//                 <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">sunitakulthe@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-2 sm:space-x-3 text-sky-200">
//                 <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
//                 <span className="font-medium text-sm sm:text-base">Pune, Maharashtra</span>
//               </div>
//             </div>

//             {/* Mobile Social Links */}
//             <div className="flex justify-center space-x-3 sm:space-x-4 pt-4">
//               {['F', 'T', 'L'].map((social, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="w-8 sm:w-10 h-8 sm:h-10 border border-white hover:bg-white hover:text-teal-600 text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
//                 >
//                   {social}
//                 </a>
//               ))}
//               <a 
//                 href="https://wa.me/919623365775" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="w-8 sm:w-10 h-8 sm:h-10 border border-white hover:bg-white hover:text-teal-600 text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
//               >
//                 W
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Background Elements (optimized for mobile) */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden sm:block">
//         <div className="absolute top-4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 border border-sky-300 rounded-full animate-pulse"></div>
//         <div className="absolute top-8 right-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-teal-200 rounded-full animate-bounce"></div>
//         <div className="absolute bottom-4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 border border-sky-300 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
//       </div>
//     </header>
//   );
// };

// export default Header;