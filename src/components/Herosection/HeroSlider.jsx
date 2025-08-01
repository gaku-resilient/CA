// import React from 'react';
// import { ArrowRight, Shield, TrendingUp, Users, Award, Calculator } from 'lucide-react';

// const HeroSection = () => {
//   return (
//     <div className="relative min-h-[60vh] sm:min-h-[80vh] bg-white overflow-hidden mt-16 sm:mt-20">
//       {/* Animated Background Pattern (optimized for mobile) */}
//       <div className="absolute inset-0 hidden sm:block">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-gray-200 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-gray-300 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-2 border-gray-100 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-gray-200 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        
//         {/* Animated Lines */}
//         <div className="absolute top-0 left-1/4 w-px h-full bg-gray-100 animate-pulse"></div>
//         <div className="absolute top-0 right-1/4 w-px h-full bg-gray-100 animate-pulse delay-1000"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
//             {/* Left Content */}
//             <div className="space-y-6 sm:space-y-8 md:space-y-10">
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="inline-flex items-center space-x-2 border-2 border-black text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse">
//                   <Award className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span>TRUSTED BY 500+ BUSINESSES</span>
//                 </div>
                
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-none tracking-tight">
//                   WE CRAFT
//                   <span className="block text-black relative">
//                     FINANCIAL
//                     <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-black animate-pulse"></div>
//                   </span>
//                   SUCCESS
//                 </h1>
                
//                 <div className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl space-y-2">
//                   <p className="animate-fadeIn">Expert chartered accountants providing</p>
//                   <p className="animate-fadeIn delay-500">comprehensive financial solutions.</p>
//                   <p className="animate-fadeIn delay-1000">Your success is our expertise.</p>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                 <button className="group bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-none hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 font-bold text-sm sm:text-base md:text-lg transform hover:scale-105 hover:shadow-md">
//                   <span>GET STARTED</span>
//                   <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 group-hover:translate-x-2 transition-transform" />
//                 </button>
//                 <button className="border-2 sm:border-3 border-black text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-none hover:bg-black hover:text-white transition-all duration-300 font-bold text-sm sm:text-base md:text-lg transform hover:scale-105">
//                   SCHEDULE CALL
//                 </button>
//               </div>

//               {/* Animated Stats */}
//               <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10 border-t-2 border-black">
//                 {[
//                   { value: "15+", label: "Years Experience" },
//                   { value: "500+", label: "Happy Clients" },
//                   { value: "98%", label: "Success Rate" }
//                 ].map((stat, index) => (
//                   <div key={index} className="text-center group cursor-pointer">
//                     <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                     <div className="text-xs sm:text-sm text-gray-600 font-bold uppercase tracking-wide">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Professional Card */}
//             <div className="relative mt-8 lg:mt-0">
//               <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
//                 <div className="bg-black p-1 shadow-lg">
//                   <div className="bg-white p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                    
//                     {/* Professional Avatar */}
//                     <div className="flex items-center space-x-3 sm:space-x-4 border-b-2 border-gray-100 pb-4 sm:pb-6">
//                       <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black flex items-center justify-center rounded-full transform hover:rotate-12 transition-transform">
//                         <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="text-base sm:text-lg md:text-xl font-black text-black">CA Sunita Kulthe & ca Shraddha Kamath </h3>
//                         <p className="text-xs sm:text-sm text-gray-600 font-bold uppercase tracking-wide">Founder and partner, Vittam Integrity Services</p>
//                       </div>
//                     </div>

//                     {/* Service Cards */}
//                     <div className="space-y-3 sm:space-y-4">
//                       {[
//                         { icon: TrendingUp, title: "TAX PLANNING" },
//                         { icon: Shield, title: "AUDIT SERVICES" },
//                         { icon: Calculator, title: "BUSINESS CONSULTING" }
//                       ].map((service, index) => (
//                         <div key={index} className="flex items-center justify-between p-3 sm:p-4 border-2 border-gray-200 hover:border-black transition-all duration-300 group">
//                           <div className="flex items-center space-x-3 sm:space-x-4">
//                             <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-100 group-hover:bg-black flex items-center justify-center rounded-full transition-all">
//                               <service.icon className="w-4 sm:w-5 h-4 sm:h-5 text-black group-hover:text-white" />
//                             </div>
//                             <span className="font-bold text-sm sm:text-base text-black">{service.title}</span>
//                           </div>
//                           <span className="text-black font-black text-xs sm:text-sm">✓ AVAILABLE</span>
//                         </div>
//                       ))}
//                     </div>

