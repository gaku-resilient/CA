// import React, { useState, useEffect } from 'react';
// import { 
//   BookOpen, Search, Calculator, Building2, Globe, Rocket, FileCheck, 
//   ChevronDown, ChevronRight, ArrowRight, Star, Shield, CheckCircle, 
//   Phone, Mail, Clock, Award, Users, TrendingUp, Target, Eye, Heart,
//   DollarSign, FileText, BarChart, Settings, Briefcase, Home, Plus, Minus
// } from 'lucide-react';

// const ServicesPage = () => {
//   const [activeCategory, setActiveCategory] = useState('accounting');
//   const [expandedServices, setExpandedServices] = useState({});
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const toggleService = (serviceId) => {
//     setExpandedServices(prev => ({
//       ...prev,
//       [serviceId]: !prev[serviceId]
//     }));
//   };

//   const services = {
//     accounting: {
//       icon: BookOpen,
//       title: "Accounting Services",
//       description: "Professional accounting solutions compliant with Indian and International standards",
//       color: "bg-blue-50",
//       borderColor: "border-blue-200",
//    subcategories:{
//      "Accounts Writing & Book Keeping Services": [
//     "Accurate and timely accounting is the backbone of every successful business. Our Accounts Writing & Bookkeeping Services are designed to provide comprehensive, reliable, and compliant financial records, enabling informed decision-making and smooth regulatory compliance.",
//     "We offer tailored bookkeeping solutions to businesses of all sizes, ensuring that your day-to-day financial transactions are recorded systematically and in accordance with applicable accounting standards. From maintaining ledgers and journals to reconciling bank statements and preparing trial balances, our services help you stay organized and audit-ready at all times."
//   ],
//   "Our Services Include (Accounts Writing & Book Keeping Services)": [
//     "Preparation and maintenance of books of accounts",
//     "Ledger posting and journal entries",
//     "Accounts reconciliation (bank, vendor, customer)",
//     "Monthly/quarterly financial reporting",
//     "GST-compliant bookkeeping",
//     "Support for audit and compliance reviews",
//     "Whether you're a startup, SME, or a growing enterprise, we ensure that your financial records reflect accuracy, transparency, and efficiency. Let us handle your books, so you can focus on growing your business."
//   ],
//   "Accounting as per Indian Accounting Standards (Ind AS)": [
//     "With the increasing emphasis on transparency, comparability, and global alignment in financial reporting, compliance with Indian Accounting Standards (Ind AS) has become essential for many companies in India.",
//     "At our firm, we specialize in providing end-to-end support for accounting and financial reporting in accordance with Ind AS. Our expert team ensures accurate application of standards, seamless transition from previous GAAP, and ongoing compliance with the latest updates issued by regulatory bodies."
//   ],
//   "Our Ind AS Services Include:": [
//     "Transition support from Indian GAAP to Ind AS",
//     "Preparation and presentation of financial statements as per Ind AS",
//     "Impact assessment and implementation planning",
//     "Advisory on complex Ind AS areas (e.g., financial instruments, leases, revenue recognition)",
//     "Consolidation and group reporting under Ind AS",
//     "Training and capacity building for in-house teams",
//     "We combine technical proficiency with practical experience to help businesses not only comply with Ind AS requirements but also improve the quality and reliability of their financial reporting."
//   ],
//   "Accounting as per International Financial Reporting Standards (IFRS)": [
//     "In today’s global business environment, International Financial Reporting Standards (IFRS) have become the benchmark for transparent and comparable financial reporting across jurisdictions. Adopting and implementing IFRS ensures that your financial statements are globally recognized and meet investor and stakeholder expectations.",
//     "We offer expert IFRS accounting and advisory services to companies looking to adopt, comply with, or transition to IFRS. Our team is well-versed in international standards and provides practical solutions tailored to your industry and organizational needs."
//   ],
//   "Our IFRS Services Include:": [
//     "IFRS financial statement preparation and review",
//     "First-time adoption and transition support from local GAAP to IFRS",
//     "Advisory on complex IFRS matters (e.g., revenue recognition, lease accounting, financial instruments, consolidation)",
//     "Group reporting and alignment with parent company requirements",
//     "IFRS impact analysis and implementation planning",
//     "Ongoing compliance and disclosure advisory",
//     "Whether you are a multinational subsidiary, expanding globally, or preparing for cross-border listing or investments, our IFRS expertise ensures smooth reporting and compliance."
//   ],
//   "Technical Guidance on Accounting Issues": [
//     "Navigating complex accounting standards and regulatory requirements can be challenging for businesses, especially in a dynamic financial reporting landscape. Our firm offers expert Technical Guidance on Accounting Issues to help organizations address intricate accounting matters with clarity, accuracy, and compliance.",
//     "We assist clients in interpreting and applying accounting standards such as Ind AS, IFRS, and Indian GAAP, ensuring that financial reporting reflects the true economic substance of transactions and aligns with regulatory expectations."
//   ],
//   "Our Technical Accounting Services Include:": [
//     "Interpretation and application of complex accounting standards",
//     "Advisory on revenue recognition, lease accounting, financial instruments, business combinations, etc.",
//     "Guidance on preparation of financial statements under multiple frameworks (Ind AS/IFRS/IGAAP)",
//     "Accounting treatment for non-routine or one-time transactions (e.g., mergers, acquisitions, demergers)",
//     "Support in responding to audit queries and regulator reviews",
//     "Preparation of accounting memos and position papers for key judgments",
//     "Our team combines deep technical knowledge with practical experience across industries to deliver sound, tailored solutions."
//   ]
//    }
//     },
//     audit: {
//       icon: Search,
//       title: "Audit Services",
//       description: "Comprehensive audit services ensuring compliance and transparency",
//       color: "bg-green-50",
//       borderColor: "border-green-200",
//         subcategories: {
//      "Statutory Audit": [
//     "A Statutory Audit is a legal requirement for many organizations, ensuring the credibility and reliability of their financial statements. It is a critical tool for maintaining stakeholder confidence, ensuring regulatory compliance, and upholding corporate governance standards.",
//     "Our firm provides independent and objective statutory audit services in accordance with applicable laws, regulations, and auditing standards (including the Companies Act, 2013 and Standards on Auditing issued by ICAI). We adopt a risk-based, systematic audit approach tailored to the size and nature of your business."
//   ],
//   "Our Statutory Audit Services Cover:": [
//     "Audit of financial statements as per Ind AS / Indian GAAP",
//     "Compliance with Companies Act, 2013 and other applicable laws",
//     "Evaluation of internal controls and risk management systems",
//     "Verification of accounting records and financial disclosures",
//     "Issuance of audit reports in accordance with statutory requirements",
//     "Coordination with management to address audit findings and recommendations",
//     "With a focus on transparency, integrity, and professional excellence, we deliver insights that go beyond compliance — helping clients strengthen internal processes and enhance financial reporting."
//   ],
//   "Internal Audit": [
//     "An effective Internal Audit function is essential for enhancing operational efficiency, strengthening internal controls, and ensuring risk management across all levels of an organization. Unlike statutory audits, internal audits are more strategic, offering insights that help drive performance, governance, and compliance.",
//     "We offer independent and value-driven internal audit services designed to help organizations evaluate and improve the effectiveness of their risk management, control, and governance processes."
//   ],
//   "Our Internal Audit Services Include:": [
//     "Evaluation of internal controls and business processes",
//     "Risk assessment and mitigation strategies",
//     "Compliance checks with internal policies and regulatory requirements",
//     "Operational audits to identify inefficiencies and cost-saving opportunities",
//     "Special audits (fraud detection, forensic reviews, management audits)",
//     "Preparation of detailed audit reports with practical recommendations",
//     "Our internal audit approach goes beyond routine checks — we provide actionable insights that support better decision-making and promote a culture of continuous improvement."
//   ],
//   "Inventory Audit": [
//     "Inventory is often one of the most significant assets on a company's balance sheet, and its accurate valuation is crucial for reliable financial reporting. A well-executed Inventory Audit not only ensures compliance but also helps in identifying inefficiencies, pilferage, and opportunities for optimization.",
//     "Our firm offers comprehensive inventory audit services to help businesses verify stock records, assess internal controls, and ensure accurate reporting of inventory in accordance with applicable accounting standards."
//   ],
//   "Our Inventory Audit Services Include:": [
//     "Physical verification of inventory at warehouses, factories, and retail locations",
//     "Reconciliation of physical stock with accounting records",
//     "Valuation of inventory as per applicable standards (Ind AS/AS/IFRS)",
//     "Review of inventory management systems and internal controls",
//     "Identification of obsolete, slow-moving, or damaged inventory",
//     "Reporting on inventory variances and process improvement recommendations",
//     "Our team brings a meticulous and systematic approach to inventory audits, tailored to your industry and operational scale."
//   ],
//   "Sales Audit": [
//     "Sales are the primary revenue source for most businesses, and their accurate recording is critical for reliable financial reporting, tax compliance, and performance analysis. A Sales Audit ensures that all sales transactions are properly documented, reported, and aligned with applicable laws and accounting standards.",
//     "We provide comprehensive sales audit services to help businesses validate revenue recognition, detect discrepancies, and strengthen controls over the sales process."
//   ],
//   "Our Sales Audit Services Include:": [
//     "Verification of sales transactions against supporting documents (invoices, delivery notes, contracts)",
//     "Assessment of revenue recognition policies as per applicable standards (Ind AS/IFRS)",
//     "Reconciliation of sales records with accounting books and tax returns (e.g., GST filings)",
//     "Identification of unrecorded, duplicate, or fraudulent sales entries",
//     "Evaluation of sales processes, discounts, returns, and credit policies",
//     "Recommendations for improving internal controls and system efficiency",
//     "Our sales audit approach not only ensures compliance and accuracy but also helps management gain deeper insights into revenue performance and risks."
//   ],
//   "Trust/NGO Audit": [
//     "Non-profit organizations, including trusts and NGOs, are entrusted with public and donor funds, making transparency, accountability, and compliance crucial to their operations. A well-conducted Trust/NGO Audit ensures proper utilization of funds, adherence to statutory requirements, and enhanced stakeholder confidence.",
//     "We offer specialized audit services for trusts and NGOs, in line with the requirements of the Income Tax Act, 1961, relevant state trust acts, and regulations governing charitable institutions."
//   ],
//   "Our Trust/NGO Audit Services Include:": [
//     "Statutory audit as per the Income Tax Act and relevant trust laws",
//     "Verification of donations, grants, and fund utilization",
//     "Compliance with registration conditions under Sections 12A, 80G, and FCRA (if applicable)",
//     "Review of internal controls and governance practices",
//     "Preparation and audit of financial statements",
//     "Assistance in filing audit reports (e.g., Form 10B) and compliance documentation",
//     "Our approach is tailored to promote transparency, ensure compliance, and support your mission with sound financial reporting."
//   ]
//       }
//     },
//     taxation: {
//       icon: Calculator,
//       title: "Taxation Services",
//       description: "Complete tax solutions for individuals and businesses",
//       color: "bg-purple-50",
//       borderColor: "border-purple-200",
//       subcategories: {
//         "Income Tax": [
//           "Income Tax Return Filing",
//           "Tax Consulting Services",
//           "Tax Planning Services",
//           "Tax Audit",
//           "NRI Taxation",
//           "Income Tax Litigation Services",
//           "TDS Return Filing",
//           "TDS Litigation Services",
//           "Income Tax Retainership Services"
//         ],
//         "GST (Goods and Services Tax)": [
//           "GST Registration Services",
//           "GST Return Filing Services",
//           "GST Audit Services",
//           "GST Litigation Services",
//           "GST Other Services",
//           "GST Retainership Services"
//         ]
//       }
//     },
//     business: {
//       icon: Building2,
//       title: "Business Registration & Start-up Services",
//       description: "End-to-end business formation and registration services",
//       color: "bg-orange-50",
//       borderColor: "border-orange-200",
//       services: [
//         "Start-up Registration",
//         "Proprietorship Registration Services",
//         "Partnership Registration Services",
//         "Limited Liability Partnership (LLP) Registration Services",
//         "Private Limited Company Registration Services",
//         "Trust Registration Services",
//         "Society Registration Services"
//       ]
//     },
//     outsourcing: {
//       icon: Globe,
//       title: "Outsourcing & Global Capability Services",
//       description: "Strategic outsourcing solutions for business optimization",
//       color: "bg-indigo-50",
//       borderColor: "border-indigo-200",
//       services: [
//         "CFO Services",
//         "Management Information System (MIS) Services",
//         "Project Advisory and Management for Business Transition",
//         "Budgeting and Forecasting Services",
//         "Operational Advisory",
//         "US Taxation Services",
//         "Growth and Optimisation",
//         "Tax and Regulatory Compliance"
//       ]
//     },
//     startup: {
//       icon: Rocket,
//       title: "Start-up & Setup Advisory",
//       description: "Comprehensive support for new business ventures",
//       color: "bg-pink-50",
//       borderColor: "border-pink-200",
//       services: [
//         "Presetup Advisory",
//         "Setup Phase Support",
//         "Compliance Health Check Services"
//       ]
//     },
//     certification: {
//       icon: FileCheck,
//       title: "Certification Services",
//       description: "Professional certifications for various regulatory requirements",
//       color: "bg-yellow-50",
//       borderColor: "border-yellow-200",
//       services: [
//         "Foreign Remittance Certificate (FRC) Services",
//         "VISA Certification Services",
//         "RERA Certificate Services",
//         "Certificates under the Income Tax Act",
//         "Certificates under GST",
//         "Certificates under the Companies Act"
//       ]
//     }
//   };

//   return (
//     <div className="bg-white font-sans min-h-screen mt-25">
//       {/* SEO Meta Information */}
//       <div className="hidden">
//         <h1>Professional CA Services Mumbai - Vittam Integrity Services</h1>
//         <meta name="description" content="Comprehensive chartered accountant services in Mumbai. Expert accounting, audit, taxation, GST, business registration, and startup advisory services. ICAI certified professionals with 15+ years experience." />
//         <meta name="keywords" content="CA services Mumbai, chartered accountant services, tax planning Mumbai, GST services, audit services, business registration, startup advisory, income tax filing, accounting services Mumbai" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Professional CA Services Mumbai - Vittam Integrity Services" />
//         <meta property="og:description" content="Expert chartered accountant services including taxation, audit, GST, and business advisory. Trusted by 500+ clients in Mumbai." />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://vittam.com/services" />
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] bg-white overflow-hidden" id="hero">
//         {/* Animated Background */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute top-32 right-16 w-24 h-24 border border-gray-400 rounded-full animate-pulse"></div>
//           <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-gray-300 rounded-full animate-bounce"></div>
//           <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-gray-200 animate-spin" style={{ animationDuration: '15s' }}></div>
//           <div className="absolute bottom-32 right-10 w-28 h-28 border border-black opacity-20 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
//           <div className="text-center space-y-8">
//             {/* Breadcrumb */}
//             <nav className="text-sm font-medium" aria-label="Breadcrumb">
//               <ol className="flex justify-center space-x-2 text-gray-600">
//                 <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
//                 <li className="before:content-['/'] before:mx-2">Services</li>
//               </ol>
//             </nav>

//             <div className={`space-y-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
//                 Vittam Integrity Services
//                 <span className="block relative">
//                    PROFESSIONAL CA SERVICES
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black animate-pulse"></div>
//                 </span>
//               </h1>
              
