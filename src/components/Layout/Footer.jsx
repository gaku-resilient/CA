import React from 'react';
import { Calculator, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Shield, TrendingUp, Users, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/40 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/20 animate-pulse delay-1000"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                STAY UPDATED WITH
                <span className="block">FINANCIAL INSIGHTS</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get expert tax tips, financial strategies, and regulatory updates 
                delivered straight to your inbox every month.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="font-bold">TAX UPDATES</span>
                </span>
                <span className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-bold">INVESTMENT TIPS</span>
                </span>
                <span className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4" />
                  <span className="font-bold">BUSINESS INSIGHTS</span>
                </span>
              </div>
            </div>
            
            {/* <div className="space-y-6">
              <div className="bg-gray-900 p-8 rounded-3xl transform hover:scale-105 transition-all duration-300">
          
              
              </div>
            </div> */}

                   {/* Emergency Contact */}
            <div className="bg-gray-900 p-6 rounded-2xl border-2 border-gray-800 hover:border-white transition-all duration-300">
              <h5 className="font-black text-white mb-2 uppercase tracking-wide">24/7 Emergency</h5>
              <p className="text-gray-300 text-sm mb-3">For urgent tax matters</p>
              <a href="tel:+919876543210" className="text-white font-bold text-lg hover:scale-105 transition-transform inline-block">
                +91 XXXXX 43210
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
                  <Calculator className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">VIS</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wide font-bold">
                    Vittam Integrity Services 
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Your trusted financial partners providing expert chartered accountant 
                services for over 15 years. We help businesses and individuals achieve 
                financial success through strategic planning and professional expertise.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="font-black text-lg uppercase tracking-wide">CERTIFICATIONS</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-gray-700 hover:border-white transition-all cursor-pointer">
                  ICAI CERTIFIED
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-gray-700 hover:border-white transition-all cursor-pointer">
                  GST PRACTITIONER
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-gray-700 hover:border-white transition-all cursor-pointer">
                  ISO 9001:2015
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="font-black text-xl uppercase tracking-wide">QUICK LINKS</h4>
            <div className="space-y-4">
              {[
                'About Us',
                'Contact Us',
                'Services',
              
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-gray-300 hover:text-white font-medium transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <span className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span>{link}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="font-black text-xl uppercase tracking-wide">OUR SERVICES</h4>
            <div className="space-y-4">
              {[
                { name: 'Tax Planning & Filing', icon: TrendingUp },
                { name: 'Audit & Assurance', icon: Shield },
                { name: 'Business Consulting', icon: Users },
                { name: 'GST Services', icon: Award },
                { name: 'Company Registration', icon: Shield },
                { name: 'Payroll Management', icon: Users },
                { name: 'Financial Planning', icon: TrendingUp },
                { name: 'Investment Advisory', icon: Award }
              ].map((service, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium group-hover:translate-x-1 transition-transform">
                    {service.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="font-black text-xl uppercase tracking-wide">GET IN TOUCH</h4>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">OFFICE ADDRESS</h5>
                  <p className="text-gray-300 leading-relaxed">
                    123 Business District,<br />
                    {/* Nariman Point, Mumbai,<br />
                    Maharashtra - 400021 */}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">PHONE</h5>
                  <p className="text-gray-300">+91 xxxxx 43210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">EMAIL</h5>
                  <p className="text-gray-300">VittamIntegrityServices.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">BUSINESS HOURS</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Mon - Fri: 9:00 AM - 7:00 PM<br />
                    Sat: 9:00 AM - 5:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 font-medium">
                © 2025 Vittam Integrity Services . All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Designed by Resilient for financial excellence
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-bold uppercase tracking-wide text-sm">Follow Us:</span>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/919354502422" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-black border-2 border-white text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="text-2xl">📩</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;