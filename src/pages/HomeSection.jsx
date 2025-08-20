import React from 'react';
// import Navbar from '../components/Layout/Header';
import HeroSlider from '../components/Herosection/HeroSlider';
import Homecheck  from '../components/Herosection/Homepage';


const Home = () => {
  return (
    <div className="home-page mt-15">
      {/* Custom Cursor */}
      {/* <Cursor /> */}
      
     
      <HeroSlider />
      <Homecheck/>

      
      {/* About Section */}
      {/* <AboutSection /> */}
      
      {/* Practice Areas */}
      {/* <PracticeAreasSection /> */}
      
      {/* Why Choose Us */}
      {/* <WhyChooseUsSection /> */}
      
      {/* <AttorneyProfiles /> */}
      
      {/* <ContactSection /> */}
      
      {/* Call to Action */}
      {/* <Calltoaction /> */}
      
     
      
      
  
    </div>
  );
};

export default Home;
