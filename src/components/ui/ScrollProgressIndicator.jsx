import React, { useState, useEffect } from 'react';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(scrollPercent);

      // Determine active section
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      let currentSection = 'home';
      sectionElements.forEach(section => {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {/* Progress Circle */}
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
            {/* Background circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-secondary-200"
            />
            {/* Progress circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
              className="text-accent nav-transition"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-mono font-medium text-text-secondary">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>

        {/* Section Indicators */}
        <div className="flex flex-col space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-3 h-3 rounded-full nav-transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                activeSection === section.id
                  ? 'bg-accent scale-125' :'bg-secondary-300 hover:bg-accent hover:scale-110'
              }`}
              aria-label={`Go to ${section.label} section`}
              title={section.label}
            >
              {/* Tooltip */}
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-secondary-800 text-white text-xs font-caption rounded opacity-0 group-hover:opacity-100 nav-transition whitespace-nowrap pointer-events-none">
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;