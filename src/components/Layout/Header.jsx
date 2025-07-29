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
        ? 'bg-white/95 backdrop-blur-sm shadow-2xl border-b border-gray-200' 
        : 'bg-white'
    } fixed top-0 w-full z-50 transition-all duration-500`}>
      
      {/* Top Contact Bar */}
      <div className={`${isScrolled ? 'h-0 overflow-hidden' : 'h-auto'} bg-black text-white transition-all duration-500`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">info@financewise.com</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <MapPin className="w-4 h-4 group-hover:bounce transition-transform" />
                <span className="font-medium">Mumbai, Maharashtra</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-xs uppercase tracking-wider font-bold">Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-6 h-6 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold">F</a>
                <a href="#" className="w-6 h-6 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold">T</a>
                <a href="#" className="w-6 h-6 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold">L</a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-6 h-6 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xs font-bold">W</a>
              </div>
            </div>
            <div className="md:hidden">
              <span className="text-xs font-bold">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 relative">
        <nav className={`${
          isScrolled ? 'py-3' : 'py-6'
        } transition-all duration-500`}>
          
          {/* Curved Navbar Container */}
          <div className="bg-black rounded-full px-8 py-4 flex justify-between items-center text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
                <Calculator className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white group-hover:scale-105 transition-transform">
                 VIS
                </h1>
                <p className="text-xs text-gray-300 font-medium uppercase tracking-wider">
                  Vittam Integrity Services 
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="relative group font-bold text-white hover:text-gray-300 transition-colors">
                HOME
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="about" className="relative group font-bold text-white hover:text-gray-300 transition-colors">
                ABOUT
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="relative group font-bold text-white hover:text-gray-300 transition-colors">
                SERVICES
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#team" className="relative group font-bold text-white hover:text-gray-300 transition-colors">
                TEAM
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="relative group font-bold text-white hover:text-gray-300 transition-colors">
                CONTACT
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-white text-black px-6 py-3 rounded-full font-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                BOOK CONSULTATION
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white focus:outline-none p-2 hover:bg-gray-800 rounded-full transition-colors"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transform rotate-180 transition-transform" />
                ) : (
                  <Menu className="w-6 h-6 transform hover:rotate-180 transition-transform duration-300" />
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
        } lg:hidden absolute top-full left-4 right-4 bg-black rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl z-40`}>
          
          <div className="p-8 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <a 
                href="#home" 
                className="block text-white hover:text-gray-300 py-3 font-bold text-lg border-b border-gray-800 hover:border-white transition-all transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                HOME
              </a>
              <a 
                href="#about" 
                className="block text-white hover:text-gray-300 py-3 font-bold text-lg border-b border-gray-800 hover:border-white transition-all transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                ABOUT
              </a>
              <a 
                href="#services" 
                className="block text-white hover:text-gray-300 py-3 font-bold text-lg border-b border-gray-800 hover:border-white transition-all transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                SERVICES
              </a>
              <a 
                href="#team" 
                className="block text-white hover:text-gray-300 py-3 font-bold text-lg border-b border-gray-800 hover:border-white transition-all transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                TEAM
              </a>
              <a 
                href="#contact" 
                className="block text-white hover:text-gray-300 py-3 font-bold text-lg border-b border-gray-800 hover:border-white transition-all transform hover:translate-x-2"
                onClick={toggleMobileMenu}
              >
                CONTACT
              </a>
            </div>

            {/* Mobile CTA Button */}
            <button 
              className="w-full bg-white text-black py-4 rounded-full font-black text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              BOOK CONSULTATION
            </button>

            {/* Mobile Contact Info */}
            <div className="space-y-3 pt-6 border-t border-gray-800">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="font-medium">info@financewise.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 pt-4">
              <a href="#" className="w-10 h-10 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center font-bold rounded-full">F</a>
              <a href="#" className="w-10 h-10 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center font-bold rounded-full">T</a>
              <a href="#" className="w-10 h-10 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center font-bold rounded-full">L</a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center font-bold rounded-full">W</a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-4 left-1/4 w-2 h-2 border border-gray-200 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-gray-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 border border-gray-200 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
      </div>
    </header>
  );
};

export default Header;