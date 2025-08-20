// import React from 'react';
// import { Calculator, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Shield, TrendingUp, Users, Award, MessageCircle } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative bg-black text-white overflow-hidden">
      
//       {/* Animated Background Elements (optimized for mobile) */}
//       <div className="absolute inset-0 opacity-10 hidden sm:block">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-white/50 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-white/30 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-white/40 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        
//         {/* Animated Lines */}
//         <div className="absolute top-0 left-1/4 w-px h-full bg-white/20 animate-pulse"></div>
//         <div className="absolute top-0 right-1/4 w-px h-full bg-white/20 animate-pulse delay-1000"></div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="relative z-10 border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div className="space-y-4 sm:space-y-6">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
//                 STAY UPDATED WITH
//                 <span className="block">FINANCIAL INSIGHTS</span>
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
//                 Get expert tax tips, financial strategies, and regulatory updates 
//                 delivered straight to your inbox every month.
//               </p>
//               <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
//                 <span className="flex items-center space-x-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-full">
//                   <Shield className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">TAX UPDATES</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-full">
//                   <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">INVESTMENT TIPS</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-full">
//                   <Users className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">BUSINESS INSIGHTS</span>
//                 </span>
//               </div>
//             </div>
            
//             {/* Emergency Contact */}
//             <div className="bg-gray-900 p-4 sm:p-6 rounded-2xl border-2 border-gray-800 hover:border-white transition-all duration-300">
//               <h5 className="font-black text-white mb-2 uppercase tracking-wide text-sm sm:text-base">24/7 Emergency</h5>
//               <p className="text-gray-300 text-xs sm:text-sm mb-3">For urgent tax matters</p>
//               <a href="tel:+919876543210" className="text-white font-bold text-base sm:text-lg hover:scale-105 transition-transform inline-block">
//                 +91 XXXXX 43210
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
//           {/* Company Info */}
//           <div className="space-y-6 sm:space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2 sm:space-x-3 group">
//                 <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
//                   <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-black">VIS</h3>
//                   <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide font-bold">
//                     Vittam Integrity Services
//                   </p>
//                 </div>
//               </div>
              
//               <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
//                 Your trusted financial partners providing expert chartered accountant 
//                 services for over 15 years. We help businesses and individuals achieve 
//                 financial success through strategic planning and professional expertise.
//               </p>
//             </div>

//             {/* Certifications */}
//             <div className="space-y-4">
//               <h4 className="font-black text-base sm:text-lg uppercase tracking-wide">CERTIFICATIONS</h4>
//               <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
//                 {['ICAI CERTIFIED', 'GST PRACTITIONER', 'ISO 9001:2015'].map((cert, index) => (
//                   <span key={index} className="bg-gray-800 px-3 sm:px-4 py-2 rounded-full font-bold border-2 border-gray-700 hover:border-white transition-all cursor-pointer">
//                     {cert}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide">QUICK LINKS</h4>
//             <div className="space-y-3 sm:space-y-4">
//               {['About Us', 'Contact Us', 'Services'].map((link, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="block text-gray-300 hover:text-white font-medium text-sm sm:text-base transition-all duration-300 transform hover:translate-x-2 group"
//                 >
//                   <span className="flex items-center space-x-2">
//                     <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                     <span>{link}</span>
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide">OUR SERVICES</h4>
//             <div className="space-y-3 sm:space-y-4">
//               {[
//                 { name: 'Tax Planning & Filing', icon: TrendingUp },
//                 { name: 'Audit & Assurance', icon: Shield },
//                 { name: 'Business Consulting', icon: Users },
//                 { name: 'GST Services', icon: Award },
//                 { name: 'Company Registration', icon: Shield },
//                 { name: 'Payroll Management', icon: Users },
//                 { name: 'Financial Planning', icon: TrendingUp },
//                 { name: 'Investment Advisory', icon: Award }
//               ].map((service, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 group text-sm sm:text-base"
//                 >
//                   <service.icon className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                   <span className="font-medium group-hover:translate-x-1 transition-transform">
//                     {service.name}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide">GET IN TOUCH</h4>
            
