
// import React, { useState } from 'react';
// import { Shield, Award, Users, TrendingUp, Target, Eye, Heart, Calculator, CheckCircle, Clock, Star, ArrowRight } from 'lucide-react';

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState('mission');

//   return (
//     <div className="bg-[#ffffff] font-roboto min-h-screen">
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
//       <section className="relative min-h-[70vh] sm:min-h-[85vh] bg-gradient-to-br from-[#ffffff] via-[#f2f2f2] to-[#c8d8e4] overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-24 h-24 rounded-full border-4 border-[#2b6777] animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute top-32 right-16 w-16 h-16 rounded-full border-2 border-[#52ab98] animate-pulse"></div>
//           <div className="absolute bottom-24 left-1/3 w-12 h-12 rounded-full border-3 border-[#c8d8e4] animate-bounce"></div>
//           <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-[#c8d8e4] rotate-45 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24">
//           <div className="text-center space-y-8 sm:space-y-10">
//             {/* Breadcrumb for SEO */}
//             <nav className="text-sm font-medium" aria-label="Breadcrumb">
//               <ol className="flex justify-center space-x-2 text-neutral-700">
//                 <li><a href="/" className="hover:text-black transition-colors duration-300">Home</a></li>
//                 <li className="before:content-['/'] before:mx-2 text-neutral-700">About Us</li>
//               </ol>
//             </nav>

//             <div className="space-y-6 sm:space-y-8">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight font-roboto">
//                 ABOUT
//                 <span className="block relative text-black font-roboto">
//                   Vittam Integrity Services
//                   <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 h-1.5 bg-[#52ab98] animate-pulse rounded-full"></div>
//                 </span>
//               </h1>
              
//               <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-medium">
//                 Mumbai's most trusted chartered accountancy firm with over 15 years of excellence 
//                 in financial services, tax planning, and business consulting.
//               </p>
//             </div>

//             {/* Key Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto pt-12 sm:pt-16">
//               {[
//                 { value: "15+", label: "Years Excellence" },
//                 { value: "500+", label: "Happy Clients" },
//                 { value: "98%", label: "Success Rate" },
//                 { value: "24/7", label: "Support" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center group cursor-pointer p-4 rounded-2xl hover:bg-[#ffffff] hover:shadow-lg transition-all duration-300">
//                   <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                   <div className="text-sm sm:text-base text-neutral-700 font-bold uppercase tracking-wide">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-16 sm:py-20 md:py-24 bg-[#f2f2f2]" id="our-story">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             <div className="space-y-8 sm:space-y-10">
//               <div className="space-y-4">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
//                   OUR STORY &
//                   <span className="block text-black">JOURNEY</span>
//                 </h2>
//                 <div className="w-20 sm:w-24 h-1.5 bg-[#52ab98] rounded-full"></div>
//               </div>
              
//               <div className="space-y-6 text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed">
//                 <p>
//                    <strong className="text-black">" VITTAM INTEGRITY SERVICES",</strong> our firm name reflects the values we stand for. Derived from the Sanskrit word <strong className="text-black">“Vittam” (वित्तम्)</strong>,  meaning wealth or finance, and paired with the English term “Integrity Services”, our identity represents a seamless blend of financial expertise and unwavering ethical commitment.
// "Vittam Integrity Services is a professional services firm led by experienced Chartered Accountants, bringing together over three decades of combined expertise. We specialize in delivering comprehensive business solutions, including:

