import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  // Image carousel state
  const images = [
    {
      src: "/Robot Reading a Book.png",
      alt: "Robot Reading a Book - AI Learning and Knowledge Processing"
    },
    {
      src: "/Robotic Hands on Keyboard.png",
      alt: "Robotic Hands on Keyboard - AI Automation and Digital Work"
    },
    {
      src: "/Abstract Digital Glitch.png",
      alt: "Abstract Digital Glitch - Digital Technology and Data Processing"
    },
    {
      src: "/Bibliobot_ The Turquoise Time-Traveller.png",
      alt: "Bibliobot The Turquoise Time-Traveller - Advanced AI Technology"
    },
    {
      src: "/Ethereal Architectural Symphony in Acrylic Blue.png",
      alt: "Ethereal Architectural Symphony - Digital Architecture and AI Design"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-surface to-accent-50 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-primary"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></div>
                 AI Agents Solutions Provider
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary leading-tight">
                Leo Caesars LLC
                <span className="block text-accent">AI Platform</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-text-secondary font-body leading-relaxed">
                Transforming traditional operations through cutting-edge artificial intelligence solutions, 
                blockchain technology, and enterprise-grade SaaS platforms.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>Government Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>Global Presence</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('products')}
                iconName="ArrowRight"
                iconPosition="right"
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Explore Products
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('services')}
                iconName="Play"
                iconPosition="left"
                className="border-2"
              >
                View Services
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">6+</div>
                  <div className="text-sm text-text-secondary">AI Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">2</div>
                  <div className="text-sm text-text-secondary">Global Offices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">100%</div>
                  <div className="text-sm text-text-secondary">Government Focus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-surface rounded-2xl shadow-2xl p-8 border border-border">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-80 object-cover transition-all duration-1000 ease-in-out"
                  />

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-text-primary">AI Systems Active</span>
                    </div>
                    <span className="text-sm text-text-secondary">24/7 Operations</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-primary-50 rounded-lg">
                      <div className="text-lg font-bold text-primary">99.9%</div>
                      <div className="text-xs text-text-secondary">Uptime</div>
                    </div>
                    <div className="p-3 bg-accent-50 rounded-lg">
                      <div className="text-lg font-bold text-accent">Real-time</div>
                      <div className="text-xs text-text-secondary">Processing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('products')}
          className="flex flex-col items-center space-y-2 text-text-secondary hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg p-2"
          aria-label="Scroll to products section"
        >
          <span className="text-sm font-caption">Discover More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;