//               <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//                 Comprehensive chartered accountant services for businesses and individuals. 
//                 From taxation to audit, we've got your financial needs covered.
//               </p>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
//               {[
//                 { value: "7+", label: "Service Categories" },
//                 { value: "35+", label: "Expert Services" },
//                 { value: "500+", label: "Happy Clients" },
//                 { value: "24/7", label: "Support" }
//               ].map((stat, index) => (
//                 <div key={index} className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100} ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
//                   <div className="text-3xl sm:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                   <div className="text-sm text-gray-600 font-bold uppercase">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Navigation */}
//       <section className="py-16 bg-gray-50" id="services-nav">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE CATEGORIES
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Choose from our comprehensive range of professional services
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Object.entries(services).map(([key, service], index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={key}
//                   onClick={() => setActiveCategory(key)}
//                   className={`${service.color} ${service.borderColor} border-2 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
//                     activeCategory === key ? 'border-black bg-black text-white' : 'hover:border-black'
//                   } ${isVisible['services-nav'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}
//                 >
//                   <div className="space-y-4">
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
//                       activeCategory === key ? 'bg-white' : 'bg-black'
//                     }`}>
//                       <IconComponent className={`w-8 h-8 transition-all ${
//                         activeCategory === key ? 'text-black' : 'text-white'
//                       }`} />
//                     </div>
//                     <h3 className={`text-lg font-black transition-all ${
//                       activeCategory === key ? 'text-black' : 'text-black'
//                     }`}>
//                       {service.title}
//                     </h3>
//                     <p className={`text-sm leading-relaxed transition-all ${
//                       activeCategory === key ? 'text-black' : 'text-black'
//                     }`}>
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Detailed Services */}
//       <section className="py-20 bg-white" id="detailed-services">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="space-y-12">
//       {Object.entries(services).map(([key, service]) => {
//         if (key !== activeCategory) return null;

//         const IconComponent = service.icon;

//         return (
//           <div
//             key={key}
//             className={`transition-all duration-500 ${
//               isVisible['detailed-services']
//                 ? 'opacity-100 translate-y-0'
//                 : 'opacity-0 translate-y-10'
//             }`}
//           >
//             <div className="text-center space-y-6 mb-12">
//               <div className="w-20 h-20 bg-black mx-auto rounded-full flex items-center justify-center animate-pulse">
//                 <IconComponent className="w-10 h-10 text-white" />
//               </div>
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//                 {service.title.toUpperCase()}
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 {service.description}
//               </p>
//             </div>

//             <div className="space-y-6">
//               {service.subcategories ? (
//                 // With Subcategories (e.g., Taxation)
//                 Object.entries(service.subcategories).map(
//                   ([subcat, subServices], subcatIndex) => (
//                     <div
//                       key={subcat}
//                       className="bg-gray-50 rounded-3xl p-6 sm:p-8 overflow-hidden"
//                     >
//                       <div
//                         className="flex items-center justify-between cursor-pointer mb-6"
//                         onClick={() =>
//                           toggleService(`${key}-${subcatIndex}`)
//                         }
//                       >
//                         <h3 className="text-2xl font-black text-black flex items-center space-x-3">
//                           <DollarSign className="w-6 h-6" />
//                           <span>{subcat}</span>
//                         </h3>
//                         {expandedServices[`${key}-${subcatIndex}`] ? (
//                           <Minus className="w-6 h-6 text-black transition-transform" />
//                         ) : (
//                           <Plus className="w-6 h-6 text-black transition-transform" />
//                         )}
//                       </div>

//                       <div
//                         className={`grid gap-4 transition-all duration-500 ${
//                           expandedServices[`${key}-${subcatIndex}`]
//                             ? 'max-h-[1000px] opacity-100'
//                             : 'max-h-0 opacity-0 overflow-hidden'
//                         }`}
//                       >
//                         {subServices.map((subService, serviceIndex) => (
//                           <div
//                             key={serviceIndex}
//                             className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300 transform hover:scale-102 flex items-center space-x-3"
//                           >
//                             <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
//                             <span className="font-medium text-black">
//                               {subService}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )
//                 )
//               ) : (
//                 // Without Subcategories
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   {service.services.map((serviceName, serviceIndex) => (
//                     <div
//                       key={serviceIndex}
//                       className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
//                     >
//                       <div className="flex items-start space-x-4">
//                         <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
//                           <CheckCircle className="w-5 h-5 text-white" />
//                         </div>
//                         <div className="space-y-2">
//                           <h4 className="font-black text-black text-lg">
//                             {serviceName}
//                           </h4>
//                           <p className="text-gray-600 text-sm">
//                             Professional service delivered with expertise and
//                             reliability
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>


//       {/* Why Choose Our Services */}
//       <section className="py-20 bg-black text-white" id="why-choose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
//               WHY CHOOSE OUR SERVICES?
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Experience the difference with Mumbai's most trusted CA firm
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Award,
//                 title: "Expert Professionals",
//                 description: "ICAI certified chartered accountants with 15+ years of specialized experience across all service areas."
//               },
//               {
//                 icon: Shield,
//                 title: "100% Compliance",
//                 description: "Zero compliance issues guaranteed. We ensure all filings and services meet regulatory requirements."
//               },
//               {
//                 icon: Clock,
//                 title: "Quick Turnaround",
//                 description: "Fast and efficient service delivery without compromising on quality or accuracy."
//               },
//               {
//                 icon: Users,
//                 title: "Personalized Approach",
//                 description: "Tailored solutions designed specifically for your business needs and industry requirements."
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Cost-Effective",
//                 description: "Transparent pricing with maximum value. No hidden costs or surprise charges ever."
//               },
//               {
//                 icon: Star,
//                 title: "Proven Track Record",
//                 description: "500+ satisfied clients with 98% retention rate speak to our service excellence."
//               }
//             ].map((item, index) => (
//               <div key={index} className={`bg-gray-900 p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group ${isVisible['why-choose'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="space-y-6">
//                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                     <item.icon className="w-8 h-8 text-black" />
//                   </div>
//                   <h3 className="text-xl font-black">{item.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Process */}
//       <section className="py-20 bg-gray-50" id="service-process">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE PROCESS
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Simple, transparent, and efficient process for all our services
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Initial Consultation",
//                 description: "Free consultation to understand your specific requirements and business needs.",
//                 icon: Phone
//               },
//               {
//                 step: "02", 
//                 title: "Proposal & Agreement",
//                 description: "Detailed proposal with transparent pricing and service timeline agreement.",
//                 icon: FileText
//               },
//               {
//                 step: "03",
//                 title: "Service Execution",
//                 description: "Professional service delivery by our expert team with regular updates.",
//                 icon: Settings
//               },
//               {
//                 step: "04",
//                 title: "Delivery & Support",
//                 description: "Timely delivery with ongoing support and maintenance as required.",
//                 icon: CheckCircle
//               }
//             ].map((item, index) => (
//               <div key={index} className={`text-center group transition-all duration-500 ${isVisible['service-process'] ? `opacity-100 translate-y-0 delay-${index * 150}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="relative mb-8">
//                   <div className="w-20 h-20 bg-black mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <item.icon className="w-10 h-10 text-white" />
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-black rounded-full flex items-center justify-center">
//                     <span className="text-xs font-black">{item.step}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-black text-black mb-4">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-white" id="cta">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
//               READY TO GET STARTED WITH
//               <span className="block">PROFESSIONAL CA SERVICES?</span>
//             </h2>
            
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Get expert chartered accountant services with guaranteed compliance and peace of mind. 
//               Join 500+ satisfied clients who trust Vittam for their financial success.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//               <button className="bg-black text-white px-10 py-5 font-black text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//                 <span>GET FREE CONSULTATION</span>
//                 <ArrowRight className="w-6 h-6" />
//               </button>
//               <button className="border-2 border-black text-black px-10 py-5 font-black text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
//                 <Phone className="w-5 h-5" />
//                 <span>CALL +91 xxxxx 43210</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-black">
//               {[
//                 { value: "FREE", label: "Initial Consultation" },
//                 { value: "24HR", label: "Response Time" },
//                 { value: "100%", label: "Satisfaction Guarantee" }
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-black text-black mb-2">{item.value}</div>
//                   <div className="text-sm text-gray-600 font-bold uppercase">{item.label}</div>
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
//           "@type": "ProfessionalService",
//           "name": "Vittam Integrity Services - Professional CA Services",
//           "description": "Comprehensive chartered accountant services including accounting, audit, taxation, GST, business registration, and startup advisory services in Mumbai.",
//           "url": "https://vittam.com/services",
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
//           "serviceType": ["Accounting Services", "Audit Services", "Taxation Services", "GST Services", "Business Registration", "Startup Advisory", "Certification Services"],
//           "areaServed": {
//             "@type": "City",
//             "name": "Mumbai"
//           },
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

// export default ServicesPage;








































// import React, { useState, useEffect } from 'react';
// import { 
//   BookOpen, Search, Calculator, Building2, Globe, Rocket, FileCheck, 
//   ChevronDown, ChevronRight, ArrowRight, Star, Shield, CheckCircle, 
//   Phone, Mail, Clock, Award, Users, TrendingUp, Target, Eye, Heart,
//   DollarSign, FileText, BarChart, Settings, Briefcase, Home, Plus, Minus
// } from 'lucide-react';

// const ServicesPage = () => {
//   const [activeCategory, setActiveCategory] = useState('accounting');
//   const [expandedServices, setExpandedServices] = useState({});
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const toggleService = (serviceId) => {
//     setExpandedServices(prev => ({
//       ...prev,
//       [serviceId]: !prev[serviceId]
//     }));
//   };

//   const services = {
//     accounting: {
//       icon: BookOpen,
//       title: "Accounting Services",
//       description: "Professional accounting solutions compliant with Indian and International standards",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Accounts Writing & Book Keeping Services": [
//           "Accurate and timely accounting is the backbone of every successful business. Our Accounts Writing & Bookkeeping Services are designed to provide comprehensive, reliable, and compliant financial records, enabling informed decision-making and smooth regulatory compliance.",
//           "We offer tailored bookkeeping solutions to businesses of all sizes, ensuring that your day-to-day financial transactions are recorded systematically and in accordance with applicable accounting standards. From maintaining ledgers and journals to reconciling bank statements and preparing trial balances, our services help you stay organized and audit-ready at all times."
//         ],
//         "Our Services Include (Accounts Writing & Book Keeping Services)": [
//           "Preparation and maintenance of books of accounts",
//           "Ledger posting and journal entries",
//           "Accounts reconciliation (bank, vendor, customer)",
//           "Monthly/quarterly financial reporting",
//           "GST-compliant bookkeeping",
//           "Support for audit and compliance reviews",
//           "Whether you're a startup, SME, or a growing enterprise, we ensure that your financial records reflect accuracy, transparency, and efficiency. Let us handle your books, so you can focus on growing your business."
//         ],
//         "Accounting as per Indian Accounting Standards (Ind AS)": [
//           "With the increasing emphasis on transparency, comparability, and global alignment in financial reporting, compliance with Indian Accounting Standards (Ind AS) has become essential for many companies in India.",
//           "At our firm, we specialize in providing end-to-end support for accounting and financial reporting in accordance with Ind AS. Our expert team ensures accurate application of standards, seamless transition from previous GAAP, and ongoing compliance with the latest updates issued by regulatory bodies."
//         ],
//         "Our Ind AS Services Include:": [
//           "Transition support from Indian GAAP to Ind AS",
//           "Preparation and presentation of financial statements as per Ind AS",
//           "Impact assessment and implementation planning",
//           "Advisory on complex Ind AS areas (e.g., financial instruments, leases, revenue recognition)",
//           "Consolidation and group reporting under Ind AS",
//           "Training and capacity building for in-house teams",
//           "We combine technical proficiency with practical experience to help businesses not only comply with Ind AS requirements but also improve the quality and reliability of their financial reporting."
//         ],
//         "Accounting as per International Financial Reporting Standards (IFRS)": [
//           "In today’s global business environment, International Financial Reporting Standards (IFRS) have become the benchmark for transparent and comparable financial reporting across jurisdictions. Adopting and implementing IFRS ensures that your financial statements are globally recognized and meet investor and stakeholder expectations.",
//           "We offer expert IFRS accounting and advisory services to companies looking to adopt, comply with, or transition to IFRS. Our team is well-versed in international standards and provides practical solutions tailored to your industry and organizational needs."
//         ],
//         "Our IFRS Services Include:": [
//           "IFRS financial statement preparation and review",
//           "First-time adoption and transition support from local GAAP to IFRS",
//           "Advisory on complex IFRS matters (e.g., revenue recognition, lease accounting, financial instruments, consolidation)",
//           "Group reporting and alignment with parent company requirements",
//           "IFRS impact analysis and implementation planning",
//           "Ongoing compliance and disclosure advisory",
//           "Whether you are a multinational subsidiary, expanding globally, or preparing for cross-border listing or investments, our IFRS expertise ensures smooth reporting and compliance."
//         ],
//         "Technical Guidance on Accounting Issues": [
//           "Navigating complex accounting standards and regulatory requirements can be challenging for businesses, especially in a dynamic financial reporting landscape. Our firm offers expert Technical Guidance on Accounting Issues to help organizations address intricate accounting matters with clarity, accuracy, and compliance.",
//           "We assist clients in interpreting and applying accounting standards such as Ind AS, IFRS, and Indian GAAP, ensuring that financial reporting reflects the true economic substance of transactions and aligns with regulatory expectations."
//         ],
//         "Our Technical Accounting Services Include:": [
//           "Interpretation and application of complex accounting standards",
//           "Advisory on revenue recognition, lease accounting, financial instruments, business combinations, etc.",
//           "Guidance on preparation of financial statements under multiple frameworks (Ind AS/IFRS/IGAAP)",
//           "Accounting treatment for non-routine or one-time transactions (e.g., mergers, acquisitions, demergers)",
//           "Support in responding to audit queries and regulator reviews",
//           "Preparation of accounting memos and position papers for key judgments",
//           "Our team combines deep technical knowledge with practical experience across industries to deliver sound, tailored solutions."
//         ]
//       }
//     },
//     audit: {
//       icon: Search,
//       title: "Audit Services",
//       description: "Comprehensive audit services ensuring compliance and transparency",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Statutory Audit": [
//           "A Statutory Audit is a legal requirement for many organizations, ensuring the credibility and reliability of their financial statements. It is a critical tool for maintaining stakeholder confidence, ensuring regulatory compliance, and upholding corporate governance standards.",
//           "Our firm provides independent and objective statutory audit services in accordance with applicable laws, regulations, and auditing standards (including the Companies Act, 2013 and Standards on Auditing issued by ICAI). We adopt a risk-based, systematic audit approach tailored to the size and nature of your business."
//         ],
//         "Our Statutory Audit Services Cover:": [
//           "Audit of financial statements as per Ind AS / Indian GAAP",
//           "Compliance with Companies Act, 2013 and other applicable laws",
//           "Evaluation of internal controls and risk management systems",
//           "Verification of accounting records and financial disclosures",
//           "Issuance of audit reports in accordance with statutory requirements",
//           "Coordination with management to address audit findings and recommendations",
//           "With a focus on transparency, integrity, and professional excellence, we deliver insights that go beyond compliance — helping clients strengthen internal processes and enhance financial reporting."
//         ],
//         "Internal Audit": [
//           "An effective Internal Audit function is essential for enhancing operational efficiency, strengthening internal controls, and ensuring risk management across all levels of an organization. Unlike statutory audits, internal audits are more strategic, offering insights that help drive performance, governance, and compliance.",
//           "We offer independent and value-driven internal audit services designed to help organizations evaluate and improve the effectiveness of their risk management, control, and governance processes."
//         ],
//         "Our Internal Audit Services Include:": [
//           "Evaluation of internal controls and business processes",
//           "Risk assessment and mitigation strategies",
//           "Compliance checks with internal policies and regulatory requirements",
//           "Operational audits to identify inefficiencies and cost-saving opportunities",
//           "Special audits (fraud detection, forensic reviews, management audits)",
//           "Preparation of detailed audit reports with practical recommendations",
//           "Our internal audit approach goes beyond routine checks — we provide actionable insights that support better decision-making and promote a culture of continuous improvement."
//         ],
//         "Inventory Audit": [
//           "Inventory is often one of the most significant assets on a company's balance sheet, and its accurate valuation is crucial for reliable financial reporting. A well-executed Inventory Audit not only ensures compliance but also helps in identifying inefficiencies, pilferage, and opportunities for optimization.",
//           "Our firm offers comprehensive inventory audit services to help businesses verify stock records, assess internal controls, and ensure accurate reporting of inventory in accordance with applicable accounting standards."
//         ],
//         "Our Inventory Audit Services Include:": [
//           "Physical verification of inventory at warehouses, factories, and retail locations",
//           "Reconciliation of physical stock with accounting records",
//           "Valuation of inventory as per applicable standards (Ind AS/AS/IFRS)",
//           "Review of inventory management systems and internal controls",
//           "Identification of obsolete, slow-moving, or damaged inventory",
//           "Reporting on inventory variances and process improvement recommendations",
//           "Our team brings a meticulous and systematic approach to inventory audits, tailored to your industry and operational scale."
//         ],
//         "Sales Audit": [
//           "Sales are the primary revenue source for most businesses, and their accurate recording is critical for reliable financial reporting, tax compliance, and performance analysis. A Sales Audit ensures that all sales transactions are properly documented, reported, and aligned with applicable laws and accounting standards.",
//           "We provide comprehensive sales audit services to help businesses validate revenue recognition, detect discrepancies, and strengthen controls over the sales process."
//         ],
//         "Our Sales Audit Services Include:": [
//           "Verification of sales transactions against supporting documents (invoices, delivery notes, contracts)",
//           "Assessment of revenue recognition policies as per applicable standards (Ind AS/IFRS)",
//           "Reconciliation of sales records with accounting books and tax returns (e.g., GST filings)",
//           "Identification of unrecorded, duplicate, or fraudulent sales entries",
//           "Evaluation of sales processes, discounts, returns, and credit policies",
//           "Recommendations for improving internal controls and system efficiency",
//           "Our sales audit approach not only ensures compliance and accuracy but also helps management gain deeper insights into revenue performance and risks."
//         ],
//         "Trust/NGO Audit": [
//           "Non-profit organizations, including trusts and NGOs, are entrusted with public and donor funds, making transparency, accountability, and compliance crucial to their operations. A well-conducted Trust/NGO Audit ensures proper utilization of funds, adherence to statutory requirements, and enhanced stakeholder confidence.",
//           "We offer specialized audit services for trusts and NGOs, in line with the requirements of the Income Tax Act, 1961, relevant state trust acts, and regulations governing charitable institutions."
//         ],
//         "Our Trust/NGO Audit Services Include:": [
//           "Statutory audit as per the Income Tax Act and relevant trust laws",
//           "Verification of donations, grants, and fund utilization",
//           "Compliance with registration conditions under Sections 12A, 80G, and FCRA (if applicable)",
//           "Review of internal controls and governance practices",
//           "Preparation and audit of financial statements",
//           "Assistance in filing audit reports (e.g., Form 10B) and compliance documentation",
//           "Our approach is tailored to promote transparency, ensure compliance, and support your mission with sound financial reporting."
//         ]
//       }
//     },
//     taxation: {
//       icon: Calculator,
//       title: "Taxation Services",
//       description: "Complete tax solutions for individuals and businesses",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Income Tax": [
//           "Income Tax Return Filing",
//           "Tax Consulting Services",
//           "Tax Planning Services",
//           "Tax Audit",
//           "NRI Taxation",
//           "Income Tax Litigation Services",
//           "TDS Return Filing",
//           "TDS Litigation Services",
//           "Income Tax Retainership Services"
//         ],
//         "GST (Goods and Services Tax)": [
//           "GST Registration Services",
//           "GST Return Filing Services",
//           "GST Audit Services",
//           "GST Litigation Services",
//           "GST Other Services",
//           "GST Retainership Services"
//         ]
//       }
//     },
//     business: {
//       icon: Building2,
//       title: "Business Registration & Start-up Services",
//       description: "End-to-end business formation and registration services",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Start-up Registration",
//         "Proprietorship Registration Services",
//         "Partnership Registration Services",
//         "Limited Liability Partnership (LLP) Registration Services",
//         "Private Limited Company Registration Services",
//         "Trust Registration Services",
//         "Society Registration Services"
//       ]
//     },
//     outsourcing: {
//       icon: Globe,
//       title: "Outsourcing & Global Capability Services",
//       description: "Strategic outsourcing solutions for business optimization",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "CFO Services",
//         "Management Information System (MIS) Services",
//         "Project Advisory and Management for Business Transition",
//         "Budgeting and Forecasting Services",
//         "Operational Advisory",
//         "US Taxation Services",
//         "Growth and Optimisation",
//         "Tax and Regulatory Compliance"
//       ]
//     },
//     startup: {
//       icon: Rocket,
//       title: "Start-up & Setup Advisory",
//       description: "Comprehensive support for new business ventures",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Presetup Advisory",
//         "Setup Phase Support",
//         "Compliance Health Check Services"
//       ]
//     },
//     certification: {
//       icon: FileCheck,
//       title: "Certification Services",
//       description: "Professional certifications for various regulatory requirements",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Foreign Remittance Certificate (FRC) Services",
//         "VISA Certification Services",
//         "RERA Certificate Services",
//         "Certificates under the Income Tax Act",
//         "Certificates under GST",
//         "Certificates under the Companies Act"
//       ]
//     }
//   };

//   return (
//     <div className="bg-[#FFFFFF] font-sans min-h-screen mt-25">
//       {/* SEO Meta Information */}
//       <div className="hidden">
//         <h1>Professional CA Services Pune - Kulthe & Associates</h1>
//         <meta name="description" content="Comprehensive chartered accountant services in Pune. Expert accounting, audit, taxation, GST, business registration, and startup advisory services. ICAI certified professionals with 15+ years experience." />
//         <meta name="keywords" content="CA services Pune, chartered accountant services, tax planning Pune, GST services, audit services, business registration, startup advisory, income tax filing, accounting services Pune" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Professional CA Services Pune - Kulthe & Associates" />
//         <meta property="og:description" content="Expert chartered accountant services including taxation, audit, GST, and business advisory. Trusted by 500+ clients in Pune." />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://kultheassociates.com/services" />
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] bg-[#FFFFFF] overflow-hidden" id="hero">
//         {/* Animated Background */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute top-32 right-16 w-24 h-24 border border-[#87CEEB] rounded-full animate-pulse"></div>
//           <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#87CEEB] rounded-full animate-bounce"></div>
//           <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#87CEEB] animate-spin" style={{ animationDuration: '15s' }}></div>
//           <div className="absolute bottom-32 right-10 w-28 h-28 border border-black opacity-20 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
//           <div className="text-center space-y-8">
//             {/* Breadcrumb */}
//             <nav className="text-sm font-medium" aria-label="Breadcrumb">
//               <ol className="flex justify-center space-x-2 text-neutral-700">
//                 <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
//                 <li className="before:content-['/'] before:mx-2">Services</li>
//               </ol>
//             </nav>

//             <div className={`space-y-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
//                 Kulthe & Associates
//                 <span className="block relative">
//                   PROFESSIONAL CA SERVICES
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4FC3F7] animate-pulse"></div>
//                 </span>
//               </h1>
              
//               <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
//                 Comprehensive chartered accountant services for businesses and individuals. 
//                 From taxation to audit, we've got your financial needs covered.
//               </p>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
//               {[
//                 { value: "7+", label: "Service Categories" },
//                 { value: "35+", label: "Expert Services" },
//                 { value: "500+", label: "Happy Clients" },
//                 { value: "24/7", label: "Support" }
//               ].map((stat, index) => (
//                 <div key={index} className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100} ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
//                   <div className="text-3xl sm:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Navigation */}
//       <section className="py-16 bg-[#FFFFFF]" id="services-nav">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE CATEGORIES
//             </h2>
//             <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
//               Choose from our comprehensive range of professional services
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Object.entries(services).map(([key, service], index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={key}
//                   onClick={() => setActiveCategory(key)}
//                   className={`${service.color} ${service.borderColor} border-2 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
//                     activeCategory === key ? 'border-black bg-gradient-to-br from-[#4595f0] to-[#708090] text-[#FFFFFF]' : 'hover:border-[#4FC3F7]'
//                   } ${isVisible['services-nav'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}
//                 >
//                   <div className="space-y-4">
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
//                       activeCategory === key ? 'bg-[#FFFFFF]' : 'bg-[#042b63]'
//                     }`}>
//                       <IconComponent className={`w-8 h-8 transition-all ${
//                         activeCategory === key ? 'text-black' : 'text-[#FFFFFF]'
//                       }`} />
//                     </div>
//                     <h3 className={`text-lg font-black transition-all ${
//                       activeCategory === key ? 'text-[#FFFFFF]' : 'text-black'
//                     }`}>
//                       {service.title}
//                     </h3>
//                     <p className={`text-sm leading-relaxed transition-all ${
//                       activeCategory === key ? 'text-[#FFFFFF]' : 'text-neutral-700'
//                     }`}>
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Detailed Services */}
//       <section className="py-20 bg-[#FFFFFF]" id="detailed-services">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-12">
//             {Object.entries(services).map(([key, service]) => {
//               if (key !== activeCategory) return null;

//               const IconComponent = service.icon;

//               return (
//                 <div
//                   key={key}
//                   className={`transition-all duration-500 ${
//                     isVisible['detailed-services']
//                       ? 'opacity-100 translate-y-0'
//                       : 'opacity-0 translate-y-10'
//                   }`}
//                 >
//                   <div className="text-center space-y-6 mb-12">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#003c80] to-[#708090] mx-auto rounded-full flex items-center justify-center animate-pulse">
//                       <IconComponent className="w-10 h-10 text-[#FFFFFF]" />
//                     </div>
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//                       {service.title.toUpperCase()}
//                     </h2>
//                     <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
//                       {service.description}
//                     </p>
//                   </div>

//                   <div className="space-y-6">
//                     {service.subcategories ? (
//                       Object.entries(service.subcategories).map(
//                         ([subcat, subServices], subcatIndex) => (
//                           <div
//                             key={subcat}
//                             className="bg-[#2b4d77]  rounded-3xl p-6 sm:p-8 overflow-hidden"
//                           >
//                             <div
//                               className="flex items-center justify-between cursor-pointer mb-6"
//                               onClick={() =>
//                                 toggleService(`${key}-${subcatIndex}`)
//                               }
//                             >
//                               <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
//                                 <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
//                                 <span className='font-medium text-[#ffffff]'>{subcat}</span>
//                               </h3>
//                               {expandedServices[`${key}-${subcatIndex}`] ? (
//                                 <Minus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                               ) : (
//                                 <Plus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                               )}
//                             </div>

//                             <div
//                               className={`grid gap-4 transition-all duration-500 ${
//                                 expandedServices[`${key}-${subcatIndex}`]
//                                   ? 'max-h-[1000px] opacity-100'
//                                   : 'max-h-0 opacity-0 overflow-hidden'
//                               }`}
//                             >
//                               {subServices.map((subService, serviceIndex) => (
//                                 <div
//                                   key={serviceIndex}
//                                   className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102 flex items-center space-x-3"
//                                 >
//                                   <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
//                                   <span className="font-medium text-black">
//                                     {subService}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         )
//                       )
//                     ) : (
//                       <div className="grid sm:grid-cols-2 gap-6">
//                         {service.services.map((serviceName, serviceIndex) => (
//                           <div
//                             key={serviceIndex}
//                             className="bg-[#4896e0] p-6 rounded-2xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
//                           >
//                             <div className="flex items-start space-x-4">
//                               <div className="w-10 h-10 bg-[#004680] rounded-full flex items-center justify-center flex-shrink-0">
//                                 <CheckCircle className="w-5 h-5 text-[#FFFFFF]" />
//                               </div>
//                               <div className="space-y-2">
//                                 <h4 className="font-black text-black text-lg">
//                                   {serviceName}
//                                 </h4>
//                                 <p className="text-neutral-700 text-sm">
//                                   Professional service delivered with expertise and
//                                   reliability
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Our Services */}
//       <section className="py-20  text-black" id="why-choose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
//               WHY CHOOSE OUR SERVICES?
//             </h2>
//             <p className="text-xl text-black max-w-3xl mx-auto">
//               Experience the difference with Mumbai's most trusted CA firm
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Award,
//                 title: "Expert Professionals",
//                 description: "ICAI certified chartered accountants with 15+ years of specialized experience across all service areas."
//               },
//               {
//                 icon: Shield,
//                 title: "100% Compliance",
//                 description: "Zero compliance issues guaranteed. We ensure all filings and services meet regulatory requirements."
//               },
//               {
//                 icon: Clock,
//                 title: "Quick Turnaround",
//                 description: "Fast and efficient service delivery without compromising on quality or accuracy."
//               },
//               {
//                 icon: Users,
//                 title: "Personalized Approach",
//                 description: "Tailored solutions designed specifically for your business needs and industry requirements."
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Cost-Effective",
//                 description: "Transparent pricing with maximum value. No hidden costs or surprise charges ever."
//               },
//               {
//                 icon: Star,
//                 title: "Proven Track Record",
//                 description: "500+ satisfied clients with 98% retention rate speak to our service excellence."
//               }
//             ].map((item, index) => (
//               <div key={index} className={` bg-[#2B4D77] backdrop-blur-lg p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group ${isVisible['why-choose'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="space-y-6">
//                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                     <item.icon className="w-8 h-8 text-black" />
//                   </div>
//                   <h3 className="text-xl font-black">{item.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Process */}
//       <section className="py-20 bg-[#FFFFFF]" id="service-process">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE PROCESS
//             </h2>
//             <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
//               Simple, transparent, and efficient process for all our services
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Initial Consultation",
//                 description: "Free consultation to understand your specific requirements and business needs.",
//                 icon: Phone
//               },
//               {
//                 step: "02", 
//                 title: "Proposal & Agreement",
//                 description: "Detailed proposal with transparent pricing and service timeline agreement.",
//                 icon: FileText
//               },
//               {
//                 step: "03",
//                 title: "Service Execution",
//                 description: "Professional service delivery by our expert team with regular updates.",
//                 icon: Settings
//               },
//               {
//                 step: "04",
//                 title: "Delivery & Support",
//                 description: "Timely delivery with ongoing support and maintenance as required.",
//                 icon: CheckCircle
//               }
//             ].map((item, index) => (
//               <div key={index} className={`text-center group transition-all duration-500 ${isVisible['service-process'] ? `opacity-100 translate-y-0 delay-${index * 150}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="relative mb-8">
//                   <div className="w-20 h-20 bg-[#004280] mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <item.icon className="w-10 h-10 text-[#FFFFFF]" />
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFFFFF] border-4 border-black rounded-full flex items-center justify-center">
//                     <span className="text-xs font-black text-black">{item.step}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-black text-black mb-4">{item.title}</h3>
//                 <p className="text-neutral-700 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#FFFFFF]" id="cta">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
//               READY TO GET STARTED WITH
//               <span className="block">PROFESSIONAL CA SERVICES?</span>
//             </h2>
            
//             <p className="text-xl text-neutral-700 leading-relaxed">
//               Get expert chartered accountant services with guaranteed compliance and peace of mind. 
//               Join 500+ satisfied clients who trust Kulthe & Associates for their financial success.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//               <button className="bg-[#003a80] text-[#FFFFFF] px-10 py-5 font-black text-lg hover:bg-[#3e6dbe] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//                 <span>GET FREE CONSULTATION</span>
//                 <ArrowRight className="w-6 h-6" />
//               </button>
//               <button className="border-2 border-black text-black px-10 py-5 font-black text-lg hover:bg-[#003a80] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center space-x-2">
//                 <Phone className="w-5 h-5" />
//                 <span>CALL +91 9623365775</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-[#052f83]">
//               {[
//                 { value: "FREE", label: "Initial Consultation" },
//                 { value: "24HR", label: "Response Time" },
//                 { value: "100%", label: "Satisfaction Guarantee" }
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-black text-black mb-2">{item.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{item.label}</div>
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
//           "@type": "ProfessionalService",
//           "name": "Kulthe & Associates - Professional CA Services",
//           "description": "Comprehensive chartered accountant services including accounting, audit, taxation, GST, business registration, and startup advisory services in Pune.",
//           "url": "https://kultheassociates.com/services",
//           "telephone": "+91-9623365775",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "123 Business District",
//             "addressLocality": "Pune",
//             "addressRegion": "Maharashtra", 
//             "postalCode": "411001",
//             "addressCountry": "IN"
//           },
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "18.5204",
//             "longitude": "73.8567"
//           },
//           "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
//           "priceRange": "$$",
//           "serviceType": ["Accounting Services", "Audit Services", "Taxation Services", "GST Services", "Business Registration", "Startup Advisory", "Certification Services"],
//           "areaServed": {
//             "@type": "City",
//             "name": "Pune"
//           },
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

// export default ServicesPage;













// import React, { useState, useEffect } from 'react';
// import { 
//   BookOpen, Search, Calculator, Building2, Globe, Rocket, FileCheck, 
//   ChevronDown, ChevronRight, ArrowRight, Star, Shield, CheckCircle, 
//   Phone, Mail, Clock, Award, Users, TrendingUp, Target, Eye, Heart,
//   DollarSign, FileText, BarChart, Settings, Briefcase, Home, Plus, Minus
// } from 'lucide-react';

// const ServicesPage = () => {
//   const [activeCategory, setActiveCategory] = useState('accounting');
//   const [expandedServices, setExpandedServices] = useState({});
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const toggleService = (serviceId) => {
//     setExpandedServices(prev => ({
//       ...prev,
//       [serviceId]: !prev[serviceId]
//     }));
//   };

//   const services = {
//     accounting: {
//       icon: BookOpen,
//       title: "Accounting Services",
//       description: "Accounts Writing & Book Keeping Services",
//       "Accounting as per Indian  Accounting Standards (Ind AS)",
// "Accounting as per IFRS (International Financial Reporting Standards) (IFRS)",
// "Technical guidance on accounting issues",


//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Accounts Writing & Book Keeping Services": [
//           "Accurate and timely accounting is the backbone of every successful business. Our Accounts Writing & Bookkeeping Services are designed to provide comprehensive, reliable, and compliant financial records, enabling informed decision-making and smooth regulatory compliance.",
//           "We offer tailored bookkeeping solutions to businesses of all sizes, ensuring that your day-to-day financial transactions are recorded systematically and in accordance with applicable accounting standards. From maintaining ledgers and journals to reconciling bank statements and preparing trial balances, our services help you stay organized and audit-ready at all times."
//         ],
//         "Our Services Include (Accounts Writing & Book Keeping Services)": [
//           "Preparation and maintenance of books of accounts",
//           "Ledger posting and journal entries",
//           "Accounts reconciliation (bank, vendor, customer)",
//           "Monthly/quarterly financial reporting",
//           "GST-compliant bookkeeping",
//           "Support for audit and compliance reviews",
//           "Whether you're a startup, SME, or a growing enterprise, we ensure that your financial records reflect accuracy, transparency, and efficiency. Let us handle your books, so you can focus on growing your business."
//         ],
//         "Accounting as per Indian Accounting Standards (Ind AS)": [
//           "With the increasing emphasis on transparency, comparability, and global alignment in financial reporting, compliance with Indian Accounting Standards (Ind AS) has become essential for many companies in India.",
//           "At our firm, we specialize in providing end-to-end support for accounting and financial reporting in accordance with Ind AS. Our expert team ensures accurate application of standards, seamless transition from previous GAAP, and ongoing compliance with the latest updates issued by regulatory bodies."
//         ],
//         "Our Ind AS Services Include:": [
//           "Transition support from Indian GAAP to Ind AS",
//           "Preparation and presentation of financial statements as per Ind AS",
//           "Impact assessment and implementation planning",
//           "Advisory on complex Ind AS areas (e.g., financial instruments, leases, revenue recognition)",
//           "Consolidation and group reporting under Ind AS",
//           "Training and capacity building for in-house teams",
//           "We combine technical proficiency with practical experience to help businesses not only comply with Ind AS requirements but also improve the quality and reliability of their financial reporting."
//         ],
//         "Accounting as per International Financial Reporting Standards (IFRS)": [
//           "In today’s global business environment, International Financial Reporting Standards (IFRS) have become the benchmark for transparent and comparable financial reporting across jurisdictions. Adopting and implementing IFRS ensures that your financial statements are globally recognized and meet investor and stakeholder expectations.",
//           "We offer expert IFRS accounting and advisory services to companies looking to adopt, comply with, or transition to IFRS. Our team is well-versed in international standards and provides practical solutions tailored to your industry and organizational needs."
//         ],
//         "Our IFRS Services Include:": [
//           "IFRS financial statement preparation and review",
//           "First-time adoption and transition support from local GAAP to IFRS",
//           "Advisory on complex IFRS matters (e.g., revenue recognition, lease accounting, financial instruments, consolidation)",
//           "Group reporting and alignment with parent company requirements",
//           "IFRS impact analysis and implementation planning",
//           "Ongoing compliance and disclosure advisory",
//           "Whether you are a multinational subsidiary, expanding globally, or preparing for cross-border listing or investments, our IFRS expertise ensures smooth reporting and compliance."
//         ],
//         "Technical Guidance on Accounting Issues": [
//           "Navigating complex accounting standards and regulatory requirements can be challenging for businesses, especially in a dynamic financial reporting landscape. Our firm offers expert Technical Guidance on Accounting Issues to help organizations address intricate accounting matters with clarity, accuracy, and compliance.",
//           "We assist clients in interpreting and applying accounting standards such as Ind AS, IFRS, and Indian GAAP, ensuring that financial reporting reflects the true economic substance of transactions and aligns with regulatory expectations."
//         ],
//         "Our Technical Accounting Services Include:": [
//           "Interpretation and application of complex accounting standards",
//           "Advisory on revenue recognition, lease accounting, financial instruments, business combinations, etc.",
//           "Guidance on preparation of financial statements under multiple frameworks (Ind AS/IFRS/IGAAP)",
//           "Accounting treatment for non-routine or one-time transactions (e.g., mergers, acquisitions, demergers)",
//           "Support in responding to audit queries and regulator reviews",
//           "Preparation of accounting memos and position papers for key judgments",
//           "Our team combines deep technical knowledge with practical experience across industries to deliver sound, tailored solutions. Whether it’s a one-off consultation or ongoing support, we help you make informed accounting decisions that stand up to scrutiny."
//         ]
//       }
//     },
//     audit: {
//       icon: Search,
//       title: "Auditing Services",
//       description: "Comprehensive audit services ensuring compliance and transparency",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Statutory Audit": [
//           "A Statutory Audit is a legal requirement for many organizations, ensuring the credibility and reliability of their financial statements. It is a critical tool for maintaining stakeholder confidence, ensuring regulatory compliance, and upholding corporate governance standards.",
//           "Our firm provides independent and objective statutory audit services in accordance with applicable laws, regulations, and auditing standards (including the Companies Act, 2013 and Standards on Auditing issued by ICAI). We adopt a risk-based, systematic audit approach tailored to the size and nature of your business."
//         ],
//         "Our Statutory Audit Services Cover:": [
//           "Audit of financial statements as per Ind AS / Indian GAAP",
//           "Compliance with Companies Act, 2013 and other applicable laws",
//           "Evaluation of internal controls and risk management systems",
//           "Verification of accounting records and financial disclosures",
//           "Issuance of audit reports in accordance with statutory requirements",
//           "Coordination with management to address audit findings and recommendations",
//           "With a focus on transparency, integrity, and professional excellence, we deliver insights that go beyond compliance — helping clients strengthen internal processes and enhance financial reporting."
//         ],
//         "Internal Audit": [
//           "An effective Internal Audit function is essential for enhancing operational efficiency, strengthening internal controls, and ensuring risk management across all levels of an organization. Unlike statutory audits, internal audits are more strategic, offering insights that help drive performance, governance, and compliance.",
//           "We offer independent and value-driven internal audit services designed to help organizations evaluate and improve the effectiveness of their risk management, control, and governance processes."
//         ],
//         "Our Internal Audit Services Include:": [
//           "Evaluation of internal controls and business processes",
//           "Risk assessment and mitigation strategies",
//           "Compliance checks with internal policies and regulatory requirements",
//           "Operational audits to identify inefficiencies and cost-saving opportunities",
//           "Special audits (fraud detection, forensic reviews, management audits)",
//           "Preparation of detailed audit reports with practical recommendations",
//           "Our internal audit approach goes beyond routine checks — we provide actionable insights that support better decision-making and promote a culture of continuous improvement."
//         ],
//         "Inventory Audit": [
//           "Inventory is often one of the most significant assets on a company's balance sheet, and its accurate valuation is crucial for reliable financial reporting. A well-executed Inventory Audit not only ensures compliance but also helps in identifying inefficiencies, pilferage, and opportunities for optimization.",
//           "Our firm offers comprehensive inventory audit services to help businesses verify stock records, assess internal controls, and ensure accurate reporting of inventory in accordance with applicable accounting standards."
//         ],
//         "Our Inventory Audit Services Include:": [
//           "Physical verification of inventory at warehouses, factories, and retail locations",
//           "Reconciliation of physical stock with accounting records",
//           "Valuation of inventory as per applicable standards (Ind AS/AS/IFRS)",
//           "Review of inventory management systems and internal controls",
//           "Identification of obsolete, slow-moving, or damaged inventory",
//           "Reporting on inventory variances and process improvement recommendations",
//           "Our team brings a meticulous and systematic approach to inventory audits, tailored to your industry and operational scale."
//         ],
//         "Sales Audit": [
//           "Sales are the primary revenue source for most businesses, and their accurate recording is critical for reliable financial reporting, tax compliance, and performance analysis. A Sales Audit ensures that all sales transactions are properly documented, reported, and aligned with applicable laws and accounting standards.",
//           "We provide comprehensive sales audit services to help businesses validate revenue recognition, detect discrepancies, and strengthen controls over the sales process."
//         ],
//         "Our Sales Audit Services Include:": [
//           "Verification of sales transactions against supporting documents (invoices, delivery notes, contracts)",
//           "Assessment of revenue recognition policies as per applicable standards (Ind AS/IFRS)",
//           "Reconciliation of sales records with accounting books and tax returns (e.g., GST filings)",
//           "Identification of unrecorded, duplicate, or fraudulent sales entries",
//           "Evaluation of sales processes, discounts, returns, and credit policies",
//           "Recommendations for improving internal controls and system efficiency",
//           "Our sales audit approach not only ensures compliance and accuracy but also helps management gain deeper insights into revenue performance and risks."
//         ],
//         "Trust/NGO Audit": [
//           "Non-profit organizations, including trusts and NGOs, are entrusted with public and donor funds, making transparency, accountability, and compliance crucial to their operations. A well-conducted Trust/NGO Audit ensures proper utilization of funds, adherence to statutory requirements, and enhanced stakeholder confidence.",
//           "We offer specialized audit services for trusts and NGOs, in line with the requirements of the Income Tax Act, 1961, relevant state trust acts, and regulations governing charitable institutions."
//         ],
//         "Our Trust/NGO Audit Services Include:": [
//           "Statutory audit as per the Income Tax Act and relevant trust laws",
//           "Verification of donations, grants, and fund utilization",
//           "Compliance with registration conditions under Sections 12A, 80G, and FCRA (if applicable)",
//           "Review of internal controls and governance practices",
//           "Preparation and audit of financial statements",
//           "Assistance in filing audit reports (e.g., Form 10B) and compliance documentation",
//           "We understand the unique challenges and responsibilities faced by charitable organizations. Our approach is tailored to promote transparency, ensure compliance, and support your mission with sound financial reporting."
//         ]
//       }
//     },
//     taxation: {
//       icon: Calculator,
//       title: "Taxation Services",
//       description: "Complete tax solutions for individuals and businesses",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Income Tax": [
//           "Tax Consulting Services",
//           "Tax Planning Services",
//           "Tax Audit",
//           "Income Tax Return Filing",
//           "NRI Taxation",
//           "Income Tax Litigation Services",
//           "TDS Return Filing",
//           "TDS Litigation Services",
//           "Income Tax Retainership Services"
//         ],
//         "GST (Goods and Services Tax)": [
//           "GST Registration Services",
//           "GST Return Filing Services",
//           "GST Audit Services",
//           "GST Litigation Services",
//           "GST Other Services",
//           "GST Retainership Services"
//         ]
//       }
//     },
//     business: {
//       icon: Building2,
//       title: "Business Registration & Start-up Services",
//       description: "End-to-end business formation and registration services",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Start up Registration",
//         "Proprietorship Registration Services",
//         "Partnership Registration Services",
//         "Limited Liability Partnership (LLP) Registration Services",
//         "Private Limited Company Registration Services",
//         "Trust Registration Services",
//         "Society Registration Services"
//       ]
//     },
//     outsourcing: {
//       icon: Globe,
//       title: "Outsourcing & Global Capability Services",
//       description: "Strategic outsourcing solutions for business optimization",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "CFO Services",
//         "Management Information System (MIS) Services",
//         "Project advisory and management for business transition",
//         "Budgeting and Forecasting Services",
//         "US Taxation Services",
//         "Presetup Advisory",
//         "Setup Phase support",
//         "Operational Advisory",
//         "Tax and regulatory compliance",
//         "Growth and optimisation"
//       ]
//     },
//     startup: {
//       icon: Rocket,
//       title: "Start-up & Setup Advisory",
//       description: "Comprehensive support for new business ventures",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Compliance Health Check Services"
//       ]
//     },
//     certification: {
//       icon: FileCheck,
//       title: "Certification Services",
//       description: "Professional certifications for various regulatory requirements",
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Foreign Remittance Certificate (FRC) Services",
//         "VISA Certification Services",
//         "RERA Certificate Services",
//         "Certificates under the Income Tax Act",
//         "Certificates under GST",
//         "Certificates under the Companies Act"
//       ]
//     }
//   };

//   return (
//     <div className="bg-[#FFFFFF] font-sans min-h-screen mt-25">
//       {/* SEO Meta Information */}
//       <div className="hidden">
//         <h1>Professional CA Services Bangalore - Vittam Integrity Services</h1>
//         <meta name="description" content="Comprehensive chartered accountant services in Bangalore. Expert accounting, audit, taxation, GST, startup advisory, outsourcing, global capability center consultation, and certification services. ICAI certified professionals with 30+ years combined experience." />
//         <meta name="keywords" content="CA services Bangalore, chartered accountant services, tax planning Bangalore, GST services, audit services, business registration, startup advisory, income tax filing, accounting services Bangalore, outsourcing services, certification services" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Professional CA Services Bangalore - Vittam Integrity Services" />
//         <meta property="og:description" content="Expert chartered accountant services including taxation, audit, GST, and business advisory. Trusted by clients across diverse sectors." />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://vittamintegrityservices.com/services" />
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] bg-[#FFFFFF] overflow-hidden" id="hero">
//         {/* Animated Background */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute top-32 right-16 w-24 h-24 border border-[#87CEEB] rounded-full animate-pulse"></div>
//           <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#87CEEB] rounded-full animate-bounce"></div>
//           <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#87CEEB] animate-spin" style={{ animationDuration: '15s' }}></div>
//           <div className="absolute bottom-32 right-10 w-28 h-28 border border-black opacity-20 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
//           <div className="text-center space-y-8">
//             {/* Breadcrumb */}
//             <nav className="text-sm font-medium" aria-label="Breadcrumb">
//               <ol className="flex justify-center space-x-2 text-neutral-700">
//                 <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
//                 <li className="before:content-['/'] before:mx-2">Services</li>
//               </ol>
//             </nav>

//             <div className={`space-y-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
//                 Vittam Integrity Services
//                 <span className="block relative">
//                   PROFESSIONAL SOLUTIONS
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4FC3F7] animate-pulse"></div>
//                 </span>
//               </h1>
              
//               <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
//                 Comprehensive solutions including Accounting, Finance and Compliance; Direct and Indirect Taxation; Outsourcing Services; Business Advisory Services.
//               </p>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
//               {[
//                 { value: "8+", label: "Service Categories" },
//                 { value: "40+", label: "Expert Services" },
//                 { value: "30+", label: "Years Experience" },
//                 { value: "Global", label: "Client Support" }
//               ].map((stat, index) => (
//                 <div key={index} className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100} ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
//                   <div className="text-3xl sm:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Navigation */}
//       <section className="py-16 bg-[#FFFFFF] " id="services-nav">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE CATEGORIES
//             </h2>
//             <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
//               Choose from our comprehensive range of professional services
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Object.entries(services).map(([key, service], index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={key}
//                   onClick={() => setActiveCategory(key)}
//                   className={`${service.color} ${service.borderColor} border-2 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
//                     activeCategory === key ? 'border-black bg-gradient-to-br from-[#4595f0] to-[#708090] text-[#FFFFFF]' : 'hover:border-[#4FC3F7]'
//                   } ${isVisible['services-nav'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}
//                 >
//                   <div className="space-y-4">
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
//                       activeCategory === key ? 'bg-[#FFFFFF]' : 'bg-[#042b63]'
//                     }`}>
//                       <IconComponent className={`w-8 h-8 transition-all ${
//                         activeCategory === key ? 'text-black' : 'text-[#FFFFFF]'
//                       }`} />
//                     </div>
//                     <h3 className={`text-lg font-black transition-all ${
//                       activeCategory === key ? 'text-[#FFFFFF]' : 'text-black'
//                     }`}>
//                       {service.title}
//                     </h3>
//                     <p className={`text-sm leading-relaxed transition-all ${
//                       activeCategory === key ? 'text-[#FFFFFF]' : 'text-neutral-700'
//                     }`}>
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Detailed Services */}
//       <section className="py-20 bg-[#FFFFFF]" id="detailed-services">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-12">
//             {Object.entries(services).map(([key, service]) => {
//               if (key !== activeCategory) return null;

//               const IconComponent = service.icon;

//               return (
//                 <div
//                   key={key}
//                   className={`transition-all duration-500 ${
//                     isVisible['detailed-services']
//                       ? 'opacity-100 translate-y-0'
//                       : 'opacity-0 translate-y-10'
//                   }`}
//                 >
//                   <div className="text-center space-y-6 mb-12">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#003c80] to-[#708090] mx-auto rounded-full flex items-center justify-center animate-pulse">
//                       <IconComponent className="w-10 h-10 text-[#FFFFFF]" />
//                     </div>
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//                       {service.title.toUpperCase()}
//                     </h2>
//                     <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
//                       {service.description}
//                     </p>
//                   </div>

//                   <div className="space-y-6">
//                     {service.subcategories ? (
//                       Object.entries(service.subcategories).map(
//                         ([subcat, subServices], subcatIndex) => (
//                           <div
//                             key={subcat}
//                             className="bg-[#2b4d77]  rounded-3xl p-6 sm:p-8 overflow-hidden"
//                           >
//                             <div
//                               className="flex items-center justify-between cursor-pointer mb-6"
//                               onClick={() =>
//                                 toggleService(`${key}-${subcatIndex}`)
//                               }
//                             >
//                               <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
//                                 <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
//                                 <span className='font-medium text-[#ffffff]'>{subcat}</span>
//                               </h3>
//                               {expandedServices[`${key}-${subcatIndex}`] ? (
//                                 <Minus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                               ) : (
//                                 <Plus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                               )}
//                             </div>

//                             <div
//                               className={`grid gap-4 transition-all duration-500 ${
//                                 expandedServices[`${key}-${subcatIndex}`]
//                                   ? 'max-h-[1000px] opacity-100'
//                                   : 'max-h-0 opacity-0 overflow-hidden'
//                               }`}
//                             >
//                               {subServices.map((subService, serviceIndex) => (
//                                 <div
//                                   key={serviceIndex}
//                                   className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102 flex items-center space-x-3"
//                                 >
//                                   <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
//                                   <span className="font-medium text-black">
//                                     {subService}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         )
//                       )
//                     ) : (
//                       <div className="grid sm:grid-cols-2 gap-6">
//                         {service.services.map((serviceName, serviceIndex) => (
//                           <div
//                             key={serviceIndex}
//                             className="bg-[#4896e0] p-6 rounded-2xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
//                           >
//                             <div className="flex items-start space-x-4">
//                               <div className="w-10 h-10 bg-[#004680] rounded-full flex items-center justify-center flex-shrink-0">
//                                 <CheckCircle className="w-5 h-5 text-[#FFFFFF]" />
//                               </div>
//                               <div className="space-y-2">
//                                 <h4 className="font-black text-black text-lg">
//                                   {serviceName}
//                                 </h4>
//                                 <p className="text-neutral-700 text-sm">
//                                   Professional service delivered with expertise and
//                                   reliability
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20  text-black" id="why-choose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
//               WHY CHOOSE VITTAM INTEGRITY SERVICES?
//             </h2>
//             <p className="text-xl text-black max-w-3xl mx-auto">
//               Experience the difference with Bangalore's trusted CA firm
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Award,
//                 title: "Expert Professionals",
//                 description: "ICAI certified chartered accountants with 30+ years of combined experience across diverse sectors like Real Estate, NGOs/Trusts, Hospitality, NRI Taxation, Infrastructure, Technology Services, and Multinational Corporations."
//               },
//               {
//                 icon: Shield,
//                 title: "Unwavering Integrity",
//                 description: "Guided by principles of honesty, accountability, and ethical practice, ensuring transparent and reliable services."
//               },
//               {
//                 icon: Clock,
//                 title: "Global Reach",
//                 description: "Support for clients worldwide with compliance under Indian GAAP, US GAAP, IFRS, and international standards."
//               },
//               {
//                 icon: Users,
//                 title: "Personalized Approach",
//                 description: "Tailored solutions with deep technical expertise in financial management, taxation, audits, and business advisory."
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Value-Driven",
//                 description: "Delivering value with unwavering integrity, empowering businesses through personalized services and continuous improvement."
//               },
//               {
//                 icon: Star,
//                 title: "Proven Expertise",
//                 description: "Led by CA Sunita Kulthe and Shraddha Kamath, specializing in complex tax litigation, audits, and GCC consultation."
//               }
//             ].map((item, index) => (
//               <div key={index} className={` bg-[#2B4D77] backdrop-blur-lg p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group ${isVisible['why-choose'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="space-y-6">
//                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                     <item.icon className="w-8 h-8 text-black" />
//                   </div>
//                   <h3 className="text-xl font-black">{item.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Process */}
//       <section className="py-20 bg-[#FFFFFF]" id="service-process">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE PROCESS
//             </h2>
//             <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
//               Simple, transparent, and efficient process for all our services
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Initial Consultation",
//                 description: "Free consultation to understand your specific requirements and business needs.",
//                 icon: Phone
//               },
//               {
//                 step: "02", 
//                 title: "Proposal & Agreement",
//                 description: "Detailed proposal with transparent pricing and service timeline agreement.",
//                 icon: FileText
//               },
//               {
//                 step: "03",
//                 title: "Service Execution",
//                 description: "Professional service delivery by our expert team with regular updates.",
//                 icon: Settings
//               },
//               {
//                 step: "04",
//                 title: "Delivery & Support",
//                 description: "Timely delivery with ongoing support and maintenance as required.",
//                 icon: CheckCircle
//               }
//             ].map((item, index) => (
//               <div key={index} className={`text-center group transition-all duration-500 ${isVisible['service-process'] ? `opacity-100 translate-y-0 delay-${index * 150}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="relative mb-8">
//                   <div className="w-20 h-20 bg-[#004280] mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <item.icon className="w-10 h-10 text-[#FFFFFF]" />
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFFFFF] border-4 border-black rounded-full flex items-center justify-center">
//                     <span className="text-xs font-black text-black">{item.step}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-black text-black mb-4">{item.title}</h3>
//                 <p className="text-neutral-700 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#FFFFFF]" id="cta">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
//               READY TO GET STARTED WITH
//               <span className="block">VITTAM INTEGRITY SERVICES?</span>
//             </h2>
            
//             <p className="text-xl text-neutral-700 leading-relaxed">
//               Get expert chartered accountant services with guaranteed compliance and peace of mind. 
//               Empower your business with our value-driven solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//               <button className="bg-[#003a80] text-[#FFFFFF] px-10 py-5 font-black text-lg hover:bg-[#3e6dbe] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//                 <span>GET FREE CONSULTATION</span>
//                 <ArrowRight className="w-6 h-6" />
//               </button>
//               <button className="border-2 border-black text-black px-10 py-5 font-black text-lg hover:bg-[#003a80] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center space-x-2">
//                 <Phone className="w-5 h-5" />
//                 <span>CALL +91 9623365775</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-[#052f83]">
//               {[
//                 { value: "FREE", label: "Initial Consultation" },
//                 { value: "24HR", label: "Response Time" },
//                 { value: "100%", label: "Satisfaction Guarantee" }
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-black text-black mb-2">{item.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{item.label}</div>
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
//           "@type": "ProfessionalService",
//           "name": "Vittam Integrity Services - Professional CA Services",
//           "description": "Comprehensive chartered accountant services including accounting, audit, taxation, GST, business registration, and startup advisory services in Bangalore.",
//           "url": "https://vittamintegrityservices.com/services",
//           "telephone": "+91-9623365775",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "16046, Tower 16, Prestige Song of the South, Begur Road, Yelanahalli",
//             "addressLocality": "Bangalore",
//             "addressRegion": "Karnataka", 
//             "postalCode": "560068",
//             "addressCountry": "IN"
//           },
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "12.9716",
//             "longitude": "77.5946"
//           },
//           "openingHours": "Mo-Sa",
//           "priceRange": "$$",
//           "serviceType": ["Accounting Services", "Auditing Services", "Taxation Services", "GST Services", "Business Registration", "Startup Advisory", "Outsourcing Services", "Global Capability Centers", "Certification Services"],
//           "areaServed": {
//             "@type": "City",
//             "name": "Bangalore"
//           },
//           "founder": [
//             {
//               "@type": "Person",
//               "name": "CA Sunita Kulthe"
//             },
//             {
//               "@type": "Person",
//               "name": "Shraddha Kamath"
//             }
//           ],
//           "aggregateRating": {
//             "@type": "AggregateRating",
//             "ratingValue": "4.9",
//             "reviewCount": "100"
//           }
//         })
//       }} />
//     </div>
//   );
// };

// export default ServicesPage;















// import React, { useState, useEffect } from 'react';
// import { 
//   BookOpen, Search, Calculator, Building2, Globe, Rocket, FileCheck, 
//   ChevronDown, ChevronRight, ArrowRight, Star, Shield, CheckCircle, 
//   Phone, Mail, Clock, Award, Users, TrendingUp, Target, Eye, Heart,
//   DollarSign, FileText, BarChart, Settings, Briefcase, Home, Plus, Minus
// } from 'lucide-react';



// const ServicesPage = () => {
//   const [activeCategory, setActiveCategory] = useState('accounting');
//   const [expandedServices, setExpandedServices] = useState({});
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const toggleService = (serviceId) => {
//     setExpandedServices(prev => ({
//       ...prev,
//       [serviceId]: !prev[serviceId]
//     }));
//   };

//   const services = {
//     accounting: {
//       icon: BookOpen,
//       title: "Accounting Services",
//       description: [
//         "Accounts Writing & Book Keeping Services",
//         "Accounting as per Indian Accounting Standards (Ind AS)",
//         "Accounting as per IFRS (International Financial Reporting Standards) (IFRS)",
//         "Technical guidance on accounting issues"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Accounts Writing & Book Keeping Services": [
//           "Accurate and timely accounting is the backbone of every successful business. Our Accounts Writing & Bookkeeping Services are designed to provide comprehensive, reliable, and compliant financial records, enabling informed decision-making and smooth regulatory compliance.",
//           "We offer tailored bookkeeping solutions to businesses of all sizes, ensuring that your day-to-day financial transactions are recorded systematically and in accordance with applicable accounting standards. From maintaining ledgers and journals to reconciling bank statements and preparing trial balances, our services help you stay organized and audit-ready at all times.",
//           "Preparation and maintenance of books of accounts",
//           "Ledger posting and journal entries",
//           "Accounts reconciliation (bank, vendor, customer)",
//           "Monthly/quarterly financial reporting",
//           "GST-compliant bookkeeping",
//           "Support for audit and compliance reviews",
//           "Whether you're a startup, SME, or a growing enterprise, we ensure that your financial records reflect accuracy, transparency, and efficiency. Let us handle your books, so you can focus on growing your business."
//         ],
//         "Accounting as per Indian Accounting Standards (Ind AS)": [
//           "With the increasing emphasis on transparency, comparability, and global alignment in financial reporting, compliance with Indian Accounting Standards (Ind AS) has become essential for many companies in India.",
//           "At our firm, we specialize in providing end-to-end support for accounting and financial reporting in accordance with Ind AS. Our expert team ensures accurate application of standards, seamless transition from previous GAAP, and ongoing compliance with the latest updates issued by regulatory bodies.",
//           "Transition support from Indian GAAP to Ind AS",
//           "Preparation and presentation of financial statements as per Ind AS",
//           "Impact assessment and implementation planning",
//           "Advisory on complex Ind AS areas (e.g., financial instruments, leases, revenue recognition)",
//           "Consolidation and group reporting under Ind AS",
//           "Training and capacity building for in-house teams",
//           "We combine technical proficiency with practical experience to help businesses not only comply with Ind AS requirements but also improve the quality and reliability of their financial reporting."
//         ],
//         "Accounting as per International Financial Reporting Standards (IFRS)": [
//           "In today’s global business environment, International Financial Reporting Standards (IFRS) have become the benchmark for transparent and comparable financial reporting across jurisdictions. Adopting and implementing IFRS ensures that your financial statements are globally recognized and meet investor and stakeholder expectations.",
//           "We offer expert IFRS accounting and advisory services to companies looking to adopt, comply with, or transition to IFRS. Our team is well-versed in international standards and provides practical solutions tailored to your industry and organizational needs.",
//           "IFRS financial statement preparation and review",
//           "First-time adoption and transition support from local GAAP to IFRS",
//           "Advisory on complex IFRS matters (e.g., revenue recognition, lease accounting, financial instruments, consolidation)",
//           "Group reporting and alignment with parent company requirements",
//           "IFRS impact analysis and implementation planning",
//           "Ongoing compliance and disclosure advisory",
//           "Whether you are a multinational subsidiary, expanding globally, or preparing for cross-border listing or investments, our IFRS expertise ensures smooth reporting and compliance."
//         ],
//         "Technical Guidance on Accounting Issues": [
//           "Navigating complex accounting standards and regulatory requirements can be challenging for businesses, especially in a dynamic financial reporting landscape. Our firm offers expert Technical Guidance on Accounting Issues to help organizations address intricate accounting matters with clarity, accuracy, and compliance.",
//           "We assist clients in interpreting and applying accounting standards such as Ind AS, IFRS, and Indian GAAP, ensuring that financial reporting reflects the true economic substance of transactions and aligns with regulatory expectations.",
//           "Interpretation and application of complex accounting standards",
//           "Advisory on revenue recognition, lease accounting, financial instruments, business combinations, etc.",
//           "Guidance on preparation of financial statements under multiple frameworks (Ind AS/IFRS/IGAAP)",
//           "Accounting treatment for non-routine or one-time transactions (e.g., mergers, acquisitions, demergers)",
//           "Support in responding to audit queries and regulator reviews",
//           "Preparation of accounting memos and position papers for key judgments",
//           "Our team combines deep technical knowledge with practical experience across industries to deliver sound, tailored solutions. Whether it’s a one-off consultation or ongoing support, we help you make informed accounting decisions that stand up to scrutiny."
//         ]
//       }
//     },
//     audit: {
//       icon: Search,
//       title: "Auditing Services",
//       description: [
//         "Statutory Audit",
//         "Internal Audit",
//         "Inventory Audit",
//         "Sales Audit",
//         "Trust/NGO Audit"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Statutory Audit": [
//           "A Statutory Audit is a legal requirement for many organizations, ensuring the credibility and reliability of their financial statements. It is a critical tool for maintaining stakeholder confidence, ensuring regulatory compliance, and upholding corporate governance standards.",
//           "Our firm provides independent and objective statutory audit services in accordance with applicable laws, regulations, and auditing standards (including the Companies Act, 2013 and Standards on Auditing issued by ICAI). We adopt a risk-based, systematic audit approach tailored to the size and nature of your business.",
//           "Audit of financial statements as per Ind AS / Indian GAAP",
//           "Compliance with Companies Act, 2013 and other applicable laws",
//           "Evaluation of internal controls and risk management systems",
//           "Verification of accounting records and financial disclosures",
//           "Issuance of audit reports in accordance with statutory requirements",
//           "Coordination with management to address audit findings and recommendations",
//           "With a focus on transparency, integrity, and professional excellence, we deliver insights that go beyond compliance — helping clients strengthen internal processes and enhance financial reporting."
//         ],
//         "Internal Audit": [
//           "An effective Internal Audit function is essential for enhancing operational efficiency, strengthening internal controls, and ensuring risk management across all levels of an organization. Unlike statutory audits, internal audits are more strategic, offering insights that help drive performance, governance, and compliance.",
//           "We offer independent and value-driven internal audit services designed to help organizations evaluate and improve the effectiveness of their risk management, control, and governance processes.",
//           "Evaluation of internal controls and business processes",
//           "Risk assessment and mitigation strategies",
//           "Compliance checks with internal policies and regulatory requirements",
//           "Operational audits to identify inefficiencies and cost-saving opportunities",
//           "Special audits (fraud detection, forensic reviews, management audits)",
//           "Preparation of detailed audit reports with practical recommendations",
//           "Our internal audit approach goes beyond routine checks — we provide actionable insights that support better decision-making and promote a culture of continuous improvement."
//         ],
//         "Inventory Audit": [
//           "Inventory is often one of the most significant assets on a company's balance sheet, and its accurate valuation is crucial for reliable financial reporting. A well-executed Inventory Audit not only ensures compliance but also helps in identifying inefficiencies, pilferage, and opportunities for optimization.",
//           "Our firm offers comprehensive inventory audit services to help businesses verify stock records, assess internal controls, and ensure accurate reporting of inventory in accordance with applicable accounting standards.",
//           "Physical verification of inventory at warehouses, factories, and retail locations",
//           "Reconciliation of physical stock with accounting records",
//           "Valuation of inventory as per applicable standards (Ind AS/AS/IFRS)",
//           "Review of inventory management systems and internal controls",
//           "Identification of obsolete, slow-moving, or damaged inventory",
//           "Reporting on inventory variances and process improvement recommendations",
//           "Our team brings a meticulous and systematic approach to inventory audits, tailored to your industry and operational scale."
//         ],
//         "Sales Audit": [
//           "Sales are the primary revenue source for most businesses, and their accurate recording is critical for reliable financial reporting, tax compliance, and performance analysis. A Sales Audit ensures that all sales transactions are properly documented, reported, and aligned with applicable laws and accounting standards.",
//           "We provide comprehensive sales audit services to help businesses validate revenue recognition, detect discrepancies, and strengthen controls over the sales process.",
//           "Verification of sales transactions against supporting documents (invoices, delivery notes, contracts)",
//           "Assessment of revenue recognition policies as per applicable standards (Ind AS/IFRS)",
//           "Reconciliation of sales records with accounting books and tax returns (e.g., GST filings)",
//           "Identification of unrecorded, duplicate, or fraudulent sales entries",
//           "Evaluation of sales processes, discounts, returns, and credit policies",
//           "Recommendations for improving internal controls and system efficiency",
//           "Our sales audit approach not only ensures compliance and accuracy but also helps management gain deeper insights into revenue performance and risks."
//         ],
//         "Trust/NGO Audit": [
//           "Non-profit organizations, including trusts and NGOs, are entrusted with public and donor funds, making transparency, accountability, and compliance crucial to their operations. A well-conducted Trust/NGO Audit ensures proper utilization of funds, adherence to statutory requirements, and enhanced stakeholder confidence.",
//           "We offer specialized audit services for trusts and NGOs, in line with the requirements of the Income Tax Act, 1961, relevant state trust acts, and regulations governing charitable institutions.",
//           "Statutory audit as per the Income Tax Act and relevant trust laws",
//           "Verification of donations, grants, and fund utilization",
//           "Compliance with registration conditions under Sections 12A, 80G, and FCRA (if applicable)",
//           "Review of internal controls and governance practices",
//           "Preparation and audit of financial statements",
//           "Assistance in filing audit reports (e.g., Form 10B) and compliance documentation",
//           "We understand the unique challenges and responsibilities faced by charitable organizations. Our approach is tailored to promote transparency, ensure compliance, and support your mission with sound financial reporting."
//         ]
//       }
//     },
//     taxation: {
//       icon: Calculator,
//       title: "Taxation Services",
//       description: [
//         "Tax Consulting Services",
//         "Tax Planning Services",
//         "Tax Audit",
//         "Income Tax Return Filing",
//         "NRI Taxation",
//         "Income Tax Litigation Services",
//         "TDS Return Filing",
//         "TDS Litigation Services",
//         "Income Tax Retainership Services",
//         "GST Registration Services",
//         "GST Return Filing Services",
//         "GST Audit Services",
//         "GST Litigation Services",
//         "GST Other Services",
//         "GST Retainership Services"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Income Tax": [
//           "Tax Consulting Services",
//           "Tax Planning Services",
//           "Tax Audit",
//           "Income Tax Return Filing",
//           "NRI Taxation",
//           "Income Tax Litigation Services",
//           "TDS Return Filing",
//           "TDS Litigation Services",
//           "Income Tax Retainership Services"
//         ],
//         "GST (Goods and Services Tax)": [
//           "GST Registration Services",
//           "GST Return Filing Services",
//           "GST Audit Services",
//           "GST Litigation Services",
//           "GST Other Services",
//           "GST Retainership Services"
//         ]
//       }
//     },
//     business: {
//       icon: Building2,
//       title: "Business Registration & Start-up Services",
//       description: [
//         "Start up Registration",
//         "Proprietorship Registration Services",
//         "Partnership Registration Services",
//         "Limited Liability Partnership (LLP) Registration Services",
//         "Private Limited Company Registration Services",
//         "Trust Registration Services",
//         "Society Registration Services"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Start up Registration",
//         "Proprietorship Registration Services",
//         "Partnership Registration Services",
//         "Limited Liability Partnership (LLP) Registration Services",
//         "Private Limited Company Registration Services",
//         "Trust Registration Services",
//         "Society Registration Services"
//       ]
//     },
//     outsourcing: {
//       icon: Globe,
//       title: "Outsourcing & Global Capability Services",
//       description: [
//         "CFO Services",
//         "Management Information System (MIS) Services",
//         "Project advisory and management for business transition",
//         "Budgeting and Forecasting Services",
//         "US Taxation Services",
//         "Presetup Advisory",
//         "Setup Phase support",
//         "Operational Advisory",
//         "Tax and regulatory compliance",
//         "Growth and optimisation"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "CFO Services",
//         "Management Information System (MIS) Services",
//         "Project advisory and management for business transition",
//         "Budgeting and Forecasting Services",
//         "US Taxation Services",
//         "Presetup Advisory",
//         "Setup Phase support",
//         "Operational Advisory",
//         "Tax and regulatory compliance",
//         "Growth and optimisation"
//       ]
//     },
//     startup: {
//       icon: Rocket,
//       title: "Start-up & Setup Advisory",
//       description: [
//         "Compliance Health Check Services"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Compliance Health Check Services"
//       ]
//     },
//     certification: {
//       icon: FileCheck,
//       title: "Certification Services",
//       description: [
//         "Foreign Remittance Certificate (FRC) Services",
//         "VISA Certification Services",
//         "RERA Certificate Services",
//         "Certificates under the Income Tax Act",
//         "Certificates under GST",
//         "Certificates under the Companies Act"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Foreign Remittance Certificate (FRC) Services",
//         "VISA Certification Services",
//         "RERA Certificate Services",
//         "Certificates under the Income Tax Act",
//         "Certificates under GST",
//         "Certificates under the Companies Act"
//       ]
//     }
//   };

//   return (
//     <div className="bg-[#FFFFFF] font-sans min-h-screen mt-25">
//       {/* SEO Meta Information */}
//       <div className="hidden">
//         <h1>Professional CA Services Bangalore - Vittam Integrity Services</h1>
//         <meta name="description" content="Comprehensive chartered accountant services in Bangalore. Expert accounting, audit, taxation, GST, startup advisory, outsourcing, global capability center consultation, and certification services. ICAI certified professionals with 30+ years combined experience." />
//         <meta name="keywords" content="CA services Bangalore, chartered accountant services, tax planning Bangalore, GST services, audit services, business registration, startup advisory, income tax filing, accounting services Bangalore, outsourcing services, certification services" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Professional CA Services Bangalore - Vittam Integrity Services" />
//         <meta property="og:description" content="Expert chartered accountant services including taxation, audit, GST, and business advisory. Trusted by clients across diverse sectors." />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://vittamintegrityservices.com/services" />
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] bg-[#FFFFFF] overflow-hidden" id="hero">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute top-32 right-16 w-24 h-24 border border-[#87CEEB] rounded-full animate-pulse"></div>
//           <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#87CEEB] rounded-full animate-bounce"></div>
//           <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#87CEEB] animate-spin" style={{ animationDuration: '15s' }}></div>
//           <div className="absolute bottom-32 right-10 w-28 h-28 border border-black opacity-20 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
//           <div className="text-center space-y-8">
//             <nav className="text-sm font-medium" aria-label="Breadcrumb">
//               <ol className="flex justify-center space-x-2 text-neutral-700">
//                 <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
//                 <li className="before:content-['/'] before:mx-2">Services</li>
//               </ol>
//             </nav>

//             <div className={`space-y-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
//                 Vittam Integrity Services
//                 <span className="block relative">
//                   PROFESSIONAL SOLUTIONS
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4FC3F7] animate-pulse"></div>
//                 </span>
//               </h1>
              
//               <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
//                 Comprehensive solutions including Accounting, Finance and Compliance; Direct and Indirect Taxation; Outsourcing Services; Business Advisory Services.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
//               {[
//                 { value: "8+", label: "Service Categories" },
//                 { value: "40+", label: "Expert Services" },
//                 { value: "30+", label: "Years Experience" },
//                 { value: "Global", label: "Client Support" }
//               ].map((stat, index) => (
//                 <div key={index} className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100} ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
//                   <div className="text-3xl sm:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Navigation */}
//       <section className="py-16 bg-[#FFFFFF]" id="services-nav">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-12">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE CATEGORIES
//             </h2>
//             <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
//               Choose from our comprehensive range of professional services
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Object.entries(services).map(([key, service], index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div
//                   key={key}
//                   onClick={() => setActiveCategory(key)}
//                   className={`${service.color} ${service.borderColor} border-2 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
//                     activeCategory === key ? 'border-black bg-gradient-to-br from-[#4595f0] to-[#708090] text-[#FFFFFF]' : 'hover:border-[#4FC3F7]'
//                   } ${isVisible['services-nav'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}
//                 >
//                   <div className="space-y-4">
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
//                       activeCategory === key ? 'bg-[#FFFFFF]' : 'bg-[#042b63]'
//                     }`}>
//                       <IconComponent className={`w-8 h-8 transition-all ${
//                         activeCategory === key ? 'text-black' : 'text-[#FFFFFF]'
//                       }`} />
//                     </div>
//                     <h3 className={`text-lg font-black transition-all ${
//                       activeCategory === key ? 'text-[#FFFFFF]' : 'text-black'
//                     }`}>
//                       {service.title}
//                     </h3>
//                     <div className={`text-sm leading-relaxed transition-all ${
//                       activeCategory === key ? 'text-[#FFFFFF]' : 'text-neutral-700'
//                     }`}>
//                       {service.description.map((desc, idx) => (
//                         <p key={idx} className="mb-2">{desc}</p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Detailed Services */}
//       <section className="py-20 bg-[#FFFFFF]" id="detailed-services">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-12">
//             {Object.entries(services).map(([key, service]) => {
//               if (key !== activeCategory) return null;

//               const IconComponent = service.icon;

//               return (
//                 <div
//                   key={key}
//                   className={`transition-all duration-500 ${
//                     isVisible['detailed-services']
//                       ? 'opacity-100 translate-y-0'
//                       : 'opacity-0 translate-y-10'
//                   }`}
//                 >
//                   <div className="text-center space-y-6 mb-12">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#003c80] to-[#708090] mx-auto rounded-full flex items-center justify-center animate-pulse">
//                       <IconComponent className="w-10 h-10 text-[#FFFFFF]" />
//                     </div>
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//                       {service.title.toUpperCase()}
//                     </h2>
//                     <div className="text-xl text-neutral-700 max-w-3xl mx-auto">
//                       {service.description.map((desc, idx) => (
//                         <p key={idx} className="mb-2">{desc}</p>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     {service.subcategories ? (
//                       Object.entries(service.subcategories).reduce((acc, [subcat, subServices], subcatIndex) => {
//                         if (subcat === "Our Services Include (Accounts Writing & Book Keeping Services)") {
//                           return acc;
//                         }
//                         if (subcat === "Accounts Writing & Book Keeping Services") {
//                           const combinedServices = [
//                             ...subServices,
//                             ...(services[key].subcategories["Our Services Include (Accounts Writing & Book Keeping Services)"] || [])
//                           ];
//                           acc.push(
//                             <div
//                               key={subcat}
//                               className="bg-[#2b4d77] rounded-3xl p-6 sm:p-8 overflow-hidden"
//                             >
//                               <div
//                                 className="flex items-center justify-between cursor-pointer mb-6"
//                                 onClick={() => toggleService(`${key}-${subcatIndex}`)}
//                               >
//                                 <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
//                                   <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
//                                   <span className="font-medium text-[#ffffff]">{subcat}</span>
//                                 </h3>
//                                 {expandedServices[`${key}-${subcatIndex}`] ? (
//                                   <Minus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 ) : (
//                                   <Plus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 )}
//                               </div>

//                               <div
//                                 className={`grid gap-4 transition-all duration-500 ${
//                                   expandedServices[`${key}-${subcatIndex}`]
//                                     ? 'max-h-[1000px] opacity-100'
//                                     : 'max-h-0 opacity-0 overflow-hidden'
//                                 }`}
//                               >
//                                 {combinedServices.map((subService, serviceIndex) => (
//                                   <div
//                                     key={serviceIndex}
//                                     className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102"
//                                   >
//                                     {subService.length > 100 ? (
//                                       <p className="text-black leading-relaxed font-medium">{subService}</p>
//                                     ) : (
//                                       <div className="flex items-center space-x-3">
//                                         <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
//                                         <span className="font-medium text-black">{subService}</span>
//                                       </div>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           );
//                         } else {
//                           acc.push(
//                             <div
//                               key={subcat}
//                               className="bg-[#2b4d77] rounded-3xl p-6 sm:p-8 overflow-hidden"
//                             >
//                               <div
//                                 className="flex items-center justify-between cursor-pointer mb-6"
//                                 onClick={() => toggleService(`${key}-${subcatIndex}`)}
//                               >
//                                 <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
//                                   <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
//                                   <span className="font-medium text-[#ffffff]">{subcat}</span>
//                                 </h3>
//                                 {expandedServices[`${key}-${subcatIndex}`] ? (
//                                   <Minus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 ) : (
//                                   <Plus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 )}
//                               </div>

//                               <div
//                                 className={`grid gap-4 transition-all duration-500 ${
//                                   expandedServices[`${key}-${subcatIndex}`]
//                                     ? 'max-h-[1000px] opacity-100'
//                                     : 'max-h-0 opacity-0 overflow-hidden'
//                                 }`}
//                               >
//                                 {subServices.map((subService, serviceIndex) => (
//                                   <div
//                                     key={serviceIndex}
//                                     className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102"
//                                   >
//                                     {subService.length > 100 ? (
//                                       <p className="text-black leading-relaxed font-medium">{subService}</p>
//                                     ) : (
//                                       <div className="flex items-center space-x-3">
//                                         <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
//                                         <span className="font-medium text-black">{subService}</span>
//                                       </div>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           );
//                         }
//                         return acc;
//                       }, [])
//                     ) : (
//                       <div className="grid sm:grid-cols-2 gap-6">
//                         {service.services.map((serviceName, serviceIndex) => (
//                           <div
//                             key={serviceIndex}
//                             className="bg-[#4896e0] p-6 rounded-2xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
//                           >
//                             <div className="flex items-start space-x-4">
//                               <div className="w-10 h-10 bg-[#004680] rounded-full flex items-center justify-center flex-shrink-0">
//                                 <CheckCircle className="w-5 h-5 text-[#FFFFFF]" />
//                               </div>
//                               <div className="space-y-2">
//                                 <h4 className="font-black text-black text-lg">
//                                   {serviceName}
//                                 </h4>
//                                 <p className="text-neutral-700 text-sm">
//                                   Professional service delivered with expertise and
//                                   reliability
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 text-black" id="why-choose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
//               WHY CHOOSE VITTAM INTEGRITY SERVICES?
//             </h2>
//             <p className="text-xl text-black max-w-3xl mx-auto">
//               Experience the difference with Bangalore's trusted CA firm
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Award,
//                 title: "Expert Professionals",
//                 description: "ICAI certified chartered accountants with 30+ years of combined experience across diverse sectors like Real Estate, NGOs/Trusts, Hospitality, NRI Taxation, Infrastructure, Technology Services, and Multinational Corporations."
//               },
//               {
//                 icon: Shield,
//                 title: "Unwavering Integrity",
//                 description: "Guided by principles of honesty, accountability, and ethical practice, ensuring transparent and reliable services."
//               },
//               {
//                 icon: Clock,
//                 title: "Global Reach",
//                 description: "Support for clients worldwide with compliance under Indian GAAP, US GAAP, IFRS, and international standards."
//               },
//               {
//                 icon: Users,
//                 title: "Personalized Approach",
//                 description: "Tailored solutions with deep technical expertise in financial management, taxation, audits, and business advisory."
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Value-Driven",
//                 description: "Delivering value with unwavering integrity, empowering businesses through personalized services and continuous improvement."
//               },
//               {
//                 icon: Star,
//                 title: "Proven Expertise",
//                 description: "Led by CA Sunita Kulthe and Shraddha Kamath, specializing in complex tax litigation, audits, and GCC consultation."
//               }
//             ].map((item, index) => (
//               <div key={index} className={`bg-[#2B4D77] backdrop-blur-lg p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group ${isVisible['why-choose'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="space-y-6">
//                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                     <item.icon className="w-8 h-8 text-black" />
//                   </div>
//                   <h3 className="text-xl font-black">{item.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Process */}
//       <section className="py-20 bg-[#FFFFFF]" id="service-process">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE PROCESS
//             </h2>
//             <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
//               Simple, transparent, and efficient process for all our services
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Initial Consultation",
//                 description: "Free consultation to understand your specific requirements and business needs.",
//                 icon: Phone
//               },
//               {
//                 step: "02", 
//                 title: "Proposal & Agreement",
//                 description: "Detailed proposal with transparent pricing and service timeline agreement.",
//                 icon: FileText
//               },
//               {
//                 step: "03",
//                 title: "Service Execution",
//                 description: "Professional service delivery by our expert team with regular updates.",
//                 icon: Settings
//               },
//               {
//                 step: "04",
//                 title: "Delivery & Support",
//                 description: "Timely delivery with ongoing support and maintenance as required.",
//                 icon: CheckCircle
//               }
//             ].map((item, index) => (
//               <div key={index} className={`text-center group transition-all duration-500 ${isVisible['service-process'] ? `opacity-100 translate-y-0 delay-${index * 150}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="relative mb-8">
//                   <div className="w-20 h-20 bg-[#004280] mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <item.icon className="w-10 h-10 text-[#FFFFFF]" />
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFFFFF] border-4 border-black rounded-full flex items-center justify-center">
//                     <span className="text-xs font-black text-black">{item.step}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-black text-black mb-4">{item.title}</h3>
//                 <p className="text-neutral-700 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#FFFFFF]" id="cta">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
//               READY TO GET STARTED WITH
//               <span className="block">VITTAM INTEGRITY SERVICES?</span>
//             </h2>
            
//             <p className="text-xl text-neutral-700 leading-relaxed">
//               Get expert chartered accountant services with guaranteed compliance and peace of mind. 
//               Empower your business with our value-driven solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//               <button className="bg-[#003a80] text-[#FFFFFF] px-10 py-5 font-black text-lg hover:bg-[#3e6dbe] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//                 <span>GET FREE CONSULTATION</span>
//                 <ArrowRight className="w-6 h-6" />
//               </button>
//               <button className="border-2 border-black text-black px-10 py-5 font-black text-lg hover:bg-[#003a80] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center space-x-2">
//                 <Phone className="w-5 h-5" />
//                 <span>CALL +91 9623365775</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-[#052f83]">
//               {[
//                 { value: "FREE", label: "Initial Consultation" },
//                 { value: "24HR", label: "Response Time" },
//                 { value: "100%", label: "Satisfaction Guarantee" }
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-black text-black mb-2">{item.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{item.label}</div>
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
//           "@type": "ProfessionalService",
//           "name": "Vittam Integrity Services - Professional CA Services",
//           "description": "Comprehensive chartered accountant services including accounting, audit, taxation, GST, business registration, and startup advisory services in Bangalore.",
//           "url": "https://vittamintegrityservices.com/services",
//           "telephone": "+91-9623365775",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "16046, Tower 16, Prestige Song of the South, Begur Road, Yelanahalli",
//             "addressLocality": "Bangalore",
//             "addressRegion": "Karnataka", 
//             "postalCode": "560068",
//             "addressCountry": "IN"
//           },
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "12.9716",
//             "longitude": "77.5946"
//           },
//           "openingHours": "Mo-Sa",
//           "priceRange": "$$",
//           "serviceType": ["Accounting Services", "Auditing Services", "Taxation Services", "GST Services", "Business Registration", "Startup Advisory", "Outsourcing Services", "Global Capability Centers", "Certification Services"],
//           "areaServed": {
//             "@type": "City",
//             "name": "Bangalore"
//           },
//           "founder": [
//             {
//               "@type": "Person",
//               "name": "CA Sunita Kulthe"
//             },
//             {
//               "@type": "Person",
//               "name": "Shraddha Kamath"
//             }
//           ],
//           "aggregateRating": {
//             "@type": "AggregateRating",
//             "ratingValue": "4.9",
//             "reviewCount": "100"
//           }
//         })
//       }} />
//     </div>
//   );
// };

// export default ServicesPage;





















// import React, { useState, useEffect } from 'react';
// import { 
//   BookOpen, Search, Calculator, Building2, Globe, Rocket, FileCheck, 
//   ChevronDown, ChevronRight, ArrowRight, Star, Shield, CheckCircle, 
//   Phone, Mail, Clock, Award, Users, TrendingUp, Target, Eye, Heart,
//   DollarSign, FileText, BarChart, Settings, Briefcase, Home, Plus, Minus
// } from 'lucide-react';

// // Service Card Component
// const ServiceCard = ({ 
//   service, 
//   serviceKey, 
//   isActive, 
//   onClick, 
//   index, 
//   isVisible 
// }) => {
//   const IconComponent = service.icon;
  
//   return (
//     <div
//       onClick={() => onClick(serviceKey)}
//       className={`
//         group relative overflow-hidden rounded-3xl p-8 cursor-pointer
//         transition-all duration-700 transform hover:scale-[1.02]
//         ${isActive 
//           ? 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-700 text-white shadow-2xl shadow-blue-900/30 border-2 border-blue-400' 
//           : 'bg-gradient-to-br from-blue-50 via-white to-slate-50 text-gray-800 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50'
//         }
//         ${isVisible 
//           ? `opacity-100 translate-y-0 transition-delay-[${index * 150}ms]` 
//           : 'opacity-0 translate-y-12'
//         }
//       `}
//     >
//       {/* Background Pattern */}
//       <div className={`
//         absolute inset-0 opacity-10 transition-opacity duration-500
//         ${isActive ? 'opacity-20' : 'opacity-5 group-hover:opacity-10'}
//       `}>
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 transform translate-x-16 -translate-y-16" />
//           <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 opacity-30 transform -translate-x-12 translate-y-12" />
//         </div>
//       </div>

//       {/* Floating Elements */}
//       {isActive && (
//         <div className="absolute top-4 right-4 flex space-x-2">
//           <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//           <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
//           <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
//         </div>
//       )}
      
//       {/* Card Content */}
//       <div className="relative z-10 space-y-6">
//         {/* Icon Container */}
//         <div className={`
//           relative w-20 h-20 rounded-2xl flex items-center justify-center
//           transition-all duration-500 transform
//           ${isActive 
//             ? 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm scale-110 rotate-3' 
//             : 'bg-gradient-to-br from-slate-700 to-blue-800 group-hover:scale-105 group-hover:-rotate-3'
//           }
//         `}>
//           <IconComponent className={`
//             w-10 h-10 transition-all duration-500
//             ${isActive ? 'text-white' : 'text-white group-hover:scale-110'}
//           `} />
          
//           {/* Icon Glow Effect */}
//           {isActive && (
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-md animate-pulse" />
//           )}
//         </div>
        
//         {/* Title */}
//         <div className="space-y-2">
//           <h3 className={`
//             text-2xl font-black leading-tight transition-all duration-300
//             ${isActive ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'}
//           `}>
//             {service.title}
//           </h3>
          
//           {/* Title Underline */}
//           <div className={`
//             h-1 rounded-full transition-all duration-500
//             ${isActive 
//               ? 'w-full bg-gradient-to-r from-blue-400 to-purple-400' 
//               : 'w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-slate-600'
//             }
//           `} />
//         </div>
        
//         {/* Description */}
//         <div className={`
//           space-y-3 transition-all duration-300
//           ${isActive ? 'text-blue-100' : 'text-gray-600 group-hover:text-gray-700'}
//         `}>
//           {service.description.slice(0, 3).map((desc, idx) => (
//             <div key={idx} className="flex items-start space-x-3">
//               <div className={`
//                 w-2 h-2 rounded-full flex-shrink-0 mt-2 transition-all duration-300
//                 ${isActive 
//                   ? 'bg-gradient-to-r from-blue-300 to-purple-300' 
//                   : 'bg-gradient-to-r from-blue-400 to-slate-500 group-hover:scale-125'
//                 }
//               `} />
//               <span className="text-sm leading-relaxed font-medium">
//                 {desc}
//               </span>
//             </div>
//           ))}
          
//           {service.description.length > 3 && (
//             <div className={`
//               text-xs font-semibold pt-2 flex items-center space-x-1
//               ${isActive ? 'text-blue-200' : 'text-blue-600'}
//             `}>
//               <span>+{service.description.length - 3} more services</span>
//               <ChevronRight className="w-3 h-3" />
//             </div>
//           )}
//         </div>
        
//         {/* Active Selection Indicator */}
//         {isActive && (
//           <div className="absolute -bottom-2 -right-2">
//             <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
//               <CheckCircle className="w-4 h-4 text-white" />
//             </div>
//           </div>
//         )}
        
//         {/* Hover Arrow */}
//         {!isActive && (
//           <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
//             <ArrowRight className="w-5 h-5 text-blue-500" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const ServicesPage = () => {
//   const [activeCategory, setActiveCategory] = useState('accounting');
//   const [expandedServices, setExpandedServices] = useState({});
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const toggleService = (serviceId) => {
//     setExpandedServices(prev => ({
//       ...prev,
//       [serviceId]: !prev[serviceId]
//     }));
//   };

//   const services = {
//     accounting: {
//       icon: BookOpen,
//       title: "Accounting Services",
//       description: [
//         "Accounts Writing & Book Keeping Services",
//         "Accounting as per Indian Accounting Standards (Ind AS)",
//         "Accounting as per IFRS (International Financial Reporting Standards) (IFRS)",
//         "Technical guidance on accounting issues"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Accounts Writing & Book Keeping Services": [
//           "Accurate and timely accounting is the backbone of every successful business. Our Accounts Writing & Bookkeeping Services are designed to provide comprehensive, reliable, and compliant financial records, enabling informed decision-making and smooth regulatory compliance.",
//           "We offer tailored bookkeeping solutions to businesses of all sizes, ensuring that your day-to-day financial transactions are recorded systematically and in accordance with applicable accounting standards. From maintaining ledgers and journals to reconciling bank statements and preparing trial balances, our services help you stay organized and audit-ready at all times.",
//           "Preparation and maintenance of books of accounts",
//           "Ledger posting and journal entries",
//           "Accounts reconciliation (bank, vendor, customer)",
//           "Monthly/quarterly financial reporting",
//           "GST-compliant bookkeeping",
//           "Support for audit and compliance reviews",
//           "Whether you're a startup, SME, or a growing enterprise, we ensure that your financial records reflect accuracy, transparency, and efficiency. Let us handle your books, so you can focus on growing your business."
//         ],
//         "Accounting as per Indian Accounting Standards (Ind AS)": [
//           "With the increasing emphasis on transparency, comparability, and global alignment in financial reporting, compliance with Indian Accounting Standards (Ind AS) has become essential for many companies in India.",
//           "At our firm, we specialize in providing end-to-end support for accounting and financial reporting in accordance with Ind AS. Our expert team ensures accurate application of standards, seamless transition from previous GAAP, and ongoing compliance with the latest updates issued by regulatory bodies.",
//           "Transition support from Indian GAAP to Ind AS",
//           "Preparation and presentation of financial statements as per Ind AS",
//           "Impact assessment and implementation planning",
//           "Advisory on complex Ind AS areas (e.g., financial instruments, leases, revenue recognition)",
//           "Consolidation and group reporting under Ind AS",
//           "Training and capacity building for in-house teams",
//           "We combine technical proficiency with practical experience to help businesses not only comply with Ind AS requirements but also improve the quality and reliability of their financial reporting."
//         ],
//         "Accounting as per International Financial Reporting Standards (IFRS)": [
//           "In today's global business environment, International Financial Reporting Standards (IFRS) have become the benchmark for transparent and comparable financial reporting across jurisdictions. Adopting and implementing IFRS ensures that your financial statements are globally recognized and meet investor and stakeholder expectations.",
//           "We offer expert IFRS accounting and advisory services to companies looking to adopt, comply with, or transition to IFRS. Our team is well-versed in international standards and provides practical solutions tailored to your industry and organizational needs.",
//           "IFRS financial statement preparation and review",
//           "First-time adoption and transition support from local GAAP to IFRS",
//           "Advisory on complex IFRS matters (e.g., revenue recognition, lease accounting, financial instruments, consolidation)",
//           "Group reporting and alignment with parent company requirements",
//           "IFRS impact analysis and implementation planning",
//           "Ongoing compliance and disclosure advisory",
//           "Whether you are a multinational subsidiary, expanding globally, or preparing for cross-border listing or investments, our IFRS expertise ensures smooth reporting and compliance."
//         ],
//         "Technical Guidance on Accounting Issues": [
//           "Navigating complex accounting standards and regulatory requirements can be challenging for businesses, especially in a dynamic financial reporting landscape. Our firm offers expert Technical Guidance on Accounting Issues to help organizations address intricate accounting matters with clarity, accuracy, and compliance.",
//           "We assist clients in interpreting and applying accounting standards such as Ind AS, IFRS, and Indian GAAP, ensuring that financial reporting reflects the true economic substance of transactions and aligns with regulatory expectations.",
//           "Interpretation and application of complex accounting standards",
//           "Advisory on revenue recognition, lease accounting, financial instruments, business combinations, etc.",
//           "Guidance on preparation of financial statements under multiple frameworks (Ind AS/IFRS/IGAAP)",
//           "Accounting treatment for non-routine or one-time transactions (e.g., mergers, acquisitions, demergers)",
//           "Support in responding to audit queries and regulator reviews",
//           "Preparation of accounting memos and position papers for key judgments",
//           "Our team combines deep technical knowledge with practical experience across industries to deliver sound, tailored solutions. Whether it's a one-off consultation or ongoing support, we help you make informed accounting decisions that stand up to scrutiny."
//         ]
//       }
//     },
//     audit: {
//       icon: Search,
//       title: "Auditing Services",
//       description: [
//         "Statutory Audit",
//         "Internal Audit",
//         "Inventory Audit",
//         "Sales Audit",
//         "Trust/NGO Audit"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Statutory Audit": [
//           "A Statutory Audit is a legal requirement for many organizations, ensuring the credibility and reliability of their financial statements. It is a critical tool for maintaining stakeholder confidence, ensuring regulatory compliance, and upholding corporate governance standards.",
//           "Our firm provides independent and objective statutory audit services in accordance with applicable laws, regulations, and auditing standards (including the Companies Act, 2013 and Standards on Auditing issued by ICAI). We adopt a risk-based, systematic audit approach tailored to the size and nature of your business.",
//           "Audit of financial statements as per Ind AS / Indian GAAP",
//           "Compliance with Companies Act, 2013 and other applicable laws",
//           "Evaluation of internal controls and risk management systems",
//           "Verification of accounting records and financial disclosures",
//           "Issuance of audit reports in accordance with statutory requirements",
//           "Coordination with management to address audit findings and recommendations",
//           "With a focus on transparency, integrity, and professional excellence, we deliver insights that go beyond compliance — helping clients strengthen internal processes and enhance financial reporting."
//         ],
//         "Internal Audit": [
//           "An effective Internal Audit function is essential for enhancing operational efficiency, strengthening internal controls, and ensuring risk management across all levels of an organization. Unlike statutory audits, internal audits are more strategic, offering insights that help drive performance, governance, and compliance.",
//           "We offer independent and value-driven internal audit services designed to help organizations evaluate and improve the effectiveness of their risk management, control, and governance processes.",
//           "Evaluation of internal controls and business processes",
//           "Risk assessment and mitigation strategies",
//           "Compliance checks with internal policies and regulatory requirements",
//           "Operational audits to identify inefficiencies and cost-saving opportunities",
//           "Special audits (fraud detection, forensic reviews, management audits)",
//           "Preparation of detailed audit reports with practical recommendations",
//           "Our internal audit approach goes beyond routine checks — we provide actionable insights that support better decision-making and promote a culture of continuous improvement."
//         ],
//         "Inventory Audit": [
//           "Inventory is often one of the most significant assets on a company's balance sheet, and its accurate valuation is crucial for reliable financial reporting. A well-executed Inventory Audit not only ensures compliance but also helps in identifying inefficiencies, pilferage, and opportunities for optimization.",
//           "Our firm offers comprehensive inventory audit services to help businesses verify stock records, assess internal controls, and ensure accurate reporting of inventory in accordance with applicable accounting standards.",
//           "Physical verification of inventory at warehouses, factories, and retail locations",
//           "Reconciliation of physical stock with accounting records",
//           "Valuation of inventory as per applicable standards (Ind AS/AS/IFRS)",
//           "Review of inventory management systems and internal controls",
//           "Identification of obsolete, slow-moving, or damaged inventory",
//           "Reporting on inventory variances and process improvement recommendations",
//           "Our team brings a meticulous and systematic approach to inventory audits, tailored to your industry and operational scale."
//         ],
//         "Sales Audit": [
//           "Sales are the primary revenue source for most businesses, and their accurate recording is critical for reliable financial reporting, tax compliance, and performance analysis. A Sales Audit ensures that all sales transactions are properly documented, reported, and aligned with applicable laws and accounting standards.",
//           "We provide comprehensive sales audit services to help businesses validate revenue recognition, detect discrepancies, and strengthen controls over the sales process.",
//           "Verification of sales transactions against supporting documents (invoices, delivery notes, contracts)",
//           "Assessment of revenue recognition policies as per applicable standards (Ind AS/IFRS)",
//           "Reconciliation of sales records with accounting books and tax returns (e.g., GST filings)",
//           "Identification of unrecorded, duplicate, or fraudulent sales entries",
//           "Evaluation of sales processes, discounts, returns, and credit policies",
//           "Recommendations for improving internal controls and system efficiency",
//           "Our sales audit approach not only ensures compliance and accuracy but also helps management gain deeper insights into revenue performance and risks."
//         ],
//         "Trust/NGO Audit": [
//           "Non-profit organizations, including trusts and NGOs, are entrusted with public and donor funds, making transparency, accountability, and compliance crucial to their operations. A well-conducted Trust/NGO Audit ensures proper utilization of funds, adherence to statutory requirements, and enhanced stakeholder confidence.",
//           "We offer specialized audit services for trusts and NGOs, in line with the requirements of the Income Tax Act, 1961, relevant state trust acts, and regulations governing charitable institutions.",
//           "Statutory audit as per the Income Tax Act and relevant trust laws",
//           "Verification of donations, grants, and fund utilization",
//           "Compliance with registration conditions under Sections 12A, 80G, and FCRA (if applicable)",
//           "Review of internal controls and governance practices",
//           "Preparation and audit of financial statements",
//           "Assistance in filing audit reports (e.g., Form 10B) and compliance documentation",
//           "We understand the unique challenges and responsibilities faced by charitable organizations. Our approach is tailored to promote transparency, ensure compliance, and support your mission with sound financial reporting."
//         ]
//       }
//     },
//     taxation: {
//       icon: Calculator,
//       title: "Taxation Services",
//       description: [
//         "Tax Consulting Services",
//         "Tax Planning Services",
//         "Tax Audit",
//         "Income Tax Return Filing",
//         "NRI Taxation",
//         "Income Tax Litigation Services",
//         "TDS Return Filing",
//         "TDS Litigation Services",
//         "Income Tax Retainership Services",
//         "GST Registration Services",
//         "GST Return Filing Services",
//         "GST Audit Services",
//         "GST Litigation Services",
//         "GST Other Services",
//         "GST Retainership Services"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       subcategories: {
//         "Income Tax": [
//           "Tax Consulting Services",
//           "Tax Planning Services",
//           "Tax Audit",
//           "Income Tax Return Filing",
//           "NRI Taxation",
//           "Income Tax Litigation Services",
//           "TDS Return Filing",
//           "TDS Litigation Services",
//           "Income Tax Retainership Services"
//         ],
//         "GST (Goods and Services Tax)": [
//           "GST Registration Services",
//           "GST Return Filing Services",
//           "GST Audit Services",
//           "GST Litigation Services",
//           "GST Other Services",
//           "GST Retainership Services"
//         ]
//       }
//     },
//     business: {
//       icon: Building2,
//       title: "Business Registration & Start-up Services",
//       description: [
//         "Start up Registration",
//         "Proprietorship Registration Services",
//         "Partnership Registration Services",
//         "Limited Liability Partnership (LLP) Registration Services",
//         "Private Limited Company Registration Services",
//         "Trust Registration Services",
//         "Society Registration Services"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Start up Registration",
//         "Proprietorship Registration Services",
//         "Partnership Registration Services",
//         "Limited Liability Partnership (LLP) Registration Services",
//         "Private Limited Company Registration Services",
//         "Trust Registration Services",
//         "Society Registration Services"
//       ]
//     },
//     outsourcing: {
//       icon: Globe,
//       title: "Outsourcing & Global Capability Services",
//       description: [
//         "CFO Services",
//         "Management Information System (MIS) Services",
//         "Project advisory and management for business transition",
//         "Budgeting and Forecasting Services",
//         "US Taxation Services",
//         "Presetup Advisory",
//         "Setup Phase support",
//         "Operational Advisory",
//         "Tax and regulatory compliance",
//         "Growth and optimisation"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "CFO Services",
//         "Management Information System (MIS) Services",
//         "Project advisory and management for business transition",
//         "Budgeting and Forecasting Services",
//         "US Taxation Services",
//         "Presetup Advisory",
//         "Setup Phase support",
//         "Operational Advisory",
//         "Tax and regulatory compliance",
//         "Growth and optimisation"
//       ]
//     },
//     startup: {
//       icon: Rocket,
//       title: "Start-up & Setup Advisory",
//       description: [
//         "Compliance Health Check Services"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Compliance Health Check Services"
//       ]
//     },
//     certification: {
//       icon: FileCheck,
//       title: "Certification Services",
//       description: [
//         "Foreign Remittance Certificate (FRC) Services",
//         "VISA Certification Services",
//         "RERA Certificate Services",
//         "Certificates under the Income Tax Act",
//         "Certificates under GST",
//         "Certificates under the Companies Act"
//       ],
//       color: "bg-[#B0E0E6]",
//       borderColor: "border-[#87CEEB]",
//       services: [
//         "Foreign Remittance Certificate (FRC) Services",
//         "VISA Certification Services",
//         "RERA Certificate Services",
//         "Certificates under the Income Tax Act",
//         "Certificates under GST",
//         "Certificates under the Companies Act"
//       ]
//     }
//   };

//   return (
//     <div className="bg-[#FFFFFF] font-sans min-h-screen mt-25">
//       {/* SEO Meta Information */}
//       <div className="hidden">
//         <h1>Professional CA Services Bangalore - Vittam Integrity Services</h1>
//         <meta name="description" content="Comprehensive chartered accountant services in Bangalore. Expert accounting, audit, taxation, GST, startup advisory, outsourcing, global capability center consultation, and certification services. ICAI certified professionals with 30+ years combined experience." />
//         <meta name="keywords" content="CA services Bangalore, chartered accountant services, tax planning Bangalore, GST services, audit services, business registration, startup advisory, income tax filing, accounting services Bangalore, outsourcing services, certification services" />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Professional CA Services Bangalore - Vittam Integrity Services" />
//         <meta property="og:description" content="Expert chartered accountant services including taxation, audit, GST, and business advisory. Trusted by clients across diverse sectors." />
//         <meta property="og:type" content="website" />
//         <link rel="canonical" href="https://vittamintegrityservices.com/services" />
//       </div>

//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] bg-[#FFFFFF] overflow-hidden" id="hero">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
//           <div className="absolute top-32 right-16 w-24 h-24 border border-[#87CEEB] rounded-full animate-pulse"></div>
//           <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#87CEEB] rounded-full animate-bounce"></div>
//           <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#87CEEB] animate-spin" style={{ animationDuration: '15s' }}></div>
//           <div className="absolute bottom-32 right-10 w-28 h-28 border border-black opacity-20 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
//           <div className="text-center space-y-8">
//             <nav className="text-sm font-medium" aria-label="Breadcrumb">
//               <ol className="flex justify-center space-x-2 text-neutral-700">
//                 <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
//                 <li className="before:content-['/'] before:mx-2">Services</li>
//               </ol>
//             </nav>

//             <div className={`space-y-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
//                 Vittam Integrity Services
//                 <span className="block relative">
//                   PROFESSIONAL SOLUTIONS
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4FC3F7] animate-pulse"></div>
//                 </span>
//               </h1>
              
//               <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
//                 Comprehensive solutions including Accounting, Finance and Compliance; Direct and Indirect Taxation; Outsourcing Services; Business Advisory Services.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
//               {[
//                 { value: "8+", label: "Service Categories" },
//                 { value: "40+", label: "Expert Services" },
//                 { value: "30+", label: "Years Experience" },
//                 { value: "Global", label: "Client Support" }
//               ].map((stat, index) => (
//                 <div key={index} className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100} ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
//                   <div className="text-3xl sm:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Updated Services Navigation Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white" id="services-nav">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header Section */}
//           <div className={`
//             text-center space-y-8 mb-20 transition-all duration-1000
//             ${isVisible['services-nav'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
//           `}>
//             <div className="relative inline-block">
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
//                 <span className="text-gray-900">OUR SERVICE</span>
//                 <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-slate-700 bg-clip-text text-transparent mt-2">
//                   CATEGORIES
//                 </span>
//               </h2>
              
//               {/* Decorative Elements */}
//               <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }} />
//               <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }} />
//               <div className="absolute -bottom-2 left-1/3 w-6 h-6 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }} />
//             </div>
            
//             <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
//               Choose from our comprehensive range of professional services designed to 
//               <span className="text-blue-600 font-semibold"> elevate your business</span>
//             </p>

//             {/* Service Stats */}
//             <div className="flex justify-center space-x-12 pt-8">
//               {[
//                 { value: "8+", label: "Categories" },
//                 { value: "40+", label: "Services" },
//                 { value: "Expert", label: "Solutions" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center group">
//                   <div className="text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10">
//             {Object.entries(services).map(([key, service], index) => (
//               <ServiceCard
//                 key={key}
//                 service={service}
//                 serviceKey={key}
//                 isActive={activeCategory === key}
//                 onClick={setActiveCategory}
//                 index={index}
//                 isVisible={isVisible['services-nav']}
//               />
//             ))}
//           </div>

//           {/* Active Service Summary */}
//           {activeCategory && (
//             <div className={`
//               mt-20 p-10 rounded-3xl bg-gradient-to-br from-slate-800 via-blue-900 to-slate-700
//               text-white transition-all duration-700 transform
//               ${isVisible['services-nav'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
//               shadow-2xl shadow-blue-900/30
//             `}>
//               <div className="text-center max-w-3xl mx-auto space-y-6">
//                 <div className="flex items-center justify-center space-x-4">
//                   {React.createElement(services[activeCategory].icon, {
//                     className: "w-12 h-12 text-blue-300"
//                   })}
//                   <h3 className="text-3xl font-black">
//                     Ready to get started with {services[activeCategory].title}?
//                   </h3>
//                 </div>
                
//                 <p className="text-blue-100 text-lg leading-relaxed">
//                   Let's discuss your project requirements and create something amazing together. 
//                   Our expert team is ready to provide personalized solutions for your business needs.
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
//                   <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                     Get Free Consultation
//                   </button>
//                   <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Detailed Services */}
//       <section className="py-20 bg-[#FFFFFF]" id="detailed-services">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-12">
//             {Object.entries(services).map(([key, service]) => {
//               if (key !== activeCategory) return null;

//               const IconComponent = service.icon;

//               return (
//                 <div
//                   key={key}
//                   className={`transition-all duration-500 ${
//                     isVisible['detailed-services']
//                       ? 'opacity-100 translate-y-0'
//                       : 'opacity-0 translate-y-10'
//                   }`}
//                 >
//                   <div className="text-center space-y-6 mb-12">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#003c80] to-[#708090] mx-auto rounded-full flex items-center justify-center animate-pulse">
//                       <IconComponent className="w-10 h-10 text-[#FFFFFF]" />
//                     </div>
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//                       {service.title.toUpperCase()}
//                     </h2>
//                     <div className="text-xl text-neutral-700 max-w-3xl mx-auto">
//                       {service.description.map((desc, idx) => (
//                         <p key={idx} className="mb-2">{desc}</p>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     {service.subcategories ? (
//                       Object.entries(service.subcategories).reduce((acc, [subcat, subServices], subcatIndex) => {
//                         if (subcat === "Our Services Include (Accounts Writing & Book Keeping Services)") {
//                           return acc;
//                         }
//                         if (subcat === "Accounts Writing & Book Keeping Services") {
//                           const combinedServices = [
//                             ...subServices,
//                             ...(services[key].subcategories["Our Services Include (Accounts Writing & Book Keeping Services)"] || [])
//                           ];
//                           acc.push(
//                             <div
//                               key={subcat}
//                               className="bg-[#2b4d77] rounded-3xl p-6 sm:p-8 overflow-hidden"
//                             >
//                               <div
//                                 className="flex items-center justify-between cursor-pointer mb-6"
//                                 onClick={() => toggleService(`${key}-${subcatIndex}`)}
//                               >
//                                 <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
//                                   <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
//                                   <span className="font-medium text-[#ffffff]">{subcat}</span>
//                                 </h3>
//                                 {expandedServices[`${key}-${subcatIndex}`] ? (
//                                   <Minus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 ) : (
//                                   <Plus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 )}
//                               </div>

//                               <div
//                                 className={`grid gap-4 transition-all duration-500 ${
//                                   expandedServices[`${key}-${subcatIndex}`]
//                                     ? 'max-h-[1000px] opacity-100'
//                                     : 'max-h-0 opacity-0 overflow-hidden'
//                                 }`}
//                               >
//                                 {combinedServices.map((subService, serviceIndex) => (
//                                   <div
//                                     key={serviceIndex}
//                                     className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102"
//                                   >
//                                     {subService.length > 100 ? (
//                                       <p className="text-black leading-relaxed font-medium">{subService}</p>
//                                     ) : (
//                                       <div className="flex items-center space-x-3">
//                                         <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
//                                         <span className="font-medium text-black">{subService}</span>
//                                       </div>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           );
//                         } else {
//                           acc.push(
//                             <div
//                               key={subcat}
//                               className="bg-[#2b4d77] rounded-3xl p-6 sm:p-8 overflow-hidden"
//                             >
//                               <div
//                                 className="flex items-center justify-between cursor-pointer mb-6"
//                                 onClick={() => toggleService(`${key}-${subcatIndex}`)}
//                               >
//                                 <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
//                                   <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
//                                   <span className="font-medium text-[#ffffff]">{subcat}</span>
//                                 </h3>
//                                 {expandedServices[`${key}-${subcatIndex}`] ? (
//                                   <Minus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 ) : (
//                                   <Plus className="w-6 h-6 text-[#ffffff] transition-transform" />
//                                 )}
//                               </div>

//                               <div
//                                 className={`grid gap-4 transition-all duration-500 ${
//                                   expandedServices[`${key}-${subcatIndex}`]
//                                     ? 'max-h-[1000px] opacity-100'
//                                     : 'max-h-0 opacity-0 overflow-hidden'
//                                 }`}
//                               >
//                                 {subServices.map((subService, serviceIndex) => (
//                                   <div
//                                     key={serviceIndex}
//                                     className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102"
//                                   >
//                                     {subService.length > 100 ? (
//                                       <p className="text-black leading-relaxed font-medium">{subService}</p>
//                                     ) : (
//                                       <div className="flex items-center space-x-3">
//                                         <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
//                                         <span className="font-medium text-black">{subService}</span>
//                                       </div>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           );
//                         }
//                         return acc;
//                       }, [])
//                     ) : (
//                       <div className="grid sm:grid-cols-2 gap-6">
//                         {service.services.map((serviceName, serviceIndex) => (
//                           <div
//                             key={serviceIndex}
//                             className="bg-[#4896e0] p-6 rounded-2xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
//                           >
//                             <div className="flex items-start space-x-4">
//                               <div className="w-10 h-10 bg-[#004680] rounded-full flex items-center justify-center flex-shrink-0">
//                                 <CheckCircle className="w-5 h-5 text-[#FFFFFF]" />
//                               </div>
//                               <div className="space-y-2">
//                                 <h4 className="font-black text-black text-lg">
//                                   {serviceName}
//                                 </h4>
//                                 <p className="text-neutral-700 text-sm">
//                                   Professional service delivered with expertise and
//                                   reliability
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 text-black" id="why-choose">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
//               WHY CHOOSE VITTAM INTEGRITY SERVICES?
//             </h2>
//             <p className="text-xl text-black max-w-3xl mx-auto">
//               Experience the difference with Bangalore's trusted CA firm
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Award,
//                 title: "Expert Professionals",
//                 description: "ICAI certified chartered accountants with 30+ years of combined experience across diverse sectors like Real Estate, NGOs/Trusts, Hospitality, NRI Taxation, Infrastructure, Technology Services, and Multinational Corporations."
//               },
//               {
//                 icon: Shield,
//                 title: "Unwavering Integrity",
//                 description: "Guided by principles of honesty, accountability, and ethical practice, ensuring transparent and reliable services."
//               },
//               {
//                 icon: Clock,
//                 title: "Global Reach",
//                 description: "Support for clients worldwide with compliance under Indian GAAP, US GAAP, IFRS, and international standards."
//               },
//               {
//                 icon: Users,
//                 title: "Personalized Approach",
//                 description: "Tailored solutions with deep technical expertise in financial management, taxation, audits, and business advisory."
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Value-Driven",
//                 description: "Delivering value with unwavering integrity, empowering businesses through personalized services and continuous improvement."
//               },
//               {
//                 icon: Star,
//                 title: "Proven Expertise",
//                 description: "Led by CA Sunita Kulthe and Shraddha Kamath, specializing in complex tax litigation, audits, and GCC consultation."
//               }
//             ].map((item, index) => (
//               <div key={index} className={`bg-[#2B4D77] backdrop-blur-lg p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group ${isVisible['why-choose'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="space-y-6">
//                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
//                     <item.icon className="w-8 h-8 text-black" />
//                   </div>
//                   <h3 className="text-xl font-black">{item.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Process */}
//       <section className="py-20 bg-[#FFFFFF]" id="service-process">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
//               OUR SERVICE PROCESS
//             </h2>
//             <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
//               Simple, transparent, and efficient process for all our services
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Initial Consultation",
//                 description: "Free consultation to understand your specific requirements and business needs.",
//                 icon: Phone
//               },
//               {
//                 step: "02", 
//                 title: "Proposal & Agreement",
//                 description: "Detailed proposal with transparent pricing and service timeline agreement.",
//                 icon: FileText
//               },
//               {
//                 step: "03",
//                 title: "Service Execution",
//                 description: "Professional service delivery by our expert team with regular updates.",
//                 icon: Settings
//               },
//               {
//                 step: "04",
//                 title: "Delivery & Support",
//                 description: "Timely delivery with ongoing support and maintenance as required.",
//                 icon: CheckCircle
//               }
//             ].map((item, index) => (
//               <div key={index} className={`text-center group transition-all duration-500 ${isVisible['service-process'] ? `opacity-100 translate-y-0 delay-${index * 150}` : 'opacity-0 translate-y-5'}`}>
//                 <div className="relative mb-8">
//                   <div className="w-20 h-20 bg-[#004280] mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <item.icon className="w-10 h-10 text-[#FFFFFF]" />
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFFFFF] border-4 border-black rounded-full flex items-center justify-center">
//                     <span className="text-xs font-black text-black">{item.step}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-black text-black mb-4">{item.title}</h3>
//                 <p className="text-neutral-700 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#FFFFFF]" id="cta">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
//               READY TO GET STARTED WITH
//               <span className="block">VITTAM INTEGRITY SERVICES?</span>
//             </h2>
            
//             <p className="text-xl text-neutral-700 leading-relaxed">
//               Get expert chartered accountant services with guaranteed compliance and peace of mind. 
//               Empower your business with our value-driven solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//               <button className="bg-[#003a80] text-[#FFFFFF] px-10 py-5 font-black text-lg hover:bg-[#3e6dbe] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//                 <span>GET FREE CONSULTATION</span>
//                 <ArrowRight className="w-6 h-6" />
//               </button>
//               <button className="border-2 border-black text-black px-10 py-5 font-black text-lg hover:bg-[#003a80] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center space-x-2">
//                 <Phone className="w-5 h-5" />
//                 <span>CALL +91 9623365775</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-[#052f83]">
//               {[
//                 { value: "FREE", label: "Initial Consultation" },
//                 { value: "24HR", label: "Response Time" },
//                 { value: "100%", label: "Satisfaction Guarantee" }
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-black text-black mb-2">{item.value}</div>
//                   <div className="text-sm text-neutral-700 font-bold uppercase">{item.label}</div>
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
//           "@type": "ProfessionalService",
//           "name": "Vittam Integrity Services - Professional CA Services",
//           "description": "Comprehensive chartered accountant services including accounting, audit, taxation, GST, business registration, and startup advisory services in Bangalore.",
//           "url": "https://vittamintegrityservices.com/services",
//           "telephone": "+91-9623365775",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "16046, Tower 16, Prestige Song of the South, Begur Road, Yelanahalli",
//             "addressLocality": "Bangalore",
//             "addressRegion": "Karnataka", 
//             "postalCode": "560068",
//             "addressCountry": "IN"
//           },
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "12.9716",
//             "longitude": "77.5946"
//           },
//           "openingHours": "Mo-Sa",
//           "priceRange": "$",
//           "serviceType": ["Accounting Services", "Auditing Services", "Taxation Services", "GST Services", "Business Registration", "Startup Advisory", "Outsourcing Services", "Global Capability Centers", "Certification Services"],
//           "areaServed": {
//             "@type": "City",
//             "name": "Bangalore"
//           },
//           "founder": [
//             {
//               "@type": "Person",
//               "name": "CA Sunita Kulthe"
//             },
//             {
//               "@type": "Person",
//               "name": "Shraddha Kamath"
//             }
//           ],
//           "aggregateRating": {
//             "@type": "AggregateRating",
//             "ratingValue": "4.9",
//             "reviewCount": "100"
//           }
//         })
//       }} />
//     </div>
//   );
// };

// export default ServicesPage;










import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Search, Calculator, Building2, Globe, Rocket, FileCheck, 
  ChevronDown, ChevronRight, ArrowRight, Star, Shield, CheckCircle, 
  Phone, Mail, Clock, Award, Users, TrendingUp, Target, Eye, Heart,
  DollarSign, FileText, BarChart, Settings, Briefcase, Home, Plus, Minus
} from 'lucide-react';

// Service Card Component
const ServiceCard = ({ 
  service, 
  serviceKey, 
  isActive, 
  onClick, 
  index, 
  isVisible 
}) => {
  const IconComponent = service.icon;
  
  return (
    <div
      onClick={() => onClick(serviceKey)}
      className={`
        group relative overflow-hidden rounded-3xl p-8 cursor-pointer
        transition-all duration-700 transform hover:scale-[1.02]
        ${isActive 
          ? 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-700 text-white shadow-2xl shadow-blue-900/30 border-2 border-blue-400' 
          : 'bg-gradient-to-br from-blue-50 via-white to-slate-50 text-gray-800 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50'
        }
        ${isVisible 
          ? `opacity-100 translate-y-0 transition-delay-[${index * 150}ms]` 
          : 'opacity-0 translate-y-12'
        }
      `}
    >
      {/* Background Pattern */}
      <div className={`
        absolute inset-0 opacity-10 transition-opacity duration-500
        ${isActive ? 'opacity-20' : 'opacity-5 group-hover:opacity-10'}
      `}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 transform translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 opacity-30 transform -translate-x-12 translate-y-12" />
        </div>
      </div>

      {/* Floating Elements */}
      {isActive && (
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}
      
      {/* Card Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon Container */}
        <div className={`
          relative w-20 h-20 rounded-2xl flex items-center justify-center
          transition-all duration-500 transform
          ${isActive 
            ? 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm scale-110 rotate-3' 
            : 'bg-gradient-to-br from-slate-700 to-blue-800 group-hover:scale-105 group-hover:-rotate-3'
          }
        `}>
          <IconComponent className={`
            w-10 h-10 transition-all duration-500
            ${isActive ? 'text-white' : 'text-white group-hover:scale-110'}
          `} />
          
          {/* Icon Glow Effect */}
          {isActive && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-md animate-pulse" />
          )}
        </div>
        
        {/* Title */}
        <div className="space-y-2">
          <h3 className={`
            text-2xl font-black leading-tight transition-all duration-300
            ${isActive ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'}
          `}>
            {service.title}
          </h3>
          
          {/* Title Underline */}
          <div className={`
            h-1 rounded-full transition-all duration-500
            ${isActive 
              ? 'w-full bg-gradient-to-r from-blue-400 to-purple-400' 
              : 'w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-slate-600'
            }
          `} />
        </div>
        
        {/* Description */}
        <div className={`
          space-y-3 transition-all duration-300
          ${isActive ? 'text-blue-100' : 'text-gray-600 group-hover:text-gray-700'}
        `}>
          {service.description.slice(0, 3).map((desc, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className={`
                w-2 h-2 rounded-full flex-shrink-0 mt-2 transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-blue-300 to-purple-300' 
                  : 'bg-gradient-to-r from-blue-400 to-slate-500 group-hover:scale-125'
                }
              `} />
              <span className="text-sm leading-relaxed font-medium">
                {desc}
              </span>
            </div>
          ))}
          
          {service.description.length > 3 && (
            <div className={`
              text-xs font-semibold pt-2 flex items-center space-x-1
              ${isActive ? 'text-blue-200' : 'text-blue-600'}
            `}>
              <span>+{service.description.length - 3} more services</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          )}
        </div>
        
        {/* Active Selection Indicator */}
        {isActive && (
          <div className="absolute -bottom-2 -right-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
        
        {/* Hover Arrow */}
        {!isActive && (
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </div>
        )}
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('accounting');
  const [expandedServices, setExpandedServices] = useState({});
  const [expandedSubCategories, setExpandedSubCategories] = useState({});
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleService = (serviceId) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const toggleSubCategory = (subCategoryId) => {
    setExpandedSubCategories(prev => ({
      ...prev,
      [subCategoryId]: !prev[subCategoryId]
    }));
  };

  const services = {
    accounting: {
      icon: BookOpen,
      title: "Accounting Services",
      description: [
        "Accounts Writing & Book Keeping Services",
        "Accounting as per Indian Accounting Standards (Ind AS)",
        "Accounting as per IFRS (International Financial Reporting Standards) (IFRS)",
        "Technical guidance on accounting issues"
      ],
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
     "subcategories": {
    "Accounts Writing & Book Keeping Services": {
      "subSubCategories": {
        "Accounts Writing & Book Keeping Services": [
          "Accurate and timely accounting is the backbone of every successful business. Our Accounts Writing & Bookkeeping Services are designed to provide comprehensive, reliable, and compliant financial records, enabling informed decision-making and smooth regulatory compliance.",
          "We offer tailored bookkeeping solutions to businesses of all sizes, ensuring that your day-to-day financial transactions are recorded systematically and in accordance with applicable accounting standards. From maintaining ledgers and journals to reconciling bank statements and preparing trial balances, our services help you stay organized and audit-ready at all times."
        ],
        "Our Bookkeeping Services Include:": [
          "Preparation and maintenance of books of accounts",
          "Ledger posting and journal entries",
          "Accounts reconciliation (bank, vendor, customer)",
          "Monthly/quarterly financial reporting",
          "GST-compliant bookkeeping",
          "Support for audit and compliance reviews",
          "Whether you're a startup, SME, or a growing enterprise, we ensure that your financial records reflect accuracy, transparency, and efficiency. Let us handle your books, so you can focus on growing your business."
        ]
      }
    },
    "Accounting as per Indian Accounting Standards (Ind AS)": {
      "subSubCategories": {
        "Accounting as per Indian Accounting Standards (Ind AS)": [
          "With the increasing emphasis on transparency, comparability, and global alignment in financial reporting, compliance with Indian Accounting Standards (Ind AS) has become essential for many companies in India.",
          "At our firm, we specialize in providing end-to-end support for accounting and financial reporting in accordance with Ind AS. Our expert team ensures accurate application of standards, seamless transition from previous GAAP, and ongoing compliance with the latest updates issued by regulatory bodies."
        ],
        "Our Ind AS Services Include:": [
          "Transition support from Indian GAAP to Ind AS",
          "Preparation and presentation of financial statements as per Ind AS",
          "Impact assessment and implementation planning",
          "Advisory on complex Ind AS areas (e.g., financial instruments, leases, revenue recognition)",
          "Consolidation and group reporting under Ind AS",
          "Training and capacity building for in-house teams",
          "We combine technical proficiency with practical experience to help businesses not only comply with Ind AS requirements but also improve the quality and reliability of their financial reporting. Whether you're adopting Ind AS for the first time or seeking ongoing support, our solutions are tailored to your specific business needs."
        ]
      }
    },
    "Accounting as per International Financial Reporting Standards (IFRS)": {
      "subSubCategories": {
        "Accounting as per International Financial Reporting Standards (IFRS)": [
          "In today’s global business environment, International Financial Reporting Standards (IFRS) have become the benchmark for transparent and comparable financial reporting across jurisdictions. Adopting and implementing IFRS ensures that your financial statements are globally recognized and meet investor and stakeholder expectations.",
          "We offer expert IFRS accounting and advisory services to companies looking to adopt, comply with, or transition to IFRS. Our team is well-versed in international standards and provides practical solutions tailored to your industry and organizational needs."
        ],
        "Our IFRS Services Include:": [
          "IFRS financial statement preparation and review",
          "First-time adoption and transition support from local GAAP to IFRS",
          "Advisory on complex IFRS matters (e.g., revenue recognition, lease accounting, financial instruments, consolidation)",
          "Group reporting and alignment with parent company requirements",
          "IFRS impact analysis and implementation planning",
          "Ongoing compliance and disclosure advisory",
          "Whether you are a multinational subsidiary, expanding globally, or preparing for cross-border listing or investments, our IFRS expertise ensures smooth reporting and compliance."
        ]
      }
    },
    "Technical Guidance on Accounting Issues": {
      "subSubCategories": {
        "Technical Guidance on Accounting Issues": [
          "Navigating complex accounting standards and regulatory requirements can be challenging for businesses, especially in a dynamic financial reporting landscape. Our firm offers expert Technical Guidance on Accounting Issues to help organizations address intricate accounting matters with clarity, accuracy, and compliance.",
          "We assist clients in interpreting and applying accounting standards such as Ind AS, IFRS, and Indian GAAP, ensuring that financial reporting reflects the true economic substance of transactions and aligns with regulatory expectations."
        ],
        "Our Technical Accounting Services Include:": [
          "Interpretation and application of complex accounting standards",
          "Advisory on revenue recognition, lease accounting, financial instruments, business combinations, etc.",
          "Guidance on preparation of financial statements under multiple frameworks (Ind AS/IFRS/IGAAP)",
          "Accounting treatment for non-routine or one-time transactions (e.g., mergers, acquisitions, demergers)",
          "Support in responding to audit queries and regulator reviews",
          "Preparation of accounting memos and position papers for key judgments",
          "Our team combines deep technical knowledge with practical experience across industries to deliver sound, tailored solutions. Whether it’s a one-off consultation or ongoing support, we help you make informed accounting decisions that stand up to scrutiny."
        ]
      }
    }
  }
    },
    audit: {
      icon: Search,
      title: "Auditing Services",
      description: [
        "Statutory Audit",
        "Internal Audit",
        "Inventory Audit",
        "Sales Audit",
        "Trust/NGO Audit"
      ],
     color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
       subcategories: {
        "Tax Consulting Services": {
          // description: "Comprehensive income tax solutions for individuals, businesses, and NRIs with expert consultation and compliance support.",
          subSubCategories: {
           
        "Statutory Audit": [
          "A Statutory Audit is a legal requirement for many organizations, ensuring the credibility and reliability of their financial statements. It is a critical tool for maintaining stakeholder confidence, ensuring regulatory compliance, and upholding corporate governance standards.",
          "Our firm provides independent and objective statutory audit services in accordance with applicable laws, regulations, and auditing standards (including the Companies Act, 2013 and Standards on Auditing issued by ICAI). We adopt a risk-based, systematic audit approach tailored to the size and nature of your business."
        ],
        "Our Statutory Audit Services Cover:": [
          "Audit of financial statements as per Ind AS / Indian GAAP",
          "Compliance with Companies Act, 2013 and other applicable laws",
          "Evaluation of internal controls and risk management systems",
          "Verification of accounting records and financial disclosures",
          "Issuance of audit reports in accordance with statutory requirements",
          "Coordination with management to address audit findings and recommendations",
          "With a focus on transparency, integrity, and professional excellence, we deliver insights that go beyond compliance — helping clients strengthen internal processes and enhance financial reporting."
        ]
      }
    },
    "Internal Audit": {
      "subSubCategories": {
        "Internal Audit": [
          "An effective Internal Audit function is essential for enhancing operational efficiency, strengthening internal controls, and ensuring risk management across all levels of an organization. Unlike statutory audits, internal audits are more strategic, offering insights that help drive performance, governance, and compliance.",
          "We offer independent and value-driven internal audit services designed to help organizations evaluate and improve the effectiveness of their risk management, control, and governance processes."
        ],
        "Our Internal Audit Services Include:": [
          "Evaluation of internal controls and business processes",
          "Risk assessment and mitigation strategies",
          "Compliance checks with internal policies and regulatory requirements",
          "Operational audits to identify inefficiencies and cost-saving opportunities",
          "Special audits (fraud detection, forensic reviews, management audits)",
          "Preparation of detailed audit reports with practical recommendations",
          "Our internal audit approach goes beyond routine checks — we provide actionable insights that support better decision-making and promote a culture of continuous improvement. Whether you're a growing business or a large enterprise, we help you build a more resilient and accountable organization."
        ]
      }
    },
    "Inventory Audit": {
      "subSubCategories": {
        "Inventory Audit": [
          "Inventory is often one of the most significant assets on a company's balance sheet, and its accurate valuation is crucial for reliable financial reporting. A well-executed Inventory Audit not only ensures compliance but also helps in identifying inefficiencies, pilferage, and opportunities for optimization.",
          "Our firm offers comprehensive inventory audit services to help businesses verify stock records, assess internal controls, and ensure accurate reporting of inventory in accordance with applicable accounting standards."
        ],
        "Our Inventory Audit Services Include:": [
          "Physical verification of inventory at warehouses, factories, and retail locations",
          "Reconciliation of physical stock with accounting records",
          "Valuation of inventory as per applicable standards (Ind AS/AS/IFRS)",
          "Review of inventory management systems and internal controls",
          "Identification of obsolete, slow-moving, or damaged inventory",
          "Reporting on inventory variances and process improvement recommendations",
          "Our team brings a meticulous and systematic approach to inventory audits, tailored to your industry and operational scale. Whether required for statutory compliance, internal control assurance, or management decision-making, our inventory audits deliver accuracy, transparency, and actionable insights."
        ]
      }
    },
    "Sales Audit": {
      "subSubCategories": {
        "Sales Audit": [
          "Sales are the primary revenue source for most businesses, and their accurate recording is critical for reliable financial reporting, tax compliance, and performance analysis. A Sales Audit ensures that all sales transactions are properly documented, reported, and aligned with applicable laws and accounting standards.",
          "We provide comprehensive sales audit services to help businesses validate revenue recognition, detect discrepancies, and strengthen controls over the sales process."
        ],
        "Our Sales Audit Services Include:": [
          "Verification of sales transactions against supporting documents (invoices, delivery notes, contracts)",
          "Assessment of revenue recognition policies as per applicable standards (Ind AS/IFRS)",
          "Reconciliation of sales records with accounting books and tax returns (e.g., GST filings)",
          "Identification of unrecorded, duplicate, or fraudulent sales entries",
          "Evaluation of sales processes, discounts, returns, and credit policies",
          "Recommendations for improving internal controls and system efficiency",
          "Our sales audit approach not only ensures compliance and accuracy but also helps management gain deeper insights into revenue performance and risks. Whether you're a growing SME or an established enterprise, we help bring clarity and confidence to your sales data."
        ]
      }
    },
    "Trust/NGO Audit": {
      "subSubCategories": {
        "Trust/NGO Audit": [
          "Non-profit organizations, including trusts and NGOs, are entrusted with public and donor funds, making transparency, accountability, and compliance crucial to their operations. A well-conducted Trust/NGO Audit ensures proper utilization of funds, adherence to statutory requirements, and enhanced stakeholder confidence.",
          "We offer specialized audit services for trusts and NGOs, in line with the requirements of the Income Tax Act, 1961, relevant state trust acts, and regulations governing charitable institutions."
        ],
        "Our Trust/NGO Audit Services Include:": [
          "Statutory audit as per the Income Tax Act and relevant trust laws",
          "Verification of donations, grants, and fund utilization",
          "Compliance with registration conditions under Sections 12A, 80G, and FCRA (if applicable)",
          "Review of internal controls and governance practices",
          "Preparation and audit of financial statements",
          "Assistance in filing audit reports (e.g., Form 10B) and compliance documentation",
          "We understand the unique challenges and responsibilities faced by charitable organizations. Our approach is tailored to promote transparency, ensure compliance, and support your mission with sound financial reporting."
        ]
            
          }
        },
      }
    },
    taxation: {
      icon: Calculator,
      title: "Taxation Services",
      description: [
        "Comprehensive Income Tax Services",
        "Complete GST Solutions",
        "Expert Tax Planning & Consulting",
        "Tax Litigation Support"
      ],
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      subcategories: {
        "Tax Consulting Services": {
          // description: "Comprehensive income tax solutions for individuals, businesses, and NRIs with expert consultation and compliance support.",
          subSubCategories: {
            "Tax Consulting Services": [
              "In today’s evolving tax environment, proactive and strategic Income Tax Consulting is essential for individuals and businesses alike. With frequent regulatory changes and increased scrutiny by tax authorities, expert guidance ensures compliance, optimizes tax liability, and minimizes risk.",
              "Our firm offers comprehensive income tax advisory and compliance services, tailored to meet the unique needs of corporates, firms, and individuals across various sectors.",

          
            ],
            "Our Income Tax Services Include:": [
              "Tax planning and advisory for individuals, HUFs, firms, and companies",
              "Preparation and filing of income tax returns (ITRs)",
              "Advance tax computation and tax optimization strategies",
              "Representation before tax authorities (assessments, appeals, scrutiny)",
              "Tax deduction and withholding compliance (TDS/TCS)",
              "Advisory on capital gains, dividend income, ESOPs, and other complex transactions",
              "Advance tax calculation and payment assistance",
              "Guidance on tax provisions under Income Tax Act, 1961 and related rule",
              "Whether you're an individual looking for efficient tax planning or a business navigating complex tax laws, our experienced team ensures timely compliance and strategic tax solutions that align with your financial goals."
            ],
            
          }
        },
        "Tax Planning Services": {
          // description: "Comprehensive income tax solutions for individuals, businesses, and NRIs with expert consultation and compliance support.",
          subSubCategories: {
            "Tax Planning Services": [
              "Effective Tax Planning is not just about reducing tax liability—it's about aligning your financial decisions with current laws to maximize savings, ensure compliance, and achieve long-term financial goals. Whether you're an individual or a business, proactive tax planning can result in significant benefits.",
              "There is a difference between tax planning & tax evasion. Our firm offers strategic tax planning services designed to help clients take full advantage of lawful tax-saving opportunities, avoid penalties, and plan efficiently for future growth.",
              "Personalized tax planning for individuals, HUFs, and business entities",
          
            ],
            "Our Tax Planning Services Include::": [
              "Personalized tax planning for individuals, HUFs, and business entities",
              "Optimization of tax liability under Income Tax Act, 1961",
              "Capital gains tax planning and investment advisory",
              "Tax-efficient structuring of salary, bonuses, and retirement benefits",
              "Business restructuring and succession planning from a tax perspective",
              " Year-end tax review and advance tax planning",
              "Advisory on deductions, exemptions, and rebates under applicable sections (e.g., 80C, 80D, 10(10D))",
              "We take a holistic approach to tax planning, ensuring that every decision is both legally compliant and financially advantageous. Let us help you plan wisely today for a more secure tomorrow.",
            ],
            
          }
        },
        "Tax Audit": {
          // description: "End-to-end GST solutions including registration, compliance, return filing, and dispute resolution for businesses of all sizes.",
          subSubCategories: {
            "Tax Audit": [
                "A Tax Audit is a mandatory compliance requirement for businesses and professionals whose turnover or gross receipts exceed specified thresholds under the Income Tax Act. Our firm offers expert Tax Audit Services to ensure accuracy, legal compliance, and timely filing of tax audit reports."
            ],
            "Our Tax Audit Services Include:": [
              "Detailed review of books of accounts and related financial records",
    "Verification of compliance with provisions of the Income Tax Act and other relevant laws",
    "Preparation and certification of Tax Audit Report in Form 3CA/3CB and Form 3CD",
    "Assessment of depreciation, disallowances, and admissible deductions",
    "Verification of TDS compliance and statutory dues",
    "Reporting on related party transactions, loans, advances, and other disclosures",
    "Advisory on tax planning and risk mitigation based on audit observations",
    "Filing of tax audit report within prescribed timelines to avoid penalties",
    "We ensure that your tax audit is conducted efficiently, with minimum disruption to your operations, and in full compliance with legal and procedural requirements."
            ],
           
          }
        },
        "Income Tax Return Filing": {
          // description: "End-to-end GST solutions including registration, compliance, return filing, and dispute resolution for businesses of all sizes.",
          subSubCategories: {
            "Income Tax Return Filing": [
                "Filing your Income Tax Return (ITR) accurately and on time is essential for compliance, claiming refunds, and maintaining a clean financial record. With evolving tax laws and digital filing requirements, expert assistance ensures error-free returns and peace of mind.",
    "We provide comprehensive ITR filing services for individuals, professionals, HUFs, firms, and companies, tailored to your income sources and financial profile."
            ],
            "Our ITR Filing Services Include:": [
           "Preparation and filing of ITR for all categories of taxpayers (ITR-1 to ITR-7)",
    "Computation of total income, tax liability, and eligible deductions",
    "Filing of capital gains, foreign income, house property, and business/professional income",
    "Assistance with Form 16, Form 26AS, AIS/TIS reconciliation",
    "Claiming refunds and carry-forward of losses",
    "Filing of revised, belated, or defective returns",
    "Representation for notices, scrutiny, and rectifications",
    "Whether you are a salaried individual, a freelancer, an NRI, or a business owner, we ensure your return is filed correctly, on time, and in full compliance with the Income Tax Act, 1961."
            ],
           
          }
        },
        "NRI Taxation": {
          // description: "End-to-end GST solutions including registration, compliance, return filing, and dispute resolution for businesses of all sizes.",
          subSubCategories: {
            "NRI Taxation": [
                 "Non-Resident Indians (NRIs) face unique and often complex tax challenges due to their cross-border income, investments, and compliance obligations in both India and their country of residence. Expert guidance is essential to ensure accurate tax planning, reporting, and adherence to applicable laws.",
    "We offer specialized NRI Taxation Services to help NRIs manage their Indian tax matters efficiently, ensuring full compliance with the Income Tax Act, 1961 and relevant international tax treaties."
            ],
            "Our NRI Taxation Services Include:": [
             "Determination of residential status under Indian tax laws",
    "Tax filing for income earned or received in India (rent, capital gains, interest, etc.)",
    "Advisory on Double Taxation Avoidance Agreements (DTAA)",
    "Repatriation of funds and compliance with FEMA/RBI guidelines",
    "Capital gains tax planning on sale of property, shares, or mutual funds",
    "TDS applicability and lower/NIL TDS certificate assistance",
    "Representation before tax authorities and support in assessments or refunds",
    "Whether you're an NRI with property in India, investment income, or planning to return to India, our team ensures that your tax affairs are managed with accuracy, transparency, and strategic insight."
            ],
           
          }
        },
        "Income Tax Litigation Services": {
          // description: "End-to-end GST solutions including registration, compliance, return filing, and dispute resolution for businesses of all sizes.",
          subSubCategories: {
            "Income Tax Litigation Services": [
                 "Disputes with tax authorities can be complex, time-consuming, and financially significant. Whether it’s a scrutiny assessment, tax demand, or appellate proceeding, expert representation is crucial to protect your interests and ensure a fair resolution.",
    "Our firm offers specialized Income Tax Litigation Services, representing clients at various stages of tax proceedings and helping them navigate the complexities of India’s tax dispute resolution framework."
            ],
            "Our Income Tax Litigation Services Include:": [
             "Representation before Assessing Officers during scrutiny, reassessment, or surveys",
    "Drafting and filing of appeals before CIT (Appeals) and ITAT",
    "Preparation of written submissions, replies to notices, and supporting documentation",
    "Assistance in rectification, stay of demand, and penalty proceedings",
    "Advisory on strategy and legal position for complex tax matters",
    "Coordination with legal counsels for High Court/Supreme Court litigation, if needed",
    "Support in settlement commission and compounding applications",
    "With a deep understanding of tax laws, judicial precedents, and departmental procedures, we provide practical, robust, and timely support to help you resolve disputes efficiently and minimize litigation risks."
            ],
           
          }
        },
        "TDS Return Filing": {
          // description: "End-to-end GST solutions including registration, compliance, return filing, and dispute resolution for businesses of all sizes.",
          subSubCategories: {
            "TDS Return Filing": [
                 "Tax Deducted at Source (TDS) is a critical compliance requirement for businesses, professionals, and individuals responsible for deducting tax on specified payments. Timely and accurate TDS return filing ensures compliance with the Income Tax Act, 1961 and helps avoid penalties, interest, and notices from the tax department.",
    "We offer end-to-end TDS return filing services to ensure accurate deduction, timely deposit, and proper reporting of TDS transactions across all applicable sections."
            ],
            "Our TDS Services Include:": [
             "Calculation and verification of TDS liability",
    "Preparation and filing of quarterly TDS returns (Form 24Q, 26Q, 27Q, 27EQ)",
    "Generation and validation of FVU files and Form 27A",
    "Online payment of TDS challans (CIN reconciliation)",
    "Correction and revision of TDS returns (justification report handling)",
    "Form 16 / 16A generation and employee/vendor communication",
    "Compliance with TDS on salary, interest, rent, contract payments, commission, etc.",
    "Whether you're a business, employer, or deductor handling vendor payments, we ensure your TDS compliance is timely, accurate, and hassle-free."
            ],
           
          }
        },
        "TDS Litigation Services": {
          // description: "End-to-end GST solutions including registration, compliance, return filing, and dispute resolution for businesses of all sizes.",
          subSubCategories: {
            "TDS Litigation Services": [
               "Tax Deducted at Source (TDS) compliance is closely monitored by the Income Tax Department, and any errors or defaults can lead to notices, penalties, interest, and litigation. When disputes arise related to TDS deductions, payments, or defaults, expert representation is essential to ensure a fair resolution.",
    "We provide specialized TDS Litigation Services to help clients respond to tax authority notices, resolve disputes, and navigate the legal framework effectively."
            ],
            "Our TDS Litigation Services Include:": [
             "Response to TDS default/intimation notices and demand orders",
    "Representation before the Assessing Officer (TDS), TRO, and appellate authorities",
    "Assistance in penalty proceedings under Sections 271C, 271H, and related provisions",
    "Filing of appeals before CIT(A) and ITAT for TDS-related matters",
    "Support in cases involving short deduction, late deposit, or non-filing of returns",
    "Guidance on interest, late fee, and compounding of offenses",
    "Drafting of written submissions, rectification applications, and stay requests",
    "With deep expertise in TDS law, departmental procedures, and appellate practice, our firm ensures that your case is presented with clarity, accuracy, and strong legal backing—minimizing liability and protecting your interests."
            ],
           
          }
        },
        "Income Tax Retainership Services": {
          // description: "End-to-end GST solutions including registration, compliance, return filing, and dispute resolution for businesses of all sizes.",
          subSubCategories: {
            "Income Tax Retainership Services": [
                   "In today’s complex and dynamic tax environment, businesses and individuals require ongoing expert support to ensure full compliance, effective planning, and timely handling of tax matters. Our Income Tax Retainership Services provide you with continuous access to experienced tax professionals—without the need for in-house tax teams.",
    "As your trusted tax advisor, we offer comprehensive, year-round support to handle all your income tax compliance, advisory, and representation needs under a single engagement."
            ],
            "Our Retainership Services Include:": [
                 "Periodic tax planning and advisory tailored to your income profile",
    "Preparation and filing of income tax returns",
    "Advance tax calculation and monitoring",
    "TDS and other withholding tax compliance",
    "Responding to income tax notices and routine queries",
    "Representation before tax authorities during assessments or proceedings",
    "Ongoing updates on changes in tax laws and their implications for you",
    "Our retainership model is flexible and cost-effective, designed to provide peace of mind and expert tax oversight throughout the financial year. Whether you're an individual, professional, startup, or established business, we act as your long-term tax partner—ensuring you stay compliant, informed, and financially efficient.",
            ],
           
          }
        },
      }
    },
    GST: {
      icon: Calculator,
      title: "GST Services",
      description: [
        "GST Registration Services",
        "GST Return Filing Services",
        "GST Audit  Services",
        "GST Litigation Services",
        "GST Other Services",
        "GST Retainership Services"
      ],
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
     subcategories: {
    "GST Registration Services": {
      subSubCategories: {
        "GST Registration Services": [
          "Goods and Services Tax (GST) is a unified indirect tax system that mandates registration for businesses crossing prescribed turnover thresholds or engaging in specified transactions. Timely and accurate GST registration is the first step towards compliance and enables businesses to legally collect tax and claim input tax credit.",
          "We offer end-to-end GST registration services to help individuals, startups, and businesses get registered under GST with ease and efficiency."
        ],
        "Our GST Registration Services Include:": [
          "Assessment of GST applicability and eligibility",
          "Preparation and filing of GST registration application (REG-01)",
          "Guidance on selection of correct registration type (regular/composition/casual/NRI)",
          "Assistance with documentation and portal verification",
          "Multi-state or branch registration support",
          "Tracking application status and resolving portal queries or rejections",
          "Post-registration support including GSTIN activation and compliance guidance",
          "Our team ensures a smooth, hassle-free GST registration process, keeping you compliant from day one. Whether you're starting a new business or expanding operations, we help you get GST-ready quickly and correctly."
        ]
      }
    },
    "GST Return Filing Services": {
      "subSubCategories": {
        "GST Return Filing Services": [
          "Filing timely and accurate GST returns is essential for businesses to remain compliant, avoid penalties, and claim eligible input tax credit (ITC). The complexity of various GST forms, frequent updates in law, and reconciliation requirements make professional assistance invaluable.",
          "We offer comprehensive GST return filing services to ensure your business stays compliant with the GST regime under the CGST, SGST, IGST, and UTGST Acts."
        ],
        "Our GST Return Filing Services Include:": [
          "Filing of monthly/quarterly GST returns: GSTR-1, GSTR-3B, GSTR-4, GSTR-5, GSTR-6, GSTR-7, GSTR-8, GSTR-9 (Annual Return), and GSTR-9C (Audit)",
          "Reconciliation of GSTR-2B with purchase register for ITC accuracy",
          "Preparation and validation of outward and inward supplies data",
          "Handling amendments, credit notes, and debit notes",
          "Filing NIL returns and managing late fees or penalties",
          "Advisory on e-invoicing, e-way bill compliance, and composition scheme returns",
          "Our expert team uses robust processes and the latest software tools to deliver error-free, timely, and fully compliant GST returns, reducing risk and improving cash flow management for your business."
        ]
      }
    },
    "GST Audit Services": {
      "subSubCategories": {
        "GST Audit Services": [
          "Under the Goods and Services Tax (GST) regime, businesses are expected to maintain accurate records and ensure transparency in reporting taxable transactions. A GST Audit serves as a vital tool to verify the correctness of turnover, tax paid, input tax credit claimed, and compliance with GST laws.",
          "Our firm offers comprehensive GST audit services to help businesses stay compliant, identify discrepancies, and avoid future litigation or penalties."
        ],
        "Our GST Audit Services Include:": [
          "Review of outward and inward supplies, input tax credit (ITC), and tax payments",
          "Reconciliation of GSTR returns with books of accounts",
          "Verification of e-invoices, e-way bills, and compliance with reporting norms",
          "Checking eligibility and accuracy of ITC claims",
          "Identification of non-compliance, classification errors, or rate mismatches",
          "Preparation of GST audit reports and related disclosures",
          "Advisory on resolving audit findings and strengthening GST controls",
          "Whether your business is subject to audit under GST law or you seek a voluntary compliance review, our experienced professionals ensure your records are complete, accurate, and aligned with the latest GST regulations."
        ]
      }
    },
    "GST Litigation Services": {
      "subSubCategories": {
        "GST Litigation Services": [
          "With the dynamic and evolving nature of GST law, disputes and litigation have become increasingly common—from input tax credit denials to classification disputes and demand notices. Effective handling of GST litigation requires a deep understanding of law, documentation, and procedural compliance.",
          "We provide end-to-end GST litigation and representation services to help businesses resolve disputes efficiently and safeguard their interests."
        ],
        "Our GST Litigation Services Include:": [
          "Response to Show Cause Notices (SCNs), audit objections, and demand orders",
          "Representation before GST officers, appellate authorities, and tribunals",
          "Drafting of replies, appeals, and submissions under CGST/SGST Acts",
          "Support in detention/seizure cases related to goods or e-way bills",
          "Assistance in anti-profiteering, input tax credit (ITC), and classification disputes",
          "Coordination with legal counsels for high court/Supreme Court matters",
          "Guidance on litigation strategy, documentation, and compliance defense",
          "We combine technical expertise and practical experience to ensure a well-grounded and result-oriented approach to your GST matters—helping reduce litigation risk and ensure business continuity."
        ]
      }
    },
    "GST – Other Services": {
      "subSubCategories": {
        "GST – Other Services": [
          "Beyond registration, return filing, and audits, businesses often require specialized GST services to stay fully compliant and optimize their indirect tax strategy. Our firm offers a wide range of value-added GST services tailored to the diverse needs of clients across sectors."
        ],
        "Our Other GST Services Include:": [
          "GST Advisory & Consultation: Expert guidance on classification, place of supply, time of supply, reverse charge mechanism, and input tax credit eligibility.",
          "GST Due Diligence & Health Check: Periodic GST reviews to identify compliance gaps, risks, and optimization opportunities.",
          "GST Impact Analysis & Implementation Support: Assistance with transitioning to GST for new businesses or during business restructuring, mergers, or acquisitions.",
          "E-invoicing & E-way Bill Compliance: Setup, implementation, and real-time support for e-invoicing and e-way bill generation.",
          "Input Tax Credit (ITC) Reconciliation: Assistance in reconciling GSTR-2B with purchase registers to avoid mismatches and ITC denials.",
          "Support for Refund Claims: End-to-end filing and follow-up for GST refund applications (exports, inverted duty, excess payment, etc.).",
          "Amendments & Registrations Updates: Handling changes to GST registration details, business additions, or cancellation.",
          "We deliver end-to-end GST compliance and advisory solutions, combining technical insight with a practical approach to meet the evolving demands of today’s businesses."
        ]
      }
    },
    "GST Retainership Services": {
      "subSubCategories": {
        "GST Retainership Services": [
          "In today’s fast-changing GST landscape, businesses need continuous expert support to manage compliance, minimize risks, and optimize tax planning. Our GST Retainership Services offer end-to-end support under a fixed monthly or annual engagement—ensuring you stay GST-compliant without the burden of managing it in-house.",
          "We act as your dedicated GST partner, providing timely advice, regular filings, and support for all GST-related needs."
        ],
        "Our GST Retainership Services Include:": [
          "Preparation and filing of regular GST returns (GSTR-1, GSTR-3B, etc.)",
          "Ongoing reconciliation of GSTR-2B with purchase records",
          "Periodic GST compliance reviews and health checks",
          "Advisory on GST law changes and their impact on your business",
          "E-invoicing and e-way bill support",
          "Handling of GST notices and departmental queries",
          "Filing of refund claims and assistance with amendments or corrections",
          "Regular updates, alerts, and proactive compliance reminders",
          "Whether you're a startup, SME, or large enterprise, our retainership model ensures consistent, expert-backed GST support—freeing you to focus on your business while we take care of your tax compliance."
        ]
      }
    }
  }
    },
  
    business: {
      icon: Building2,
      title: " Start-up Services",
      description: [
        "Start up Registration",
        "Proprietorship Registration Services",
        "Partnership Registration Services",
        "Limited Liability Partnership (LLP) Registration Services",
        "Private Limited Company Registration Services",
        "Trust Registration Services",
        "Society Registration Services"
      ],
        color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
   "subcategories": {
    "Start up Registration Services": {
      "subSubCategories": {
        "Start up Registration Services": [
          "Starting a new business is exciting—but navigating the legal and regulatory requirements can be challenging. Our Startup Registration Services are designed to help entrepreneurs launch their ventures smoothly, ensuring full compliance from day one.",
          "We assist startups in choosing the right business structure and completing all essential registrations—enabling them to focus on innovation while we handle the legalities."
        ],
        "Our Startup Registration Services Include:": [
          "Business Structure Advisory: Guidance on selecting the right form—Private Limited Company, LLP, Partnership, OPC, etc.",
          "Company/LLP Incorporation: End-to-end support with name reservation, DIN, DSC, MOA/AOA drafting, and incorporation filings with MCA.",
          "Startup India Registration: Assistance in registering with DPIIT to avail benefits like tax exemptions, funding access, and regulatory relaxations.",
          "PAN, TAN, and GST Registration: Fast-track application for essential tax registrations.",
          "MSME/Udyam Registration: Registration to avail benefits under government schemes for small businesses.",
          "Professional Tax, Shops & Establishments, and other local registrations as required.",
          "Ongoing Compliance Advisory: Post-registration support including statutory compliance, accounting, and tax planning.",
          "We provide a one-stop solution for all startup needs, combining legal, financial, and tax expertise to help turn your idea into a compliant and successful business."
        ]
      }
    },
    "Proprietorship Registration Services": {
      "subSubCategories": {
        "Proprietorship Registration Services": [
          "A proprietorship is one of the simplest and most popular business structures for sole entrepreneurs who want to start their venture with minimal compliance and quick setup. Our Proprietorship Registration Services help you establish your business legally and efficiently, ensuring smooth operations from the outset."
        ],
        "Our Proprietorship Registration Services Include:": [
          "Guidance on choosing proprietorship as a business structure based on your needs",
          "Assistance with obtaining a Shop and Establishment License or other local licenses",
          "Application for GST Registration (if turnover exceeds threshold or applicable)",
          "Registration under Professional Tax and other local municipal registrations",
          "Opening a current bank account in the proprietor’s name with business proof",
          "Advisory on maintaining statutory records and tax compliance",
          "While proprietorship offers ease of management and direct control, we also help you understand the taxation implications, liability aspects, and compliance requirements to ensure your business runs smoothly and lawfully."
        ]
      }
    },
    "Partnership Registration Services": {
      "subSubCategories": {
        "Partnership Registration Services": [
          "Partnership firms are a popular choice for businesses seeking shared management and combined expertise without the complexities of a company structure. Our Partnership Registration Services guide you through the entire process of forming a legally compliant partnership, ensuring clarity and protection for all partners."
        ],
        "Our Partnership Registration Services Include:": [
          "Drafting and registration of the Partnership Deed outlining roles, profit-sharing, and responsibilities",
          "Assistance with name approval and registration with the Registrar of Firms (if applicable)",
          "PAN and TAN application for the partnership firm",
          "GST Registration and other applicable statutory registrations",
          "Advisory on partnership taxation, compliance, and ongoing legal requirements",
          "Support with professional tax, trade licenses, and other local registrations",
          "Guidance on maintaining books of accounts and filing income tax returns for the partnership firm",
          "We ensure a smooth and transparent registration process, helping you establish a solid foundation for your business partnership with minimal hassle and maximum legal protection."
        ]
      }
    },
    "Limited Liability Partnership (LLP) Registration Services": {
      "subSubCategories": {
        "Limited Liability Partnership (LLP) Registration Services": [
          "An LLP combines the flexibility of a partnership with the benefits of limited liability protection, making it a preferred choice for professionals and businesses seeking a robust yet simple organizational structure. Our LLP Registration Services provide end-to-end assistance for smooth incorporation and ongoing compliance."
        ],
        "Our LLP Registration Services Include:": [
          "Advisory on LLP structure and suitability based on your business needs",
          "Name availability search and reservation with MCA",
          "Preparation and filing of incorporation documents including LLP Agreement",
          "Obtaining Digital Signatures (DSC) and Director Identification Numbers (DIN)",
          "PAN and TAN application for the LLP",
          "Assistance with GST Registration and other statutory registrations",
          "Drafting LLP Agreement detailing rights, duties, profit-sharing, and operational guidelines",
          "Post-incorporation compliance support including annual filings and audit advisory",
          "We ensure a hassle-free LLP setup process, helping you leverage the benefits of limited liability while maintaining operational flexibility and compliance with the Limited Liability Partnership Act, 2008."
        ]
      }
    },
    "Private Limited Company Registration Services": {
      "subSubCategories": {
        "Private Limited Company Registration Services": [
          "A Private Limited Company is a preferred business structure for startups and growing enterprises due to its separate legal identity, limited liability protection, and easier access to funding. Our Private Limited Company Registration Services help entrepreneurs establish a fully compliant company with all regulatory formalities handled efficiently."
        ],
        "Our Private Limited Company Registration Services Include:": [
          "Expert advisory on suitability and benefits of incorporating a Private Limited Company",
          "Name availability search and reservation with MCA",
          "Preparation and filing of incorporation documents including Memorandum of Association (MOA) and Articles of Association (AOA)",
          "Obtaining Digital Signatures (DSC) and Director Identification Numbers (DIN) for directors",
          "PAN and TAN application for the company",
          "GST Registration and other statutory registrations as required",
          "Assistance with opening bank accounts and initial compliances",
          "Post-incorporation support including annual filing, board meetings, and compliance management",
          "Guidance on shareholding structure, capital contribution, and shareholder agreements",
          "Our streamlined process ensures your Private Limited Company is incorporated quickly, legally sound, and ready for business operations, allowing you to focus on growth and innovation."
        ]
      }
    },
    "Trust Registration Services": {
      "subSubCategories": {
        "Trust Registration Services": [
          "Trusts are widely used for charitable, religious, or family estate planning purposes, providing a structured way to manage assets for beneficiaries. Our Trust Registration Services guide you through the legal formalities to establish a trust that complies with applicable laws and meets your objectives."
        ],
        "Our Trust Registration Services Include:": [
          "Advisory on types of trusts (Public Trust, Private Trust, Religious Trust, etc.) and suitability",
          "Drafting of Trust Deed outlining the objectives, trustees, beneficiaries, and rules of governance",
          "Assistance with registration under the Indian Trusts Act, 1882 or relevant state laws",
          "Guidance on obtaining PAN and TAN for the trust",
          "Support with income tax registration for trusts and application for tax exemptions under sections like 12A and 80G",
          "Compliance assistance for annual filings and audits, including donation receipts and utilization certificates",
          "Advisory on succession planning, asset management, and regulatory compliance",
          "We ensure that your trust is legally sound, compliant, and structured to achieve your philanthropic or family goals effectively."
        ]
      }
    },
    "Society Registration Services": {
      "subSubCategories": {
        "Society Registration Services": [
          "Societies are commonly formed for promoting charitable, educational, cultural, or social activities with a formal legal structure. Our Society Registration Services help you establish a registered society that complies with the Societies Registration Act, 1860 (or applicable state acts), enabling you to operate transparently and access government benefits."
        ],
        "Our Society Registration Services Include:": [
          "Advisory on suitability and legal requirements for forming a society",
          "Drafting the Memorandum of Association (MOA) and Rules & Regulations",
          "Filing of application and registration with the Registrar of Societies",
          "Obtaining PAN and TAN for the society",
          "Assistance with GST registration, if applicable",
          "Guidance on compliance with statutory requirements including annual filings, meetings, and audits",
          "Support with income tax registration and applications for exemption under sections like 12A and 80G",
          "We provide end-to-end support to ensure your society is legally compliant, well-structured, and positioned to effectively achieve its objectives."
        ]
      }
    },
    "Compliance Health Check Services": {
      "subSubCategories": {
        "Compliance Health Check Services": [
          "Ensuring that your business complies with all applicable legal, tax, and regulatory requirements is crucial to avoid penalties, litigation, and reputational risks. Our Compliance Health Check Services provide a thorough review of your company’s adherence to statutory obligations, identifying gaps and recommending corrective actions."
        ],
        "Our Compliance Health Check Services Include:": [
          "Detailed review of tax filings (Income Tax, GST, TDS, etc.) and associated documentation",
          "Assessment of corporate compliances including MCA filings, board resolutions, and statutory registers",
          "Verification of labor law compliances such as PF, ESI, and professional tax",
          "Evaluation of financial record-keeping and audit readiness",
          "Identification of non-compliance risks and potential penalties",
          "Customized recommendations and roadmap for rectification and ongoing compliance",
          "Periodic monitoring and support to ensure sustained compliance",
          "Our proactive approach helps businesses strengthen compliance frameworks, minimize risks, and build trust with regulators and stakeholders—providing peace of mind and operational confidence."
        ]
      }
    }
  }
    },
    outsourcing: {
      icon: Globe,
      title: "Outsourcing Services",
      description: [
        "CFO Services",
        "Management Information System (MIS) Services",
        "Project advisory and management for business transition",
        "Budgeting and Forecasting Services",
        "US Taxation Services",
        "Presetup Advisory",
        "Setup Phase support",
        "Operational Advisory",
        "Tax and regulatory compliance",
        "Growth and optimisation"
      ],
       color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
   "subcategories": {
    "CFO Services": {
      "subSubCategories": {
        "CFO Services": [
          "In today’s competitive business environment, strategic financial leadership is crucial for sustainable growth and profitability. Our CFO Services provide expert financial guidance and management tailored to your business needs—whether you are a startup, SME, or a growing enterprise."
        ],
        "Our CFO Services Include:": [
          "Financial planning, budgeting, and forecasting",
          "Cash flow management and working capital optimization",
          "Financial reporting and analysis to support decision-making",
          "Risk management and internal controls implementation",
          "Capital raising and investor relations support",
          "Cost control and profitability improvement initiatives",
          "Compliance oversight including taxation, regulatory filings, and audit coordination",
          "Strategic business advisory and performance monitoring",
          "By partnering with us for your CFO needs, you gain access to seasoned financial professionals who act as your trusted advisors—helping you navigate complexities, drive financial discipline, and achieve your business objectives."
        ]
      }
    },
    "Management Information System (MIS) Services": {
      "subSubCategories": {
        "Management Information System (MIS) Services": [
          "Accurate and timely information is key to effective decision-making and business growth. Our MIS Services provide customized reporting solutions that transform your financial and operational data into insightful management reports."
        ],
        "Our MIS Services Include:": [
          "Designing and generating periodic financial and operational reports",
          "Customized dashboards and KPIs tailored to your business objectives",
          "Cash flow analysis, budget vs actual comparisons, and variance analysis",
          "Sales, inventory, and expense tracking reports",
          "Consolidation of data from multiple sources for comprehensive insights",
          "Support for strategic planning, forecasting, and performance monitoring",
          "Automation of report generation for timely and error-free delivery",
          "With our MIS services, your management team gains the clarity and control needed to make informed decisions and steer your business towards sustained success."
        ]
      }
    },
    "Project Advisory and Management for Business Transition": {
      "subSubCategories": {
        "Project Advisory and Management for Business Transition": [
          "Business transitions such as mergers, acquisitions, restructuring, or ownership changes are complex processes requiring meticulous planning and expert guidance. Our Project Advisory and Management Services ensure smooth, efficient, and compliant transitions—minimizing disruptions and maximizing value."
        ],
        "Our Services Include:": [
          "Strategic advisory on business transition options and impact analysis",
          "Due diligence support including financial, legal, and operational reviews",
          "Assistance in structuring transactions for tax efficiency and regulatory compliance",
          "Project planning and coordination with stakeholders including legal, financial, and regulatory authorities",
          "Change management support to align operations, systems, and workforce with new business realities",
          "Risk assessment and mitigation strategies throughout the transition",
          "Post-transition integration advisory including accounting, reporting, and compliance alignment",
          "We provide end-to-end management and advisory support to help your business navigate change confidently and emerge stronger in a competitive landscape."
        ]
      }
    },
    "Budgeting and Forecasting Services": {
      "subSubCategories": {
        "Budgeting and Forecasting Services": [
          "Effective budgeting and forecasting are essential tools for strategic planning, resource allocation, and business growth. Our Budgeting and Forecasting Services help you anticipate financial outcomes, manage risks, and make informed decisions to achieve your business goals."
        ],
        "Our Services Include:": [
          "Preparation of detailed annual budgets aligned with your business objectives",
          "Cash flow projections and working capital planning",
          "Sales forecasting and expense budgeting",
          "Scenario analysis and variance reporting",
          "Periodic review and update of forecasts based on actual performance",
          "Integration with financial reporting for real-time insights",
          "Advisory on cost control and profitability enhancement",
          "By partnering with us for budgeting and forecasting, you gain a proactive financial roadmap that empowers you to steer your business confidently through changing market conditions."
        ]
      }
    },
    "US Taxation Services": {
      "subSubCategories": {
        "Individual Taxation Services": [
          "Federal and State Income Tax Return Preparation (Form 1040 Series)",
          "Tax returns for residents, non-residents, and expatriates",
          "Itemized deductions and credit optimization",
          "Year-end tax planning and estimated tax computations"
        ],
        "Business Taxation Services": [
          "Corporate Tax Returns (Form 1120 & 1120S)",
          "Partnership Tax Returns (Form 1065)",
          "Preparation of partner/shareholder Schedule K-1s",
          "Depreciation schedules and fixed asset reporting",
          "Tax projections and estimated payments"
        ],
        "Payroll Tax Compliance": [
          "Preparation and filing of quarterly payroll tax returns (Form 941, 940)",
          "State payroll filings and reconciliation",
          "W-2, W-3, 1099, and 1096 preparation and filing"
        ],
        "IRS Representation & Tax Resolution Services": [
          "Handling IRS notices and correspondence",
          "Installment Agreements, Offers in Compromise, and penalty abatement assistance",
          "Support for IRS audits and appeals",
          "Transcript reviews and issue resolution"
        ],
        "Bookkeeping & Financial Reporting Support": [
          "Monthly, quarterly, and annual bookkeeping",
          "Year-end financial statement preparation",
          "QuickBooks and Xero setup, clean-up, and maintenance",
          "Financial reporting for tax purposes"
        ],
        "Tax Planning & Advisory Services": [
          "Personalized tax-saving strategies",
          "Business structure advice for tax efficiency",
          "Retirement and succession planning",
          "Multi-state tax compliance guidance"
        ]
      }
    }
  }
    },
    startup: {
      icon: Rocket,
      title: "GCC Advisory Services",
      description: [
        "Compliance Health Check Services",
        "Presetup Advisory",
        "Setup Phase support",
       " Operational Advisory",
        "Tax and regulatory compliance",
      "  Growth and optimisation"


      ],
       color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
    "subcategories": {
    "Pre-Setup Advisory": {
      "subSubCategories": {
        "Pre-Setup Advisory": [
          "Feasibility studies and business case preparation",
          "Location analysis and state government incentive advisory",
          "Entity structure advisory (Private Limited vs LLP vs Branch office vs SEZ unit etc.)",
          "Tax structuring: direct tax, indirect tax (GST), transfer pricing implications"
        ]
      }
    },
    "Setup Phase Support": {
      "subSubCategories": {
        "Setup Phase Support": [
          "Entity incorporation and regulatory approvals",
          "RBI, FEMA, MCA, SEZ registration if applicable",
          "Transfer pricing documentation and advance pricing agreement (APA) guidance",
          "Employee structuring: ESOP taxation, payroll structuring"
        ]
      }
    },
    "Operational Advisory": {
      "subSubCategories": {
        "Operational Advisory": [
          "Virtual CFO services for GCC operations",
          "Management reporting packs, budgeting, and forecasting",
          "Setting up finance processes: AP, AR, GL, tax compliance",
          "Internal audit and risk management frameworks",
          "Compliance management: GST, TDS, MCA filings, STPI/SEZ compliance"
        ]
      }
    },
    "Tax & Regulatory Compliance": {
      "subSubCategories": {
        "Tax & Regulatory Compliance": [
          "Ongoing tax filings (direct and indirect taxes)",
          "Transfer pricing documentation and reporting",
          "Annual statutory audit and tax audit",
          "FEMA reporting (FDI inflows, ECB, ODI etc.)"
        ]
      }
    },
    "Growth & Optimization": {
      "subSubCategories": {
        "Growth & Optimization": [
          "Benchmarking studies: cost, productivity, delivery models",
          "Maturity assessments and process optimization advisory",
          "Scaling models for global finance operations outsourcing",
          "Advisory on digital finance transformation (RPA, AI in finance)"
        ]
      }
    }
  }
    },
    certification: {
      icon: FileCheck,
      title: "Certification Services",
      description: [
        "Foreign Remittance Certificate (FRC) Services",
        "VISA Certification Services",
        "RERA Certificate Services",
        "Certificates under the Income Tax Act",
        "Certificates under GST",
        "Certificates under the Companies Act"
      ],
       color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
    "subcategories": {
    "Foreign Remittance Certificate (FRC) Services": {
      "subSubCategories": {
        "Foreign Remittance Certificate (FRC) Services": [
          "A Foreign Remittance Certificate (FRC) is an essential document issued by a Chartered Accountant certifying the nature and purpose of foreign remittances under the Income Tax Act and FEMA regulations. Whether you're making payments abroad or receiving foreign income, an FRC ensures transparency and compliance with Indian tax laws."
        ],
        "Our FRC Services Include:": [
          "Issuance of Form 15CB for foreign remittances as required under Income Tax Rules",
          "Assistance with preparation and filing of Form 15CA on the Income Tax portal",
          "Advisory on applicable TDS rates, exemptions, and DTAA benefits",
          "Verification of documentation supporting the remittance (invoices, contracts, etc.)",
          "Certification for repatriation of funds, dividends, royalties, technical services, etc.",
          "Liaison with banks and authorized dealers for smooth processing of remittances",
          "FEMA and RBI compliance advisory related to cross-border transactions",
          "We ensure timely and accurate certification, helping you meet your foreign remittance obligations efficiently and in full compliance with Indian regulatory frameworks."
        ]
      }
    },
    "VISA Certification Services": {
      "subSubCategories": {
        "VISA Certification Services": [
          "Applying for a visa often requires financial documentation to validate your income, net worth, and tax compliance. As Chartered Accountants, we provide reliable and accurate VISA Certificates to support your visa applications—whether for study, travel, business, immigration, or work purposes."
        ],
        "Our VISA Certificate Services Include:": [
          "Issuance of Net Worth Certificates based on verified assets and liabilities",
          "CA Certification of Income and financial position as per embassy or consulate requirements",
          "Preparation of source of funds and income tax return summaries",
          "Assistance with documentation for student visa, business visa, visitor visa, and immigration visa",
          "Liaison with banks and authorities for supporting financial documentation",
          "Quick turnaround time to meet embassy/consulate deadlines",
          "Our certificates are professionally prepared, widely accepted, and backed by thorough due diligence—enhancing the credibility of your visa application and improving your chances of approval."
        ]
      }
    },
    "RERA Certificate Services": {
      "subSubCategories": {
        "RERA Certificate Services": [
          "The Real Estate (Regulation and Development) Act, 2016 (RERA) mandates stringent compliance and financial transparency for real estate developers and agents. As Chartered Accountants, we provide specialized RERA Certification Services to ensure your real estate projects meet all statutory obligations and maintain investor confidence."
        ],
        "Our RERA Certificate Services Include:": [
          "Issuance of CA Certificates in Form 3, Form 5, and other required formats",
          "Verification of project funds utilization and compliance with RERA guidelines",
          "Project-wise accounting and reconciliation of receipts and expenditures",
          "Certification for withdrawal of funds from RERA escrow accounts",
          "Annual audit and reporting under RERA provisions",
          "Advisory on financial disclosures and compliance for ongoing and new projects",
          "Liaison with RERA authorities for submissions and clarifications",
          "Our thorough approach ensures timely certification, regulatory compliance, and seamless project execution, while enhancing your reputation with homebuyers and regulators alike."
        ]
      }
    },
    "Certificates under the Income Tax Act": {
      "subSubCategories": {
        "Certificates under the Income Tax Act": [
          "The Income Tax Act mandates several certifications by Chartered Accountants to ensure transparency, regulatory compliance, and accuracy in financial and tax-related matters. We offer a wide range of Income Tax Certificates tailored to the needs of individuals, businesses, and institutions."
        ],
        "Our Services Include Issuance of the Following Certificates:": [
          "Form 15CB – Certification for foreign remittance under Section 195",
          "Net Worth Certificate – Required for visa applications, loan approvals, or business restructuring",
          "Capital Gain Certificate – Calculation and certification of capital gains for property sales and investments",
          "Certificate for Claiming Deductions under various sections (like 80-IA, 80-IB, etc.)",
          "Certificate for Income Proof – For individuals, NRIs, or firms for various regulatory or visa purposes",
          "Turnover and Profitability Certificates – For bidding tenders, bank finance, or regulatory requirements",
          "Certificate of Fair Market Value (FMV) – For shares, assets, and immovable property",
          "Tax Residency Certificate Support (TRC) – Assistance with documentation for claiming DTAA benefits",
          "Share Valuation Certificate – For compliance with Section 56(2)(viib), FEMA, and company law",
          "Certificate for Charitable Trusts/NGOs – For tax exemption claims under Sections 12A/80G",
          "Our certifications are backed by detailed analysis, thorough documentation, and adherence to statutory norms—ensuring acceptance by banks, government authorities, and regulatory bodies."
        ]
      }
    },
    "Certificates under GST": {
      "subSubCategories": {
        "Certificates under GST": [
          "Under the Goods and Services Tax (GST) regime, certain transactions and business scenarios require certification by a Chartered Accountant to ensure proper compliance, input credit claims, and adherence to procedural requirements. We provide expert services for issuing GST-related certificates tailored to your business needs."
        ],
        "Our GST Certification Services Include:": [
          "GST Turnover Certificate – For bank loans, government tenders, or subsidy claims",
          "GST Reconciliation Certificate – Matching GSTR-2A/2B with books for refund or audit purposes",
          "Input Tax Credit (ITC) Certification – For verifying eligibility and correctness of ITC claims",
          "GST Refund Certification – For exporters and SEZ units claiming GST refunds",
          "Certificate for Deemed Exports – To support refund claims on supplies treated as deemed exports",
          "LUT/Bond Compliance Certification – For exporters undertaking supplies without payment of tax",
          "Anti-profiteering Certification – To support submissions before authorities in pricing-related matters",
          "GST Compliance Status Certification – For clients, partners, or stakeholders requiring compliance verification",
          "Certificate of No Tax Liability or Nil Return Filing – For dormant or non-operational businesses",
          "Certification for Transitional Credit Claims – Support in special cases under earlier laws",
          "Our GST certifications are prepared with utmost accuracy, ensuring seamless acceptance by authorities and stakeholders, while supporting your business’s regulatory and financial goals."
        ]
      }
    },
    "Certificates under the Companies Act": {
      "subSubCategories": {
        "Certificates under the Companies Act": [
          "Under the Companies Act, 2013, companies are required to obtain certifications from Chartered Accountants for a variety of statutory, regulatory, and procedural purposes. Our firm offers reliable and compliant Company Law Certification Services to assist businesses in meeting their legal obligations efficiently."
        ],
        "Our Certification Services under the Companies Act Include:": [
          "Certificate of Incorporation Compliance – Verification of documents and processes for new companies",
          "Commencement of Business Certificate – For public companies as mandated under Section 10A",
          "Share Allotment and Transfer Certification – For compliance with timelines, valuation, and procedures",
          "Certification of Statutory Registers and Records – Ensuring maintenance of proper records under company law",
          "Net Worth Certificate – For rights issues, buyback, mergers, or investment proposals",
          "Valuation Certificate – For issue of shares, mergers, acquisitions, and compliance under Section 62 and 192",
          "Certification of Return of Deposits (DPT-3) – Ensuring correctness of financial data submitted to MCA",
          "Annual Return Certification (MGT-7/MGT-8) – For listed companies and prescribed class of companies",
          "Certification of Charge Registration (CHG-1, CHG-4, CHG-9) – Ensuring compliance in creation/satisfaction of charges",
          "Director’s Disqualification and DIN KYC Certification – To ensure compliance and avoid penalties",
          "Utilization Certificate for Funds Raised – To report end-use of capital for IPOs and private placements",
          "Our in-depth knowledge of the Companies Act, 2013, and practical experience across industries ensures that your business remains compliant, audit-ready, and confidently prepared for scrutiny by regulatory authorities."
        ]
      }
    }
  }
    }
  };

  return (
    <div className="bg-[#FFFFFF] font-sans min-h-screen pt-45">
      {/* SEO Meta Information */}
      <div className="hidden">
        <h1>Professional CA Services Bangalore - Vittam Integrity Services</h1>
        <meta name="description" content="Comprehensive chartered accountant services in Bangalore. Expert accounting, audit, taxation, GST, startup advisory, outsourcing, global capability center consultation, and certification services. ICAI certified professionals with 30+ years combined experience." />
        <meta name="keywords" content="CA services Bangalore, chartered accountant services, tax planning Bangalore, GST services, audit services, business registration, startup advisory, income tax filing, accounting services Bangalore, outsourcing services, certification services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional CA Services Bangalore - Vittam Integrity Services" />
        <meta property="og:description" content="Expert chartered accountant services including taxation, audit, GST, and business advisory. Trusted by clients across diverse sectors." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vittamintegrityservices.com/services" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-[#FFFFFF] overflow-hidden" id="hero">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-32 right-16 w-24 h-24 border border-[#87CEEB] rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#87CEEB] rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#87CEEB] animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border border-black opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <div className="text-center space-y-8">
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex justify-center space-x-2 text-neutral-700">
                <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
                <li className="before:content-['/'] before:mx-2">Services</li>
              </ol>
            </nav>

            <div className={`space-y-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
                Vittam Integrity Services
                <span className="block relative">
                  PROFESSIONAL SOLUTIONS
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4FC3F7] animate-pulse"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions including Accounting, Finance and Compliance; Direct and Indirect Taxation; Outsourcing Services; Business Advisory Services.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
              {[
                { value: "8+", label: "Service Categories" },
                { value: "40+", label: "Expert Services" },
                { value: "30+", label: "Years Experience" },
                { value: "Global", label: "Client Support" }
              ].map((stat, index) => (
                <div key={index} className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100} ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                  <div className="text-3xl sm:text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm text-neutral-700 font-bold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Updated Services Navigation Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white" id="services-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
        

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-10">
            {Object.entries(services).map(([key, service], index) => (
              <ServiceCard
                key={key}
                service={service}
                serviceKey={key}
                isActive={activeCategory === key}
                onClick={setActiveCategory}
                index={index}
                isVisible={isVisible['services-nav']}
              />
            ))}
          </div>

          {/* Active Service Summary */}
          {/* {activeCategory && (
            <div className={`
              mt-20 p-10 rounded-3xl bg-gradient-to-br from-slate-800 via-blue-900 to-slate-700
              text-white transition-all duration-700 transform
              ${isVisible['services-nav'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              shadow-2xl shadow-blue-900/30
            `}>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  {React.createElement(services[activeCategory].icon, {
                    className: "w-12 h-12 text-blue-300"
                  })}
                  <h3 className="text-3xl font-black">
                    Ready to get started with {services[activeCategory].title}?
                  </h3>
                </div>
                
                <p className="text-blue-100 text-lg leading-relaxed">
                  Let's discuss your project requirements and create something amazing together. 
                  Our expert team is ready to provide personalized solutions for your business needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Free Consultation
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-[#FFFFFF]" id="detailed-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {Object.entries(services).map(([key, service]) => {
              if (key !== activeCategory) return null;

              const IconComponent = service.icon;

              return (
                <div
                  key={key}
                  className={`transition-all duration-500 ${
                    isVisible['detailed-services']
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-center space-y-6 mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#003c80] to-[#708090] mx-auto rounded-full flex items-center justify-center animate-pulse">
                      <IconComponent className="w-10 h-10 text-[#FFFFFF]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
                      {service.title.toUpperCase()}
                    </h2>
                    <div className="text-xl text-neutral-700 max-w-3xl mx-auto">
                      {service.description.map((desc, idx) => (
                        <p key={idx} className="mb-2">{desc}</p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {service.subcategories ? (
                      Object.entries(service.subcategories).map(([subcat, subServices], subcatIndex) => {
                        // Check if this subcategory has sub-sub-categories (like Taxation)
                        if (subServices.subSubCategories) {
                          return (
                            <div key={subcat} className="space-y-4">
                              {/* Main Subcategory Header */}
                              <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-8">
                                <div
                                  className="flex items-center justify-between cursor-pointer"
                                  onClick={() => toggleSubCategory(`${key}-${subcatIndex}`)}
                                >
                                  <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-white flex items-center space-x-3">
                                      <Calculator className="w-8 h-8 text-blue-300 flex-shrink-0" />
                                      <span>{subcat}</span>
                                    </h3>
                                    <p className="text-blue-100 text-lg max-w-4xl">
                                      {subServices.description}
                                    </p>
                                  </div>
                                  {expandedSubCategories[`${key}-${subcatIndex}`] ? (
                                    <Minus className="w-8 h-8 text-white transition-transform" />
                                  ) : (
                                    <Plus className="w-8 h-8 text-white transition-transform" />
                                  )}
                                </div>

                                {/* Sub-Sub-Categories */}
                                <div className={`mt-8 grid gap-6 transition-all duration-500 ${
                                  expandedSubCategories[`${key}-${subcatIndex}`]
                                    ? 'max-h-[2000px] opacity-100'
                                    : 'max-h-0 opacity-0 overflow-hidden'
                                }`}>
                                  {Object.entries(subServices.subSubCategories).map(([subSubcat, subSubServices], subSubIndex) => (
                                    <div key={subSubcat} className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                                      <div
                                        className="flex items-center justify-between cursor-pointer mb-4"
                                        onClick={() => toggleService(`${key}-${subcatIndex}-${subSubIndex}`)}
                                      >
                                        <h4 className="text-xl font-black text-gray-800 flex items-center space-x-3">
                                          <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                          <span>{subSubcat}</span>
                                        </h4>
                                        {expandedServices[`${key}-${subcatIndex}-${subSubIndex}`] ? (
                                          <ChevronDown className="w-5 h-5 text-gray-600 transition-transform" />
                                        ) : (
                                          <ChevronRight className="w-5 h-5 text-gray-600 transition-transform" />
                                        )}
                                      </div>

                                      <div className={`space-y-3 transition-all duration-300 ${
                                        expandedServices[`${key}-${subcatIndex}-${subSubIndex}`]
                                          ? 'max-h-[1000px] opacity-100'
                                          : 'max-h-0 opacity-0 overflow-hidden'
                                      }`}>
                                        {subSubServices.map((service, serviceIndex) => (
                                          <div
                                            key={serviceIndex}
                                            className="bg-gradient-to-r from-blue-50 to-gray-50 p-4 rounded-xl border-l-4 border-blue-500"
                                          >
                                            {service.length > 100 ? (
                                              <p className="text-gray-700 leading-relaxed font-medium">{service}</p>
                                            ) : (
                                              <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                                                <span className="font-medium text-gray-700">{service}</span>
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          // Regular subcategory without sub-sub-categories
                          return (
                            <div
                              key={subcat}
                              className="bg-[#2b4d77] rounded-3xl p-6 sm:p-8 overflow-hidden"
                            >
                              <div
                                className="flex items-center justify-between cursor-pointer mb-6"
                                onClick={() => toggleService(`${key}-${subcatIndex}`)}
                              >
                                <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
                                  <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
                                  <span className="font-medium text-[#ffffff]">{subcat}</span>
                                </h3>
                                {expandedServices[`${key}-${subcatIndex}`] ? (
                                  <Minus className="w-6 h-6 text-[#ffffff] transition-transform" />
                                ) : (
                                  <Plus className="w-6 h-6 text-[#ffffff] transition-transform" />
                                )}
                              </div>

                              <div
                                className={`grid gap-4 transition-all duration-500 ${
                                  expandedServices[`${key}-${subcatIndex}`]
                                    ? 'max-h-[1000px] opacity-100'
                                    : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                              >
                                {subServices.map((subService, serviceIndex) => (
                                  <div
                                    key={serviceIndex}
                                    className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102"
                                  >
                                    {subService.length > 100 ? (
                                      <p className="text-black leading-relaxed font-medium">{subService}</p>
                                    ) : (
                                      <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                                        <span className="font-medium text-black">{subService}</span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }
                      })
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-6">
                        {service.services && service.services.map((serviceName, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="bg-[#4896e0] p-6 rounded-2xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 bg-[#004680] rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-[#FFFFFF]" />
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-black text-black text-lg">
                                  {serviceName}
                                </h4>
                                <p className="text-neutral-700 text-sm">
                                  Professional service delivered with expertise and
                                  reliability
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
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

      {/* Service Process */}
      <section className="py-20 bg-[#FFFFFF]" id="service-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
              OUR SERVICE PROCESS
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Simple, transparent, and efficient process for all our services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free consultation to understand your specific requirements and business needs.",
                icon: Phone
              },
              {
                step: "02", 
                title: "Proposal & Agreement",
                description: "Detailed proposal with transparent pricing and service timeline agreement.",
                icon: FileText
              },
              {
                step: "03",
                title: "Service Execution",
                description: "Professional service delivery by our expert team with regular updates.",
                icon: Settings
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "Timely delivery with ongoing support and maintenance as required.",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <div key={index} className={`text-center group transition-all duration-500 ${isVisible['service-process'] ? `opacity-100 translate-y-0 delay-${index * 150}` : 'opacity-0 translate-y-5'}`}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-[#004280] mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10 text-[#FFFFFF]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFFFFF] border-4 border-black rounded-full flex items-center justify-center">
                    <span className="text-xs font-black text-black">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-black mb-4">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 sm:py-10 md:py-6 bg-[#ffffff]">
             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <div className="space-y-8 sm:space-y-10">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
                  READY TO GET STARTED WITH
                   <span className="block text-black">VITTAM INTEGRITY SERVICES?</span>
                 </h2>
                 
                 <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed font-medium max-w-4xl mx-auto">
                 Get expert chartered accountant services with guaranteed compliance and peace of mind. Empower your business with our value-driven solutions.
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
          "@type": "ProfessionalService",
          "name": "Vittam Integrity Services - Professional CA Services",
          "description": "Comprehensive chartered accountant services including accounting, audit, taxation, GST, business registration, and startup advisory services in Bangalore.",
          "url": "https://vittamintegrityservices.com/services",
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
            "latitude": "12.9716",
            "longitude": "77.5946"
          },
          "openingHours": "Mo-Sa",
          "priceRange": "$",
          "serviceType": ["Accounting Services", "Auditing Services", "Taxation Services", "GST Services", "Business Registration", "Startup Advisory", "Outsourcing Services", "Global Capability Centers", "Certification Services"],
          "areaServed": {
            "@type": "City",
            "name": "Bangalore"
          },
          "founder": [
            {
              "@type": "Person",
              "name": "CA Sunita Kulthe"
            },
            {
              "@type": "Person",
              "name": "Shraddha Kamath"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "100"
          }
        })
      }} />
    </div>
  );
};

export default ServicesPage;