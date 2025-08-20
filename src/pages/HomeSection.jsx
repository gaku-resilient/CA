



import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Users, 
  Award, 
  Calculator, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Eye,
  Target,
  Quote,
  Star,
  Phone,
  Mail,
  Calendar,
  X,
  FileText,
  Building2
} from 'lucide-react';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [visibleBenefits, setVisibleBenefits] = useState([]);

  // Slide data for hero section
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
      id: 'Shraddha',
      name: 'Shraddha Kamath',
      position: 'Founder & Partner',
      qualifications: 'M.Com, CA, CMA',
      experience: '15+ Years',
      image: '/Shraddha.jpg',
      specializations: [
        'Financial Statement Analysis & Audits',
        'Internal Control Frameworks',
        'Regulatory & Tax Compliance',
        'Tax Planning & Advisory'
      ],
      description: 'Qualified Chartered Accountant and Cost Accountant with extensive experience in financial management, compliance, taxation, and business advisory services across diverse industries including Infrastructure, Technology Services, and MNCs.',
      fullBio: 'Shraddha Kamath is a qualified Chartered Accountant and Cost Accountant with over 15 years of experience in financial management, compliance, taxation, and business advisory services. She has a proven track record of working across diverse industries — including Infrastructure, Technology Services, and Multinational Corporations — and possesses deep expertise in managing financial operations under multiple accounting frameworks such as Indian GAAP, US GAAP, and IFRS.',
      skills: ['Financial Modelling', 'Advanced Excel Analytics', 'Management Reporting', 'PowerPoint Presentations', 'Internal Controls', 'GAAP Compliance'],
      currentRole: 'Senior Manager – Finance at Cargill Business Services'
    },
    {
      id: 'Sunita',
      name: 'CA Sunita Kulthe',
      position: 'Founder & Partner',
      qualifications: 'B.Com, FCA, Dip IFRS (London), ASA (CPA Australia)',
      experience: '15+ Years',
      image: '/Sunita.jpg',
      specializations: [
        'Direct & Indirect Taxation',
        'Tax Litigation & Appeals',
        'Statutory Audits',
        'Business Advisory Services'
      ],
      description: 'Fellow Chartered Accountant with extensive expertise in taxation, audit, and business advisory. Recognized for deep understanding of complex tax litigation and analytical audit approach with strong legal acumen.',
      fullBio: 'CA Sunita Kulthe is a highly respected Chartered Accountant and the Founder of both Kulthe & Associates and Vittam Integrity Services. With over 15 years of post-qualification experience, she brings extensive expertise in direct and indirect taxation, audit, litigation, and business advisory services.',
      skills: ['Tax Litigation', 'Appellate Proceedings', 'Statutory Audits', 'NRI Taxation', 'Real Estate Advisory', 'Trust & NGO Compliance'],
      currentRole: 'Founder – Kulthe & Associates'
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

  // Testimonials auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animations
  useEffect(() => {
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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Button handlers
  const handleGetStarted = () => {
    const benefitsSection = document.getElementById('benefits-section');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowContactModal(true);
    }
  };

  const handleScheduleCall = () => {
    setShowContactModal(true);
  };

  const handleBookConsultation = () => {
    setShowContactModal(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentSlideData = slides[currentSlide];

  // Contact Modal Component
  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#123956]">Contact Us</h3>
          <button 
            onClick={() => setShowContactModal(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-200"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <a 
            href="tel:+919623365775" 
            className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-all duration-200 group"
          >
            <Phone className="w-5 h-5 text-[#123956] group-hover:scale-110 transition-transform" />
            <span>+91 962-336-5775</span>
          </a>
          <a 
            href="mailto:vittamintegrityservices@gmail.com" 
            className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-all duration-200 group"
          >
            <Mail className="w-5 h-5 text-[#123956] group-hover:scale-110 transition-transform" />
            <span>vittamintegrityservices@gmail.com</span>
          </a>
          <button 
            onClick={() => {
              setShowContactModal(false);
              window.open('https://calendly.com/vittamintegrity', '_blank');
            }}
            className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-all duration-200 w-full group"
          >
            <Calendar className="w-5 h-5 text-[#123956] group-hover:scale-110 transition-transform" />
            <span>Schedule a Call</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <div className=" bg-white overflow-hidden  ">
        {/* Hero Section */}
        <div className="relative min-h-[80vh] sm:min-h-screen overflow-hidden pt-24 sm:pt-32">
  {/* Background Image with Parallax Effect */}
  <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
    <div
      className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[6000ms] ease-out"
      style={{
        backgroundImage: `url(${currentSlideData.bgImage})`,
        transform: isLoaded ? 'scale(100%)' : 'scale(105%)',
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#123956]/95 via-[#123956]/85 to-[#123956]/90" />
    
    {/* Geometric Pattern Overlay */}
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  </div>

  {/* Floating Animation Elements */}
  <div className="absolute inset-0 pointer-events-none hidden lg:block">
    <div
      className="absolute top-16 left-8 w-24 h-24 border-2 border-white/20 rounded-full opacity-60"
      style={{ animationDuration: '18s' }}
    />
    <div className="absolute top-32 right-16 w-20 h-20

 border border-white/30 rounded-full animate-pulse" />
    <div className="absolute bottom-24 left-1/4 w-12 h-12 border-2 border-white/20 rounded-full" />
    
    {/* Floating Particles */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full"
        style={{
          top: `${20 + i * 10}%`,
          left: `${10 + i * 15}%`,
          animationDelay: `${i * 0.4}s`,
          animationDuration: `${3 + i}s`,
        }}
      />
    ))}
  </div>

  {/* Main Content */}
  <div className="relative z-10 min-h-[80vh] sm:min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <div className="max-w-6xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div
          className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm">
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="truncate">{currentSlideData.accent}</span>
          </div>
          
          {/* Dynamic Title */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight tracking-tight">
              {currentSlideData.title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transform transition-all duration-600 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {word}{' '}
                  {index === 2 && (
                    <div className="block">
                      <span className="relative">
                        {currentSlideData.title.split(' ').slice(3).join(' ')}
                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#52ab98]" />
                      </span>
                    </div>
                  )}
                </span>
              ))}
            </h1>
            
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl space-y-2">
              <p
                className={`transform transition-all duration-600 delay-400 line-clamp-3 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {currentSlideData.subtitle}
              </p>
              <p
                className={`transform transition-all duration-600 delay-600 line-clamp-3 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {currentSlideData.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transform transition-all duration-600 delay-800 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <a href="/contact">
              <button
                className="group w-full sm:w-auto bg-white text-[#123956] px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-lg hover:bg-[#123956] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#52ab98] active:scale-95"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
            <a href="tel:+919623365775">
              <button
                className="w-full sm:w-auto border-2 border-white text-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-lg hover:bg-white hover:text-[#123956] transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#52ab98] active:scale-95"
              >
                SCHEDULE CALL
              </button>
            </a>
          </div>

          {/* Dynamic Stats */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t-2 border-white/30 transform transition-all duration-600 delay-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {Object.entries(currentSlideData.stats).map(([key, value], index) => (
              <div key={key} className="text-center group cursor-pointer">
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 transform group-hover:scale-105 transition-transform duration-300">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-semibold uppercase tracking-wide truncate">
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

        {/* Right Content - Professional Card */}
        <div
          className={`relative mt-6 sm:mt-8 lg:mt-0 transform transition-all duration-1000 delay-200 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="relative z-10 transform hover:scale-105 transition-all duration-500 min-w-0">
            <div className="bg-white/10 backdrop-blur-lg p-1 shadow-lg border border-white/20 rounded-lg">
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-lg space-y-4 sm:space-y-6">
                
                {/* Professional Avatar */}
                <div className="flex items-center space-x-3 sm:space-x-4 border-b-2 border-gray-200 pb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#49779a] to-[#123956] flex items-center justify-center rounded-full transform hover:rotate-12 transition-transform duration-300 shadow-md flex-shrink-0">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#123956] truncate">Vittam Integrity Services</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide truncate">Expert Financial Solutions</p>
                  </div>
                </div>

                {/* Service Cards */}
                <div className="space-y-3">
                  {[
                    { icon: TrendingUp, title: "TAX PLANNING", status: "AVAILABLE" },
                    { icon: Shield, title: "AUDIT SERVICES", status: "AVAILABLE" },
                    { icon: Calculator, title: "BUSINESS CONSULTING", status: "AVAILABLE" },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border-2 border-gray-200 hover:border-[#2b6777] transition-all duration-300 group hover:shadow-md transform hover:scale-102"
                    >
                      <div className="flex items-center space-x-3 min-w-0 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#2b6777] group-hover:to-[#33495a] flex items-center justify-center rounded-full transition-all duration-300 shadow-sm flex-shrink-0">
                          <service.icon className="w-5 h-5 text-[#123956] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="font-semibold text-sm text-[#123956] truncate">{service.title}</span>
                      </div>
                      <span className="text-[#123956] font-semibold text-xs whitespace-nowrap">✓ {service.status}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact">
                  <button
                    className="w-full bg-gradient-to-r from-[#2b6777] to-[#123956] text-white py-2.5 sm:py-3 font-semibold text-sm sm:text-base rounded-lg hover:from-[#123956] hover:to-[#2b6777] transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#52ab98] active:scale-95"
                  >
                    Book Financial Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div
            className="absolute -top-6 -right-6 w-12 h-12 border-4 border-white/30 animate-spin backdrop-blur-sm hidden lg:flex items-center justify-center rounded-full"
            style={{ animationDuration: '8s' }}
          >
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-10 h-10 border-2 border-white/40 backdrop-blur-sm hidden lg:flex items-center justify-center rounded-full">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Slider Controls */}
  <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
    <div className="flex items-center space-x-3 sm:space-x-4">
      <button
        onClick={prevSlide}
        className="p-2 sm:p-2.5 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#52ab98] active:scale-95"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      <div className="flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            } focus:outline-none focus:ring-2 focus:ring-[#52ab98]`}
          />
        ))}
      </div>
      
      <button
        onClick={nextSlide}
        className="p-2 sm:p-2.5 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#52ab98] active:scale-95"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  </div>
</div>

        {/* Social Proof Section */}
        <section id="benefits-section" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDuration: '7s' }}></div>
            <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s', animationDuration: '7s' }}></div>
            <div className="absolute top-40 left-40 w-64 sm:w-80 h-64 sm:h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
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
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 group-hover:border-teal-600">
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
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm">{benefit.desc}</p>
                      
                      <div className="mt-3 sm:mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
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
              <div className="inline-flex items-center space-x-4 sm:space-x-8 bg-gradient-to-r from-teal-50 to-blue-50 px-4 sm:px-8 py-3 sm:py-4 rounded-full border border-gray-200">
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
                  <p className="text-base sm:text-lg text-blue-200 mb-4 sm:mb-6 leading-relaxed">
                    Our firm name reflects the values we stand for. Derived from the Sanskrit word "Vittam" (वित्तम्) meaning wealth or finance, 
                    and paired with "Integrity Services", our identity represents a seamless blend of financial expertise and unwavering ethical commitment.
                  </p>
                  <p className="text-base sm:text-lg text-blue-200 leading-relaxed">
                    Vittam Integrity Services is a professional services firm led by experienced Chartered Accountants, 
                    bringing together over 30 years of combined expertise in delivering comprehensive financial solutions across taxation, audits, and business advisory.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/15 transition-all duration-300">
                    <Eye className="w-6 sm:w-8 h-6 sm:h-8 text-blue-300 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Vision</h3>
                    <p className="text-xs sm:text-sm text-blue-200">
                      To be globally respected leaders in financial and tax advisory, built on integrity and excellence, 
                      empowering clients worldwide through cutting-edge expertise.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/15 transition-all duration-300">
                    <Target className="w-6 sm:w-8 h-6 sm:h-8 text-blue-300 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Mission</h3>
                    <p className="text-xs sm:text-sm text-blue-200">
                      To provide high-quality financial and tax advisory solutions rooted in integrity, 
                      empowering businesses through personalized services and deep technical expertise.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0A1F3A] p-4 sm:p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Our Motto</h3>
                  <p className="text-base sm:text-lg italic text-blue-200">"Delivering value with unwavering Integrity"</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Commitment</h3>
                <p className="text-sm sm:text-base text-blue-200 leading-relaxed mb-4 sm:mb-6">
                  At Vittam Integrity Services, we combine deep industry knowledge with a client-centric approach to deliver tailored financial solutions. 
                  Our team is dedicated to ensuring compliance, optimizing tax strategies, and driving business success.
                </p>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="inline-flex items-center bg-white text-[#123956] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123956] to-slate-900">Expertise</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to your business needs, delivered with precision and integrity
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {expertiseAreas.map((expertise, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="p-4 sm:p-6">
                    <expertise.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#123956] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#123956] transition-colors duration-300">
                      {expertise.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{expertise.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center bg-[#123956] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-[#0F2A42] transition-all duration-300 hover:scale-105 group"
              >
                Contact Us for Expert Guidance
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-8 sm:top-10 left-8 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 border border-gray-200 rounded-full animate-spin opacity-20" style={{animationDuration: '30s'}}></div>
            <div className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 border border-gray-200 rounded-full animate-spin opacity-20" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
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
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative">
                    <div className="h-56 sm:h-64 bg-gradient-to-br from-[#123956] to-slate-900 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                      
                      {/* Enhanced Image Container */}
                      <div className="w-32 sm:w-40 h-32 sm:h-40 bg-white rounded-full flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-xl border-4 border-white">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-full">
                          <Users className="w-16 sm:w-20 h-16 sm:h-20 text-[#123956]" />
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-[#123956] shadow-lg animate-pulse">
                      {member.experience}
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view details
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#123956] transition-colors duration-300">{member.name}</h3>
                    <p className="text-[#123956] font-semibold mb-1">{member.position}</p>
                    <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">{member.qualifications}</p>
                    
                    <p className="text-slate-600 leading-relaxed text-sm mb-4 sm:mb-6 line-clamp-3">{member.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 sm:mb-3">Key Specializations:</h4>
                      <div className="grid grid-cols-1 gap-2">
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
              <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-500">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-slate-900" />
                </button>

                <div className="relative">
                  <div className="h-56 sm:h-64 md:h-80 bg-gradient-to-br from-[#123956] to-slate-900 flex items-center justify-center relative overflow-hidden">
                    <div className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <Users className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 text-[#123956]" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{selectedMember.name}</h2>
                      <p className="text-blue-200 text-base sm:text-lg font-semibold">{selectedMember.position}</p>
                      <p className="text-blue-200 text-xs sm:text-sm">{selectedMember.qualifications}</p>
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
                        <div className="bg-teal-50 p-3 sm:p-4 rounded-xl border border-gray-200">
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
                            <div key={index} className="flex items-start bg-gray-50 p-2 sm:p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
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
                                className="bg-gradient-to-r from-[#123956] to-slate-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 bg-gradient-to-r from-teal-50 to-blue-50 p-4 sm:p-6 rounded-xl text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Connect with {selectedMember.name.split(' ')[0]}</h3>
                    <p className="text-slate-600 text-sm sm:text-base mb-3 sm:mb-4">Ready to discuss your financial needs?</p>
                    <button
                      onClick={() => {
                        setSelectedMember(null);
                        setShowContactModal(true);
                      }}
                      className="inline-flex bg-[#123956] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#0F2A42] transition-all duration-300 hover:scale-105"
                    >
                      Schedule Consultation
                    </button>
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
                href="mailto:vittamintegrityservices@gmail.com"
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-[#123956] mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-2">Email Us</h3>
                <p className="text-c8d8e4 text-sm sm:text-base">vittamintegrityservices@gmail.com</p>
              </a>
              <a
                href="https://vittamintegrityservices/contact"
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
                href="https://vittamintegrityservices/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#123956] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-f2f2f2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
              >
                Schedule Free Consultation
                <Calendar className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transform group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="tel:+919623365775"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#123956] text-[#123956] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:transition-all duration-300 hover:scale-105"
              >
                Call Now
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