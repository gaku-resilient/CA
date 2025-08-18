import React, { useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  Building,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Calculator,
  Star,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Target,
  Heart,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const TeamPage = () => {
  const [activePartner, setActivePartner] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setAnimatedElements(prev => new Set([...prev, index]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    {
      id: 'shraddha',
      name: 'Shraddha Kamath',
      title: 'Founder & Partner',
      subtitle: 'Vittam Integrity Services',
      credentials: 'M.Com, CA, CMA',
      experience: '15+ Years',
      currentRole: 'Senior Manager – Finance at Cargill Business Services',
      image: 'src/assets/Shraddha.jpg',
      specializations: [
        'Financial statement analysis and audits',
        'Designing and strengthening internal control frameworks',
        'Regulatory and tax compliance management',
        'Tax planning and advisory for businesses'
      ],
      expertise: [
        'Financial Management',
        'Compliance & Taxation',
        'Business Advisory',
        'Financial Modelling',
        'Advanced Excel Analytics',
        'Management Reporting',
        'PowerPoint Presentations'
      ],
      frameworks: ['Indian GAAP', 'US GAAP', 'IFRS'],
      industries: ['Infrastructure', 'Technology Services', 'Multinational Corporations'],
      previousCompanies: ['Hewlett Packard Enterprise', 'AP Moller Maersk', 'Ernst & Young', 'Cargill Business Services'],
      description: 'Shraddha Kamath is a qualified Chartered Accountant and Cost Accountant with over 15 years of experience in financial management, compliance, taxation, and business advisory services.',
      keyStrengths: ['Go-getter attitude', 'Strong teamwork', 'Creative problem-solving', 'Technical expertise', 'Solutions-driven approach'],
      color: 'from-[#173e66] to-[#173b5d]'
    },
    {
      id: 'sunita',
      name: 'CA Sunita Kulthe',
      title: 'Founder & Partner',
      subtitle: 'Vittam Integrity Services & Kulthe & Associates',
      credentials: 'B.Com, FCA, Dip IFRS (London), ASA (CPA Australia)',
      experience: '13+ Years Post-Qualification',
      currentRole: 'Fellow Chartered Accountant',
      image: 'src/assets/Sunita.jpg',
      specializations: [
        'Direct and indirect taxation',
        'Audit and assurance services',
        'Tax litigation and appellate proceedings',
        'Business advisory and compliance'
      ],
      expertise: [
        'Complex Tax Litigation',
        'Assessment Proceedings',
        'Appellate Matters',
        'Statutory Audits',
        'International Tax Laws',
        'Compliance Management',
        'Business Strategy'
      ],
      frameworks: ['Indian Tax Laws', 'International Tax Laws', 'IFRS', 'Indian GAAP'],
      industries: ['Real Estate', 'NGOs/Trusts', 'Hospitality', 'NRI Taxation'],
      previousCompanies: ['Kulthe & Associates (Founder)', 'Various MNC Clients', 'International Tax Advisory'],
      description: 'CA Sunita Kulthe is a highly respected Chartered Accountant and the Founder of both Kulthe & Associates and Vittam Integrity Services.',
      keyStrengths: ['Integrity', 'Foresight', 'Client-focused approach', 'Technical excellence', 'Analytical mindset'],
      color: 'from-[#173b5d] to-[#173e66]'
    }
  ];

  const togglePartnerDetails = (partnerId) => {
    setActivePartner(activePartner === partnerId ? null : partnerId);
  };

  return (
    <div className="bg-[#ffffff] font-roboto min-h-screen">
      {/* SEO Meta Information */}
      <div className="hidden">
        <h1>Meet Our Team - Vittam Chartered Accountants Leadership</h1>
        <meta name="description" content="Meet the expert team at Vittam Chartered Accountants. CA Sunita Kulthe and Shraddha Kamath bring 28+ years combined experience in taxation, audit, and business advisory." />
        <meta name="keywords" content="CA team Mumbai, chartered accountant partners, tax experts Mumbai, audit professionals, business advisory team" />
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5 z-0">
        <div 
          className="absolute top-20 left-10 w-24 h-24 rounded-full border-4 border-[#173e66]"
          style={{
            animation: 'spin 25s linear infinite',
            transform: `translateY(${isScrolled ? -20 : 0}px)`,
            transition: 'transform 0.6s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-16 w-20 h-20 rounded-full border-3 border-[#173b5d]"
          style={{
            animation: 'pulse 3s ease-in-out infinite',
            transform: `translateX(${isScrolled ? 15 : 0}px)`,
            transition: 'transform 0.8s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-[#c8d8e4] rotate-45"
          style={{
            animation: 'bounce 4s ease-in-out infinite',
            transform: `rotate(${isScrolled ? 90 : 45}deg)`,
            transition: 'transform 0.7s ease-out'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] bg-gradient-to-br from-[#ffffff] via-[#f2f2f2] to-[#c8d8e4] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="text-center space-y-6 sm:space-y-8">
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex justify-center space-x-2 text-neutral-700">
                <li><a href="/" className="hover:text-black transition-colors duration-300">Home</a></li>
                <li className="before:content-['/'] before:mx-2 text-neutral-700">Our Team</li>
              </ol>
            </nav>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
                MEET OUR
                <span className="block relative text-black">
                  FOUNDING PARTNERS
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 md:w-36 h-1 bg-[#61a1e0] animate-pulse rounded-full"></div>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-medium">
                Two exceptional chartered accountants with 28+ years of combined expertise, leading Mumbai's most trusted financial services firm.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-8 sm:pt-12">
              {[
                { value: "28+", label: "Combined Experience" },
                { value: "500+", label: "Clients Served" },
                { value: "15+", label: "Industries Covered" },
                { value: "2", label: "Expert Partners" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer p-3 rounded-xl hover:bg-[#ffffff] hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-neutral-700 font-bold uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f2f2f2]" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">
              OUR FOUNDING PARTNERS
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto font-medium">
              Meet the visionary leaders who built Vittam from the ground up
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {partners.map((partner, index) => (
              <div 
                key={partner.id}
                className="bg-gradient-to-br from-[#ffffff] to-[#f2f2f2] rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-500"
                data-animate
                style={{
                  animationDelay: `${index * 0.3}s`,
                  opacity: animatedElements.has(index) ? 1 : 0,
                  transform: `translateY(${animatedElements.has(index) ? 0 : 50}px)`,
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className={`grid ${activePartner === partner.id ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-0 transition-all duration-500`}>
                  {/* Partner Image & Quick Info */}
                  <div className={`bg-gradient-to-br ${partner.color} p-1 ${activePartner === partner.id ? 'lg:col-span-1' : ''}`}>
                    <div className="bg-[#ffffff] p-6 sm:p-8 md:p-10 h-full">
                      <div className={`space-y-6 ${activePartner === partner.id ? 'lg:flex lg:items-start lg:gap-8 lg:space-y-0' : 'text-center lg:text-left'}`}>
                        {/* Profile Image */}
                        <div className={`${activePartner === partner.id ? 'lg:flex-shrink-0' : 'mx-auto lg:mx-0'}`}>
                          <img
                            src={partner.image}
                            alt={`${partner.name} profile`}
                            className={`${activePartner === partner.id ? 'w-24 h-24 sm:w-32 sm:h-32' : 'w-32 h-32 sm:w-40 sm:h-40'} rounded-full object-cover shadow-lg transition-all duration-500`}
                          />
                        </div>

                        {/* Basic Info */}
                        <div className={`space-y-3 ${activePartner === partner.id ? 'lg:flex-1' : ''}`}>
                          <h3 className={`${activePartner === partner.id ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-3xl'} font-black text-black transition-all duration-500`}>
                            {partner.name}
                          </h3>
                          <div className="space-y-2">
                            <p className={`${activePartner === partner.id ? 'text-sm sm:text-base' : 'text-base sm:text-lg'} font-bold text-[#173b5d] transition-all duration-500`}>{partner.title}</p>
                            <p className={`${activePartner === partner.id ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'} text-neutral-700 font-medium transition-all duration-500`}>{partner.subtitle}</p>
                            <p className={`${activePartner === partner.id ? 'text-xs' : 'text-xs sm:text-sm'} text-neutral-600 font-bold transition-all duration-500`}>{partner.credentials}</p>
                          </div>

                          {/* Quick Stats - Only show when collapsed or on mobile */}
                          {activePartner !== partner.id && (
                            <div className="grid grid-cols-2 gap-3 animate-fadeIn">
                              <div className="bg-[#f2f2f2] p-3 rounded-lg text-center">
                                <div className="text-xl font-black text-black">{partner.experience}</div>
                                <div className="text-xs font-bold text-neutral-700 uppercase">Experience</div>
                              </div>
                              <div className="bg-[#f2f2f2] p-3 rounded-lg text-center">
                                <div className="text-xl font-black text-black">{partner.industries.length}+</div>
                                <div className="text-xs font-bold text-neutral-700 uppercase">Industries</div>
                              </div>
                            </div>
                          )}

                          {/* Inline stats for expanded view */}
                          {activePartner === partner.id && (
                            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#61a1e0] rounded-full"></div>
                                <span className="font-bold text-black">{partner.experience} Experience</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#61a1e0] rounded-full"></div>
                                <span className="font-bold text-black">{partner.industries.length}+ Industries</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partner Details - Only show when collapsed */}
                  {activePartner !== partner.id && (
                    <div className="p-6 sm:p-8 md:p-10 space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-lg sm:text-xl font-black text-black">Professional Overview</h4>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                          {partner.description}
                        </p>
                      </div>

                      <div className="bg-[#f2f2f2] p-4 sm:p-5 rounded-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <Briefcase className="w-5 h-5 text-black" />
                          <h5 className="text-base font-black text-black">Current Role</h5>
                        </div>
                        <p className="text-sm text-neutral-700 font-medium">{partner.currentRole}</p>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-base font-black text-black flex items-center space-x-2">
                          <Target className="w-4 h-4" />
                          <span>Core Specializations</span>
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {partner.specializations.slice(0, 3).map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-start space-x-2 p-2 bg-[#ffffff] rounded-lg border-l-4 border-[#173b5d]">
                              <CheckCircle className="w-4 h-4 text-[#173b5d] mt-0.5 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-neutral-700 font-medium">{spec}</span>
                            </div>
                          ))}
                          {partner.specializations.length > 3 && (
                            <div className="text-xs text-neutral-500 font-medium text-center">
                              +{partner.specializations.length - 3} more specializations
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Expanded Details */}
                {activePartner === partner.id && (
                  <div className="px-6 sm:px-8 md:px-10 py-6 space-y-6 animate-fadeIn">
                    <div className="bg-[#f2f2f2] p-4 sm:p-5 rounded-xl">
                      <h4 className="text-lg sm:text-xl font-black text-black mb-3">Professional Overview</h4>
                      <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                        {partner.description}
                      </p>
                    </div>

                    <div className="bg-[#ffffff] p-4 sm:p-5 rounded-xl border-2 border-[#c8d8e4]">
                      <div className="flex items-center space-x-2 mb-2">
                        <Briefcase className="w-5 h-5 text-black" />
                        <h5 className="text-base font-black text-black">Current Role</h5>
                      </div>
                      <p className="text-sm text-neutral-700 font-medium">{partner.currentRole}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="text-base font-black text-black flex items-center space-x-2">
                          <Target className="w-4 h-4" />
                          <span>Core Specializations</span>
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {partner.specializations.map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-start space-x-2 p-2 bg-[#ffffff] rounded-lg border-l-4 border-[#173b5d]">
                              <CheckCircle className="w-4 h-4 text-[#173b5d] mt-0.5 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-neutral-700 font-medium">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-base font-black text-black flex items-center space-x-2">
                          <Award className="w-4 h-4" />
                          <span>Technical Expertise</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {partner.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="bg-[#61a1e0] text-[#ffffff] px-3 py-1 rounded-full text-xs font-bold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="text-base font-black text-black flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Accounting Frameworks</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {partner.frameworks.map((framework, frameworkIndex) => (
                            <span key={frameworkIndex} className="bg-[#173e66] text-[#ffffff] px-3 py-1 rounded-full text-xs font-bold">
                              {framework}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-base font-black text-black flex items-center space-x-2">
                          <Star className="w-4 h-4" />
                          <span>Key Strengths</span>
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {partner.keyStrengths.map((strength, strengthIndex) => (
                            <div key={strengthIndex} className="flex items-center space-x-2 p-2 bg-[#ffffff] rounded-lg border-l-4 border-[#173e66]">
                              <Heart className="w-3 h-3 text-black" />
                              <span className="text-xs text-neutral-700 font-medium">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-base font-black text-black flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span>Industries Served</span>
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {partner.industries.map((industry, industryIndex) => (
                          <div key={industryIndex} className="flex items-center space-x-2 p-2 bg-[#ffffff] rounded-lg border border-[#c8d8e4]">
                            <TrendingUp className="w-3 h-3 text-[#113f5b]" />
                            <span className="text-xs text-neutral-700 font-medium">{industry}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-base font-black text-black flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span>Professional Journey</span>
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {partner.previousCompanies.map((company, companyIndex) => (
                          <div key={companyIndex} className="flex items-center space-x-2 p-3 bg-gradient-to-r from-[#f2f2f2] to-[#ffffff] rounded-lg">
                            <div className="w-2 h-2 bg-[#61a1e0] rounded-full"></div>
                            <span className="text-xs text-neutral-700 font-medium">{company}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Toggle Button - Moved to bottom for expanded view */}
                <div className="px-6 sm:px-8 md:px-10 py-4">
                  <button
                    onClick={() => togglePartnerDetails(partner.id)}
                    className="w-full sm:w-auto min-w-[180px] bg-[#124069] text-[#ffffff] px-5 py-3 font-bold text-sm rounded-lg hover:bg-[#61a1e0] transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                  >
                    <span>{activePartner === partner.id ? 'SHOW LESS' : 'VIEW DETAILED PROFILE'}</span>
                    {activePartner === partner.id ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Leadership Matters */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#213b60] text-[#ffffff]" id="leadership-value">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
              WHY OUR LEADERSHIP MATTERS
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium">
              Experience the difference that expert leadership and partnership brings to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "Proven Track Record",
                description: "28+ years of combined experience across diverse industries and complex financial challenges."
              },
              {
                icon: Shield,
                title: "Integrity & Trust",
                description: "Built on unwavering ethical standards and transparent communication with every client interaction."
              },
              {
                icon: Users,
                title: "Client-Centric Approach",
                description: "Personal attention from founding partners ensures your business receives the expertise it deserves."
              },
              {
                icon: TrendingUp,
                title: "Strategic Vision",
                description: "Forward-thinking leaders who anticipate market changes and position clients for long-term success."
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "International experience with multinational corporations brings world-class expertise to local businesses."
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description: "Commitment to staying current with evolving regulations, technologies, and best practices."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[#5288ab] bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 group border border-[#ffffff] border-opacity-20 shadow-md hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#ffffff] bg-opacity-20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-md">
                    <item.icon className="w-6 h-6 text-[#0e2b3e]" />
                  </div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="text-sm leading-relaxed font-medium opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#ffffff]" id="partnership-approach">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">
              OUR PARTNERSHIP APPROACH
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium">
              How our founding partners work together to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-[#f2f2f2] to-[#ffffff] p-6 rounded-2xl shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#247fb8] to-[#0a2a52] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#ffffff]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-black">Complementary Expertise</h3>
                <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                  Shraddha's corporate finance and compliance expertise perfectly complements Sunita's taxation and litigation specialization.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f2f2f2] to-[#ffffff] p-6 rounded-2xl shadow-md">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#247fb8] to-[#0a2a52] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#ffffff]" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-black">Shared Values</h3>
                <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                  Both partners share a commitment to integrity, excellence, and client success, ensuring consistent quality and ethical standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f2f2f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
              READY TO WORK WITH
              <span className="block text-black">MUMBAI'S BEST?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed font-medium max-w-3xl mx-auto">
              Get direct access to our founding partners for expert financial guidance, comprehensive compliance solutions, and strategic business advisory.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6">
              <button className="bg-[#173e66] text-[#ffffff] px-8 sm:px-10 py-4 font-black text-base sm:text-lg rounded-lg hover:bg-[#61a1e0] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>SCHEDULE CONSULTATION</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#173e66] text-black px-8 sm:px-10 py-4 font-black text-base sm:text-lg rounded-lg hover:bg-[#173e66] hover:text-[#ffffff] transition-all duration-300 shadow-lg">
                CALL +91 98765 43210
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t-4 border-[#527cab] rounded-full">
              {[
                { value: "DIRECT", label: "Partner Access" },
                { value: "FREE", label: "Initial Consultation" },
                { value: "24HR", label: "Response Time" }
              ].map((item, index) => (
                <div key={index} className="text-center p-3 rounded-lg hover:bg-[#ffffff] transition-all duration-300">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-2">{item.value}</div>
                  <div className="text-xs sm:text-sm text-neutral-700 font-bold uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes team-fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate {
          animation: team-fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes team-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes team-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes team-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        [data-animate] {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease-out;
        }
        
        [data-animate].animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        button:hover {
          transform: translateY(-1px);
        }
        
        ::selection {
          background: rgba(43, 103, 119, 0.2);
          color: #173e66;
        }
        
        ::-moz-selection {
          background: rgba(43, 103, 119, 0.2);
          color: #173e66;
        }

        @media (max-width: 640px) {
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
          .lg\\:grid-cols-3 {
            grid-template-columns: 1fr;
          }
          .min-w-[180px] {
            width: 100%;
          }
        }
      `}</style>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Meet Our Team - Vittam Chartered Accountants",
          "description": "Meet the expert founding partners at Vittam Chartered Accountants - CA Sunita Kulthe and Shraddha Kamath with 28+ years combined experience.",
          "url": "https://vittam.com/team",
          "mainEntity": [
            {
              "@type": "Person",
              "name": "Shraddha Kamath",
              "jobTitle": "Founder & Partner",
              "worksFor": {
                "@type": "Organization",
                "name": "Vittam Integrity Services"
              },
              "alumniOf": "M.Com, CA, CMA",
              "knowsAbout": ["Financial Management", "Compliance", "Taxation", "Business Advisory"],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Chartered Accountant",
                "experienceRequirements": "15+ years"
              }
            },
            {
              "@type": "Person", 
              "name": "CA Sunita Kulthe",
              "jobTitle": "Founder & Partner",
              "worksFor": {
                "@type": "Organization",
                "name": "Vittam Integrity Services"
              },
              "alumniOf": "B.Com, FCA, Dip IFRS (London), ASA (CPA Australia)",
              "knowsAbout": ["Taxation", "Audit", "Litigation", "Business Advisory"],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Fellow Chartered Accountant",
                "experienceRequirements": "13+ years"
              }
            }
          ]
        })
      }} />
    </div>
  );
};

export default TeamPage;