//             <div className="space-y-4 sm:space-y-6">
//               {/* Address */}
//               <div className="flex items-start space-x-3 sm:space-x-4 group">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
//                   <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">OFFICE ADDRESS</h5>
//                   <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
//                     123 Business District,<br />
//                     Paryagraj
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
//                   <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">PHONE</h5>
//                   <p className="text-gray-300 text-xs sm:text-sm">+91 xxxxx 43210</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
//                   <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">EMAIL</h5>
//                   <p className="text-gray-300 text-xs sm:text-sm">vittamintegrityservices@gmail.com</p>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="flex items-start space-x-3 sm:space-x-4 group">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
//                   <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">BUSINESS HOURS</h5>
//                   <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
//                     Mon - Fri: 9:00 AM - 7:00 PM<br />
//                     Sat: 9:00 AM - 5:00 PM<br />
//                     Sun: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="relative z-10 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//           <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            
//             {/* Copyright */}
//             <div className="text-center lg:text-left">
//               <p className="text-gray-400 font-medium text-xs sm:text-sm">
//                 © 2025 Vittam Integrity Services. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Designed by Resilient for financial excellence
//               </p>
//             </div>

//             {/* Social Media */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <span className="text-gray-400 font-bold uppercase tracking-wide text-xs sm:text-sm">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-4">
//                 {[{ icon: Facebook, name: 'Facebook' }, { icon: Twitter, name: 'Twitter' }, { icon: Linkedin, name: 'LinkedIn' }, { icon: Instagram, name: 'Instagram' }].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12"
//                   >
//                     <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Legal Links */}
//             <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
//               <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
//                 Privacy Policy
//               </a>
//               <span className="text-gray-600">|</span>
//               <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
//                 Terms of Service
//               </a>
//               <span className="text-gray-600">|</span>
//               <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Button */}
//       <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
//         <a 
//           href="https://wa.me/919354502422" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="w-12 sm:w-16 h-12 sm:h-16 bg-black border-2 border-white text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 "
//         >
//           <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8" />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;













import React from 'react';
import { Calculator, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Linkedin, Instagram, Shield, TrendingUp, Users, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Elements (optimized for mobile) */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <div className="absolute top-10 sm:top-16 left-4 sm:left-8 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-16 sm:top-32 right-4 sm:right-16 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 border border-white/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 sm:bottom-24 left-1/3 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border border-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-white/40 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/20 animate-pulse delay-1000"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                STAY UPDATED WITH
                <span className="block">FINANCIAL INSIGHTS</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                Receive expert insights on taxation, compliance, audits, and business advisory directly to your inbox every month.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                <span className="flex items-center space-x-2 bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                  <Shield className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="font-bold">TAX UPDATES</span>
                </span>
                <span className="flex items-center space-x-2 bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                  <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="font-bold">COMPLIANCE TIPS</span>
                </span>
                <span className="flex items-center space-x-2 bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                  <Users className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="font-bold">BUSINESS ADVISORY</span>
                </span>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-gray-900 p-3 sm:p-4 md:p-6 rounded-2xl border-2 border-gray-800 hover:border-white transition-all duration-300">
              <h5 className="font-black text-white mb-2 uppercase tracking-wide text-xs sm:text-sm md:text-base">24/7 Emergency</h5>
              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">For urgent financial matters</p>
              <a href="tel:+919623365775" className="text-white font-bold text-sm sm:text-base md:text-lg hover:scale-105 transition-transform inline-block">
                +91-9623365775
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
                  <Calculator className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-black">Vittam (वित्तम्)</h3>
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide font-bold">
                    Vittam Integrity Services
                  </p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                Your trusted financial partners in Bangalore, providing expert taxation, audit, compliance, and business advisory services with over 30 years of combined expertise.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-black text-sm sm:text-base md:text-lg uppercase tracking-wide">CERTIFICATIONS</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                {['ICAI Certified', 'Dip IFRS (London)', 'ASA (CPA Australia)', 'GST Practitioner'].map((cert, index) => (
                  <span key={index} className="bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold border-2 border-gray-700 hover:border-white transition-all cursor-pointer">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h4 className="font-black text-sm sm:text-base md:text-lg uppercase tracking-wide">QUICK LINKS</h4>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Our Team', href: '/team' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-300 hover:text-white font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <span className="flex items-center space-x-2">
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span>{link.name}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h4 className="font-black text-sm sm:text-base md:text-lg uppercase tracking-wide">GET IN TOUCH</h4>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1 text-xs sm:text-sm md:text-base">OFFICE ADDRESS</h5>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                    16046, Tower 16, Prestige Song of the South,<br />
                    Begur Road, Yelanahalli, Bangalore, Karnataka 560068
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1 text-xs sm:text-sm md:text-base">PHONE</h5>
                  <a href="tel:+919623365775" className="text-gray-300 hover:text-white text-xs sm:text-sm">+91-9623365775</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1 text-xs sm:text-sm md:text-base">EMAIL</h5>
                  <a href="mailto:vittamintegrityservices@gmail.com" className="text-gray-300 hover:text-white text-xs sm:text-sm">vittamintegrityservices@gmail.com</a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 group">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1 text-xs sm:text-sm md:text-base">AVAILABILITY</h5>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                    Available for clients across global time zones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 font-medium text-xs sm:text-sm">
                © 2025 Vittam Integrity Services. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed for financial excellence
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <span className="text-gray-400 font-bold uppercase tracking-wide text-xs sm:text-sm">Follow Us:</span>
              <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
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
                    className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 text-xs sm:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white font-medium transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="/terms" className="text-gray-400 hover:text-white font-medium transition-colors">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="/cookies" className="text-gray-400 hover:text-white font-medium transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50">
        <a 
          href="https://wa.me/919623365775" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-black border-2 border-white text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
        </a>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vittam Integrity Services",
          "description": "Bangalore's premier financial advisory firm providing expert taxation, audit, compliance, and business advisory services for over 30 years.",
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
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.8790",
            "longitude": "77.6398"
          },
          "sameAs": [
            "https://facebook.com/vittamintegrityservices",
            "https://linkedin.com/in/vittamintegrityservices",
            "https://instagram.com/vittamintegrityservices"
          ]
        })
      }} />
    </footer>
  );
};

