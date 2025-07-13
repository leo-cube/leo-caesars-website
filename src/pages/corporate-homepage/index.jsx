import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const CorporateHomepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Leo Caesars AI Platform - Government AI Solutions & Blockchain Services';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Leo Caesars LLC provides cutting-edge AI solutions and blockchain services for government agencies and enterprises. Explore our product portfolio including AiJusticeGrid, healthcare AI, and more.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Products Section */}
        <ProductsSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CorporateHomepage;