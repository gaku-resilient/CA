// import React, { useState } from 'react';
// import { Shield, Award, Users, TrendingUp, Target, Eye, Heart, Calculator, CheckCircle, Clock, Star, ArrowRight } from 'lucide-react';

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState('mission');

//   return (
//     <div className="bg-white font-sans min-h-screen mt-27">
//       {/* SEO Meta Information (would be in head in real implementation) */}
//       <div className="hidden">
//         <h1>About Vittam Chartered Accountants - Mumbai's Leading CA Firm</h1>
//         <meta name="description" content="Discover Vittam Chartered Accountants, Mumbai's premier CA firm with 15+ years experience. Expert tax planning, audit services, and business consulting. ICAI certified professionals serving 500+ satisfied clients." />
//         <meta name="keywords" content="chartered accountant Mumbai, CA firm Mumbai, tax consultant, audit services, business consulting, ICAI certified, financial advisory, GST services" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="About Vittam Chartered Accountants - Mumbai's Leading CA Firm" />
//         <meta property="og:description" content="15+ years of expertise in tax planning, audit services, and business consulting. Trusted by 500+ clients across Mumbai." />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://vittam.com/about" />
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] sm:min-h-[80vh] bg-white overflow-hidden">
//         {/* Animated Background (optimized for mobile) */}
//         <div className="absolute inset-0 opacity-5 hidden sm:block">
//           <div className="absolute top-10 left-5 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute top-20 right-5 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border border-gray-400 rounded-full animate-pulse"></div>
//           <div className="absolute bottom-16 left-1/3 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border-2 border-gray-300 rounded-full animate-bounce"></div>
//           <div className="absolute top-1/3 right-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-gray-200 animate-spin" style={{ animationDuration: '15s' }}></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
//           <div className="text-center space-y-6 sm:space-y-8">
//             {/* Breadcrumb for SEO */}
//             <nav className="text-xs sm:text-sm font-medium" aria-label="Breadcrumb">
//               <ol className="flex justify-center space-x-2 text-gray-600">
//                 <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
//                 <li className="before:content-['/'] before:mx-2">About Us</li>
//               </ol>
//             </nav>

//             <div className="space-y-4 sm:space-y-6">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
//                 ABOUT
//                 <span className="block relative">
//                   Vittam Integrity Services
//                   <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 md:w-32 h-1 bg-black animate-pulse"></div>
//                 </span>
//               </h1>
              
//               <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 Mumbai's most trusted chartered accountancy firm with over 15 years of excellence 
//                 in financial services, tax planning, and business consulting.
//               </p>
//             </div>

//             {/* Key Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto pt-8 sm:pt-12">
//               {[
//                 { value: "15+", label: "Years Excellence" },
//                 { value: "500+", label: "Happy Clients" },
//                 { value: "98%", label: "Success Rate" },
//                 { value: "24/7", label: "Support" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center group cursor-pointer">
//                   <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                   <div className="text-xs sm:text-sm text-gray-600 font-bold uppercase">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="our-story">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
//             <div className="space-y-6 sm:space-y-8">
//               <div className="space-y-4">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
//                   OUR STORY &
//                   <span className="block">JOURNEY</span>
//                 </h2>
//                 <div className="w-16 sm:w-20 h-1 bg-black"></div>
//               </div>
              