export default Footer;































































// import React from 'react';
// import { Calculator, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Shield, TrendingUp, Users, Award, MessageCircle } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-b from-teal-700 to-teal-800 text-white overflow-hidden">
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-10 hidden sm:block">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-emerald-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-white/50 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-emerald-300 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-slate-300 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        
//         {/* Animated Lines */}
//         <div className="absolute top-0 left-1/4 w-px h-full bg-emerald-400/30 animate-pulse"></div>
//         <div className="absolute top-0 right-1/4 w-px h-full bg-emerald-400/30 animate-pulse delay-1000"></div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="relative z-10 border-b border-teal-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div className="space-y-4 sm:space-y-6">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
//                 STAY UPDATED WITH
//                 <span className="block text-emerald-300">FINANCIAL INSIGHTS</span>
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-medium">
//                 Get expert tax tips, financial strategies, and regulatory updates 
//                 delivered straight to your inbox every month.
//               </p>
//               <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
//                 <span className="flex items-center space-x-2 bg-teal-600 px-3 sm:px-4 py-2 rounded-full border border-emerald-500 hover:bg-emerald-500 transition-all duration-300">
//                   <Shield className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">TAX UPDATES</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-teal-600 px-3 sm:px-4 py-2 rounded-full border border-emerald-500 hover:bg-emerald-500 transition-all duration-300">
//                   <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">INVESTMENT TIPS</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-teal-600 px-3 sm:px-4 py-2 rounded-full border border-emerald-500 hover:bg-emerald-500 transition-all duration-300">
//                   <Users className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">BUSINESS INSIGHTS</span>
//                 </span>
//               </div>
//             </div>
            
//             {/* Emergency Contact */}
//             <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-4 sm:p-6 rounded-2xl border-2 border-emerald-500 hover:border-emerald-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
//               <h5 className="font-black text-white mb-2 uppercase tracking-wide text-sm sm:text-base">24/7 Emergency</h5>
//               <p className="text-slate-200 text-xs sm:text-sm mb-3 font-medium">For urgent tax matters</p>
//               <a href="tel:+919876543210" className="text-emerald-300 font-bold text-base sm:text-lg hover:text-emerald-200 hover:scale-105 transition-all duration-300 inline-block">
//                 +91 XXXXX 43210
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
//           {/* Company Info */}
//           <div className="space-y-6 sm:space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2 sm:space-x-3 group">
//                 <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
//                   <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">VIS</h3>
//                   <p className="text-xs sm:text-sm text-slate-200 uppercase tracking-wide font-bold">
//                     Vittam Integrity Services
//                   </p>
//                 </div>
//               </div>
              
//               <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
//                 Your trusted financial partners providing expert chartered accountant 
//                 services for over 15 years. We help businesses and individuals achieve 
//                 financial success through strategic planning and professional expertise.
//               </p>
//             </div>

