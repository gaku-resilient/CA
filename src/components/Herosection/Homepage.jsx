// import React, { useState, useEffect } from 'react';
// import { 
//   TrendingUp, 
//   Shield, 
//   Users, 
//   Award, 
//   CheckCircle, 
//   ArrowRight, 
//   Calculator, 
//   FileText, 
//   Building2,
//   Globe,
//   Target,
//   Eye,
//   Quote,
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Phone,
//   Mail,
//   MapPin,
//   Calendar
// } from 'lucide-react';

// const Homepage = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const benefits = [
//     { icon: Shield, title: '13+ Years Experience', desc: 'Proven track record in taxation & compliance' },
//     { icon: Users, title: '500+ Clients Served', desc: 'Trusted by businesses across industries' },
//     { icon: Award, title: '95% Success Rate', desc: 'Excellence in tax litigation & advisory' },
//     { icon: TrendingUp, title: '24/7 Support', desc: 'Always available for your business needs' }
//   ];

//   const services = [
//     { icon: Calculator, title: 'Direct & Indirect Taxation', desc: 'Complete tax compliance and planning solutions' },
//     { icon: Shield, title: 'Litigation Support', desc: 'Expert representation in tax disputes and appeals' },
//     { icon: FileText, title: 'Audits & Compliance', desc: 'Statutory audits and regulatory compliance services' },
//     { icon: Building2, title: 'Startup Advisory', desc: 'Comprehensive support for emerging businesses' },
//     { icon: Globe, title: 'GCC Consultation', desc: 'Global Capability Center advisory services' },
//     { icon: Target, title: 'Outsourcing Services', desc: 'Efficient business process outsourcing solutions' }
//   ];

//   const testimonials = [
//     {
//       name: 'Baba Amritdas Khaki',
//       position: 'Managing Trustee',
//       company: 'Shree Ramanand Manav Sevadham',
//       text: 'Sunita is handling taxation & compliance matters of our Trust since 2020. We find her very sincere and honest in her work. Our audits & returns are timely filed by her. With her expert guidance, we successfully obtained 80G and 12A registrations.',
//       rating: 5
//     },
//     {
//       name: 'Mr. Khushrow Irani',
//       position: 'Director',
//       company: 'Essen Precision Machines Pvt Ltd',
//       text: 'I have always experienced her as extremely diligent, hard working and prompt in her deliverables. Her no nonsense approach is a sign of her professional ethic and culture. I am sure she will continue to deliver the same for a long time to come.',
//       rating: 5
//     },
//     {
//       name: 'Maj Gen Cyrus A Pithawalla (Retd)',
//       position: 'Director',
//       company: 'Leslie Sawhny Endowment',
//       text: 'Sunita has been providing services for our trust since last 2 years. We find her very sincere & logical in her approach. She keeps herself updated with latest tax provisions. We are happy with her professional services.',
//       rating: 5
//     },
//     {
//       name: 'Adv. Rohan Sonawane',
//       position: 'Advocate',
//       company: 'Bombay High Court',
//       text: 'I have been availing accounting and tax audit advisory from Sunita for the past ten years. Sunita is an extremely learned and competent professional. Sunita has really made my tax filings very easy and smooth.',
//       rating: 5
//     }
//   ];

//   const teamMembers = [
//     {
//       name: 'Shraddha Kamath',
//       position: 'Founder & Partner',
//       qualifications: 'M.Com, CA, CMA',
//       experience: '15+ Years',
//       image: '/api/placeholder/300/400',
//       specializations: [
//         'Financial statement analysis and audits',
//         'Internal control frameworks',
//         'Regulatory and tax compliance',
//         'Tax planning and advisory'
//       ],
//       description: 'Qualified Chartered Accountant and Cost Accountant with extensive experience in financial management, compliance, taxation, and business advisory services across diverse industries including Infrastructure, Technology Services, and MNCs.'
//     },
//     {
//       name: 'CA Sunita Kulthe',
//       position: 'Founder & Partner',
//       qualifications: 'B.Com, FCA, Dip IFRS (London), ASA (CPA Australia)',
//       experience: '13+ Years',
//       image: '/api/placeholder/300/400',
//       specializations: [
//         'Direct and indirect taxation',
//         'Tax litigation and appeals',
//         'Statutory audits',
//         'Business advisory services'
//       ],
//       description: 'Fellow Chartered Accountant with extensive expertise in taxation, audit & business advisory. Recognized for deep understanding of complex tax litigation and analytical audit approach with strong legal acumen.'
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Custom Cursor */}
    

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-50 to-teal-50 pt-20">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//           <div className="absolute top-40 left-40 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         </div>
        