//                 </p>
               
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
//                 <button className="bg-[#123458] text-[#ffffff] px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-xl hover:bg-[#78a9dc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                   OUR SERVICES
//                 </button>
//                 <button className="border-2 border-[#123458] text-black px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-xl hover:bg-[#123458] hover:text-[#ffffff] transition-all duration-300 shadow-lg">
//                   MEET OUR TEAM
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-[#123458] p-6 sm:p-8 md:p-10 rounded-3xl transform hover:scale-105 transition-all duration-500 shadow-2xl">
//                 <div className="bg-[#ffffff] p-6 sm:p-8 md:p-10 rounded-2xl space-y-6 sm:space-y-8">
//                   <div className="text-center space-y-4 sm:space-y-6">
//                     <div className="w-20 sm:w-24 h-20 sm:h-24 bg-[#123458] mx-auto flex items-center justify-center rounded-full shadow-lg">
//                       <Calculator className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black">ESTABLISHED 2010</h3>
//                     <p className="text-base sm:text-lg text-neutral-700 font-medium">Mumbai's Premier CA Firm</p>
//                   </div>
                  
//                   <div className="space-y-4 sm:space-y-5">
//                     {["Direct and Indirect Taxation", "Litigation Support", "Litigation Support", "Startup Advisory","Global Capability Center (GCC) Consultation","Outsourcing Services"].map((cert, index) => (
//                       <div key={index} className="flex items-center justify-between p-4 sm:p-5 border-2 border-[#c8d8e4] hover:border-[#52ab98] rounded-xl transition-all group hover:bg-[#f2f2f2]">
//                         <span className="font-bold text-black text-sm sm:text-base">{cert}</span>
//                         <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-neutral-700" />
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
//       <section className="py-16 sm:py-20 md:py-24 bg-[#ffffff]" id="mission-vision">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black">
//               OUR CORE VALUES
//             </h2>
//             <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto font-medium">
//               The principles that guide our every decision and client interaction
//             </p>
//           </div>

//           {/* Tab Navigation */}
//           <div className="flex justify-center mb-12 sm:mb-16">
//             <div className="bg-[#f2f2f2] p-2 sm:p-3 rounded-2xl flex flex-wrap justify-center gap-2 sm:gap-3 shadow-lg">
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
//                       ? 'bg-[#123458] text-[#ffffff] shadow-lg' 
//                       : 'bg-transparent text-black hover:bg-[#c8d8e4]'
//                   } px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center space-x-2 sm:space-x-3`}
//                 >
//                   <tab.icon className="w-5 sm:w-6 h-5 sm:h-6" />
//                   <span>{tab.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="max-w-5xl mx-auto">
//             {activeTab === 'mission' && (
//               <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
//                 <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#123458] to-[#245da4] mx-auto rounded-full flex items-center justify-center shadow-xl">
//                   <Target className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">OUR MISSION</h3>
//                 <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed px-4 font-medium">
//                   At Vittam Integrity Services, our mission is to provide high-quality financial and tax advisory solutions rooted in integrity. We empower business worlwide through personalized services, deep technical expertise and a strong commitment to international standards and continuous improvement.
//                 </p>
//               </div>
//             )}

//             {activeTab === 'vision' && (
//               <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
//                 <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#123458] to-[#245da4] mx-auto rounded-full flex items-center justify-center shadow-xl">
//                   <Eye className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">OUR VISION</h3>
//                 <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed px-4 font-medium">
//             To be globally respected leaders in financial and tax advisory- build on a foundation of integrity and excellence - empowering clients wordwide through cutting -edge expertise, continuous growth and unwavering commitment to international standards.
//                 </p>
//               </div>
//             )}

//             {activeTab === 'values' && (
//               <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
//                 <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#123458] to-[#245da4] mx-auto rounded-full flex items-center justify-center shadow-xl">
//                   <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">OUR VALUES</h3>
//                 <div className="grid md:grid-cols-2 gap-8 sm:gap-10 px-4">
//                   {[
//                     { icon: Shield, title: "INTEGRITY", desc: "Honest, transparent, and ethical in all our dealings" },
//                     { icon: Award, title: "EXCELLENCE", desc: "Continuous improvement and highest quality standards" },
//                     { icon: Users, title: "CLIENT-FIRST", desc: "Your success is our priority and measure of achievement" },
//                     { icon: TrendingUp, title: "INNOVATION", desc: "Embracing technology and modern financial solutions" }
//                   ].map((value, index) => (
//                     <div key={index} className="space-y-4 text-left p-6 rounded-2xl hover:bg-[#f2f2f2] transition-all duration-300">
//                       <div className="flex items-center space-x-3 sm:space-x-4">
//                         <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-neutral-700" />
//                         <span className="font-bold text-black text-lg sm:text-xl">{value.title}</span>
//                       </div>
//                       <p className="text-base sm:text-lg text-neutral-700 font-medium">{value.desc}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 sm:py-20 md:py-24  bg-[#f4f6f8] text-black" id="why-choose-us">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
//               WHY CHOOSE Vittam Integrity Services?
//             </h2>
//             <p className="text-lg sm:text-xl md:text-2xl text-black max-w-4xl mx-auto font-medium">
//               Here's what sets us apart from other we Delivering value with unwavering Integrity
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
//               <div key={index} className="bg-[#123458]  backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 group border border-[#ffffff] border-opacity-30 shadow-md hover:shadow-xl">
//                 <div className="space-y-6 sm:space-y-8">
//                   <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#f2f2f2] bg-opacity-20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
//                     <item.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#123458]" />
//                   </div>
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#f2f2f2]">{item.title}</h3>
//                   <p className="text-base sm:text-lg text-[#f2f2f2] leading-relaxed font-medium">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certifications & Awards */}
//       <section className="py-16 sm:py-20 md:py-24 bg-[#f2f2f2]" id="certifications">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black">
//               CERTIFICATIONS & AWARDS
//             </h2>
//             <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto font-medium">
//       We are dedicated to providing reliable, transparent, and value-driven financial services, guided by principles of honesty, accountability, and professional integrity. We as a firm emphasize  ethical practice in our operations, ensuring clients receive services rooted in trust and transparency. 
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
//             {[
//               { title: "ICAI CERTIFIED", subtitle: "Institute of Chartered Accountants", icon: Award },
//               { title: "ISO 9001:2015", subtitle: "Quality Management System", icon: Shield },
//               { title: "GST PRACTITIONER", subtitle: "Government Registered", icon: CheckCircle },
//               { title: "BEST CA FIRM 2024", subtitle: "Mumbai Business Awards", icon: Star }
//             ].map((cert, index) => (
//               <div key={index} className="text-center group">
//             <div className="bg-[#ffffff] p-8 sm:p-10 border-4 border-[#c8d8e4] hover:border-[#123458] rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
//                   <div className="space-y-4 sm:space-y-6">
//                     <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#123458] to-[#59728d] mx-auto rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
//                       <cert.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#ffffff]" />
//                     </div>
//                     <h3 className="text-lg sm:text-xl font-black text-black">{cert.title}</h3>
//                     <p className="text-sm sm:text-base text-neutral-700 font-medium">{cert.subtitle}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 sm:py-20 md:py-24 bg-[#ffffff]">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="space-y-8 sm:space-y-10">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
//               READY TO WORK WITH
//               <span className="block text-black">MUMBAI'S BEST CA FIRM?</span>
//             </h2>
            
//             <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed font-medium max-w-4xl mx-auto">
//               Join 500+ satisfied clients who trust Vittam for their financial success. 
//               Get expert chartered accountant services with guaranteed compliance and peace of mind.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 sm:pt-10">
//               <button className="bg-[#123458] text-[#ffffff] px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-black text-base sm:text-lg md:text-xl rounded-xl hover:bg-[#3e556d] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl">
//                 <span>BOOK FREE CONSULTATION</span>
//                 <ArrowRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
//               </button>
//               <button className="border-2 border-[#2b6777] text-black px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-black text-base sm:text-lg md:text-xl rounded-xl hover:bg-[#123458] hover:text-[#ffffff] transition-all duration-300 shadow-xl">
//                 CALL +91 xxxxx 43210
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 pt-12 sm:pt-16 border-t-4 border-[#123458] rounded-full">
//               {[
//                 { value: "FREE", label: "Initial Consultation" },
//                 { value: "24HR", label: "Response Time" },
//                 { value: "100%", label: "Satisfaction Guarantee" }
//               ].map((item, index) => (
//                 <div key={index} className="text-center p-4 rounded-2xl hover:bg-[#f2f2f2] transition-all duration-300">
//                   <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-3">{item.value}</div>
//                   <div className="text-sm sm:text-base text-neutral-700 font-bold uppercase tracking-wide">{item.label}</div>
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
    <div className="bg-[#ffffff] font-roboto min-h-screen pt-35">
      {/* SEO Meta Information */}
      <div className="hidden">
        <h1>About Vittam Integrity Services - Bangalore's Leading Financial Advisory Firm</h1>
        <meta
          name="description"
          content="Discover Vittam Integrity Services, Bangalore's premier financial advisory firm with over 30 years of combined expertise. Expert services in taxation, audits, compliance, and business advisory, led by experienced Chartered Accountants."
        />
        <meta
          name="keywords"
          content="chartered accountant Bangalore, financial advisory, tax consultant, audit services, business advisory, compliance services, startup advisory, GST services"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Vittam Integrity Services - Bangalore's Leading Financial Advisory Firm" />
        <meta
          property="og:description"
          content="Over 30 years of expertise in taxation, audits, compliance, and business advisory. Trusted financial solutions rooted in integrity and transparency."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vittamintegrityservices.com/about" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] bg-gradient-to-br from-[#ffffff] via-[#f2f2f2] to-[#c8d8e4] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full border-4 border-[#2b6777] animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-32 right-16 w-16 h-16 rounded-full border-2 border-[#52ab98] animate-pulse"></div>
          <div className="absolute bottom-24 left-1/3 w-12 h-12 rounded-full border-3 border-[#c8d8e4] animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-[#c8d8e4] rotate-45 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24">
          <div className="text-center space-y-8 sm:space-y-10">
            {/* Breadcrumb for SEO */}
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex justify-center space-x-2 text-neutral-700">
                <li><a href="/" className="hover:text-black transition-colors duration-300">Home</a></li>
                <li className="before:content-['/'] before:mx-2 text-neutral-700">About Us</li>
              </ol>
            </nav>

            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight font-roboto">
                ABOUT
                <span className="block relative text-black font-roboto">
                  Vittam Integrity Services
                  <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 h-1.5 bg-[#52ab98] animate-pulse rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-medium">
                Bangalore's premier financial advisory firm with over 30 years of combined expertise in taxation, audits, compliance, and business advisory services.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto pt-12 sm:pt-16">
              {[
                { value: "30+", label: "Years Expertise" },
                { value: "7+", label: "Specialized Services" },
                { value: "Global", label: "Client Reach" },
                { value: "100%", label: "Ethical Commitment" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer p-4 rounded-2xl hover:bg-[#ffffff] hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3 transform group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm sm:text-base text-neutral-700 font-bold uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f2f2f2]" id="our-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
                  OUR STORY &
                  <span className="block text-black">JOURNEY</span>
                </h2>
                <div className="w-20 sm:w-24 h-1.5 bg-[#52ab98] rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed">
                <p>
                  <strong className="text-black">"Vittam Integrity Services"</strong>, our firm name reflects the values we stand for. Derived from the Sanskrit word <strong className="text-black">“Vittam” (वित्तम्)</strong>, meaning wealth or finance, and paired with the English term “Integrity Services”, our identity represents a seamless blend of financial expertise and unwavering ethical commitment.
                </p>
                <p>
                  Vittam Integrity Services is a professional services firm led by experienced Chartered Accountants, bringing together over three decades of combined expertise. We specialize in delivering comprehensive business solutions, including:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
                <a href="/services" className="bg-[#123458] text-[#ffffff] px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-xl hover:bg-[#78a9dc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  OUR SERVICES
                </a>
                <a href="/team" className="border-2 border-[#123458] text-black px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg rounded-xl hover:bg-[#123458] hover:text-[#ffffff] transition-all duration-300 shadow-lg">
                  MEET OUR TEAM
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#123458] p-6 sm:p-8 md:p-10 rounded-3xl transform hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="bg-[#ffffff] p-6 sm:p-8 md:p-10 rounded-2xl space-y-6 sm:space-y-8">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="w-20 sm:w-24 h-20 sm:h-24 bg-[#123458] mx-auto flex items-center justify-center rounded-full shadow-lg">
                      <Calculator className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black">ESTABLISHED</h3>
                    <p className="text-base sm:text-lg text-neutral-700 font-medium">Bangalore's Premier Financial Advisory Firm</p>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      "Direct and Indirect Taxation",
                      "Litigation Support",
                      "Audits",
                      "Startup Advisory",
                      "Global Capability Center (GCC) Consultation",
                      "Outsourcing Services",
                      "Certifications and Compliance Advisory"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-4 sm:p-5 border-2 border-[#c8d8e4] hover:border-[#52ab98] rounded-xl transition-all group hover:bg-[#f2f2f2]">
                        <span className="font-bold text-black text-sm sm:text-base">{service}</span>
                        <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-neutral-700" />
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
      <section className="py-16 sm:py-20 md:py-24 bg-[#ffffff]" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black">
              OUR CORE VALUES
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto font-medium">
              The principles that guide our every decision and client interaction
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="bg-[#f2f2f2] p-2 sm:p-3 rounded-2xl flex flex-wrap justify-center gap-2 sm:gap-3 shadow-lg">
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
                      ? 'bg-[#123458] text-[#ffffff] shadow-lg' 
                      : 'bg-transparent text-black hover:bg-[#c8d8e4]'
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
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#123458] to-[#245da4] mx-auto rounded-full flex items-center justify-center shadow-xl">
                  <Target className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">OUR MISSION</h3>
                <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed px-4 font-medium">
                  At Vittam Integrity Services, our mission is to provide high-quality financial and tax advisory solutions rooted in integrity. We empower businesses worldwide through personalized services, deep technical expertise, and a strong commitment to international standards and continuous improvement.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#123458] to-[#245da4] mx-auto rounded-full flex items-center justify-center shadow-xl">
                  <Eye className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">OUR VISION</h3>
                <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed px-4 font-medium">
                  To be globally respected leaders in financial and tax advisory, built on a foundation of integrity and excellence, empowering clients worldwide through cutting-edge expertise, continuous growth, and unwavering commitment to international standards.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="text-center space-y-8 sm:space-y-10 animate-fadeIn">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#123458] to-[#245da4] mx-auto rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-[#ffffff]" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">OUR VALUES</h3>
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10 px-4">
                  {[
                    { icon: Shield, title: "HONESTY", desc: "Upholding truth and transparency in all our dealings" },
                    { icon: Award, title: "ACCOUNTABILITY", desc: "Taking responsibility for delivering exceptional results" },
                    { icon: Users, title: "PROFESSIONAL INTEGRITY", desc: "Adhering to the highest ethical standards" },
                    { icon: Heart, title: "TRUST", desc: "Building lasting relationships through reliability" },
                    { icon: Eye, title: "TRANSPARENCY", desc: "Ensuring clarity and openness in every engagement" }
                  ].map((value, index) => (
                    <div key={index} className="space-y-4 text-left p-6 rounded-2xl hover:bg-[#f2f2f2] transition-all duration-300">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-neutral-700" />
                        <span className="font-bold text-black text-lg sm:text-xl">{value.title}</span>
                      </div>
                      <p className="text-base sm:text-lg text-neutral-700 font-medium">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f4f6f8] text-black" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              WHY CHOOSE Vittam Integrity Services?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-black max-w-4xl mx-auto font-medium">
              Delivering value with unwavering integrity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                icon: Award,
                title: "30+ Years Expertise",
                description: "Over three decades of combined experience in financial and tax advisory across diverse industries."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Led by qualified Chartered Accountants with specialized expertise in taxation, audits, and compliance."
              },
              {
                icon: Shield,
                title: "Ethical Approach",
                description: "Rooted in honesty, accountability, and professional integrity for trusted financial solutions."
              },
              {
                icon: Clock,
                title: "Global Availability",
                description: "Serving clients across time zones with flexible, responsive support tailored to your needs."
              },
              {
                icon: TrendingUp,
                title: "Comprehensive Solutions",
                description: "Offering end-to-end services in taxation, audits, compliance, and business advisory."
              },
              {
                icon: Star,
                title: "Client-Focused",
                description: "Personalized services ensuring transparency and long-term value for startups and enterprises."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#123458] backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 group border border-[#ffffff] border-opacity-30 shadow-md hover:shadow-xl">
                <div className="space-y-6 sm:space-y-8">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#f2f2f2] bg-opacity-20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                    <item.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#123458]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#f2f2f2]">{item.title}</h3>
                  <p className="text-base sm:text-lg text-[#f2f2f2] leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#f2f2f2]" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black">
              CERTIFICATIONS & QUALIFICATIONS
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto font-medium">
              We are dedicated to providing reliable, transparent, and value-driven financial services, guided by principles of honesty, accountability, and professional integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              { title: "ICAI CERTIFIED", subtitle: "Institute of Chartered Accountants of India", icon: Award },
              { title: "DIP IFRS (LONDON)", subtitle: "International Financial Reporting Standards", icon: Shield },
              { title: "ASA (CPA AUSTRALIA)", subtitle: "Associate of CPA Australia", icon: CheckCircle },
              { title: "GST PRACTITIONER", subtitle: "Government Registered", icon: Star }
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#ffffff] p-8 sm:p-10 border-4 border-[#c8d8e4] hover:border-[#123458] rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#123458] to-[#59728d] mx-auto rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                      <cert.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#ffffff]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-black">{cert.title}</h3>
                    <p className="text-sm sm:text-base text-neutral-700 font-medium">{cert.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
              READY TO WORK WITH
              <span className="block text-black">BANGALORE'S PREMIER FINANCIAL ADVISORY FIRM?</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed font-medium max-w-4xl mx-auto">
              Partner with Vittam Integrity Services for expert financial solutions rooted in trust, transparency, and over 30 years of expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 sm:pt-10">
              <a
                href="./contact"
                className="bg-[#123458] text-[#ffffff] px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-black text-base sm:text-lg md:text-xl rounded-xl hover:bg-[#3e556d] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl"
              >
                <span>BOOK FREE CONSULTATION</span>
                <ArrowRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
              </a>
              <a
                href="tel:+919623365775"
                className="border-2 border-[#2b6777] text-black px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-black text-base sm:text-lg md:text-xl rounded-xl hover:bg-[#123458] hover:text-[#ffffff] transition-all duration-300 shadow-xl"
              >
                CALL +91-9623365775
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10 pt-12 sm:pt-16 border-t-4 border-[#123458] rounded-full">
              {[
                { value: "FREE", label: "Initial Consultation" },
                { value: "GLOBAL", label: "Client Support" },
                { value: "100%", label: "Ethical Standards" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-2xl hover:bg-[#f2f2f2] transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-3">{item.value}</div>
                  <div className="text-sm sm:text-base text-neutral-700 font-bold uppercase tracking-wide">{item.label}</div>
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
          "openingHours": "Available for clients across global time zones",
          "priceRange": "$$",
          "servedCuisine": [
            "Direct and Indirect Taxation",
            "Litigation Support",
            "Audits",
            "Startup Advisory",
            "Global Capability Center (GCC) Consultation",
            "Outsourcing Services",
            "Certifications and Compliance Advisory"
          ],
          "founder": [
            {
              "@type": "Person",
              "name": "Shraddha Kamath"
            },
            {
              "@type": "Person",
              "name": "Sunita Kulthe"
            }
          ]
        })
      }} />
    </div>
  );
};

export default AboutPage;