//             {/* Certifications */}
//             {/* <div className="space-y-4">
//               <h4 className="font-black text-base sm:text-lg uppercase tracking-wide text-emerald-300">CERTIFICATIONS</h4>
//               <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
//                 {['ICAI CERTIFIED', 'GST PRACTITIONER', 'ISO 9001:2015'].map((cert, index) => (
//                   <span key={index} className="bg-teal-600 px-3 sm:px-4 py-2 rounded-full font-bold border-2 border-emerald-500 hover:border-emerald-400 hover:bg-emerald-500 transition-all cursor-pointer transform hover:scale-105">
//                     {cert}
//                   </span>
//                 ))}
//               </div>
//             </div> */}
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide text-emerald-300">QUICK LINKS</h4>
//             <div className="space-y-3 sm:space-y-4">
//               {['About Us', 'Contact Us', 'Services'].map((link, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="block text-slate-200 hover:text-emerald-300 font-medium text-sm sm:text-base transition-all duration-300 transform hover:translate-x-2 group"
//                 >
//                   <span className="flex items-center space-x-2">
//                     <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-emerald-400" />
//                     <span>{link}</span>
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide text-emerald-300">OUR SERVICES</h4>
//             <div className="space-y-3 sm:space-y-4">
//               {[
//                 { name: 'Tax Planning & Filing', icon: TrendingUp },
//                 { name: 'Audit & Assurance', icon: Shield },
//                 { name: 'Business Consulting', icon: Users },
//                 { name: 'GST Services', icon: Award },
//                 { name: 'Company Registration', icon: Shield },
//                 { name: 'Payroll Management', icon: Users },
//                 { name: 'Financial Planning', icon: TrendingUp },
//                 { name: 'Investment Advisory', icon: Award }
//               ].map((service, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="flex items-center space-x-2 sm:space-x-3 text-slate-200 hover:text-emerald-300 transition-all duration-300 group text-sm sm:text-base"
//                 >
//                   <service.icon className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform text-emerald-400" />
//                   <span className="font-medium group-hover:translate-x-1 transition-transform">
//                     {service.name}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide text-emerald-300">GET IN TOUCH</h4>
            
//             <div className="space-y-4 sm:space-y-6">
//               {/* Address */}
//               <div className="flex items-start space-x-3 sm:space-x-4 group">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">OFFICE ADDRESS</h5>
//                   <p className="text-slate-200 leading-relaxed text-xs sm:text-sm font-medium">
//                     123 Business District,<br />
//                     Prayagraj
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">PHONE</h5>
//                   <p className="text-slate-200 text-xs sm:text-sm font-medium hover:text-emerald-300 transition-colors">+91 xxxxx 43210</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">EMAIL</h5>
//                   <p className="text-slate-200 text-xs sm:text-sm font-medium hover:text-emerald-300 transition-colors">vittamintegrityservices@gmail.com</p>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="flex items-start space-x-3 sm:space-x-4 group">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-sm sm:text-base">BUSINESS HOURS</h5>
//                   <p className="text-slate-200 leading-relaxed text-xs sm:text-sm font-medium">
//                     Mon - Fri: 9:00 AM - 7:00 PM<br />
//                     Sat: 9:00 AM - 5:00 PM<br />
//                     Sun: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="relative z-10 border-t border-teal-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//           <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            
//             {/* Copyright */}
//             <div className="text-center lg:text-left">
//               <p className="text-slate-200 font-medium text-xs sm:text-sm">
//                 © 2025 Vittam Integrity Services. All rights reserved.
//               </p>
//               <p className="text-slate-300 text-xs mt-1 font-medium">
//                 Designed by Resilient for financial excellence
//               </p>
//             </div>

//             {/* Social Media */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <span className="text-slate-200 font-bold uppercase tracking-wide text-xs sm:text-sm">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-4">
//                 {[{ icon: Facebook, name: 'Facebook' }, { icon: Twitter, name: 'Twitter' }, { icon: Linkedin, name: 'LinkedIn' }, { icon: Instagram, name: 'Instagram' }].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg"
//                   >
//                     <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Legal Links */}
//             <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
//               <a href="#" className="text-slate-200 hover:text-emerald-300 font-medium transition-colors">
//                 Privacy Policy
//               </a>
//               <span className="text-slate-400">|</span>
//               <a href="#" className="text-slate-200 hover:text-emerald-300 font-medium transition-colors">
//                 Terms of Service
//               </a>
//               <span className="text-slate-400">|</span>
//               <a href="#" className="text-slate-200 hover:text-emerald-300 font-medium transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Button */}
//       <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
//         <a 
//           href="https://wa.me/919354502422" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-white text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse"
//         >
//           <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8" />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// 

















// import React from 'react';
// import { Calculator, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Shield, TrendingUp, Users, Award, MessageCircle } from 'lucide-react';
// import Cursor from './Cursor'
// const Footer = () => {
//   return (
  
//     <footer className="relative bg-[#2b6777] text-[#ffffff] overflow-hidden">
//         {/* <Cursor/> */}
//       {/* Animated Background Elements (optimized for mobile) */}
//       <div className="absolute inset-0 opacity-10 hidden sm:block">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-[#c8d8e4] rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-[#c8d8e4]/50 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-[#c8d8e4]/30 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-[#c8d8e4]/40 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        
//         {/* Animated Lines */}
//         <div className="absolute top-0 left-1/4 w-px h-full bg-[#c8d8e4]/20 animate-pulse"></div>
//         <div className="absolute top-0 right-1/4 w-px h-full bg-[#c8d8e4]/20 animate-pulse delay-1000"></div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="relative z-10 border-b border-[#c8d8e4]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div className="space-y-4 sm:space-y-6">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
//                 STAY UPDATED WITH
//                 <span className="block">FINANCIAL INSIGHTS</span>
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-[#c8d8e4] leading-relaxed">
//                 Get expert tax tips, financial strategies, and regulatory updates 
//                 delivered straight to your inbox every month.
//               </p>
//               <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
//                 <span className="flex items-center space-x-2 bg-[#f2f2f2] text-[#2b6777] px-3 sm:px-4 py-2 rounded-full">
//                   <Shield className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">TAX UPDATES</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-[#f2f2f2] text-[#2b6777] px-3 sm:px-4 py-2 rounded-full">
//                   <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">INVESTMENT TIPS</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-[#f2f2f2] text-[#2b6777] px-3 sm:px-4 py-2 rounded-full">
//                   <Users className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">BUSINESS INSIGHTS</span>
//                 </span>
//               </div>
//             </div>
            
//             {/* Emergency Contact */}
//             <div className="bg-[#f2f2f2] p-4 sm:p-6 rounded-2xl border-2 border-[#c8d8e4] hover:border-[#ffffff] transition-all duration-300">
//               <h5 className="font-black text-[#2b6777] mb-2 uppercase tracking-wide text-sm sm:text-base">24/7 Emergency</h5>
//               <p className="text-[#2b6777] text-xs sm:text-sm mb-3">For urgent tax matters</p>
//               <a href="tel:+919876543210" className="text-[#2b6777] font-bold text-base sm:text-lg hover:scale-105 transition-transform inline-block">
//                 +91 XXXXX 43210
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
//           {/* Company Info */}
//           <div className="space-y-6 sm:space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2 sm:space-x-3 group">
//                 <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#ffffff] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
//                   <Calculator className="w-5 sm:w-6 h-5 sm:h-6 text-[#2b6777]" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-black">वित्तम्</h3>
//                   <p className="text-xs sm:text-sm text-[#c8d8e4] uppercase tracking-wide font-bold">
//                     Vittam Integrity Services
//                   </p>
//                 </div>
//               </div>
              
//               <p className="text-sm sm:text-base text-[#c8d8e4] leading-relaxed">
//                 Your trusted financial partners providing expert chartered accountant 
//                 services for over 15 years. We help businesses and individuals achieve 
//                 financial success through strategic planning and professional expertise.
//               </p>
//             </div>

//             {/* Certifications */}
//             <div className="space-y-4">
//               <h4 className="font-black text-base sm:text-lg uppercase tracking-wide">CERTIFICATIONS</h4>
//               <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
//                 {['ICAI CERTIFIED', 'GST PRACTITIONER', 'ISO 9001:2015'].map((cert, index) => (
//                   <span key={index} className="bg-[#f2f2f2] text-[#2b6777] px-3 sm:px-4 py-2 rounded-full font-bold border-2 border-[#c8d8e4] hover:border-[#ffffff] transition-all cursor-pointer">
//                     {cert}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide">QUICK LINKS</h4>
//             <div className="space-y-3 sm:space-y-4">
//               {['About Us', 'Contact Us', 'Services'].map((link, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="block text-[#c8d8e4] hover:text-[#ffffff] font-medium text-sm sm:text-base transition-all duration-300 transform hover:translate-x-2 group"
//                 >
//                   <span className="flex items-center space-x-2">
//                     <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                     <span>{link}</span>
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide">OUR SERVICES</h4>
//             <div className="space-y-3 sm:space-y-4">
//               {[
//                 { name: 'Tax Planning & Filing', icon: TrendingUp },
//                 { name: 'Audit & Assurance', icon: Shield },
//                 { name: 'Business Consulting', icon: Users },
//                 { name: 'GST Services', icon: Award },
//                 { name: 'Company Registration', icon: Shield },
//                 { name: 'Payroll Management', icon: Users },
//                 { name: 'Financial Planning', icon: TrendingUp },
//                 { name: 'Investment Advisory', icon: Award }
//               ].map((service, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="flex items-center space-x-2 sm:space-x-3 text-[#c8d8e4] hover:text-[#ffffff] transition-all duration-300 group text-sm sm:text-base"
//                 >
//                   <service.icon className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
//                   <span className="font-medium group-hover:translate-x-1 transition-transform">
//                     {service.name}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6 sm:space-y-8">
//             <h4 className="font-black text-base sm:text-lg md:text-xl uppercase tracking-wide">GET IN TOUCH</h4>
            
//             <div className="space-y-4 sm:space-y-6">
//               {/* Address */}
//               <div className="flex items-start space-x-3 sm:space-x-4 group">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#c8d8e4]/20 rounded-full flex items-center justify-center group-hover:bg-[#ffffff] group-hover:text-[#2b6777] transition-all duration-300">
//                   <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-[#ffffff] mb-1 text-sm sm:text-base">OFFICE ADDRESS</h5>
//                   <p className="text-[#c8d8e4] leading-relaxed text-xs sm:text-sm">
//                     123 Business District,<br />
//                     Paryagraj
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#c8d8e4]/20 rounded-full flex items-center justify-center group-hover:bg-[#ffffff] group-hover:text-[#2b6777] transition-all duration-300">
//                   <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-[#ffffff] mb-1 text-sm sm:text-base">PHONE</h5>
//                   <p className="text-[#c8d8e4] text-xs sm:text-sm">+91 xxxxx 43210</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#c8d8e4]/20 rounded-full flex items-center justify-center group-hover:bg-[#ffffff] group-hover:text-[#2b6777] transition-all duration-300">
//                   <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-[#ffffff] mb-1 text-sm sm:text-base">EMAIL</h5>
//                   <p className="text-[#c8d8e4] text-xs sm:text-sm">vittamintegrityservices@gmail.com</p>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="flex items-start space-x-3 sm:space-x-4 group">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#c8d8e4]/20 rounded-full flex items-center justify-center group-hover:bg-[#ffffff] group-hover:text-[#2b6777] transition-all duration-300">
//                   <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-[#ffffff] mb-1 text-sm sm:text-base">BUSINESS HOURS</h5>
//                   <p className="text-[#c8d8e4] leading-relaxed text-xs sm:text-sm">
//                     Mon - Fri: 9:00 AM - 7:00 PM<br />
//                     Sat: 9:00 AM - 5:00 PM<br />
//                     Sun: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="relative z-10 border-t border-[#c8d8e4]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//           <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            
//             {/* Copyright */}
//             <div className="text-center lg:text-left">
//               <p className="text-[#c8d8e4] font-medium text-xs sm:text-sm">
//                 © 2025 Vittam Integrity Services. All rights reserved.
//               </p>
//               <p className="text-[#c8d8e4]/80 text-xs mt-1">
//                 Designed by Resilient for financial excellence
//               </p>
//             </div>

//             {/* Social Media */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <span className="text-[#c8d8e4] font-bold uppercase tracking-wide text-xs sm:text-sm">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-4">
//                 {[{ icon: Facebook, name: 'Facebook' }, { icon: Twitter, name: 'Twitter' }, { icon: Linkedin, name: 'LinkedIn' }, { icon: Instagram, name: 'Instagram' }].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-10 sm:w-12 h-10 sm:h-12 bg-[#f2f2f2] text-[#2b6777] hover:bg-[#ffffff] hover:text-[#2b6777] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12"
//                   >
//                     <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Legal Links */}
//             <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
//               <a href="#" className="text-[#c8d8e4] hover:text-[#ffffff] font-medium transition-colors">
//                 Privacy Policy
//               </a>
//               <span className="text-[#c8d8e4]/50">|</span>
//               <a href="#" className="text-[#c8d8e4] hover:text-[#ffffff] font-medium transition-colors">
//                 Terms of Service
//               </a>
//               <span className="text-[#c8d8e4]/50">|</span>
//               <a href="#" className="text-[#c8d8e4] hover:text-[#ffffff] font-medium transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Button */}
//       <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
//         <a 
//           href="https://wa.me/919354502422" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="w-12 sm:w-16 h-12 sm:h-16 bg-[#2b6777] border-2 border-[#ffffff] text-[#ffffff] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:bg-[#52ab98]"
//         >
//           <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8" />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;













































// import React from 'react';
// import { Calculator, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Shield, TrendingUp, Users, Award, MessageCircle } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-b from-teal-700 to-teal-800 text-white overflow-hidden">
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-10 hidden md:block">
//         <div className="absolute top-10 md:top-20 left-5 md:left-10 w-12 md:w-24 h-12 md:h-24 border-2 border-emerald-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute top-20 md:top-40 right-5 md:right-20 w-10 md:w-16 h-10 md:h-16 border border-white/50 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-12 md:bottom-32 left-1/3 w-8 md:w-12 h-8 md:h-12 border border-emerald-300 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-8 md:w-16 h-8 md:h-16 border border-slate-300 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        
//         {/* Animated Lines */}
//         <div className="absolute top-0 left-1/4 w-px h-full bg-emerald-400/30 animate-pulse"></div>
//         <div className="absolute top-0 right-1/4 w-px h-full bg-emerald-400/30 animate-pulse delay-1000"></div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="relative z-10 border-b border-teal-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
//             <div className="space-y-4 sm:space-y-6">
//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
//                 STAY UPDATED WITH
//                 <span className="block text-emerald-300">FINANCIAL INSIGHTS</span>
//               </h2>
//               <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-medium">
//                 Get expert tax tips, financial strategies, and regulatory updates 
//                 delivered straight to your inbox every month.
//               </p>
//               <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
//                 <span className="flex items-center space-x-2 bg-teal-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500 hover:bg-emerald-500 transition-all duration-300">
//                   <Shield className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">TAX UPDATES</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-teal-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500 hover:bg-emerald-500 transition-all duration-300">
//                   <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">INVESTMENT TIPS</span>
//                 </span>
//                 <span className="flex items-center space-x-2 bg-teal-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500 hover:bg-emerald-500 transition-all duration-300">
//                   <Users className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span className="font-bold">BUSINESS INSIGHTS</span>
//                 </span>
//               </div>
//             </div>
            
//             {/* Emergency Contact */}
//             <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-4 sm:p-6 rounded-2xl border-2 border-emerald-500 hover:border-emerald-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:max-w-md lg:max-w-full mx-auto">
//               <h5 className="font-black text-white mb-2 uppercase tracking-wide text-xs sm:text-sm md:text-base">24/7 Emergency</h5>
//               <p className="text-slate-200 text-xs sm:text-sm mb-3 font-medium">For urgent tax matters</p>
//               <a href="tel:+919876543210" className="text-emerald-300 font-bold text-sm sm:text-base md:text-lg hover:text-emerald-200 hover:scale-105 transition-all duration-300 inline-block">
//                 +91 XXXXX 43210
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
//           {/* Company Info */}
//           <div className="space-y-4 sm:space-y-6">
//             <div className="space-y-3 sm:space-y-4">
//               <div className="flex items-center space-x-2 sm:space-x-3 group">
//                 <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
//                   <Calculator className="w-4 sm:w-5 h-4 sm:h-5 text-teal-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-base sm:text-lg md:text-xl font-black text-white">VIS</h3>
//                   <p className="text-xs sm:text-sm text-slate-200 uppercase tracking-wide font-bold">
//                     Vittam Integrity Services
//                   </p>
//                 </div>
//               </div>
              
//               <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-medium">
//                 Your trusted financial partners providing expert chartered accountant 
//                 services for over 15 years. We help businesses and individuals achieve 
//                 financial success through strategic planning and professional expertise.
//               </p>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4 sm:space-y-6">
//             <h4 className="font-black text-sm sm:text-base md:text-lg uppercase tracking-wide text-emerald-300">QUICK LINKS</h4>
//             <div className="space-y-2 sm:space-y-3">
//               {['About Us', 'Contact Us', 'Services'].map((link, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="block text-slate-200 hover:text-emerald-300 font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:translate-x-2 group"
//                 >
//                   <span className="flex items-center space-x-2">
//                     <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-emerald-400" />
//                     <span>{link}</span>
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-4 sm:space-y-6">
//             <h4 className="font-black text-sm sm:text-base md:text-lg uppercase tracking-wide text-emerald-300">OUR SERVICES</h4>
//             <div className="space-y-2 sm:space-y-3">
//               {[
//                 { name: 'Tax Planning & Filing', icon: TrendingUp },
//                 { name: 'Audit & Assurance', icon: Shield },
//                 { name: 'Business Consulting', icon: Users },
//                 { name: 'GST Services', icon: Award },
//                 { name: 'Company Registration', icon: Shield },
//                 { name: 'Payroll Management', icon: Users },
//                 { name: 'Financial Planning', icon: TrendingUp },
//                 { name: 'Investment Advisory', icon: Award }
//               ].map((service, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className="flex items-center space-x-2 sm:space-x-3 text-slate-200 hover:text-emerald-300 transition-all duration-300 group text-xs sm:text-sm md:text-base"
//                 >
//                   <service.icon className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform text-emerald-400" />
//                   <span className="font-medium group-hover:translate-x-1 transition-transform">
//                     {service.name}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4 sm:space-y-6">
//             <h4 className="font-black text-sm sm:text-base md:text-lg uppercase tracking-wide text-emerald-300">GET IN TOUCH</h4>
            
//             <div className="space-y-3 sm:space-y-4">
//               {/* Address */}
//               <div className="flex items-start space-x-2 sm:space-x-3 group">
//                 <div className="w-7 sm:w-8 h-7 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-xs sm:text-sm">OFFICE ADDRESS</h5>
//                   <p className="text-slate-200 leading-relaxed text-xs sm:text-sm font-medium">
//                     123 Business District,<br />
//                     Prayagraj
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
//                 <div className="w-7 sm:w-8 h-7 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-xs sm:text-sm">PHONE</h5>
//                   <p className="text-slate-200 text-xs sm:text-sm font-medium hover:text-emerald-300 transition-colors">+91 xxxxx 43210</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
//                 <div className="w-7 sm:w-8 h-7 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-xs sm:text-sm">EMAIL</h5>
//                   <p className="text-slate-200 text-xs sm:text-sm font-medium hover:text-emerald-300 transition-colors">vittamintegrityservices@gmail.com</p>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="flex items-start space-x-2 sm:space-x-3 group">
//                 <div className="w-7 sm:w-8 h-7 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 shadow-lg">
//                   <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-white mb-1 text-xs sm:text-sm">BUSINESS HOURS</h5>
//                   <p className="text-slate-200 leading-relaxed text-xs sm:text-sm font-medium">
//                     Mon - Fri: 9:00 AM - 7:00 PM<br />
//                     Sat: 9:00 AM - 5:00 PM<br />
//                     Sun: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="relative z-10 border-t border-teal-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
//           <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center space-y-4 sm:space-y-0">
            
//             {/* Copyright */}
//             <div className="text-center sm:text-left">
//               <p className="text-slate-200 font-medium text-xs sm:text-sm">
//                 © 2025 Vittam Integrity Services. All rights reserved.
//               </p>
//               <p className="text-slate-300 text-xs mt-1 font-medium">
//                 Designed by Resilient for financial excellence
//               </p>
//             </div>

//             {/* Social Media */}
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <span className="text-slate-200 font-bold uppercase tracking-wide text-xs sm:text-sm">Follow Us:</span>
//               <div className="flex space-x-2 sm:space-x-3">
//                 {[{ icon: Facebook, name: 'Facebook' }, { icon: Twitter, name: 'Twitter' }, { icon: Linkedin, name: 'LinkedIn' }, { icon: Instagram, name: 'Instagram' }].map((social, index) => (
//                   <a 
//                     key={index}
//                     href="#" 
//                     className="w-8 sm:w-10 h-8 sm:h-10 bg-teal-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg"
//                   >
//                     <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Legal Links */}
//             <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
//               <a href="#" className="text-slate-200 hover:text-emerald-300 font-medium transition-colors">
//                 Privacy Policy
//               </a>
//               <span className="text-slate-400">|</span>
//               <a href="#" className="text-slate-200 hover:text-emerald-300 font-medium transition-colors">
//                 Terms of Service
//               </a>
//               <span className="text-slate-400">|</span>
//               <a href="#" className="text-slate-200 hover:text-emerald-300 font-medium transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Button */}
//       <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
//         <a 
//           href="https://wa.me/919354502422" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-white text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse"
//         >
//           <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;