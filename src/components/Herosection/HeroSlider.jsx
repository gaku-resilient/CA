import React from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Award, Calculator } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden mt-11">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-200 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-gray-100 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-gray-200 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gray-100 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gray-100 animate-pulse delay-1000"></div>
      </div>

  
   
      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-20 pb-20 lg:px-8 lg:pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 border-2 border-black text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  <Award className="w-4 h-4" />
                  <span>TRUSTED BY 500+ BUSINESSES</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-none tracking-tight">
                  WE CRAFT
                  <span className="block text-black relative">
                    FINANCIAL
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-black animate-pulse"></div>
                  </span>
                  SUCCESS
                </h1>
                
                <div className="text-2xl text-gray-600 leading-relaxed max-w-2xl space-y-2">
                  <p className="animate-fadeIn">Expert chartered accountants providing</p>
                  <p className="animate-fadeIn delay-500">comprehensive financial solutions.</p>
                  <p className="animate-fadeIn delay-1000">Your success is our expertise.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-black text-white px-10 py-5 rounded-none hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 font-bold text-lg transform hover:scale-105 hover:shadow-2xl">
                  <span>GET STARTED</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="border-3 border-black text-black px-10 py-5 rounded-none hover:bg-black hover:text-white transition-all duration-300 font-bold text-lg transform hover:scale-105">
                  SCHEDULE CALL
                </button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t-2 border-black">
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">15+</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wide">Happy Clients</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Professional Card */}
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <div className="bg-black p-1 shadow-2xl ">
                  <div className="bg-white p-8 space-y-8">
                    
                    {/* Professional Avatar */}
                    <div className="flex items-center space-x-4 border-b-2 border-gray-100 pb-6">
                      <div className="w-20 h-20 bg-black flex items-center justify-center transform hover:rotate-12 transition-transform">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-black">CA Sunita Kulthe</h3>
                        <p className="text-gray-600 font-bold uppercase text-sm tracking-wide">Senior Partner & Tax Advisor</p>
                      </div>
                    </div>

                    {/* Service Cards */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border-2 border-gray-200 hover:border-black transition-all duration-300 group">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-100 group-hover:bg-black flex items-center justify-center transition-all">
                            <TrendingUp className="w-5 h-5 text-black group-hover:text-white" />
                          </div>
                          <span className="font-bold text-black">TAX PLANNING</span>
                        </div>
                        <span className="text-black font-black">✓ AVAILABLE</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border-2 border-gray-200 hover:border-black transition-all duration-300 group">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-100 group-hover:bg-black flex items-center justify-center transition-all">
                            <Shield className="w-5 h-5 text-black group-hover:text-white" />
                          </div>
                          <span className="font-bold text-black">AUDIT SERVICES</span>
                        </div>
                        <span className="text-black font-black">✓ AVAILABLE</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border-2 border-gray-200 hover:border-black transition-all duration-300 group">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gray-100 group-hover:bg-black flex items-center justify-center transition-all">
                            <Calculator className="w-5 h-5 text-black group-hover:text-white" />
                          </div>
                          <span className="font-bold text-black">BUSINESS CONSULTING</span>
                        </div>
                        <span className="text-black font-black">✓ AVAILABLE</span>
                      </div>
                    </div>

                    <button className="w-full bg-black text-white py-4 font-black text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      BOOK FREE CONSULTATION
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Animated Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-black animate-spin" style={{animationDuration: '10s'}}>
                <div className="w-full h-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 border-2 border-gray-400 animate-bounce">
                <div className="w-full h-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
              </div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 border border-gray-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="relative z-10 px-6 pb-20 lg:px-8 border-t-2 border-black">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="text-center mb-12">
            <p className="text-black font-black text-lg uppercase tracking-wider">TRUSTED BY LEADING COMPANIES</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-3xl font-black text-gray-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">TATA</div>
            <div className="text-3xl font-black text-gray-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">RELIANCE</div>
            <div className="text-3xl font-black text-gray-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">INFOSYS</div>
            <div className="text-3xl font-black text-gray-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">WIPRO</div>
            <div className="text-3xl font-black text-gray-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">HDFC</div>
            <div className="text-3xl font-black text-gray-400 hover:text-black transition-colors cursor-pointer transform hover:scale-110">ICICI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;