//               <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
//                 <p>
//                   Founded in <strong>2010</strong> by <strong>CA Sunita Kulthe</strong>, Vittam Integrity Services began as a small 
//                   chartered accountancy practice in Mumbai with a simple mission: to provide honest, 
//                   reliable, and expert financial services to businesses and individuals.
//                 </p>
//                 <p>
//                   Over the past <strong>15 years</strong>, we have grown from a single-person practice to 
//                   Mumbai's leading chartered accountancy firm, serving over <strong>500 satisfied clients</strong> 
//                   across various industries including manufacturing, IT, retail, and healthcare.
//                 </p>
//                 <p>
//                   Our commitment to excellence, continuous learning, and client satisfaction has earned 
//                   us recognition as one of the most trusted CA firms in Mumbai, with a 
//                   <strong>98% client retention rate</strong> and numerous industry awards.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
//                 <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
//                   OUR SERVICES
//                 </button>
//                 <button className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300">
//                   MEET OUR TEAM
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-black p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-all duration-500">
//                 <div className="bg-white p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
//                   <div className="text-center space-y-3 sm:space-y-4">
//                     <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black mx-auto flex items-center justify-center rounded-full">
//                       <Calculator className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
//                     </div>
//                     <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black">ESTABLISHED 2010</h3>
//                     <p className="text-sm sm:text-base text-gray-600">Mumbai's Premier CA Firm</p>
//                   </div>
                  
//                   <div className="space-y-3 sm:space-y-4">
//                     {["ICAI CERTIFIED", "ISO 9001:2015", "GST PRACTITIONER"].map((cert, index) => (
//                       <div key={index} className="flex items-center justify-between p-3 sm:p-4 border-2 border-gray-200 hover:border-black transition-all group">
//                         <span className="font-bold text-black text-sm sm:text-base">{cert}</span>
//                         <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission, Vision, Values */}
//       <section className="py-12 sm:py-16 md:py-20 bg-white" id="mission-vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">
//               OUR CORE VALUES
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               The principles that guide our every decision and client interaction
//             </p>
//           </div>

//           {/* Tab Navigation */}
//           <div className="flex justify-center mb-8 sm:mb-12">
//             <div className="bg-gray-100 p-1 sm:p-2 rounded-full flex flex-wrap justify-center gap-2 sm:space-x-2">
//               {[
//                 { id: 'mission', label: 'MISSION', icon: Target },
//                 { id: 'vision', label: 'VISION', icon: Eye },
//                 { id: 'values', label: 'VALUES', icon: Heart }
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`${
//                     activeTab === tab.id 
//                       ? 'bg-black text-white' 
//                       : 'bg-transparent text-black hover:bg-gray-200'
//                   } px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center space-x-1 sm:space-x-2`}
//                 >
//                   <tab.icon className="w-4 sm:w-5 h-4 sm:h-5" />
//                   <span>{tab.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="max-w-4xl mx-auto">
//             {activeTab === 'mission' && (
//               <div className="text-center space-y-6 sm:space-y-8 animate-fadeIn">
//                 <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black mx-auto rounded-full flex items-center justify-center">
//                   <Target className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black">OUR MISSION</h3>
//                 <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed px-4">
//                   To empower businesses and individuals with expert financial guidance, innovative solutions, 
//                   and unwavering integrity. We strive to be the most trusted chartered accountancy firm in Mumbai, 
//                   helping our clients achieve financial success and regulatory compliance with confidence.
//                 </p>
//               </div>
//             )}

//             {activeTab === 'vision' && (
//               <div className="text-center space-y-6 sm:space-y-8 animate-fadeIn">
//                 <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black mx-auto rounded-full flex items-center justify-center">
//                   <Eye className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black">OUR VISION</h3>
//                 <p className="text-sm sm:text-base md:text-xl text-gray-700 leading-relaxed px-4">
//                   To be recognized as India's leading chartered accountancy firm, known for excellence, 
//                   innovation, and client satisfaction. We envision a future where every business, 
//                   regardless of size, has access to world-class financial expertise and strategic guidance.
//                 </p>
//               </div>
//             )}

