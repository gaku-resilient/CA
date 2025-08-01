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








































import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Search, Calculator, Building2, Globe, Rocket, FileCheck, 
  ChevronDown, ChevronRight, ArrowRight, Star, Shield, CheckCircle, 
  Phone, Mail, Clock, Award, Users, TrendingUp, Target, Eye, Heart,
  DollarSign, FileText, BarChart, Settings, Briefcase, Home, Plus, Minus
} from 'lucide-react';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('accounting');
  const [expandedServices, setExpandedServices] = useState({});
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

  const services = {
    accounting: {
      icon: BookOpen,
      title: "Accounting Services",
      description: "Professional accounting solutions compliant with Indian and International standards",
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      subcategories: {
        "Accounts Writing & Book Keeping Services": [
          "Accurate and timely accounting is the backbone of every successful business. Our Accounts Writing & Bookkeeping Services are designed to provide comprehensive, reliable, and compliant financial records, enabling informed decision-making and smooth regulatory compliance.",
          "We offer tailored bookkeeping solutions to businesses of all sizes, ensuring that your day-to-day financial transactions are recorded systematically and in accordance with applicable accounting standards. From maintaining ledgers and journals to reconciling bank statements and preparing trial balances, our services help you stay organized and audit-ready at all times."
        ],
        "Our Services Include (Accounts Writing & Book Keeping Services)": [
          "Preparation and maintenance of books of accounts",
          "Ledger posting and journal entries",
          "Accounts reconciliation (bank, vendor, customer)",
          "Monthly/quarterly financial reporting",
          "GST-compliant bookkeeping",
          "Support for audit and compliance reviews",
          "Whether you're a startup, SME, or a growing enterprise, we ensure that your financial records reflect accuracy, transparency, and efficiency. Let us handle your books, so you can focus on growing your business."
        ],
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
          "We combine technical proficiency with practical experience to help businesses not only comply with Ind AS requirements but also improve the quality and reliability of their financial reporting."
        ],
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
        ],
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
          "Our team combines deep technical knowledge with practical experience across industries to deliver sound, tailored solutions."
        ]
      }
    },
    audit: {
      icon: Search,
      title: "Audit Services",
      description: "Comprehensive audit services ensuring compliance and transparency",
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      subcategories: {
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
        ],
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
          "Our internal audit approach goes beyond routine checks — we provide actionable insights that support better decision-making and promote a culture of continuous improvement."
        ],
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
          "Our team brings a meticulous and systematic approach to inventory audits, tailored to your industry and operational scale."
        ],
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
          "Our sales audit approach not only ensures compliance and accuracy but also helps management gain deeper insights into revenue performance and risks."
        ],
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
          "Our approach is tailored to promote transparency, ensure compliance, and support your mission with sound financial reporting."
        ]
      }
    },
    taxation: {
      icon: Calculator,
      title: "Taxation Services",
      description: "Complete tax solutions for individuals and businesses",
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      subcategories: {
        "Income Tax": [
          "Income Tax Return Filing",
          "Tax Consulting Services",
          "Tax Planning Services",
          "Tax Audit",
          "NRI Taxation",
          "Income Tax Litigation Services",
          "TDS Return Filing",
          "TDS Litigation Services",
          "Income Tax Retainership Services"
        ],
        "GST (Goods and Services Tax)": [
          "GST Registration Services",
          "GST Return Filing Services",
          "GST Audit Services",
          "GST Litigation Services",
          "GST Other Services",
          "GST Retainership Services"
        ]
      }
    },
    business: {
      icon: Building2,
      title: "Business Registration & Start-up Services",
      description: "End-to-end business formation and registration services",
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      services: [
        "Start-up Registration",
        "Proprietorship Registration Services",
        "Partnership Registration Services",
        "Limited Liability Partnership (LLP) Registration Services",
        "Private Limited Company Registration Services",
        "Trust Registration Services",
        "Society Registration Services"
      ]
    },
    outsourcing: {
      icon: Globe,
      title: "Outsourcing & Global Capability Services",
      description: "Strategic outsourcing solutions for business optimization",
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      services: [
        "CFO Services",
        "Management Information System (MIS) Services",
        "Project Advisory and Management for Business Transition",
        "Budgeting and Forecasting Services",
        "Operational Advisory",
        "US Taxation Services",
        "Growth and Optimisation",
        "Tax and Regulatory Compliance"
      ]
    },
    startup: {
      icon: Rocket,
      title: "Start-up & Setup Advisory",
      description: "Comprehensive support for new business ventures",
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      services: [
        "Presetup Advisory",
        "Setup Phase Support",
        "Compliance Health Check Services"
      ]
    },
    certification: {
      icon: FileCheck,
      title: "Certification Services",
      description: "Professional certifications for various regulatory requirements",
      color: "bg-[#B0E0E6]",
      borderColor: "border-[#87CEEB]",
      services: [
        "Foreign Remittance Certificate (FRC) Services",
        "VISA Certification Services",
        "RERA Certificate Services",
        "Certificates under the Income Tax Act",
        "Certificates under GST",
        "Certificates under the Companies Act"
      ]
    }
  };

  return (
    <div className="bg-[#FFFFFF] font-sans min-h-screen mt-25">
      {/* SEO Meta Information */}
      <div className="hidden">
        <h1>Professional CA Services Pune - Kulthe & Associates</h1>
        <meta name="description" content="Comprehensive chartered accountant services in Pune. Expert accounting, audit, taxation, GST, business registration, and startup advisory services. ICAI certified professionals with 15+ years experience." />
        <meta name="keywords" content="CA services Pune, chartered accountant services, tax planning Pune, GST services, audit services, business registration, startup advisory, income tax filing, accounting services Pune" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional CA Services Pune - Kulthe & Associates" />
        <meta property="og:description" content="Expert chartered accountant services including taxation, audit, GST, and business advisory. Trusted by 500+ clients in Pune." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://kultheassociates.com/services" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-[#FFFFFF] overflow-hidden" id="hero">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#008080] rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-32 right-16 w-24 h-24 border border-[#87CEEB] rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-[#87CEEB] rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-[#87CEEB] animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border border-[#008080] opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <div className="text-center space-y-8">
            {/* Breadcrumb */}
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex justify-center space-x-2 text-neutral-700">
                <li><a href="/" className="hover:text-[#2b6777] transition-colors">Home</a></li>
                <li className="before:content-['/'] before:mx-2">Services</li>
              </ol>
            </nav>

            <div className={`space-y-6 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#2b6777] leading-tight">
                Kulthe & Associates
                <span className="block relative">
                  PROFESSIONAL CA SERVICES
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4FC3F7] animate-pulse"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
                Comprehensive chartered accountant services for businesses and individuals. 
                From taxation to audit, we've got your financial needs covered.
              </p>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
              {[
                { value: "7+", label: "Service Categories" },
                { value: "35+", label: "Expert Services" },
                { value: "500+", label: "Happy Clients" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100} ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                  <div className="text-3xl sm:text-4xl font-black text-[#2b6777] mb-2 transform group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm text-neutral-700 font-bold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-[#FFFFFF]" id="services-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2b6777]">
              OUR SERVICE CATEGORIES
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Choose from our comprehensive range of professional services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(services).map(([key, service], index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`${service.color} ${service.borderColor} border-2 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    activeCategory === key ? 'border-[#008080] bg-gradient-to-br from-[#008080] to-[#708090] text-[#FFFFFF]' : 'hover:border-[#4FC3F7]'
                  } ${isVisible['services-nav'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}
                >
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                      activeCategory === key ? 'bg-[#FFFFFF]' : 'bg-[#008080]'
                    }`}>
                      <IconComponent className={`w-8 h-8 transition-all ${
                        activeCategory === key ? 'text-[#2b6777]' : 'text-[#FFFFFF]'
                      }`} />
                    </div>
                    <h3 className={`text-lg font-black transition-all ${
                      activeCategory === key ? 'text-[#FFFFFF]' : 'text-[#2b6777]'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-all ${
                      activeCategory === key ? 'text-[#FFFFFF]' : 'text-neutral-700'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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
                    <div className="w-20 h-20 bg-gradient-to-br from-[#008080] to-[#708090] mx-auto rounded-full flex items-center justify-center animate-pulse">
                      <IconComponent className="w-10 h-10 text-[#FFFFFF]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2b6777]">
                      {service.title.toUpperCase()}
                    </h2>
                    <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {service.subcategories ? (
                      Object.entries(service.subcategories).map(
                        ([subcat, subServices], subcatIndex) => (
                          <div
                            key={subcat}
                            className="bg-[#2b6777]  rounded-3xl p-6 sm:p-8 overflow-hidden"
                          >
                            <div
                              className="flex items-center justify-between cursor-pointer mb-6"
                              onClick={() =>
                                toggleService(`${key}-${subcatIndex}`)
                              }
                            >
                              <h3 className="text-2xl font-black text-[#ffffff] flex items-center space-x-3">
                                <CheckCircle className="w-6 h-6 text-[#ffffff] flex-shrink-0" />
                                <span className='font-medium text-[#ffffff]'>{subcat}</span>
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
                                  className="bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-102 flex items-center space-x-3"
                                >
                                  <CheckCircle className="w-5 h-5 text-[#2b6777] flex-shrink-0" />
                                  <span className="font-medium text-[#2b6777]">
                                    {subService}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      )
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-6">
                        {service.services.map((serviceName, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="bg-[#B0E0E6] p-6 rounded-2xl border-2 border-[#87CEEB] hover:border-[#4FC3F7] transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-[#FFFFFF]" />
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-black text-[#2b6777] text-lg">
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

      {/* Why Choose Our Services */}
      <section className="py-20 bg-[#2b6777] text-[#ffffff]" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
              WHY CHOOSE OUR SERVICES?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference with Mumbai's most trusted CA firm
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Professionals",
                description: "ICAI certified chartered accountants with 15+ years of specialized experience across all service areas."
              },
              {
                icon: Shield,
                title: "100% Compliance",
                description: "Zero compliance issues guaranteed. We ensure all filings and services meet regulatory requirements."
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                description: "Fast and efficient service delivery without compromising on quality or accuracy."
              },
              {
                icon: Users,
                title: "Personalized Approach",
                description: "Tailored solutions designed specifically for your business needs and industry requirements."
              },
              {
                icon: TrendingUp,
                title: "Cost-Effective",
                description: "Transparent pricing with maximum value. No hidden costs or surprise charges ever."
              },
              {
                icon: Star,
                title: "Proven Track Record",
                description: "500+ satisfied clients with 98% retention rate speak to our service excellence."
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br from-[#52ab98] bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group ${isVisible['why-choose'] ? `opacity-100 translate-y-0 delay-${index * 100}` : 'opacity-0 translate-y-5'}`}>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2b6777]">
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
                  <div className="w-20 h-20 bg-[#008080] mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10 text-[#FFFFFF]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFFFFF] border-4 border-[#008080] rounded-full flex items-center justify-center">
                    <span className="text-xs font-black text-[#2b6777]">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#2b6777] mb-4">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFFFFF]" id="cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2b6777] leading-tight">
              READY TO GET STARTED WITH
              <span className="block">PROFESSIONAL CA SERVICES?</span>
            </h2>
            
            <p className="text-xl text-neutral-700 leading-relaxed">
              Get expert chartered accountant services with guaranteed compliance and peace of mind. 
              Join 500+ satisfied clients who trust Kulthe & Associates for their financial success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="bg-[#008080] text-[#FFFFFF] px-10 py-5 font-black text-lg hover:bg-[#4FC3F7] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>GET FREE CONSULTATION</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="border-2 border-[#008080] text-[#2b6777] px-10 py-5 font-black text-lg hover:bg-[#008080] hover:text-[#FFFFFF] transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>CALL +91 9623365775</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-[#4FC3F7]">
              {[
                { value: "FREE", label: "Initial Consultation" },
                { value: "24HR", label: "Response Time" },
                { value: "100%", label: "Satisfaction Guarantee" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-black text-[#2b6777] mb-2">{item.value}</div>
                  <div className="text-sm text-neutral-700 font-bold uppercase">{item.label}</div>
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
          "name": "Kulthe & Associates - Professional CA Services",
          "description": "Comprehensive chartered accountant services including accounting, audit, taxation, GST, business registration, and startup advisory services in Pune.",
          "url": "https://kultheassociates.com/services",
          "telephone": "+91-9623365775",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Business District",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra", 
            "postalCode": "411001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.5204",
            "longitude": "73.8567"
          },
          "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
          "priceRange": "$$",
          "serviceType": ["Accounting Services", "Audit Services", "Taxation Services", "GST Services", "Business Registration", "Startup Advisory", "Certification Services"],
          "areaServed": {
            "@type": "City",
            "name": "Pune"
          },
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

export default ServicesPage;