import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: 'Home', anchor: 'home', offset: 0 },
    { label: 'Products', anchor: 'products', offset: 60 },
    { label: 'Services', anchor: 'services', offset: 60 },
    { label: 'Contact', anchor: 'contact', offset: 60 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 10);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => ({
        ...item,
        element: document.getElementById(item.anchor)
      })).filter(item => item.element);

      let currentSection = 'home';
      sections.forEach(section => {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.anchor;
        }
      });
      setActiveSection(currentSection);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (anchor, offset = 60) => {
    const element = document.getElementById(anchor);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-1000 nav-transition ${
        isScrolled ? 'bg-surface/95 backdrop-blur-sm shadow-md' : 'bg-surface'
      }`}>
        {/* Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-accent progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-15">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('home', 0)}
                className="flex items-center space-x-3 nav-transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                aria-label="Leo Caesars AI Platform - Go to home"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-heading font-semibold text-text-primary">
                    Leo Caesars
                  </h1>
                  <p className="text-xs font-caption text-text-secondary -mt-1">
                    AI Platform
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation">
              {navigationItems.map((item) => (
                <button
                  key={item.anchor}
                  onClick={() => scrollToSection(item.anchor, item.offset)}
                  className={`px-3 py-2 text-sm font-body font-medium nav-transition rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                    activeSection === item.anchor
                      ? 'text-primary bg-primary-50' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                  aria-current={activeSection === item.anchor ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('contact', 60)}
                className="nav-transition"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-muted nav-transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <Icon 
                  name={mobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  className="nav-transition" 
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-1100 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-secondary-900/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 left-0 w-80 max-w-sm h-full bg-surface shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-heading font-semibold text-text-primary">
                    Leo Caesars
                  </h2>
                  <p className="text-xs font-caption text-text-secondary -mt-1">
                    AI Platform
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-muted nav-transition focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Close navigation menu"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <nav className="px-4 py-6 space-y-2" role="navigation">
              {navigationItems.map((item) => (
                <button
                  key={item.anchor}
                  onClick={() => scrollToSection(item.anchor, item.offset)}
                  className={`w-full text-left px-4 py-3 text-base font-body font-medium nav-transition rounded-lg focus:outline-none focus:ring-2 focus:ring-ring ${
                    activeSection === item.anchor
                      ? 'text-primary bg-primary-50 border-l-4 border-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                  aria-current={activeSection === item.anchor ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-muted">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => scrollToSection('contact', 60)}
                className="nav-transition"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;