//             {activeTab === 'values' && (
//               <div className="text-center space-y-6 sm:space-y-8 animate-fadeIn">
//                 <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black mx-auto rounded-full flex items-center justify-center">
//                   <Heart className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black">OUR VALUES</h3>
//                 <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
//                   {[
//                     { icon: Shield, title: "INTEGRITY", desc: "Honest, transparent, and ethical in all our dealings" },
//                     { icon: Award, title: "EXCELLENCE", desc: "Continuous improvement and highest quality standards" },
//                     { icon: Users, title: "CLIENT-FIRST", desc: "Your success is our priority and measure of achievement" },
//                     { icon: TrendingUp, title: "INNOVATION", desc: "Embracing technology and modern financial solutions" }
//                   ].map((value, index) => (
//                     <div key={index} className="space-y-3 sm:space-y-4 text-left">
//                       <div className="flex items-center space-x-2 sm:space-x-3">
//                         <value.icon className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
//                         <span className="font-bold text-black text-base sm:text-lg">{value.title}</span>
//                       </div>
//                       <p className="text-sm sm:text-base text-gray-700">{value.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-12 sm:py-16 md:py-20 bg-black text-white" id="why-choose-us">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
//               WHY CHOOSE Vittam Integrity Services?
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
//               Here's what sets us apart from other chartered accountancy firms in Mumbai
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {[
//               {
//                 icon: Award,
//                 title: "15+ Years Experience",
//                 description: "Extensive experience across industries with proven track record of client success and regulatory compliance."
//               },
//               {
//                 icon: Users,
//                 title: "Expert Team",
//                 description: "ICAI certified chartered accountants, tax consultants, and financial advisors with specialized expertise."
//               },
//               {
//                 icon: Shield,
//                 title: "100% Compliance",
//                 description: "Zero compliance issues with government authorities. We ensure all filings are accurate and on time."
//               },
//               {
//                 icon: Clock,
//                 title: "24/7 Support",
//                 description: "Round-the-clock availability for urgent matters and emergency tax consultations when you need us most."
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Cost-Effective",
//                 description: "Transparent pricing with no hidden costs. Maximum value for your investment in professional services."
//               },
//               {
//                 icon: Star,
//                 title: "Client Satisfaction",
//                 description: "98% client retention rate with 500+ satisfied clients who trust us with their financial matters."
//               }
//             ].map((item, index) => (
//               <div key={index} className="bg-gray-900 p-6 sm:p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group">
//                 <div className="space-y-4 sm:space-y-6">
//                   <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                     <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-black" />
//                   </div>
//                   <h3 className="text-base sm:text-lg md:text-xl font-black">{item.title}</h3>
//                   <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certifications & Awards */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="certifications">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">
//               CERTIFICATIONS & AWARDS
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Recognized for excellence and compliance by leading industry bodies
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {[
//               { title: "ICAI CERTIFIED", subtitle: "Institute of Chartered Accountants", icon: Award },
//               { title: "ISO 9001:2015", subtitle: "Quality Management System", icon: Shield },
//               { title: "GST PRACTITIONER", subtitle: "Government Registered", icon: CheckCircle },
//               { title: "BEST CA FIRM 2024", subtitle: "Mumbai Business Awards", icon: Star }
//             ].map((cert, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-white p-4 sm:p-6 md:p-8 border-4 border-gray-200 hover:border-black transition-all duration-300 transform hover:scale-105">
//                   <div className="space-y-3 sm:space-y-4">
//                     <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black mx-auto rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                       <cert.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
//                     </div>
//                     <h3 className="text-base sm:text-lg font-black text-black">{cert.title}</h3>
//                     <p className="text-xs sm:text-sm text-gray-600 font-medium">{cert.subtitle}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-12 sm:py-16 md:py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="space-y-6 sm:space-y-8">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
//               READY TO WORK WITH
//               <span className="block">MUMBAI'S BEST CA FIRM?</span>
//             </h2>
            
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
//               Join 500+ satisfied clients who trust Vittam for their financial success. 
//               Get expert chartered accountant services with guaranteed compliance and peace of mind.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
//               <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-black text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//                 <span>BOOK FREE CONSULTATION</span>
//                 <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
//               </button>
//               <button className="border-2 border-black text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-black text-sm sm:text-base md:text-lg hover:bg-black hover:text-white transition-all duration-300">
//                 CALL +91 xxxxx 43210
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 border-t-2 border-black">
//               {[
//                 { value: "FREE", label: "Initial Consultation" },
//                 { value: "24HR", label: "Response Time" },
//                 { value: "100%", label: "Satisfaction Guarantee" }
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-2">{item.value}</div>
//                   <div className="text-xs sm:text-sm text-gray-600 font-bold uppercase">{item.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Structured Data for SEO */}
//       <script type="application/ld+json" dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "AccountingService",
//           "name": "Vittam Chartered Accountants",
//           "description": "Mumbai's leading chartered accountancy firm providing expert tax planning, audit services, and business consulting for 15+ years.",
//           "url": "https://vittam.com",
//           "telephone": "+91-98765-43210",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "123 Business District, Nariman Point",
//             "addressLocality": "Mumbai",
//             "addressRegion": "Maharashtra",
//             "postalCode": "400021",
//             "addressCountry": "IN"
//           },
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "18.9220",
//             "longitude": "72.8347"
//           },
//           "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
//           "priceRange": "$$",
//           "servedCuisine": ["Tax Planning", "Audit Services", "Business Consulting", "GST Services"],
//           "foundingDate": "2010",
//           "founder": {
//             "@type": "Person",
//             "name": "CA Sunita Kulthe"
//           },
//           "aggregateRating": {
//             "@type": "AggregateRating",
//             "ratingValue": "4.9",
//             "reviewCount": "500"
//           }
//         })
//       }} />
//     </div>
//   );
// };

// export default AboutPage;
















import React, { useState } from 'react';
import { Shield, Award, Users, TrendingUp, Target, Eye, Heart, Calculator, CheckCircle, Clock, Star, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="bg-white font-sans min-h-screen">
      {/* SEO Meta Information (would be in head in real implementation) */}
      <div className="hidden">
        <h1>About Vittam Chartered Accountants - Mumbai's Leading CA Firm</h1>
        <meta name="description" content="Discover Vittam Chartered Accountants, Mumbai's premier CA firm with 15+ years experience. Expert tax planning, audit services, and business consulting. ICAI certified professionals serving 500+ satisfied clients." />
        <meta name="keywords" content="chartered accountant Mumbai, CA firm Mumbai, tax consultant, audit services, business consulting, ICAI certified, financial advisory, GST services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Vittam Chartered Accountants - Mumbai's Leading CA Firm" />
        <meta property="og:description" content="15+ years of expertise in tax planning, audit services, and business consulting. Trusted by 500+ clients across Mumbai." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vittam.com/about" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full border-4 border-teal-600 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-32 right-16 w-16 h-16 rounded-full border-2 border-emerald-400 animate-pulse"></div>
          <div className="absolute bottom-24 left-1/3 w-12 h-12 rounded-full border-3 border-slate-400 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-blue-300 rotate-45 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24">
          <div className="text-center space-y-8 sm:space-y-10">
            {/* Breadcrumb for SEO */}
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex justify-center space-x-2 text-slate-600">
                <li><a href="/" className="hover:text-teal-600 transition-colors duration-300">Home</a></li>
                <li className="before:content-['/'] before:mx-2 text-slate-400">About Us</li>
              </ol>
            </nav>

            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-teal-700 leading-tight">
                ABOUT
                <span className="block relative text-teal-600">
                  Vittam Integrity Services
                  <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 h-1.5 bg-emerald-400 animate-pulse rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Mumbai's most trusted chartered accountancy firm with over 15 years of excellence 
                in financial services, tax planning, and business consulting.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto pt-12 sm:pt-16">
              {[
                { value: "15+", label: "Years Excellence" },
                { value: "500+", label: "Happy Clients" },
                { value: "98%", label: "Success Rate" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-teal-600 mb-3 transform group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm sm:text-base text-slate-600 font-bold uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50" id="our-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-teal-700 leading-tight">
                  OUR STORY &
                  <span className="block text-teal-600">JOURNEY</span>
                </h2>
                <div className="w-20 sm:w-24 h-1.5 bg-emerald-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                  Founded in <strong className="text-teal-600">2010</strong> by <strong className="text-teal-600">CA Sunita Kulthe</strong>, Vittam Integrity Services began as a small 
                  chartered accountancy practice in Mumbai with a simple mission: to provide honest, 
                  reliable, and expert financial services to businesses and individuals.
                </p>
                <p>
                  Over the past <strong className="text-teal-600">15 years</strong>, we have grown from a single-person practice to 
                  Mumbai's leading chartered accountancy firm, serving over <strong className="text-teal-600">500 satisfied clients</strong> 
                  across various industries including manufacturing, IT, retail, and healthcare.
                </p>
                <p>
                  Our commitment to excellence, continuous learning, and client satisfaction has earned 
                  us recognition as one of the most trusted CA firms in Mumbai, with a 
                  <strong className="text-teal-600">98% client retention rate</strong> and numerous industry awards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
                <button className="bg-teal-600 text-white px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  OUR SERVICES
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg">
                  MEET OUR TEAM
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 sm:p-8 md:p-10 rounded-3xl transform hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl space-y-6 sm:space-y-8">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-teal-600 to-emerald-500 mx-auto flex items-center justify-center rounded-full shadow-lg">
                      <Calculator className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-teal-700">ESTABLISHED 2010</h3>
                    <p className="text-base sm:text-lg text-slate-600 font-medium">Mumbai's Premier CA Firm</p>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-5">
                    {["ICAI CERTIFIED", "ISO 9001:2015", "GST PRACTITIONER"].map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 sm:p-5 border-2 border-slate-200 hover:border-emerald-400 rounded-xl transition-all group hover:bg-slate-50">
                        <span className="font-bold text-teal-700 text-sm sm:text-base">{cert}</span>
                        <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-20 md:py-24 bg-white" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-teal-700">
              OUR CORE VALUES
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium">
              The principles that guide our every decision and client interaction
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="bg-slate-100 p-2 sm:p-3 rounded-2xl flex flex-wrap justify-center gap-2 sm:gap-3 shadow-lg">
              {[
                { id: 'mission', label: 'MISSION', icon: Target },
                { id: 'vision', label: 'VISION', icon: Eye },
                { id: 'values', label: 'VALUES', icon: Heart }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id 
                      ? 'bg-teal-600 text-white shadow-lg' 
                      : 'bg-transparent text-teal-700 hover:bg-slate-200'
                  } px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center space-x-2 sm:space-x-3`}
                >
                  <tab.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'mission' && (
              <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-teal-600 to-emerald-500 mx-auto rounded-full flex items-center justify-center shadow-xl">
                  <Target className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-teal-700">OUR MISSION</h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed px-4 font-medium">
                  To empower businesses and individuals with expert financial guidance, innovative solutions, 
                  and unwavering integrity. We strive to be the most trusted chartered accountancy firm in Mumbai, 
                  helping our clients achieve financial success and regulatory compliance with confidence.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-teal-600 to-emerald-500 mx-auto rounded-full flex items-center justify-center shadow-xl">
                  <Eye className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-teal-700">OUR VISION</h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed px-4 font-medium">
                  To be recognized as India's leading chartered accountancy firm, known for excellence, 
                  innovation, and client satisfaction. We envision a future where every business, 
                  regardless of size, has access to world-class financial expertise and strategic guidance.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-teal-600 to-emerald-500 mx-auto rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-teal-700">OUR VALUES</h3>
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10 px-4">
                  {[
                    { icon: Shield, title: "INTEGRITY", desc: "Honest, transparent, and ethical in all our dealings" },
                    { icon: Award, title: "EXCELLENCE", desc: "Continuous improvement and highest quality standards" },
                    { icon: Users, title: "CLIENT-FIRST", desc: "Your success is our priority and measure of achievement" },
                    { icon: TrendingUp, title: "INNOVATION", desc: "Embracing technology and modern financial solutions" }
                  ].map((value, index) => (
                    <div key={index} className="space-y-4 text-left p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-emerald-500" />
                        <span className="font-bold text-teal-700 text-lg sm:text-xl">{value.title}</span>
                      </div>
                      <p className="text-base sm:text-lg text-slate-600 font-medium">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-600 to-teal-700 text-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              WHY CHOOSE Vittam Integrity Services?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto font-medium">
              Here's what sets us apart from other chartered accountancy firms in Mumbai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                icon: Award,
                title: "15+ Years Experience",
                description: "Extensive experience across industries with proven track record of client success and regulatory compliance."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "ICAI certified chartered accountants, tax consultants, and financial advisors with specialized expertise."
              },
              {
                icon: Shield,
                title: "100% Compliance",
                description: "Zero compliance issues with government authorities. We ensure all filings are accurate and on time."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock availability for urgent matters and emergency tax consultations when you need us most."
              },
              {
                icon: TrendingUp,
                title: "Cost-Effective",
                description: "Transparent pricing with no hidden costs. Maximum value for your investment in professional services."
              },
              {
                icon: Star,
                title: "Client Satisfaction",
                description: "98% client retention rate with 500+ satisfied clients who trust us with their financial matters."
              }
            ].map((item, index) => (
            <div key={index} className="bg-teal-500 bg-opacity-20 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 group border border-white border-opacity-30 shadow-md hover:shadow-xl">
                <div className="space-y-6 sm:space-y-8">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-grey bg-opacity-20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                    <item.icon className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-grey">{item.title}</h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-teal-700">
              CERTIFICATIONS & AWARDS
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium">
              Recognized for excellence and compliance by leading industry bodies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              { title: "ICAI CERTIFIED", subtitle: "Institute of Chartered Accountants", icon: Award },
              { title: "ISO 9001:2015", subtitle: "Quality Management System", icon: Shield },
              { title: "GST PRACTITIONER", subtitle: "Government Registered", icon: CheckCircle },
              { title: "BEST CA FIRM 2024", subtitle: "Mumbai Business Awards", icon: Star }
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 sm:p-10 border-4 border-slate-200 hover:border-emerald-400 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-teal-600 to-emerald-500 mx-auto rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                      <cert.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-teal-700">{cert.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">{cert.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-teal-700 leading-tight">
              READY TO WORK WITH
              <span className="block text-teal-600">MUMBAI'S BEST CA FIRM?</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
              Join 500+ satisfied clients who trust Vittam for their financial success. 
              Get expert chartered accountant services with guaranteed compliance and peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 sm:pt-10">
              <button className="bg-teal-600 text-white px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-black text-base sm:text-lg md:text-xl rounded-xl hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl">
                <span>BOOK FREE CONSULTATION</span>
                <ArrowRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-black text-base sm:text-lg md:text-xl rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-xl">
                CALL +91 xxxxx 43210
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 pt-12 sm:pt-16 border-t-4 border-emerald-400 rounded-full">
              {[
                { value: "FREE", label: "Initial Consultation" },
                { value: "24HR", label: "Response Time" },
                { value: "100%", label: "Satisfaction Guarantee" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-teal-600 mb-3">{item.value}</div>
                  <div className="text-sm sm:text-base text-slate-600 font-bold uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          "name": "Vittam Chartered Accountants",
          "description": "Mumbai's leading chartered accountancy firm providing expert tax planning, audit services, and business consulting for 15+ years.",
          "url": "https://vittam.com",
          "telephone": "+91-98765-43210",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Business District, Nariman Point",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400021",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.9220",
            "longitude": "72.8347"
          },
          "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
          "priceRange": "$$",
          "servedCuisine": ["Tax Planning", "Audit Services", "Business Consulting", "GST Services"],
          "foundingDate": "2010",
          "founder": {
            "@type": "Person",
            "name": "CA Sunita Kulthe"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
          }
        })
      }} />
    </div>
  );
};

export default AboutPage;