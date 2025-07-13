import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const products = [
    { label: 'AiJusticeGrid', href: 'https://aijusticegrid.netlify.app/login.html', external: true },
    { label: 'CaesarScribe', href: '#', disabled: true },
    { label: 'Bhimlaw Ai', href: '#', disabled: true },
    { label: 'Veterans Support AI', href: '#', disabled: true }
  ];

  const services = [
    { label: 'Government AI Projects', href: '#services' },
    { label: 'AI Solutions', href: '#services' },
    { label: 'SaaS Services', href: '#services' },
    { label: 'Blockchain Projects', href: '#services' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'GitHub', icon: 'Github', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href, external = false, disabled = false) => {
    if (disabled) return;
    
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('#')) {
      scrollToSection(href);
    }
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Leo Caesars</h3>
                  <p className="text-sm text-secondary-300 -mt-1">AI Platform</p>
                </div>
              </div>
              
              <p className="text-secondary-300 text-sm leading-relaxed mb-6">
                Leading provider of AI and blockchain solutions for government agencies 
                and enterprise organizations worldwide.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleLinkClick(social.href)}
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-secondary-900"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon name={social.icon} size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus:underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.label}>
                    <button
                      onClick={() => handleLinkClick(product.href, product.external, product.disabled)}
                      className={`text-sm transition-colors duration-300 focus:outline-none ${
                        product.disabled 
                          ? 'text-secondary-500 cursor-not-allowed' :'text-secondary-300 hover:text-white focus:underline'
                      }`}
                      disabled={product.disabled}
                    >
                      {product.label}
                      {product.disabled && (
                        <span className="ml-2 text-xs bg-secondary-700 px-2 py-0.5 rounded">
                          Coming Soon
                        </span>
                      )}
                      {product.external && !product.disabled && (
                        <Icon name="ExternalLink" size={12} className="inline ml-1" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => handleLinkClick(service.href)}
                      className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm focus:outline-none focus:underline"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-8 border-t border-secondary-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tampa Office */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-secondary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={16} className="text-primary" />
              </div>
              <div>
                <h5 className="font-heading font-semibold mb-2">Tampa, Florida USA</h5>
                <div className="text-sm text-secondary-300 space-y-1">
                  <p>123 Innovation Drive<br />Tampa, FL 33602, United States</p>
                  <p>Phone: +1 (813) 555-0123</p>
                  <p>Email: usa@leocaesars.com</p>
                </div>
              </div>
            </div>

            {/* Chennai Office */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-secondary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={16} className="text-accent" />
              </div>
              <div>
                <h5 className="font-heading font-semibold mb-2">Chennai, Tamil Nadu India</h5>
                <div className="text-sm text-secondary-300 space-y-1">
                  <p>456 Tech Park Road<br />Chennai, Tamil Nadu 600001, India</p>
                  <p>Phone: +91 44 5555 0123</p>
                  <p>Email: india@leocaesars.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-300">
              © {currentYear} Leo Caesars LLC. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button className="text-secondary-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline">
                Privacy Policy
              </button>
              <button className="text-secondary-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline">
                Terms of Service
              </button>
              <button className="text-secondary-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline">
                Cookie Policy
              </button>
              <button className="text-secondary-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;