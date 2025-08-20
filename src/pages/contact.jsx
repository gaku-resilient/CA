
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Shield,
  Award,
  Star,
  Calculator
} from 'lucide-react';
import { Helmet } from 'react-helmet';
import debounce from 'lodash/debounce';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactNumber: '',
    natureOfClient: '',
    typeOfService: '',
    serviceBrief: ''
  });
  const [formStatus, setFormStatus] = useState({ loading: false, message: '' });
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
      
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !animatedElements.has(index)) {
          element.classList.add('animate');
          setAnimatedElements(prev => new Set([...prev, index]));
        }
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [animatedElements]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'serviceBrief' && value.split(' ').length > 100) {
      return; // Prevent input if word count exceeds 100
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (!formData.contactName.trim()) return 'Contact Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) return 'Valid email is required';
    if (!/^\+?\d{10,15}$/.test(formData.contactNumber)) return 'Valid phone number is required';
    if (!formData.natureOfClient) return 'Nature of Client is required';
    if (!formData.typeOfService) return 'Type of Service is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setFormStatus({ loading: false, message: error });
      return;
    }

    setFormStatus({ loading: true, message: '' });
    try {
      // Send form data to Formspree endpoint
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Contact Form Submission from Vittam Website', // Customize email subject
        })
      });

      if (response.ok) {
        setFormStatus({ loading: false, message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({
          contactName: '',
          contactEmail: '',
          contactNumber: '',
          natureOfClient: '',
          typeOfService: '',
          serviceBrief: ''
        });
      } else {
        const errorData = await response.json();
        setFormStatus({ loading: false, message: `Error: ${errorData.error || 'Failed to send message. Please try again.'}` });
      }
    } catch (error) {
      setFormStatus({ loading: false, message: 'Error sending message. Please try again later.' });
    }
  };

  const services = [
    'Tax Planning & Filing',
    'Audit Services',
    'Business Consulting',
    'GST Registration',
    'Company Registration',
    'Financial Advisory',
    'Other'
  ];

  const natureOfClientOptions = [
    'Indian Corporate',
    'Indian CA Firm',
    'Indian Others',
    'Foreign Corporate',
    'Foreign CA Firm',
    'Foreign Others'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'PHONE',
      primary: '+91 98765 43210',
      secondary: '+91 22 2345 6789',
      color: 'bg-black'
    },
    {
      icon: Mail,
      title: 'EMAIL',
      primary: 'info@vittam.com',
      secondary: 'ca@vittam.com',
      color: 'bg-black'
    },
    {
      icon: MapPin,
      title: 'OFFICE',
      primary: '123 Business District',
      secondary: 'Nariman Point, Mumbai 400021',
      color: 'bg-black'
    },
    {
      icon: Clock,
      title: 'HOURS',
      primary: 'Mon-Fri: 9:00 AM - 7:00 PM',
      secondary: 'Sat: 9:00 AM - 5:00 PM',
      color: 'bg-black'
    }
  ];

  return (
    <div className="bg-[#ffffff] font-roboto min-h-screen overflow-x-hidden pt-10">
      <Helmet>
        <title>Contact Vittam Chartered Accountants - Mumbai's Leading CA Firm</title>
        <meta name="description" content="Contact Vittam Chartered Accountants in Mumbai. Expert CA services, tax planning, audit services. Call +91 98765 43210 or email info@vittam.com. Free consultation available." />
        <meta name="keywords" content="contact chartered accountant Mumbai, CA firm contact, tax consultant Mumbai, audit services contact, business consulting Mumbai" />
      </Helmet>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5 z-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full border-4 border-[#0d53a3]"
          style={{
            animation: 'vittam-spin 25s linear infinite',
            transform: `translateY(${isScrolled ? -20 : 0}px)`,
            transition: 'transform 0.6s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-16 w-24 h-24 rounded-full border-3 border-[#4676b5]"
          style={{
            animation: 'vittam-pulse 3s ease-in-out infinite',
            transform: `translateX(${isScrolled ? 15 : 0}px)`,
            transition: 'transform 0.8s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-20 h-20 border-2 border-[#c8d8e4] rotate-45"
          style={{
            animation: 'vittam-bounce 4s ease-in-out infinite',
            transform: `rotate(${isScrolled ? 90 : 45}deg)`,
            transition: 'transform 0.7s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full border-2 border-[#2b4677]"
          style={{
            animation: 'vittam-pulse 2.5s ease-in-out infinite reverse',
            transform: `scale(${isScrolled ? 1.2 : 1})`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
      </div>

      <section className="relative min-h-[70vh] sm:min-h-[85vh] bg-gradient-to-br from-[#ffffff] via-[#f2f2f2] to-[#c8d8e4] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24">
          <div className="text-center space-y-8 sm:space-y-10" data-animate>
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex justify-center space-x-2 text-neutral-700">
                <li><a href="/" className="hover:text-[#2b5477] transition-colors duration-300" aria-label="Go to homepage">Home</a></li>
                <li className="before:content-['/'] before:mx-2 text-neutral-700" aria-current="page">Contact Us</li>
              </ol>
            </nav>

            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight font-roboto">
                CONTACT
                <span className="block relative text-black font-roboto">
                  Vittam Integrity Services
                  <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 h-1.5 bg-[#182d41] animate-pulse rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed font-medium">
                Ready to transform your financial future? Get in touch with Mumbai's most trusted 
                chartered accountancy firm for expert consultation and seamless service.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto pt-12 sm:pt-16">
              {[
                { value: "24HR", label: "Response Time" },
                { value: "FREE", label: "Consultation" },
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" }
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

      <section className="py-16 sm:py-20 md:py-24 bg-[#f2f2f2]" id="contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20" data-animate>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black">
              GET IN TOUCH
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto font-medium">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${info.color} p-1 rounded-3xl transform hover:scale-105 transition-all duration-500 shadow-2xl`}
                data-animate
                style={{
                  opacity: animatedElements.has(index) ? 1 : 0,
                  transform: `translateY(${animatedElements.has(index) ? 0 : 50}px)`,
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className="bg-[#ffffff] p-6 sm:p-8 rounded-3xl h-full space-y-6 sm:space-y-8 hover:bg-opacity-95 transition-all">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${info.color} mx-auto flex items-center justify-center rounded-full shadow-lg group-hover:rotate-12 transition-transform`}>
                      <info.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#ffffff]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-black">{info.title}</h3>
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <p className="text-base sm:text-lg font-bold text-black">{info.primary}</p>
                    <p className="text-sm sm:text-base text-neutral-700 font-medium">{info.secondary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#ffffff]" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8 sm:space-y-10" data-animate>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
                  SEND US A MESSAGE
                </h2>
                <div className="w-20 sm:w-24 h-1.5 bg-[#4c7cb9] rounded-full"></div>
                <p className="text-base sm:text-lg text-neutral-700 font-medium">
                  Fill out the form below and we'll get back to you within 24 hours with expert advice tailored to your needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {formStatus.message && (
                  <div className={`text-center p-4 rounded-xl ${formStatus.message.includes('success') ? 'bg-green-100 text-blue-400' : 'bg-red-100 text-red-700'}`}>
                    {formStatus.message}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase tracking-wide" htmlFor="contactName">Contact Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700" />
                      <input
                        id="contactName"
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full pl-12 pr-4 py-4 border-2 border-[#c8d8e4] rounded-xl focus:border-[#5273ab] focus:outline-none transition-all duration-300 text-base font-medium"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase tracking-wide" htmlFor="contactEmail">Contact Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700" />
                      <input
                        id="contactEmail"
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full pl-12 pr-4 py-4 border-2 border-[#c8d8e4] rounded-xl focus:border-[#5277ab] focus:outline-none transition-all duration-300 text-base font-medium"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase tracking-wide" htmlFor="contactNumber">Contact Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700" />
                      <input
                        id="contactNumber"
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full pl-12 pr-4 py-4 border-2 border-[#335c7a] rounded-xl focus:border-[#527aab] focus:outline-none transition-all duration-300 text-base font-medium"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black uppercase tracking-wide" htmlFor="natureOfClient">Nature of Client *</label>
                    <select
                      id="natureOfClient"
                      name="natureOfClient"
                      value={formData.natureOfClient}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-4 border-2 border-[#c8d8e4] rounded-xl focus:border-[#5280ab] focus:outline-none transition-all duration-300 text-base font-medium"
                    >
                      <option value="">Select client type</option>
                      {natureOfClientOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase tracking-wide" htmlFor="typeOfService">Type of Service *</label>
                  <select
                    id="typeOfService"
                    name="typeOfService"
                    value={formData.typeOfService}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-4 border-2 border-[#c8d8e4] rounded-xl focus:border-[#5283ab] focus:outline-none transition-all duration-300 text-base font-medium"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-black uppercase tracking-wide" htmlFor="serviceBrief">Nature of Service in Brief (100 words max)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-neutral-700" />
                    <textarea
                      id="serviceBrief"
                      name="serviceBrief"
                      value={formData.serviceBrief}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full pl-12 pr-4 py-4 border-2 border-[#c8d8e4] rounded-xl focus:border-[#528fab] focus:outline-none transition-all duration-300 text-base font-medium resize-none"
                      placeholder="Describe your requirements (100 words max)..."
                    ></textarea>
                    <div className="text-sm text-neutral-700 text-right">
                      Word count: {formData.serviceBrief.split(' ').filter(word => word.length > 0).length}/100
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className={`w-full bg-[#19426c] text-[#ffffff] px-8 py-5 font-black text-lg rounded-xl hover:bg-[#5282ab] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl ${
                    formStatus.loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Submit contact form"
                >
                  <Send className="w-6 h-6" />
                  <span>{formStatus.loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <ArrowRight className="w-6 h-6" />
                </button>

                <div className="flex items-center justify-center space-x-2 text-sm text-neutral-700">
                  <Shield className="w-4 h-4 text-[#19426c]" />
                  <span>Your information is secure and confidential</span>
                </div>
              </form>
            </div>

            <div className="space-y-8 sm:space-y-10" data-animate>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
                  VISIT OUR OFFICE
                </h2>
                <div className="w-20 sm:w-24 h-1.5 bg-[#19426c] rounded-full"></div>
              </div>

              <div className="bg-gradient-to-br from-[#19426c] to-[#5289ab] p-1 rounded-3xl shadow-2xl">
                <div className="bg-[#f2f2f2] rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 text-black mx-auto" />
                    <h3 className="text-2xl font-black text-black">INTERACTIVE MAP</h3>
                    <p className="text-lg text-neutral-700 font-medium">16046, Tower 16, Prestige Song of the South,
Begur Road, Yelanahalli, Bangalore, Karnataka 560068</p>
                    <button className="bg-[#204474] text-[#ffffff] px-6 py-3 rounded-xl font-bold hover:bg-[#5286ab] transition-all duration-300" aria-label="Get directions to office">
                      GET DIRECTIONS
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Calendar, title: "Book Appointment", desc: "Schedule a meeting" },
                  { icon: Globe, title: "Virtual Consultation", desc: "Online meetings available" },
                  { icon: Calculator, title: "Free Assessment", desc: "Initial consultation" },
                  { icon: CheckCircle, title: "Same Day Response", desc: "Quick turnaround" }
                ].map((feature, index) => (
                  <div key={index} className="bg-[#f2f2f2] p-6 rounded-2xl hover:bg-[#ffffff] hover:shadow-lg transition-all duration-300 text-center space-y-3">
                    <feature.icon className="w-8 h-8 text-black mx-auto" />
                    <h4 className="font-bold text-black text-sm">{feature.title}</h4>
                    <p className="text-xs text-neutral-700">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#ffffff] text-black" id="why-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20" data-animate>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              WHY CLIENTS CHOOSE US
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto font-medium">
              Experience the difference that expertise and dedication make
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                icon: Star,
                title: "500+ Satisfied Clients",
                description: "Join hundreds of businesses who trust us with their financial success and compliance needs."
              },
              {
                icon: Clock,
                title: "24-Hour Response",
                description: "We understand urgency in business. Get expert responses to your queries within 24 hours."
              },
              {
                icon: Award,
                title: "ICAI Certified Experts",
                description: "Our team of certified chartered accountants brings 15+ years of industry expertise."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br  bg-[#072a35] backdrop-blur-lg p-8 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 group border border-[#ffffff] border-opacity-30 shadow-md hover:shadow-xl"
                data-animate
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-[#ffffff] bg-opacity-20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                    <item.icon className="w-8 h-8 text-[#072a35]" />
                  </div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="text-base leading-relaxed font-medium opacity-90 text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#f2f2f2]" id="faq">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16" data-animate>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 font-medium">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6" data-animate>
            {[
              {
                question: "How quickly can you respond to my query?",
                answer: "We guarantee a response within 24 hours for all inquiries. For urgent matters, call us directly for immediate assistance."
              },
              {
                question: "Do you offer free initial consultation?",
                answer: "Yes! We provide a complimentary 30-minute consultation to understand your needs and explain how we can help your business."
              },
              {
                question: "What documents should I bring for the meeting?",
                answer: "Bring relevant financial records, previous tax returns, bank statements, and any specific documents related to your inquiry."
              },
              {
                question: "Do you handle both individual and business clients?",
                answer: "Absolutely! We serve individuals, startups, SMEs, and large corporations across various industries with customized solutions."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl border-2 border-[#c8d8e4] hover:border-[#52ab98] transition-all duration-300 shadow-lg hover:shadow-xl">
                <h3 className="text-lg sm:text-xl font-black text-black mb-4">{faq.question}</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#ffffff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-animate>
          <div className="space-y-8 sm:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
              READY TO GET
              <span className="block text-black">STARTED?</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed font-medium max-w-4xl mx-auto">
              Don't wait - secure your financial future today. Contact Mumbai's most trusted 
              chartered accountancy firm and experience the difference expertise makes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8">
              <button className="bg-[#1d3f6e] text-[#ffffff] px-12 py-6 font-black text-xl rounded-xl hover:bg-[#5280ab] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl" aria-label="Call now to contact us">
                <Phone className="w-6 h-6" />
                <span>CALL NOW</span>
              </button>
              <button className="border-2 border-[#2b6777] text-black px-12 py-6 font-black text-xl rounded-xl hover:bg-[#2b4d77] hover:text-[#ffffff] transition-all duration-300 shadow-xl" aria-label="Book a consultation">
                BOOK CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
        @keyframes vittam-fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate {
          animation: vittam-fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes vittam-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes vittam-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes vittam-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        [data-animate] {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        [data-animate].animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f2f2f2;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #2b6777;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #52ab98;
        }
        
        input:focus, textarea:focus, select:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(43, 103, 119, 0.1);
        }
        
        button {
          position: relative;
          overflow: hidden;
        }
        
        button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        button:hover::before {
          left: 100%;
        }
      `}
      </style>
    </div>
  );
};

export default ContactPage;