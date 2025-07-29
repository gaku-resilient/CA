import React, { useState, useEffect } from 'react';
import { Calculator, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

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
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
        : 'bg-white'
    } fixed top-0 w-full z-50 transition-all duration-300`}>
      
      {/* Top Contact Bar */}
      <div className={`${
        isScrolled ? 'h-0 overflow-hidden' : 'h-auto'
      } bg-black text-white transition-all duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Phone className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">+91 xxxxx 43210</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Mail className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">info@VittamIntegrityServices.com</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <MapPin className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Paryagraj</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
              <span className="text-xs uppercase tracking-wider font-bold hidden sm:block">Follow Us:</span>
              <div className="flex space-x-2 sm:space-x-3">
                {['F', 'T', 'L'].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
                  >
                    {social}
                  </a>
                ))}
                <a 
                  href="https://wa.me/919354502422" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-6 sm:w-7 h-6 sm:h-7 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold rounded-full"
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
          isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
        } transition-all duration-300`}>
          
          {/* Curved Navbar Container */}
          <div className="bg-black rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-white shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
                <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white group-hover:scale-105 transition-transform">
                  VIS
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider">
                  Vittam Integrity Services
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item, index) => (
                <a 
                  key={index}
                  href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : `#${item.toLowerCase()}`}
                  className="relative group font-bold text-sm xl:text-base text-white hover:text-gray-300 transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="hidden md:block bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                BOOK CONSULTATION
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white focus:outline-none p-2 hover:bg-gray-800 rounded-full transition-colors"
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
        } lg:hidden absolute top-full left-2 right-2 sm:left-4 sm:right-4 bg-black rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 shadow-lg z-40`}>
          
          <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-3 sm:space-y-4">
              {['HOME', 'ABOUT', 'SERVICES', 'TEAM', 'CONTACT'].map((item, index) => (
                <a 
                  key={index}
                  href={item === 'HOME' ? '/' : item === 'ABOUT' ? '/about' : `#${item.toLowerCase()}`}
                  className="block text-white hover:text-gray-300 py-2 sm:py-3 font-bold text-base sm:text-lg border-b border-gray-800 hover:border-white transition-all transform hover:translate-x-2"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <button 
              className="w-full bg-white text-black py-3 sm:py-4 rounded-full font-black text-base sm:text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              BOOK CONSULTATION
            </button>

            {/* Mobile Contact Info */}
            <div className="space-y-3 pt-4 sm:pt-6 border-t border-gray-800">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="font-medium text-sm sm:text-base">+91 xxxxx 43210</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="font-medium text-sm sm:text-base">info@VittamIntegrityServices.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="font-medium text-sm sm:text-base">Paryagraj</span>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-3 sm:space-x-4 pt-4">
              {['F', 'T', 'L'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-8 sm:w-10 h-8 sm:h-10 border border-white hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
                >
                  {social}
                </a>
              ))}
              <a 
                href="https://wa.me/919354502422" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 sm:w-10 h-8 sm:h-10 border border-white hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center font-bold text-sm rounded-full"
              >
                W
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements (optimized for mobile) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 border border-gray-200 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 border border-gray-200 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>
    </header>
  );
};

export default Header;