//         <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-slate-600">वित्तम्</span>
//             <br />
//             Integrity Services
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
//             Professional Chartered Accountant services delivering value with unwavering integrity. 
//             Expert solutions in taxation, auditing, and business advisory.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group">
//               Explore Our Services
//               <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105">
//               Schedule Consultation
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Social Proof Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Vittam Integrity Services?</h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Trusted by hundreds of clients for our expertise, integrity, and commitment to excellence
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <div 
//                 key={index}
//                 className={`bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 transform delay-${index * 100} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-slate-500 rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
//                   <benefit.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-800 to-teal-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-bold mb-6">About Vittam Integrity Services</h2>
//                 <p className="text-lg text-slate-200 mb-6 leading-relaxed">
//                   Our firm name reflects the values we stand for. Derived from the Sanskrit word "Vittam" (वित्तम्) meaning wealth or finance, 
//                   and paired with "Integrity Services", our identity represents a seamless blend of financial expertise and unwavering ethical commitment.
//                 </p>
//                 <p className="text-slate-200 leading-relaxed mb-6">
//                   Vittam Integrity Services is a professional services firm led by experienced Chartered Accountants, 
//                   bringing together over three decades of combined expertise in delivering comprehensive business solutions.
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
//                   <Eye className="w-8 h-8 text-teal-300 mb-4" />
//                   <h3 className="text-xl font-bold mb-2">Vision</h3>
//                   <p className="text-sm text-slate-200">
//                     To be globally respected leaders in financial and tax advisory, built on integrity and excellence, 
//                     empowering clients worldwide through cutting-edge expertise.
//                   </p>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
//                   <Target className="w-8 h-8 text-teal-300 mb-4" />
//                   <h3 className="text-xl font-bold mb-2">Mission</h3>
//                   <p className="text-sm text-slate-200">
//                     To provide high-quality financial and tax advisory solutions rooted in integrity, 
//                     empowering businesses through personalized services and deep technical expertise.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-teal-600 p-6 rounded-xl">
//                 <h3 className="text-2xl font-bold mb-2">Our Motto</h3>
//                 <p className="text-lg italic">"Delivering value with unwavering Integrity"</p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {services.map((service, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
//                 >
//                   <service.icon className="w-8 h-8 text-teal-300 mb-4" />
//                   <h4 className="font-bold text-sm mb-2">{service.title}</h4>
//                   <p className="text-xs text-slate-300">{service.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Meet Our Expert Team</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               Led by seasoned professionals with decades of combined experience in financial services and taxation
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {teamMembers.map((member, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="relative">
//                   <div className="h-64 bg-gradient-to-br from-teal-500 to-slate-500 flex items-center justify-center">
//                     <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
//                       <Users className="w-20 h-20 text-teal-600" />
//                     </div>
//                   </div>
//                   <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-teal-600">
//                     {member.experience}
//                   </div>
//                 </div>
                
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
//                   <p className="text-teal-600 font-semibold mb-1">{member.position}</p>
//                   <p className="text-slate-600 text-sm mb-4">{member.qualifications}</p>
                  
//                   <p className="text-slate-700 leading-relaxed mb-6">{member.description}</p>
                  
//                   <div>
//                     <h4 className="font-bold text-slate-800 mb-3">Key Specializations:</h4>
//                     <div className="space-y-2">
//                       {member.specializations.map((spec, specIndex) => (
//                         <div key={specIndex} className="flex items-start">
//                           <CheckCircle className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
//                           <span className="text-sm text-slate-600">{spec}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Client Testimony</h2>
//             <p className="text-xl text-slate-600">What our valued clients say about our services</p>
//           </div>

//           <div className="relative">
//             <div className="bg-gradient-to-br from-slate-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-full opacity-10">
//                 <div className="absolute top-8 left-8">
//                   <Quote className="w-16 h-16 text-white" />
//                 </div>
//                 <div className="absolute bottom-8 right-8 rotate-180">
//                   <Quote className="w-16 h-16 text-white" />
//                 </div>
//               </div>
              
//               <div className="relative z-10">
//                 <div className="flex justify-center mb-6">
//                   {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
//                     <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
                
//                 <blockquote className="text-lg md:text-xl text-center leading-relaxed mb-8 max-w-4xl mx-auto">
//                   "{testimonials[currentTestimonial].text}"
//                 </blockquote>
                
//                 <div className="text-center">
//                   <h4 className="text-xl font-bold text-white mb-1">
//                     {testimonials[currentTestimonial].name}
//                   </h4>
//                   <p className="text-teal-300 font-medium">
//                     {testimonials[currentTestimonial].position}
//                   </p>
//                   <p className="text-slate-300 text-sm">
//                     {testimonials[currentTestimonial].company}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevTestimonial}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-all duration-300 hover:scale-110"
//             >
//               <ChevronLeft className="w-6 h-6 text-slate-600" />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-all duration-300 hover:scale-110"
//             >
//               <ChevronRight className="w-6 h-6 text-slate-600" />
//             </button>

//             {/* Indicators */}
//             <div className="flex justify-center mt-8 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonial(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     currentTestimonial === index ? 'bg-teal-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 bg-gradient-to-br from-teal-600 to-slate-800 text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Financial Future?</h2>
//           <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Join hundreds of satisfied clients who trust Vittam Integrity Services for their financial and tax advisory needs. 
//             Let's discuss how we can add value to your business.
//           </p>
          
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
//               <Phone className="w-8 h-8 text-teal-300 mx-auto mb-4" />
//               <h3 className="font-bold text-lg mb-2">Call Us</h3>
//               <p className="text-teal-100">+91 9623365775</p>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
//               <Mail className="w-8 h-8 text-teal-300 mx-auto mb-4" />
//               <h3 className="font-bold text-lg mb-2">Email Us</h3>
//               <p className="text-teal-100">info@vittamintegrity.com</p>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
//               <Calendar className="w-8 h-8 text-teal-300 mx-auto mb-4" />
//               <h3 className="font-bold text-lg mb-2">Schedule</h3>
//               <p className="text-teal-100">Free Consultation</p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group">
//               Schedule Free Consultation
//               <Calendar className="ml-2 w-5 h-5 transform group-hover:scale-110 transition-transform" />
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-teal-600 transition-all duration-300 hover:scale-105">
//               Download Our Brochure
//             </button>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Homepage;












// import React, { useState, useEffect } from 'react';
// import { 
//   TrendingUp, 
//   Shield, 
//   Users, 
//   Award, 
//   CheckCircle, 
//   ArrowRight, 
//   Calculator, 
//   FileText, 
//   Building2,
//   Globe,
//   Target,
//   Eye,
//   Quote,
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Phone,
//   Mail,
//   MapPin,
//   Calendar,
//   X
// } from 'lucide-react';
// import throttle from 'lodash/throttle';

// // Error Boundary Component
// class ErrorBoundary extends React.Component {
//   state = { hasError: false };

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('ErrorBoundary caught:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong. Please try refreshing the page.</div>;
//     }
//     return this.props.children;
//   }
// }

// const Homepage = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [visibleBenefits, setVisibleBenefits] = useState([]);

//   useEffect(() => {
//     setIsLoaded(true);
    
//     const handleMouseMove = throttle((e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     }, 16); // ~60fps
    
//     window.addEventListener('mousemove', handleMouseMove);
    
//     const handleScroll = () => {
//       const benefitsSection = document.getElementById('benefits-section');
//       if (benefitsSection) {
//         const rect = benefitsSection.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           benefits.forEach((_, index) => {
//             setTimeout(() => {
//               setVisibleBenefits(prev => [...new Set([...prev, index])]);
//             }, index * 200);
//           });
//         }
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//       handleMouseMove.cancel();
//     };
//   });

//   const benefits = [
//     { 
//       icon: Shield, 
//       title: '13+ Years Experience', 
//       desc: 'Proven track record in taxation & compliance',
//       number: '13+',
//       label: 'Years of Excellence',
//       color: 'from-teal-500 to-teal-600'
//     },
//     { 
//       icon: Users, 
//       title: '500+ Clients Served', 
//       desc: 'Trusted by businesses across industries',
//       number: '500+',
//       label: 'Happy Clients',
//       color: 'from-blue-500 to-blue-600'
//     },
//     { 
//       icon: Award, 
//       title: '95% Success Rate', 
//       desc: 'Excellence in tax litigation & advisory',
//       number: '95%',
//       label: 'Success Rate',
//       color: 'from-emerald-500 to-emerald-600'
//     },
//     { 
//       icon: TrendingUp, 
//       title: '24/7 Support', 
//       desc: 'Always available for your business needs',
//       number: '24/7',
//       label: 'Support Available',
//       color: 'from-purple-500 to-purple-600'
//     }
//   ];

//   const services = [
//     { icon: Calculator, title: 'Direct & Indirect Taxation', desc: 'Complete tax compliance and planning solutions' },
//     { icon: Shield, title: 'Litigation Support', desc: 'Expert representation in tax disputes and appeals' },
//     { icon: FileText, title: 'Audits & Compliance', desc: 'Statutory audits and regulatory compliance services' },
//     { icon: Building2, title: 'Startup Advisory', desc: 'Comprehensive support for emerging businesses' },
//     { icon: Globe, title: 'GCC Consultation', desc: 'Global Capability Center advisory services' },
//     { icon: Target, title: 'Outsourcing Services', desc: 'Efficient business process outsourcing solutions' }
//   ];

//   const testimonials = [
//     {
//       name: 'Baba Amritdas Khaki',
//       position: 'Managing Trustee',
//       company: 'Shree Ramanand Manav Sevadham',
//       text: 'Sunita is handling taxation & compliance matters of our Trust since 2020. We find her very sincere and honest in her work. Our audits & returns are timely filed by her. With her expert guidance, we successfully obtained 80G and 12A registrations.',
//       rating: 5
//     },
//     {
//       name: 'Mr. Khushrow Irani',
//       position: 'Director',
//       company: 'Essen Precision Machines Pvt Ltd',
//       text: 'I have always experienced her as extremely diligent, hard working and prompt in her deliverables. Her no nonsense approach is a sign of her professional ethic and culture. I am sure she will continue to deliver the same for a long time to come.',
//       rating: 5
//     },
//     {
//       name: 'Maj Gen Cyrus A Pithawalla (Retd)',
//       position: 'Director',
//       company: 'Leslie Sawhny Endowment',
//       text: 'Sunita has been providing services for our trust since last 2 years. We find her very sincere & logical in her approach. She keeps herself updated with latest tax provisions. We are happy with her professional services.',
//       rating: 5
//     },
//     {
//       name: 'Adv. Rohan Sonawane',
//       position: 'Advocate',
//       company: 'Bombay High Court',
//       text: 'I have been availing accounting and tax audit advisory from Sunita for the past ten years. Sunita is an extremely learned and competent professional. Sunita has really made my tax filings very easy and smooth.',
//       rating: 5
//     }
//   ];

//   const teamMembers = [
//     {
//       name: 'Shraddha Kamath',
//       position: 'Founder & Partner',
//       qualifications: 'M.Com, CA, CMA',
//       experience: '15+ Years',
//       image: '/api/placeholder/300/400',
//       specializations: [
//         'Financial statement analysis and audits',
//         'Internal control frameworks',
//         'Regulatory and tax compliance',
//         'Tax planning and advisory'
//       ],
//       description: 'Qualified Chartered Accountant and Cost Accountant with extensive experience in financial management, compliance, taxation, and business advisory services across diverse industries including Infrastructure, Technology Services, and MNCs.',
//       fullBio: 'Shraddha Kamath is a qualified Chartered Accountant and Cost Accountant with over 15 years of experience in financial management, compliance, taxation, and business advisory services. She has a proven track record of working across diverse industries — including Infrastructure, Technology Services, and Multinational Corporations — and possesses deep expertise in managing financial operations under multiple accounting frameworks such as Indian GAAP, US GAAP, and IFRS. Known for her go-getter attitude, strong teamwork, and creative problem-solving abilities, she combines technical financial expertise with a practical, solutions-driven approach to client engagements. In addition to her leadership role at Vittam Integrity Services, Shraddha currently serves as Senior Manager – Finance at Cargill Business Services. Over the years, she has built a versatile career with renowned global organizations including Hewlett Packard Enterprise, AP Moller Maersk, and Ernst & Young.',
//       skills: ['Financial Modelling', 'Advanced Excel Analytics', 'Management Reporting', 'PowerPoint Presentations', 'Internal Controls', 'GAAP Compliance'],
//       currentRole: 'Senior Manager – Finance at Cargill Business Services'
//     },
//     {
//       name: 'CA Sunita Kulthe',
//       position: 'Founder & Partner',
//       qualifications: 'B.Com, FCA, Dip IFRS (London), ASA (CPA Australia)',
//       experience: '13+ Years',
//       image: '/api/placeholder/300/400',
//       specializations: [
//         'Direct and indirect taxation',
//         'Tax litigation and appeals',
//         'Statutory audits',
//         'Business advisory services'
//       ],
//       description: 'Fellow Chartered Accountant with extensive expertise in taxation, audit & business advisory. Recognized for deep understanding of complex tax litigation and analytical audit approach with strong legal acumen.',
//       fullBio: 'CA Sunita Kulthe is a highly respected Chartered Accountant and the Founder of both Kulthe & Associates and Vittam Integrity Services. With over 13 years of post-qualification experience, she brings extensive expertise in direct and indirect taxation, audit, litigation, and business advisory services. She is widely recognized for her deep understanding of complex tax litigation, including assessments and appellate proceedings. Her analytical audit approach, combined with strong legal acumen and a business-oriented mindset, allows her to consistently deliver practical and compliant financial solutions. Over the years, Sunita has successfully handled intricate matters across industries such as Real Estate, NGOs/Trusts, Hospitality, and NRI Taxation, helping clients navigate India\'s evolving regulatory and tax landscape.',
//       skills: ['Tax Litigation', 'Appellate Proceedings', 'Statutory Audits', 'NRI Taxation', 'Real Estate Advisory', 'Trust & NGO Compliance'],
//       currentRole: 'Founder – Kulthe & Associates'
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <ErrorBoundary>
//       <div className="min-h-screen bg-white overflow-hidden">
//         {/* Custom Cursor */}
//         <div 
//           className="fixed w-6 h-6 bg-teal-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out hidden lg:block"
//           style={{
//             left: mousePosition.x - 12,
//             top: mousePosition.y - 12,
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         />

       
//           {/* Social Proof Section */}
//         <section id="benefits-section" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-50 to-teal-50 pt-20">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//             <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//             <div className="absolute top-40 left-40 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//           </div>
//            <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-100 rounded-full animate-spin opacity-30" style={{animationDuration: '20s'}}></div>
//             <div className="absolute top-40 right-20 w-24 h-24 border border-blue-100 rounded-full animate-pulse"></div>
//             <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-teal-50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
//             <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-slate-100 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            
//             <div className="absolute top-32 right-1/4 opacity-5">
//               <Calculator className="w-24 h-24 text-teal-600 animate-pulse" />
//             </div>
//             <div className="absolute bottom-32 left-1/3 opacity-5">
//               <FileText className="w-20 h-20 text-blue-600 animate-pulse" style={{animationDelay: '1s'}} />
//             </div>
//           </div>
          
//           {/* <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-slate-600">वित्तम्</span>
//               <br />
//               Integrity Services
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
//               Professional Chartered Accountant services delivering value with unwavering integrity. 
//               Expert solutions in taxation, auditing, and business advisory.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group">
//                 Explore Our Services
//                 <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105">
//                 Schedule Consultation
//               </button>
//             </div>
//           </div> */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
//                 Why Choose 
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Vittam Integrity</span> Services?
//               </h2>
//               <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
//                 Trusted by hundreds of clients for our expertise, integrity, and commitment to excellence in chartered accountancy
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {benefits.map((benefit, index) => (
//                 <div 
//                   key={index}
//                   className={`group relative transform transition-all duration-700 hover:scale-105 ${
//                     visibleBenefits.includes(index) 
//                       ? 'translate-y-0 opacity-100' 
//                       : 'translate-y-16 opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                 >
//                   <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group-hover:border-teal-200">
//                     <div className={`bg-gradient-to-br ${benefit.color} p-6 text-white relative overflow-hidden`}>
//                       <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
//                       <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                      
//                       <div className="relative z-10">
//                         <benefit.icon className="w-10 h-10 text-white mb-3 transform group-hover:scale-110 transition-transform duration-300" />
//                         <div className="text-3xl font-bold mb-1">{benefit.number}</div>
//                         <div className="text-sm font-medium opacity-90">{benefit.label}</div>
//                       </div>
//                     </div>
                    
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                      
//                       <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
//                         <div 
//                           className={`h-full bg-gradient-to-r ${benefit.color} transform origin-left transition-transform duration-1000 ${
//                             visibleBenefits.includes(index) ? 'scale-x-100' : 'scale-x-0'
//                           }`}
//                           style={{ transitionDelay: `${(index * 200) + 500}ms` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
//                     <Star className="w-4 h-4 text-white" />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-16 text-center">
//               <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-teal-50 to-blue-50 border-[#52ab98]  px-8 py-4 rounded-full">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-medium text-slate-700">Trusted Nationwide</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
//                   <span className="text-sm font-medium text-slate-700">ISO Certified</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
//                   <span className="text-sm font-medium text-slate-700">Award Winning</span>
//                 </div>
//               </div>
//             </div>
      
//           </div>
//         </section>

//         {/* <section id="benefits-section" className="py-20 bg-white relative overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-100 rounded-full animate-spin opacity-30" style={{animationDuration: '20s'}}></div>
//             <div className="absolute top-40 right-20 w-24 h-24 border border-blue-100 rounded-full animate-pulse"></div>
//             <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-teal-50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
//             <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-slate-100 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            
//             <div className="absolute top-32 right-1/4 opacity-5">
//               <Calculator className="w-24 h-24 text-teal-600 animate-pulse" />
//             </div>
//             <div className="absolute bottom-32 left-1/3 opacity-5">
//               <FileText className="w-20 h-20 text-blue-600 animate-pulse" style={{animationDelay: '1s'}} />
//             </div>
//           </div>

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
//                 Why Choose 
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Vittam Integrity</span> Services?
//               </h2>
//               <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
//                 Trusted by hundreds of clients for our expertise, integrity, and commitment to excellence in chartered accountancy
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {benefits.map((benefit, index) => (
//                 <div 
//                   key={index}
//                   className={`group relative transform transition-all duration-700 hover:scale-105 ${
//                     visibleBenefits.includes(index) 
//                       ? 'translate-y-0 opacity-100' 
//                       : 'translate-y-16 opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                 >
//                   <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group-hover:border-teal-200">
//                     <div className={`bg-gradient-to-br ${benefit.color} p-6 text-white relative overflow-hidden`}>
//                       <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
//                       <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                      
//                       <div className="relative z-10">
//                         <benefit.icon className="w-10 h-10 text-white mb-3 transform group-hover:scale-110 transition-transform duration-300" />
//                         <div className="text-3xl font-bold mb-1">{benefit.number}</div>
//                         <div className="text-sm font-medium opacity-90">{benefit.label}</div>
//                       </div>
//                     </div>
                    
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                      
//                       <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
//                         <div 
//                           className={`h-full bg-gradient-to-r ${benefit.color} transform origin-left transition-transform duration-1000 ${
//                             visibleBenefits.includes(index) ? 'scale-x-100' : 'scale-x-0'
//                           }`}
//                           style={{ transitionDelay: `${(index * 200) + 500}ms` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
//                     <Star className="w-4 h-4 text-white" />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-16 text-center">
//               <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-teal-50 to-blue-50 px-8 py-4 rounded-full">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-medium text-slate-700">Trusted Nationwide</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
//                   <span className="text-sm font-medium text-slate-700">ISO Certified</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
//                   <span className="text-sm font-medium text-slate-700">Award Winning</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* About Us Section */}
//         <section className="py-20 bg-gradient-to-br from-slate-800 to-teal-900 text-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-4xl md:text-5xl font-bold mb-6">About Vittam Integrity Services</h2>
//                   <p className="text-lg text-slate-200 mb-6 leading-relaxed">
//                     Our firm name reflects the values we stand for. Derived from the Sanskrit word "Vittam" (वित्तम्) meaning wealth or finance, 
//                     and paired with "Integrity Services", our identity represents a seamless blend of financial expertise and unwavering ethical commitment.
//                   </p>
//                   <p className="text-slate-200 leading-relaxed mb-6">
//                     Vittam Integrity Services is a professional services firm led by experienced Chartered Accountants, 
//                     bringing together over three decades of combined expertise in delivering comprehensive business solutions.
//                   </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
//                     <Eye className="w-8 h-8 text-teal-300 mb-4" />
//                     <h3 className="text-xl font-bold mb-2">Vision</h3>
//                     <p className="text-sm text-slate-200">
//                       To be globally respected leaders in financial and tax advisory, built on integrity and excellence, 
//                       empowering clients worldwide through cutting-edge expertise.
//                     </p>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
//                     <Target className="w-8 h-8 text-teal-300 mb-4" />
//                     <h3 className="text-xl font-bold mb-2">Mission</h3>
//                     <p className="text-sm text-slate-200">
//                       To provide high-quality financial and tax advisory solutions rooted in integrity, 
//                       empowering businesses through personalized services and deep technical expertise.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="bg-teal-600 p-6 rounded-xl">
//                   <h3 className="text-2xl font-bold mb-2">Our Motto</h3>
//                   <p className="text-lg italic">"Delivering value with unwavering Integrity"</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 {services.map((service, index) => (
//                   <div 
//                     key={index}
//                     className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
//                   >
//                     <service.icon className="w-8 h-8 text-teal-300 mb-4" />
//                     <h4 className="font-bold text-sm mb-2">{service.title}</h4>
//                     <p className="text-xs text-slate-300">{service.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50 relative overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-10 left-10 w-40 h-40 border border-teal-100 rounded-full animate-spin opacity-20" style={{animationDuration: '30s'}}></div>
//             <div className="absolute bottom-10 right-10 w-32 h-32 border border-blue-100 rounded-full animate-spin opacity-20" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
//           </div>

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Meet Our Expert Team</h2>
//               <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//                 Led by seasoned professionals with decades of combined experience in financial services and taxation
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12">
//               {teamMembers.map((member, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
//                   onClick={() => setSelectedMember(member)}
//                 >
//                   <div className="relative">
//                     <div className="h-64 bg-gradient-to-br from-teal-500 to-slate-500 flex items-center justify-center relative overflow-hidden">
//                       <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
//                       <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-300">
//                         <Users className="w-20 h-20 text-teal-600" />
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     </div>
//                     <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-teal-600 shadow-lg">
//                       {member.experience || 'N/A'}
//                     </div>
//                     <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-700">
//                       Click to view details
//                     </div>
//                   </div>
                  
//                   <div className="p-8">
//                     <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">{member.name || 'Unknown'}</h3>
//                     <p className="text-teal-600 font-semibold mb-1">{member.position || 'N/A'}</p>
//                     <p className="text-slate-600 text-sm mb-4">{member.qualifications || 'N/A'}</p>
                    
//                     <p className="text-slate-700 leading-relaxed mb-6 line-clamp-3">{member.description || 'No description available'}</p>
                    
//                     <div>
//                       <h4 className="font-bold text-slate-800 mb-3">Key Specializations:</h4>
//                       <div className="grid grid-cols-2 gap-2">
//                         {(member.specializations || []).slice(0, 4).map((spec, specIndex) => (
//                           <div key={specIndex} className="flex items-start">
//                             <CheckCircle className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
//                             <span className="text-sm text-slate-600">{spec}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mt-6 flex items-center text-teal-600 group-hover:translate-x-2 transition-transform duration-300">
//                       <span className="font-medium">View Full Profile</span>
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Team Member Modal */}
//           {selectedMember && (
//             <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//               <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-300">
//                 <button
//                   onClick={() => setSelectedMember(null)}
//                   className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
//                   aria-label="Close modal"
//                 >
//                   <X className="w-5 h-5 text-slate-600" />
//                 </button>

//                 <div className="relative">
//                   <div className="h-64 sm:h-80 bg-gradient-to-br from-teal-500 to-slate-500 flex items-center justify-center relative overflow-hidden">
//                     <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center">
//                       <Users className="w-16 h-16 sm:w-20 sm:h-20 text-teal-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 text-white">
//                       <h2 className="text-3xl sm:text-4xl font-bold mb-2">{selectedMember.name || 'Unknown'}</h2>
//                       <p className="text-teal-200 text-lg font-semibold">{selectedMember.position || 'N/A'}</p>
//                       <p className="text-white/80 text-sm">{selectedMember.qualifications || 'N/A'}</p>
//                     </div>
//                     <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//                       <span className="text-white font-bold text-sm">{selectedMember.experience || 'N/A'}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 sm:p-8">
//                   <div className="grid lg:grid-cols-2 gap-8">
//                     <div className="space-y-6">
//                       <div>
//                         <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Background</h3>
//                         <p className="text-slate-700 leading-relaxed">{selectedMember.fullBio || 'No bio available'}</p>
//                       </div>

//                       {selectedMember.currentRole && (
//                         <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
//                           <h4 className="font-bold text-teal-800 mb-2">Current Role</h4>
//                           <p className="text-teal-700 text-sm">{selectedMember.currentRole}</p>
//                         </div>
//                       )}
//                     </div>

//                     <div className="space-y-6">
//                       <div>
//                         <h3 className="text-2xl font-bold text-slate-800 mb-4">Core Specializations</h3>
//                         <div className="space-y-3">
//                           {(selectedMember.specializations || []).map((spec, index) => (
//                             <div key={index} className="flex items-start bg-slate-50 p-3 rounded-lg">
//                               <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
//                               <span className="text-slate-700">{spec}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {selectedMember.skills && (
//                         <div>
//                           <h3 className="text-2xl font-bold text-slate-800 mb-4">Technical Skills</h3>
//                           <div className="flex flex-wrap gap-2">
//                             {(selectedMember.skills || []).map((skill, index) => (
//                               <span 
//                                 key={index}
//                                 className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl text-center">
//                     <h3 className="text-xl font-bold text-slate-800 mb-2">Connect with {selectedMember.name?.split(' ')[0] || 'Team'}</h3>
//                     <p className="text-slate-600 mb-4">Ready to discuss your financial needs?</p>
//                     <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold">
//                       Schedule Consultation
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </section>

//         {/* Testimonials Section */}
//         <section className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Client Testimony</h2>
//               <p className="text-xl text-slate-600">What our valued clients say about our services</p>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-slate-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-full opacity-10">
//                   <div className="absolute top-8 left-8">
//                     <Quote className="w-16 h-16 text-white" />
//                   </div>
//                   <div className="absolute bottom-8 right-8 rotate-180">
//                     <Quote className="w-16 h-16 text-white" />
//                   </div>
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex justify-center mb-6">
//                     {[...Array(testimonials[currentTestimonial]?.rating || 0)].map((_, i) => (
//                       <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
                  
//                   <blockquote className="text-lg md:text-xl text-center leading-relaxed mb-8 max-w-4xl mx-auto">
//                     "{testimonials[currentTestimonial]?.text || 'No testimonial available'}"
//                   </blockquote>
                  
//                   <div className="text-center">
//                     <h4 className="text-xl font-bold text-white mb-1">
//                       {testimonials[currentTestimonial]?.name || 'Anonymous'}
//                     </h4>
//                     <p className="text-teal-300 font-medium">
//                       {testimonials[currentTestimonial]?.position || 'N/A'}
//                     </p>
//                     <p className="text-slate-300 text-sm">
//                       {testimonials[currentTestimonial]?.company || 'N/A'}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={prevTestimonial}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-all duration-300 hover:scale-110"
//                 aria-label="Previous testimonial"
//               >
//                 <ChevronLeft className="w-6 h-6 text-slate-600" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-all duration-300 hover:scale-110"
//                 aria-label="Next testimonial"
//               >
//                 <ChevronRight className="w-6 h-6 text-slate-600" />
//               </button>

//               <div className="flex justify-center mt-8 space-x-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentTestimonial(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       currentTestimonial === index ? 'bg-teal-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
//                     }`}
//                     aria-label={`View testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="py-20 bg-gradient-to-br from-teal-600 to-slate-800 text-white">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Financial Future?</h2>
//             <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Join hundreds of satisfied clients who trust Vittam Integrity Services for their financial and tax advisory needs. 
//               Let's discuss how we can add value to your business.
//             </p>
            
//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
//                 <Phone className="w-8 h-8 text-teal-300 mx-auto mb-4" />
//                 <h3 className="font-bold text-lg mb-2">Call Us</h3>
//                 <p className="text-teal-100">+91 9623365775</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
//                 <Mail className="w-8 h-8 text-teal-300 mx-auto mb-4" />
//                 <h3 className="font-bold text-lg mb-2">Email Us</h3>
//                 <p className="text-teal-100">info@vittamintegrity.com</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
//                 <Calendar className="w-8 h-8 text-teal-300 mx-auto mb-4" />
//                 <h3 className="font-bold text-lg mb-2">Schedule</h3>
//                 <p className="text-teal-100">Free Consultation</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group">
//                 Schedule Free Consultation
//                 <Calendar className="ml-2 w-5 h-5 transform group-hover:scale-110 transition-transform" />
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-teal-600 transition-all duration-300 hover:scale-105">
//                 Download Our Brochure
//               </button>
//             </div>
//           </div>
//         </section>

//         <style jsx>{`
//           @keyframes blob {
//             0% { transform: translate(0px, 0px) scale(1); }
//             33% { transform: translate(30px, -50px) scale(1.1); }
//             66% { transform: translate(-20px, 20px) scale(0.9); }
//             100% { transform: translate(0px, 0px) scale(1); }
//           }
//           .animate-blob {
//             animation: blob 7s infinite;
//           }
//           .animation-delay-2000 {
//             animation-delay: 2s;
//           }
//           .animation-delay-4000 {
//             animation-delay: 4s;
//           }
//         `}</style>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default Homepage;


import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Eye, 
  Target, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Phone, 
  Mail, 
  Calendar, 
  X,
  Calculator,
  FileText,
  Building2
} from 'lucide-react';
import throttle from 'lodash/throttle';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-20 text-slate-600">Something went wrong. Please try refreshing the page.</div>;
    }
    return this.props.children;
  }
}

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [visibleBenefits, setVisibleBenefits] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 16); // ~60fps
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleScroll = () => {
      const benefitsSection = document.getElementById('benefits-section');
      if (benefitsSection) {
        const rect = benefitsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          benefits.forEach((_, index) => {
            setTimeout(() => {
              setVisibleBenefits(prev => [...new Set([...prev, index])]);
            }, index * 200);
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      handleMouseMove.cancel();
    };
  }, []);

  const benefits = [
    { 
      icon: Shield, 
      title: '30+ Years Experience', 
      desc: 'Combined expertise in taxation, audits, and compliance',
      number: '30+',
      label: 'Years of Excellence',
      color: 'from-teal-600 to-teal-700'
    },
    { 
      icon: Users, 
      title: '500+ Clients Served', 
      desc: 'Trusted by businesses across diverse industries',
      number: '500+',
      label: 'Happy Clients',
      color: 'from-blue-600 to-blue-700'
    },
    { 
      icon: Award, 
      title: '95% Success Rate', 
      desc: 'Proven excellence in tax litigation and advisory',
      number: '95%',
      label: 'Success Rate',
      color: 'from-emerald-600 to-emerald-700'
    },
    { 
      icon: TrendingUp, 
      title: '24/7 Support', 
      desc: 'Always available for your financial needs',
      number: '24/7',
      label: 'Support Available',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const expertiseAreas = [
    { icon: Calculator, title: 'Taxation Services', desc: 'Expert solutions in direct and indirect taxation, including compliance and planning.' },
    { icon: FileText, title: 'Audit & Assurance', desc: 'Comprehensive statutory audits and internal control assessments.' },
    { icon: Building2, title: 'Business Advisory', desc: 'Strategic guidance for startups, MNCs, and trusts to drive growth.' }
  ];

  const testimonials = [
    {
      name: 'Baba Amritdas Khaki',
      position: 'Managing Trustee',
      company: 'Shree Ramanand Manav Sevadham',
      text: 'Sunita is handling taxation & compliance matters of our Trust since 2020. We find her very sincere and honest in her work. Our audits & returns are timely filed by her. With her expert guidance, we successfully obtained 80G and 12A registrations.',
      rating: 5
    },
    {
      name: 'Mr. Khushrow Irani',
      position: 'Director',
      company: 'Essen Precision Machines Pvt Ltd',
      text: 'I have always experienced her as extremely diligent, hard working and prompt in her deliverables. Her no nonsense approach is a sign of her professional ethic and culture. I am sure she will continue to deliver the same for a long time to come.',
      rating: 5
    },
    {
      name: 'Maj Gen Cyrus A Pithawalla (Retd)',
      position: 'Director',
      company: 'Leslie Sawhny Endowment',
      text: 'Sunita has been providing services for our trust since last 2 years. We find her very sincere & logical in her approach. She keeps herself updated with latest tax provisions. We are happy with her professional services.',
      rating: 5
    },
    {
      name: 'Adv. Rohan Sonawane',
      position: 'Advocate',
      company: 'Bombay High Court',
      text: 'I have been availing accounting and tax audit advisory from Sunita for the past ten years. Sunita is an extremely learned and competent professional. Sunita has really made my tax filings very easy and smooth.',
      rating: 5
    }
  ];

  const teamMembers = [
    {
      name: 'Shraddha Kamath',
      position: 'Founder & Partner',
      qualifications: 'M.Com, CA, CMA',
      experience: '15+ Years',
      image: '/api/placeholder/300/400',
      specializations: [
        'Financial Statement Analysis & Audits',
        'Internal Control Frameworks',
        'Regulatory & Tax Compliance',
        'Tax Planning & Advisory'
      ],
      description: 'Qualified Chartered Accountant and Cost Accountant with extensive experience in financial management, compliance, taxation, and business advisory services across diverse industries including Infrastructure, Technology Services, and MNCs.',
      fullBio: 'Shraddha Kamath is a qualified Chartered Accountant and Cost Accountant with over 15 years of experience in financial management, compliance, taxation, and business advisory services. She has a proven track record of working across diverse industries — including Infrastructure, Technology Services, and Multinational Corporations — and possesses deep expertise in managing financial operations under multiple accounting frameworks such as Indian GAAP, US GAAP, and IFRS. Known for her go-getter attitude, strong teamwork, and creative problem-solving abilities, she combines technical financial expertise with a practical, solutions-driven approach to client engagements. In addition to her leadership role at Vittam Integrity Services, Shraddha currently serves as Senior Manager – Finance at Cargill Business Services. Over the years, she has built a versatile career with renowned global organizations including Hewlett Packard Enterprise, AP Moller Maersk, and Ernst & Young.',
      skills: ['Financial Modelling', 'Advanced Excel Analytics', 'Management Reporting', 'PowerPoint Presentations', 'Internal Controls', 'GAAP Compliance'],
      currentRole: 'Senior Manager – Finance at Cargill Business Services'
    },
    {
      name: 'CA Sunita Kulthe',
      position: 'Founder & Partner',
      qualifications: 'B.Com, FCA, Dip IFRS (London), ASA (CPA Australia)',
      experience: '15+ Years',
      image: '/api/placeholder/300/400',
      specializations: [
        'Direct & Indirect Taxation',
        'Tax Litigation & Appeals',
        'Statutory Audits',
        'Business Advisory Services'
      ],
      description: 'Fellow Chartered Accountant with extensive expertise in taxation, audit, and business advisory. Recognized for deep understanding of complex tax litigation and analytical audit approach with strong legal acumen.',
      fullBio: 'CA Sunita Kulthe is a highly respected Chartered Accountant and the Founder of both Kulthe & Associates and Vittam Integrity Services. With over 15 years of post-qualification experience, she brings extensive expertise in direct and indirect taxation, audit, litigation, and business advisory services. She is widely recognized for her deep understanding of complex tax litigation, including assessments and appellate proceedings. Her analytical audit approach, combined with strong legal acumen and a business-oriented mindset, allows her to consistently deliver practical and compliant financial solutions. Over the years, Sunita has successfully handled intricate matters across industries such as Real Estate, NGOs/Trusts, Hospitality, and NRI Taxation, helping clients navigate India\'s evolving regulatory and tax landscape.',
      skills: ['Tax Litigation', 'Appellate Proceedings', 'Statutory Audits', 'NRI Taxation', 'Real Estate Advisory', 'Trust & NGO Compliance'],
      currentRole: 'Founder – Kulthe & Associates'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white overflow-hidden">
        {/* Custom Cursor */}
        <div 
          className="fixed w-6 h-6 bg-teal-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out hidden lg:block"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />

        {/* Social Proof Section */}
        <section id="benefits-section" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-sky-300 pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-64 sm:w-80 h-64 sm:h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute top-10 sm:top-16 left-8 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 border-2 border-c8d8e4 rounded-full animate-spin opacity-30" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 border border-c8d8e4 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 sm:bottom-20 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-teal-50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 sm:bottom-40 right-1/3 w-16 sm:w-20 h-16 sm:h-20 border border-c8d8e4 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Choose 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123956] to-slate-900"> Vittam Integrity</span> Services?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Trusted by hundreds of clients for our expertise, integrity, and commitment to excellence in chartered accountancy
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`group relative transform transition-all duration-700 hover:scale-105 ${
                    visibleBenefits.includes(index) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-16 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-c8d8e4 group-hover:border-teal-600">
                    <div className={`bg-gradient-to-br ${benefit.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full -mr-8 sm:-mr-10 -mt-8 sm:-mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-white/10 rounded-full -ml-6 sm:-ml-8 -mb-6 sm:-mb-8"></div>
                      
                      <div className="relative z-10">
                        <benefit.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-2xl sm:text-3xl font-bold mb-1">{benefit.number}</div>
                        <div className="text-xs sm:text-sm font-medium opacity-90">{benefit.label}</div>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{benefit.desc}</p>
                      
                      <div className="mt-3 sm:mt-4 h-1 bg-f2f2f2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${benefit.color} transform origin-left transition-transform duration-1000 ${
                            visibleBenefits.includes(index) ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{ transitionDelay: `${(index * 200) + 500}ms` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <Star className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 text-center">
              <div className="inline-flex items-center space-x-4 sm:space-x-8 bg-gradient-to-r from-teal-50 to-sky-300 px-4 sm:px-8 py-3 sm:py-4 rounded-full border border-c8d8e4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-slate-900">Trusted Nationwide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-xs sm:text-sm font-medium text-slate-900">ICAI Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-xs sm:text-sm font-medium text-slate-900">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0A2342] to-[#123956] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Vittam Integrity Services</h2>
                  <p className="text-base sm:text-lg text-c8d8e4 mb-4 sm:mb-6 leading-relaxed">
                    Our firm name reflects the values we stand for. Derived from the Sanskrit word "Vittam" (वित्तम्) meaning wealth or finance, 
                    and paired with "Integrity Services", our identity represents a seamless blend of financial expertise and unwavering ethical commitment.
                  </p>
                  <p className="text-base sm:text-lg text-c8d8e4 leading-relaxed">
                    Vittam Integrity Services is a professional services firm led by experienced Chartered Accountants, 
                    bringing together over 30 years of combined expertise in delivering comprehensive financial solutions across taxation, audits, and business advisory.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                    <Eye className="w-6 sm:w-8 h-6 sm:h-8 text-white-300 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Vision</h3>
                    <p className="text-xs sm:text-sm text-c8d8e4">
                      To be globally respected leaders in financial and tax advisory, built on integrity and excellence, 
                      empowering clients worldwide through cutting-edge expertise.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                    <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white-300 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Mission</h3>
                    <p className="text-xs sm:text-sm text-c8d8e4">
                      To provide high-quality financial and tax advisory solutions rooted in integrity, 
                      empowering businesses through personalized services and deep technical expertise.
                    </p>
                  </div>
                </div>

                <div className="bg-[#123458] p-4 sm:p-6 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Our Motto</h3>
                  <p className="text-base sm:text-lg italic">"Delivering value with unwavering Integrity"</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Commitment</h3>
                <p className="text-sm sm:text-base text-c8d8e4 leading-relaxed mb-4 sm:mb-6">
                  At Vittam Integrity Services, we combine deep industry knowledge with a client-centric approach to deliver tailored financial solutions. 
                  Our team is dedicated to ensuring compliance, optimizing tax strategies, and driving business success.
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center bg-white text-[#123956] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-f2f2f2 transition-all duration-300 hover:scale-105 group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-900">Expertise</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to your business needs, delivered with precision and integrity
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {expertiseAreas.map((expertise, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="p-4 sm:p-6">
                    <expertise.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#123956] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#123956] transition-colors">
                      {expertise.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{expertise.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-[#123956] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover: transition-all duration-300 hover:scale-105 group"
              >
                Contact Us for Expert Guidance
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-sky-300 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 border border-c8d8e4 rounded-full animate-spin opacity-20" style={{animationDuration: '30s'}}></div>
            <div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 border border-c8d8e4 rounded-full animate-spin opacity-20" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Led by seasoned professionals with over 30 years of combined experience in financial services and taxation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative">
                    <div className="h-56 sm:h-64 bg-gradient-to-br from-[#123956] to-slate-900 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                      <div className="w-32 sm:w-40 h-32 sm:h-40 bg-white rounded-full flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-300">
                        <Users className="w-16 sm:w-20 h-16 sm:h-20 text-[#123956]" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-[#123956] shadow-lg">
                      {member.experience}
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-slate-900">
                      Click to view details
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#123956] transition-colors">{member.name}</h3>
                    <p className="text-[#123956] font-semibold mb-1">{member.position}</p>
                    <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">{member.qualifications}</p>
                    
                    <p className="text-slate-600 leading-relaxed text-sm mb-4 sm:mb-6 line-clamp-3">{member.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 sm:mb-3">Key Specializations:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {member.specializations.slice(0, 4).map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-[#123956] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-600">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 flex items-center text-[#123956] group-hover:translate-x-2 transition-transform duration-300">
                      <span className="font-medium text-sm sm:text-base">View Full Profile</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Member Modal */}
          {selectedMember && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-300">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-f2f2f2 transition-colors shadow-lg"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-slate-900" />
                </button>

                <div className="relative">
                  <div className="h-56 sm:h-64 md:h-80 bg-gradient-to-br from-[#123956] to-slate-900 flex items-center justify-center relative overflow-hidden">
                    <div className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white rounded-full flex items-center justify-center">
                      <Users className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 text-[#123956]" />
                    </div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{selectedMember.name}</h2>
                      <p className="text-c8d8e4 text-base sm:text-lg font-semibold">{selectedMember.position}</p>
                      <p className="text-c8d8e4 text-xs sm:text-sm">{selectedMember.qualifications}</p>
                    </div>
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                      <span className="text-white font-bold text-xs sm:text-sm">{selectedMember.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Professional Background</h3>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{selectedMember.fullBio}</p>
                      </div>

                      {selectedMember.currentRole && (
                        <div className="bg-teal-50 p-3 sm:p-4 rounded-xl border border-c8d8e4">
                          <h4 className="font-bold text-[#123956] mb-2">Current Role</h4>
                          <p className="text-[#123956] text-xs sm:text-sm">{selectedMember.currentRole}</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Core Specializations</h3>
                        <div className="space-y-2 sm:space-y-3">
                          {selectedMember.specializations.map((spec, index) => (
                            <div key={index} className="flex items-start bg-f2f2f2 p-2 sm:p-3 rounded-lg">
                              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#123956] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 text-xs sm:text-sm">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {selectedMember.skills && (
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Technical Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedMember.skills.map((skill, index) => (
                              <span 
                                key={index}
                                className="bg-gradient-to-r from-[#123956] to-slate-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 bg-gradient-to-r from-teal-50 to-sky-300 p-4 sm:p-6 rounded-xl text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Connect with {selectedMember.name.split(' ')[0]}</h3>
                    <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">Ready to discuss your financial needs?</p>
                    <a
                      href="https://vittamintegrityservices/consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex bg-[#123956] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#1b5d8f] transition-colors"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Client Testimony</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600">What our valued clients say about our services</p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0A2342] to-[#123956] rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
                    <Quote className="w-12 sm:w-16 h-12 sm:h-16 text-c8d8e4" />
                  </div>
                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 rotate-180">
                    <Quote className="w-12 sm:w-16 h-12 sm:h-16 text-c8d8e4" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-base sm:text-lg md:text-xl text-center leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="text-center">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-c8d8e4 font-medium text-sm sm:text-base">{testimonials[currentTestimonial].position}</p>
                    <p className="text-c8d8e4 text-xs sm:text-sm">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-f2f2f2 transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-slate-900" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-f2f2f2 transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-slate-900" />
              </button>

              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-[#123956] w-6 sm:w-8' : 'bg-c8d8e4 hover:bg-slate-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 sm:py-20  to-0A2342 text-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Transform Your Financial Future?</h2>
            <p className="text-base sm:text-lg md:text-xl text-c8d8e4 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who trust Vittam Integrity Services for their financial and tax advisory needs. 
              Let's discuss how we can add value to your business.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <a
                href="tel:+919623365775"
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-[#123956] mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Call Us</h3>
                <p className="text-c8d8e4 text-sm sm:text-base">+91-9623365775</p>
              </a>
              <a
                href="mailto:info@vittamintegrityservices.com"
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-[#123956] mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Email Us</h3>
                <p className="text-c8d8e4 text-sm sm:text-base">info@vittamintegrityservices.com</p>
              </a>
              <a
                href="https://calendly.com/vittamintegrityservices/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-[#123956] mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Schedule</h3>
                <p className="text-c8d8e4 text-sm sm:text-base">Free Consultation</p>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/vittamintegrityservices/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#123956] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-f2f2f2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
              >
                Schedule Free Consultation
                <Calendar className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transform group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://vittamintegrityservices.com/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#123956] text-[#123956] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:transition-all duration-300 hover:scale-105"
              >
                Download Our Brochure
              </a>
            </div>
          </div>
        </section>

        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vittam Integrity Services",
            "description": "Bangalore's premier financial advisory firm providing expert taxation, audit, compliance, and business advisory services with over 30 years of combined expertise.",
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
            ],
            "service": expertiseAreas.map(area => ({
              "@type": "Service",
              "serviceType": area.title,
              "description": area.desc
            })),
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewBody": testimonial.text,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating
              },
              "publisher": {
                "@type": "Organization",
                "name": testimonial.company
              }
            }))
          })
        }} />

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(20px, -30px) scale(1.1); }
            66% { transform: translate(-15px, 15px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </ErrorBoundary>
  );
};

export default Homepage;