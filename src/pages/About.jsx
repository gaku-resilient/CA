import React, { useState } from 'react';
import { Shield, Award, Users, TrendingUp, Target, Eye, Heart, Calculator, CheckCircle, Clock, Star, ArrowRight, Building, Globe, BookOpen, Briefcase } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="bg-white">
      {/* SEO Meta Information (would be in head in real implementation) */}
      <div className="hidden">
        <h1>About Vittam Chartered Accountants - Mumbai's Leading CA Firm</h1>
        <meta name="description" content="Discover Vittam Chartered Accountants, Mumbai's premier CA firm with 15+ years experience. Expert tax planning, audit services, and business consulting. ICAI certified professionals serving 500+ satisfied clients." />
        <meta name="keywords" content="chartered accountant Mumbai, CA firm Mumbai, tax consultant, audit services, business consulting, ICAI certified, financial advisory, GST services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About FinanceWise Chartered Accountants - Mumbai's Leading CA Firm" />
        <meta property="og:description" content="15+ years of expertise in tax planning, audit services, and business consulting. Trusted by 500+ clients across Mumbai." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://Vittam.com/about" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-black rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-gray-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-gray-200 animate-spin" style={{animationDuration: '15s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center space-y-8">
            {/* Breadcrumb for SEO */}
            <nav className="text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex justify-center space-x-2 text-gray-600">
                <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
                <li className="before:content-['/'] before:mx-2">About Us</li>
              </ol>
            </nav>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-black leading-none">
                ABOUT
                <span className="block relative">
             Vittam Integrity Services 
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black animate-pulse"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Mumbai's most trusted chartered accountancy firm with over 15 years of excellence 
                in financial services, tax planning, and business consulting.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-gray-600 font-bold uppercase">Years Excellence</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm text-gray-600 font-bold uppercase">Happy Clients</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-gray-600 font-bold uppercase">Success Rate</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-black mb-2 transform group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-gray-600 font-bold uppercase">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50" id="our-story">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                  OUR STORY &
                  <span className="block">JOURNEY</span>
                </h2>
                <div className="w-20 h-1 bg-black"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in <strong>2010</strong> by <strong>CA Sunita kulthe </strong>, Vittam Integrity Services  began as a small 
                  chartered accountancy practice in Mumbai with a simple mission: to provide honest, 
                  reliable, and expert financial services to businesses and individuals.
                </p>
                
                <p>
                  Over the past <strong>15 years</strong>, we have grown from a single-person practice to 
                  Mumbai's leading chartered accountancy firm, serving over <strong>500 satisfied clients</strong> 
                  across various industries including manufacturing, IT, retail, and healthcare.
                </p>
                
                <p>
                  Our commitment to excellence, continuous learning, and client satisfaction has earned 
                  us recognition as one of the most trusted CA firms in Mumbai, with a 
                  <strong>98% client retention rate</strong> and numerous industry awards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  OUR SERVICES
                </button>
                <button className="border-2 border-black text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300">
                  MEET OUR TEAM
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-black p-8 transform hover:scale-105 transition-all duration-500">
                <div className="bg-white p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-black mx-auto flex items-center justify-center">
                      <Calculator className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-black">ESTABLISHED 2010</h3>
                    <p className="text-gray-600">Mumbai's Premier CA Firm</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-2 border-gray-200 hover:border-black transition-all group">
                      <span className="font-bold text-black">ICAI CERTIFIED</span>
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 border-gray-200 hover:border-black transition-all group">
                      <span className="font-bold text-black">ISO 9001:2015</span>
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex items-center justify-between p-4 border-2 border-gray-200 hover:border-black transition-all group">
                      <span className="font-bold text-black">GST PRACTITIONER</span>
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white" id="mission-vision">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black">
              OUR CORE VALUES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our every decision and client interaction
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-full flex space-x-2">
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
                      ? 'bg-black text-white' 
                      : 'bg-transparent text-black hover:bg-gray-200'
                  } px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center space-x-2`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="text-center space-y-8 animate-fadeIn">
                <div className="w-20 h-20 bg-black mx-auto rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-black">OUR MISSION</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To empower businesses and individuals with expert financial guidance, innovative solutions, 
                  and unwavering integrity. We strive to be the most trusted chartered accountancy firm in Mumbai, 
                  helping our clients achieve financial success and regulatory compliance with confidence.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center space-y-8 animate-fadeIn">
                <div className="w-20 h-20 bg-black mx-auto rounded-full flex items-center justify-center">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-black">OUR VISION</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To be recognized as India's leading chartered accountancy firm, known for excellence, 
                  innovation, and client satisfaction. We envision a future where every business, 
                  regardless of size, has access to world-class financial expertise and strategic guidance.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="text-center space-y-8 animate-fadeIn">
                <div className="w-20 h-20 bg-black mx-auto rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-black">OUR VALUES</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-black" />
                      <span className="font-bold text-black text-lg">INTEGRITY</span>
                    </div>
                    <p className="text-gray-700">Honest, transparent, and ethical in all our dealings</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-black" />
                      <span className="font-bold text-black text-lg">EXCELLENCE</span>
                    </div>
                    <p className="text-gray-700">Continuous improvement and highest quality standards</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-black" />
                      <span className="font-bold text-black text-lg">CLIENT-FIRST</span>
                    </div>
                    <p className="text-gray-700">Your success is our priority and measure of achievement</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-black" />
                      <span className="font-bold text-black text-lg">INNOVATION</span>
                    </div>
                    <p className="text-gray-700">Embracing technology and modern financial solutions</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black text-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              WHY CHOOSE Vittam Integrity Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here's what sets us apart from other chartered accountancy firms in Mumbai
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
              <div key={index} className="bg-gray-900 p-8 rounded-3xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group">
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

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-50" id="certifications">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black">
              CERTIFICATIONS & AWARDS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence and compliance by leading industry bodies
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              { title: "ICAI CERTIFIED", subtitle: "Institute of Chartered Accountants", icon: Award },
              { title: "ISO 9001:2015", subtitle: "Quality Management System", icon: Shield },
              { title: "GST PRACTITIONER", subtitle: "Government Registered", icon: CheckCircle },
              { title: "BEST CA FIRM 2024", subtitle: "Mumbai Business Awards", icon: Star }
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 border-4 border-gray-200 hover:border-black transition-all duration-300 transform hover:scale-105">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-black mx-auto rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-black">{cert.title}</h3>
                    <p className="text-gray-600 text-sm font-medium">{cert.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
              READY TO WORK WITH
              <span className="block">MUMBAI'S BEST CA FIRM?</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Join 500+ satisfied clients who trust FinanceWise for their financial success. 
              Get expert chartered accountant services with guaranteed compliance and peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="bg-black text-white px-10 py-5 font-black text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>BOOK FREE CONSULTATION</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="border-2 border-black text-black px-10 py-5 font-black text-lg hover:bg-black hover:text-white transition-all duration-300">
                CALL +91 xxxxx 43210
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-black">
              <div className="text-center">
                <div className="text-3xl font-black text-black mb-2">FREE</div>
                <div className="text-sm text-gray-600 font-bold uppercase">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black mb-2">24HR</div>
                <div className="text-sm text-gray-600 font-bold uppercase">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black mb-2">100%</div>
                <div className="text-sm text-gray-600 font-bold uppercase">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          "name": "FinanceWise Chartered Accountants",
          "description": "Mumbai's leading chartered accountancy firm providing expert tax planning, audit services, and business consulting for 15+ years.",
          "url": "https://financewise.com",
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
            "name": "CA Rajesh Kumar"
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