//                     <button className="w-full bg-black text-white py-3 sm:py-4 font-black text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
//                       Book Financial Consultation now
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Animated Elements (optimized for mobile) */}
//               <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 border-4 border-black animate-spin hidden sm:block" style={{ animationDuration: '10s' }}>
//                 <div className="w-full h-full flex items-center justify-center">
//                   <TrendingUp className="w-4 sm:w-6 h-4 sm:h-6 text-black" />
//                 </div>
//               </div>
//               <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-10 sm:w-12 h-10 sm:h-12 border-2 border-gray-400 animate-bounce hidden sm:block">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <Shield className="w-4 sm:w-6 h-4 sm:h-6 text-gray-600" />
//                 </div>
//               </div>
//               <div className="absolute top-1/2 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border border-gray-300 animate-pulse hidden sm:block"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Indicators */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 border-t-2 border-black">
//         <div className="max-w-7xl mx-auto pt-8 sm:pt-12 md:pt-16">
//           <div className="text-center mb-8 sm:mb-12">
//             <p className="text-black font-black text-sm sm:text-base md:text-lg uppercase tracking-wider">TRUSTED BY LEADING COMPANIES</p>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
//             {['TATA', 'RELIANCE', 'INFOSYS', 'WIPRO', 'HDFC', 'ICICI'].map((company, index) => (
//               <div key={index} className="text-xl sm:text-2xl md:text-3xl font-black text-gray-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">
//                 {company}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

















































import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Award, Calculator, ChevronLeft, ChevronRight } from 'lucide-react';

const ModernHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Slide data
  const slides = [
    {
      id: 1,
      title: "WECRAFT FINANCIAL SUCCESS",
      subtitle: "Expert chartered accountants providing comprehensive financial solutions.",
      description: "Your success is our expertise.",
      stats: { clients: "500+", experience: "15+", success: "98%" },
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      accent: "TRUSTED BY 500+ BUSINESSES"
    },
    {
      id: 2,
      title: "STRATEGIC TAX PLANNING",
      subtitle: "Maximize your savings with our advanced tax strategies.",
      description: "Smart planning for your financial future.",
      stats: { savings: "40%", clients: "500+", planning: "100%" },
      bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      accent: "SAVE UP TO 40% ON TAXES"
    },
    {
      id: 3,
      title: "BUSINESS GROWTH CONSULTING",
      subtitle: "Scale your business with our expert guidance.",
      description: "From startup to enterprise, we've got you covered.",
      stats: { growth: "300%", businesses: "200+", success: "95%" },
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      accent: "300% AVERAGE GROWTH"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 transition-transform duration-[8000ms] ease-out"
          style={{
            backgroundImage: `url(${currentSlideData.bgImage})`,
            transform: isLoaded ? 'scale(100%)' : 'scale(110%)'
          }}
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b6777]/95 via-[#2b6777]/85 to-[#52ab98]/90 animate-pulse" 
             style={{ animationDuration: '4s' }} />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }} 
          />
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-spin opacity-60" 
             style={{ animationDuration: '20s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-white/20 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/30 rounded-full animate-spin" 
             style={{ animationDuration: '15s' }} />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} 
               className={`absolute w-2 h-2 bg-white rounded-full animate-bounce`}
               style={{
                 top: `${20 + i * 10}%`,
                 left: `${10 + i * 15}%`,
                 animationDelay: `${i * 0.5}s`,
                 animationDuration: `${3 + i}s`
               }} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content with Slide Animation */}
            <div className={`space-y-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              
              {/* Animated Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold animate-bounce">
                <Award className="w-5 h-5" />
                <span className="text-sm sm:text-base">{currentSlideData.accent}</span>
              </div>
              
              {/* Dynamic Title with Typewriter Effect */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-none tracking-tight">
                  {currentSlideData.title.split(' ').map((word, index) => (
                    <span key={index} 
                          className={`inline-block transform transition-all duration-700 ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}>
                      {word}{' '}
                      {index === 2 && (
                        <div className="block">
                          <span className="relative">
                            {currentSlideData.title.split(' ').slice(3).join(' ')}
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#52ab98] animate-pulse" />
                          </span>
                        </div>
                      )}
                    </span>
                  ))}
                </h1>
                
                <div className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl space-y-2">
                  <p className={`transform transition-all duration-700 delay-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {currentSlideData.subtitle}
                  </p>
                  <p className={`transform transition-all duration-700 delay-700 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {currentSlideData.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <button className="group bg-white text-[#2b6777] px-8 py-4 font-bold text-lg hover:bg-[#52ab98] hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl">
                  <span>GET STARTED</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-[#2b6777] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  SCHEDULE CALL
                </button>
              </div>

              {/* Dynamic Stats */}
              <div className={`grid grid-cols-3 gap-8 pt-8 border-t-2 border-white/30 transform transition-all duration-700 delay-1200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {Object.entries(currentSlideData.stats).map(([key, value], index) => (
                  <div key={key} className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 transform group-hover:scale-110 transition-transform animate-pulse">
                      {value}
                    </div>
                    <div className="text-sm text-white/80 font-bold uppercase tracking-wide">
                      {key === 'clients' ? 'Happy Clients' : 
                       key === 'experience' ? 'Years Experience' :
                       key === 'success' ? 'Success Rate' :
                       key === 'savings' ? 'Tax Savings' :
                       key === 'planning' ? 'Success Rate' :
                       key === 'growth' ? 'Avg Growth' :
                       key === 'businesses' ? 'Businesses' : key}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Professional Card */}
            <div className={`relative mt-8 lg:mt-0 transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-lg p-1 shadow-2xl border border-white/20">
                  <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 space-y-8">
                    
                    {/* Professional Avatar */}
                    <div className="flex items-center space-x-4 border-b-2 border-[#c8d8e4] pb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#2b6777] to-[#52ab98] flex items-center justify-center rounded-full transform hover:rotate-12 transition-transform shadow-lg">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#2b6777]">CA Sunita Kulthe & CA Shraddha Kamath</h3>
                        <p className="text-sm text-[#2b6777] font-bold uppercase tracking-wide">Founder and Partner, Vittam Integrity Services</p>
                      </div>
                    </div>

                    {/* Enhanced Service Cards */}
                    <div className="space-y-4">
                      {[
                        { icon: TrendingUp, title: "TAX PLANNING", status: "AVAILABLE" },
                        { icon: Shield, title: "AUDIT SERVICES", status: "AVAILABLE" },
                        { icon: Calculator, title: "BUSINESS CONSULTING", status: "AVAILABLE" }
                      ].map((service, index) => (
                        <div key={index} 
                             className={`flex items-center justify-between p-4 border-2 border-[#c8d8e4] hover:border-[#2b6777] transition-all duration-300 group hover:shadow-lg transform transition-all duration-500 delay-${index * 100}`}>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#f2f2f2] to-[#e0e0e0] group-hover:from-[#2b6777] group-hover:to-[#52ab98] flex items-center justify-center rounded-full transition-all shadow-md">
                              <service.icon className="w-6 h-6 text-[#2b6777] group-hover:text-white transition-colors" />
                            </div>
                            <span className="font-bold text-base text-[#2b6777]">{service.title}</span>
                          </div>
                          <span className="text-[#52ab98] font-black text-sm animate-pulse">✓ {service.status}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#2b6777] to-[#52ab98] text-white py-4 font-black text-lg hover:from-[#52ab98] hover:to-[#2b6777] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      Book Financial Consultation Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-white/30 animate-spin backdrop-blur-sm" 
                   style={{ animationDuration: '10s' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-white/40 animate-bounce backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button onClick={prevSlide} 
                  className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`} />
            ))}
          </div>
          
          <button onClick={nextSlide}
                  className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Trust Indicators with Slide-in Animation */}
      <div className={`absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pb-20 transform transition-all duration-1000 delay-1500 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* <div className="max-w-7xl mx-auto pt-8 border-t-2 border-white/30">
          <div className="text-center mb-8">
            <p className="text-white font-black text-base uppercase tracking-wider backdrop-blur-sm">TRUSTED BY LEADING COMPANIES</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['TATA', 'RELIANCE', 'INFOSYS', 'WIPRO', 'HDFC', 'ICICI'].map((company, index) => (
              <div key={index} 
                   className={`text-2xl md:text-3xl font-black text-white/60 hover:text-white transition-all cursor-pointer transform hover:scale-110 duration-300 delay-${index * 100}`}>
                {company}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ModernHeroSection;



















// import React from 'react';
// import { ArrowRight, Shield, TrendingUp, Users, Award, Calculator } from 'lucide-react';

// const HeroSection = () => {
//   return (
//     <div className="relative min-h-[50vh] sm:min-h-[80vh] bg-[#ffffff] overflow-hidden  sm:mt-20">
//       {/* Animated Background Pattern (optimized for mobile) */}
//       <div className="absolute inset-0 hidden sm:block">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-[#c8d8e4] rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-[#f2f2f2] rounded-full animate-pulse"></div>
//         <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-2 border-[#c8d8e4] rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-[#f2f2f2] rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        
//         {/* Animated Lines */}
//         {/* <div className="absolute top-0 left-1/4 w-px h-full bg-[#c8d8e4] animate-pulse"></div>
//         <div className="absolute top-0 right-1/4 w-px h-full bg-[#c8d8e4] animate-pulse delay-1000"></div> */}
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
//             {/* Left Content */}
//             <div className="space-y-6 sm:space-y-8 md:space-y-10">
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="inline-flex items-center space-x-2 border-2 border-[#2b6777] text-[#2b6777] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse">
//                   <Award className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span>TRUSTED BY 500+ BUSINESSES</span>
//                 </div>
                
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#2b6777] leading-none tracking-tight">
//                   WE CRAFT
//                   <span className="block text-[#2b6777] relative">
//                     FINANCIAL
//                     <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-[#52ab98] animate-pulse"></div>
//                   </span>
//                   SUCCESS
//                 </h1>
                
//                 <div className="text-base sm:text-lg md:text-xl text-[#2b6777] leading-relaxed max-w-2xl space-y-2">
//                   <p className="animate-fadeIn">Expert chartered accountants providing</p>
//                   <p className="animate-fadeIn delay-500">comprehensive financial solutions.</p>
//                   <p className="animate-fadeIn delay-1000">Your success is our expertise.</p>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                 <button className="group bg-[#2b6777] text-[#ffffff] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-none hover:bg-[#52ab98] transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 font-bold text-sm sm:text-base md:text-lg transform hover:scale-105 hover:shadow-md">
//                   <span>GET STARTED</span>
//                   <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 group-hover:translate-x-2 transition-transform" />
//                 </button>
//                 <button className="border-2 sm:border-3 border-[#2b6777] text-[#2b6777] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-none hover:bg-[#2b6777] hover:text-[#ffffff] transition-all duration-300 font-bold text-sm sm:text-base md:text-lg transform hover:scale-105">
//                   SCHEDULE CALL
//                 </button>
//               </div>

//               {/* Animated Stats */}
//               <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10 border-t-2 border-[#2b6777]">
//                 {[
//                   { value: "15+", label: "Years Experience" },
//                   { value: "500+", label: "Happy Clients" },
//                   { value: "98%", label: "Success Rate" }
//                 ].map((stat, index) => (
//                   <div key={index} className="text-center group cursor-pointer">
//                     <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2b6777] mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                     <div className="text-xs sm:text-sm text-[#2b6777] font-bold uppercase tracking-wide">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Professional Card */}
//             <div className="relative mt-8 lg:mt-0">
//               <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
//                 <div className="bg-[#2b6777] p-1 shadow-lg">
//                   <div className="bg-[#ffffff] p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                    
//                     {/* Professional Avatar */}
//                     <div className="flex items-center space-x-3 sm:space-x-4 border-b-2 border-[#c8d8e4] pb-4 sm:pb-6">
//                       <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#2b6777] flex items-center justify-center rounded-full transform hover:rotate-12 transition-transform">
//                         <Users className="w-8 sm:w-10 h-8 sm:h-10 text-[#ffffff]" />
//                       </div>
//                       <div>
//                         <h3 className="text-base sm:text-lg md:text-xl font-black text-[#2b6777]">CA Sunita Kulthe & CA Shraddha Kamath</h3>
//                         <p className="text-xs sm:text-sm text-[#2b6777] font-bold uppercase tracking-wide">Founder and Partner, Vittam Integrity Services</p>
//                       </div>
//                     </div>

//                     {/* Service Cards */}
//                     <div className="space-y-3 sm:space-y-4">
//                       {[
//                         { icon: TrendingUp, title: "TAX PLANNING" },
//                         { icon: Shield, title: "AUDIT SERVICES" },
//                         { icon: Calculator, title: "BUSINESS CONSULTING" }
//                       ].map((service, index) => (
//                         <div key={index} className="flex items-center justify-between p-3 sm:p-4 border-2 border-[#c8d8e4] hover:border-[#2b6777] transition-all duration-300 group">
//                           <div className="flex items-center space-x-3 sm:space-x-4">
//                             <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#f2f2f2] group-hover:bg-[#2b6777] flex items-center justify-center rounded-full transition-all">
//                               <service.icon className="w-4 sm:w-5 h-4 sm:h-5 text-[#2b6777] group-hover:text-[#ffffff]" />
//                             </div>
//                             <span className="font-bold text-sm sm:text-base text-[#2b6777]">{service.title}</span>
//                           </div>
//                           <span className="text-[#2b6777] font-black text-xs sm:text-sm">✓ AVAILABLE</span>
//                         </div>
//                       ))}
//                     </div>

//                     <button className="w-full bg-[#2b6777] text-[#ffffff] py-3 sm:py-4 font-black text-sm sm:text-base md:text-lg hover:bg-[#52ab98] transition-all duration-300 transform hover:scale-105 hover:shadow-md">
//                       Book Financial Consultation Now
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Animated Elements (optimized for mobile) */}
//               <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 border-4 border-[#2b6777] animate-spin hidden sm:block" style={{ animationDuration: '10s' }}>
//                 <div className="w-full h-full flex items-center justify-center">
//                   <TrendingUp className="w-4 sm:w-6 h-4 sm:h-6 text-[#2b6777]" />
//                 </div>
//               </div>
//               <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-10 sm:w-12 h-10 sm:h-12 border-2 border-[#c8d8e4] animate-bounce hidden sm:block">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <Shield className="w-4 sm:w-6 h-4 sm:h-6 text-[#2b6777]" />
//                 </div>
//               </div>
//               <div className="absolute top-1/2 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border border-[#f2f2f2] animate-pulse hidden sm:block"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Indicators */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 border-t-2 border-[#2b6777]">
//         <div className="max-w-7xl mx-auto pt-8 sm:pt-12 md:pt-16">
//           <div className="text-center mb-8 sm:mb-12">
//             <p className="text-[#2b6777] font-black text-sm sm:text-base md:text-lg uppercase tracking-wider">TRUSTED BY LEADING COMPANIES</p>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
//             {['TATA', 'RELIANCE', 'INFOSYS', 'WIPRO', 'HDFC', 'ICICI'].map((company, index) => (
//               <div key={index} className="text-xl sm:text-2xl md:text-3xl font-black text-[#c8d8e4] hover:text-[#2b6777] transition-colors cursor-pointer transform hover:scale-110">
//                 {company}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


























// import React from 'react';
// import { ArrowRight, Shield, TrendingUp, Users, Award, Calculator } from 'lucide-react';

// const HeroSection = () => {
//   return (
//     <div className="relative   sm:min-h-[80vh] bg-white overflow-hidden sm:-my-20">
//       {/* Animated Background Pattern (optimized for mobile) */}
//       <div className="absolute inset-0 hidden sm:block ">
//         <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-slate-200 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-slate-100 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-16 sm:bottom-32 left-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-2 border-slate-200 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-slate-100 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative  z-10 px-3 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
//             {/* Left Content */}
//             <div className="space-y-6 sm:space-y-8 md:space-y-10">
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="inline-flex items-center space-x-2 border-2 border-teal-600 text-teal-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse">
//                   <Award className="w-3 sm:w-4 h-3 sm:h-4" />
//                   <span>TRUSTED BY 500+ BUSINESSES</span>
//                 </div>
                
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-teal-600 leading-none tracking-tight">
//                   WE CRAFT
//                   <span className="block text-teal-600 relative">
//                     FINANCIAL
//                     <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-emerald-400 animate-pulse"></div>
//                   </span>
//                   SUCCESS
//                 </h1>
                
//                 <div className="text-base sm:text-lg md:text-xl text-teal-600 leading-relaxed max-w-2xl space-y-2">
//                   <p className="animate-fadeIn">Expert chartered accountants providing</p>
//                   <p className="animate-fadeIn delay-500">comprehensive financial solutions.</p>
//                   <p className="animate-fadeIn delay-1000">Your success is our expertise.</p>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                 <button className="group bg-teal-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-none hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 font-bold text-sm sm:text-base md:text-lg transform hover:scale-105 hover:shadow-md">
//                   <span>GET STARTED</span>
//                   <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 group-hover:translate-x-2 transition-transform" />
//                 </button>
//                 <button className="border-2 sm:border-3 border-teal-600 text-teal-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-none hover:bg-teal-600 hover:text-white transition-all duration-300 font-bold text-sm sm:text-base md:text-lg transform hover:scale-105">
//                   SCHEDULE CALL
//                 </button>
//               </div>

//               {/* Animated Stats */}
//               <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10 border-t-2 border-teal-600">
//                 {[
//                   { value: "15+", label: "Years Experience" },
//                   { value: "500+", label: "Happy Clients" },
//                   { value: "98%", label: "Success Rate" }
//                 ].map((stat, index) => (
//                   <div key={index} className="text-center group cursor-pointer">
//                     <div className="text-2xl sm:text-3xl md:text-4xl font-black text-teal-600 mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                     <div className="text-xs sm:text-sm text-teal-600 font-bold uppercase tracking-wide">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Content - Professional Card */}
//             <div className="relative mt-8 lg:mt-0">
//               <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
//                 <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-1 shadow-lg">
//                   <div className="bg-white p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                    
//                     {/* Professional Avatar */}
//                     <div className="flex items-center space-x-3 sm:space-x-4 border-b-2 border-slate-200 pb-4 sm:pb-6">
//                       <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-teal-600 to-emerald-500 flex items-center justify-center rounded-full transform hover:rotate-12 transition-transform">
//                         <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="text-base sm:text-lg md:text-xl font-black text-teal-600">CA Sunita Kulthe & CA Shraddha Kamath</h3>
//                         <p className="text-xs sm:text-sm text-teal-600 font-bold uppercase tracking-wide">Founder and Partner, Vittam Integrity Services</p>
//                       </div>
//                     </div>

//                     {/* Service Cards */}
//                     <div className="space-y-3 sm:space-y-4">
//                       {[
//                         { icon: TrendingUp, title: "TAX PLANNING" },
//                         { icon: Shield, title: "AUDIT SERVICES" },
//                         { icon: Calculator, title: "BUSINESS CONSULTING" }
//                       ].map((service, index) => (
//                         <div key={index} className="flex items-center justify-between p-3 sm:p-4 border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 group">
//                           <div className="flex items-center space-x-3 sm:space-x-4">
//                             <div className="w-8 sm:w-10 h-8 sm:h-10 bg-slate-100 group-hover:bg-teal-600 flex items-center justify-center rounded-full transition-all">
//                               <service.icon className="w-4 sm:w-5 h-4 sm:h-5 text-teal-600 group-hover:text-white" />
//                             </div>
//                             <span className="font-bold text-sm sm:text-base text-teal-600">{service.title}</span>
//                           </div>
//                           <span className="text-teal-600 font-black text-xs sm:text-sm">✓ AVAILABLE</span>
//                         </div>
//                       ))}
//                     </div>

//                     <button className="w-full bg-teal-600 text-white py-3 sm:py-4 font-black text-sm sm:text-base md:text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
//                       Book Financial Consultation Now
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Animated Elements (optimized for mobile) */}
//               <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 border-4 border-teal-600 animate-spin hidden sm:block" style={{ animationDuration: '10s' }}>
//                 <div className="w-full h-full flex items-center justify-center">
//                   <TrendingUp className="w-4 sm:w-6 h-4 sm:h-6 text-teal-600" />
//                 </div>
//               </div>
//               <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-10 sm:w-12 h-10 sm:h-12 border-2 border-slate-200 animate-bounce hidden sm:block">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <Shield className="w-4 sm:w-6 h-4 sm:h-6 text-teal-600" />
//                 </div>
//               </div>
//               <div className="absolute top-1/2 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border border-slate-100 animate-pulse hidden sm:block"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Indicators */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 border-t-2 border-teal-600">
//         <div className="max-w-7xl mx-auto pt-8 sm:pt-12 md:pt-16">
//           <div className="text-center mb-8 sm:mb-12">
//             <p className="text-teal-600 font-black text-sm sm:text-base md:text-lg uppercase tracking-wider">TRUSTED BY LEADING COMPANIES</p>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
//             {['TATA', 'RELIANCE', 'INFOSYS', 'WIPRO', 'HDFC', 'ICICI'].map((company, index) => (
//               <div key={index} className="text-xl sm:text-2xl md:text-3xl font-black text-slate-200 hover:text-teal-600 transition-colors cursor-pointer transform hover:scale-110">
//                 {company}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;