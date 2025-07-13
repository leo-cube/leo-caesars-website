import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import LocationCard from './components/LocationCard';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import GlobalPresenceMap from './components/GlobalPresenceMap';

const ContactGlobalPresence = () => {
  const [activeTab, setActiveTab] = useState('contact');

  const officeLocations = [
    {
      id: 'tampa',
      city: 'Tampa',
      state: 'Florida',
      country: 'United States',
      address: `Leo Caesars LLC\n123 Innovation Drive, Suite 400\nTampa, FL 33602\nUnited States`,
      phone: '(813) 555-0123',
      email: 'tampa@leocaesars.com',
      businessHours: '9:00 AM - 6:00 PM',
      businessDays: 'Monday - Friday',
      specialization: 'Government AI Solutions, Enterprise SaaS, Blockchain Development'
    },
    {
      id: 'chennai',
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      address: `Leo Caesars India Pvt Ltd\n456 Tech Park, 5th Floor\nChennai, Tamil Nadu 600001\nIndia`,
      phone: '44 5555 0123',
      email: 'chennai@leocaesars.com',
      businessHours: '9:00 AM - 6:00 PM',
      businessDays: 'Monday - Friday',
      specialization: 'AI Development, Data Analytics, Technical Support, R&D'
    }
  ];

  const navigationRoutes = [
    { path: '/corporate-homepage', label: 'Home', icon: 'Home' },
    { path: '/product-portfolio-showcase', label: 'Products', icon: 'Package' },
    { path: '/services-capabilities', label: 'Services', icon: 'Settings' },
    { path: '/contact-global-presence', label: 'Contact', icon: 'Mail', active: true }
  ];

  const tabOptions = [
    { id: 'contact', label: 'Contact Form', icon: 'MessageSquare' },
    { id: 'locations', label: 'Office Locations', icon: 'MapPin' },
    { id: 'methods', label: 'Contact Methods', icon: 'Phone' },
    { id: 'global', label: 'Global Presence', icon: 'Globe' }
  ];

  useEffect(() => {
    document.title = 'Contact & Global Presence - Leo Caesars AI Platform';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/corporate-homepage" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-heading font-semibold text-text-primary">
                  Leo Caesars
                </h1>
                <p className="text-xs font-caption text-text-secondary -mt-1">
                  AI Platform
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    route.active
                      ? 'text-primary bg-primary-50' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={route.icon} size={16} />
                  <span>{route.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" iconName="Menu" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Contact & Global Presence
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Connect with Leo Caesars LLC across our global offices. We're here to discuss 
              your AI solutions needs and provide world-class support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={() => setActiveTab('contact')}
              >
                Start Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MapPin"
                iconPosition="left"
                onClick={() => setActiveTab('locations')}
              >
                View Locations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form Tab */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="bg-surface rounded-lg border border-border p-6">
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                    Why Choose Leo Caesars?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Shield" size={20} className="text-success-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Government Trusted</p>
                        <p className="text-sm text-text-secondary">Certified for government AI projects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Zap" size={20} className="text-accent-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Rapid Deployment</p>
                        <p className="text-sm text-text-secondary">Quick implementation and support</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Globe" size={20} className="text-primary-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Global Support</p>
                        <p className="text-sm text-text-secondary">24/7 support across time zones</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-heading font-semibold text-text-primary mb-3">
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">65+</div>
                      <div className="text-xs text-text-secondary">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">12+</div>
                      <div className="text-xs text-text-secondary">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success-600">24/7</div>
                      <div className="text-xs text-text-secondary">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning-600">3+</div>
                      <div className="text-xs text-text-secondary">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Office Locations Tab */}
          {activeTab === 'locations' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                  Our Office Locations
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Strategic locations in the United States and India to serve our global clientele 
                  with local expertise and round-the-clock support.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {officeLocations.map((location, index) => (
                  <LocationCard
                    key={location.id}
                    location={location}
                    isUSLocation={index === 0}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Contact Methods Tab */}
          {activeTab === 'methods' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
                  Multiple Ways to Reach Us
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Choose your preferred communication method. We're available through multiple 
                  channels to ensure you get the support you need.
                </p>
              </div>
              <ContactMethods />
            </div>
          )}

          {/* Global Presence Tab */}
          {activeTab === 'global' && <GlobalPresenceMap />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold">Leo Caesars LLC</h3>
                  <p className="text-sm text-secondary-300">AI Platform Solutions</p>
                </div>
              </div>
              <p className="text-secondary-300 mb-4">
                Leading provider of AI solutions for government and enterprise clients. 
                Specializing in cutting-edge technology implementations and blockchain projects.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Linkedin" />
                <Button variant="ghost" size="sm" iconName="Twitter" />
                <Button variant="ghost" size="sm" iconName="Github" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigationRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className="block text-secondary-300 hover:text-white transition-colors"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-secondary-300">
                <p>contact@leocaesars.com</p>
                <p>+1 (813) 555-0123</p>
                <p>+91 44 5555 0123</p>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
            <p>&copy; {new Date().getFullYear()} Leo Caesars LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactGlobalPresence;