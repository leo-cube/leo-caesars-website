import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const offices = [
    {
      location: "Tampa, Florida USA",
      address: "6259 Ashbury Palms Dr,\nTampa, FL 33647\nUnited States",
      phone: "+1 (202) 957-8536",
      email: "support@leocaesars.com",
      timezone: "EST (UTC-5)",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      mapUrl: "https://www.google.com/maps?q=27.9506,-82.4572&z=14&output=embed"
    },
    {
      location: "Chennai, Tamil Nadu India",
      address: "21 22 Surya Apartment, Choolaimedu,\nChennai, Tamil Nadu 600001\nIndia",
      phone: "+91 9677110169",
      email: "support@leocaesars.com",
      timezone: "IST (UTC+5:30)",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      mapUrl: "https://www.google.com/maps?q=13.0827,80.2707&z=14&output=embed"
    }
  ];

  const contactMethods = [
    {
      title: "General Support",
      description: "For general information",
      icon: "Mail",
      contact: "leo@leocaesars.com",
      action: "mailto:leo@leocaesars.com"
    },
    {
      title: "Sales Inquiries",
      description: "For sales questions",
      icon: "DollarSign",
      contact: "sales@leocaesars.com",
      action: "mailto:sales@leocaesars.com"
    },
    {
      title: "Career Opportunities",
      description: "Join our growing team",
      icon: "Users",
      contact: "careers@leocaesars.com",
      action: "mailto:careers@leocaesars.com"
    },
    {
      title: "Technical Support",
      description: "Get help with our products",
      icon: "HeadphonesIcon",
      contact: "support@leocaesars.com",
      action: "mailto:support@leocaesars.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Contact Our Global Team
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to transform your operations with AI? Reach out to our experts in Tampa or Chennai 
            to discuss your project requirements.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={method.icon} size={24} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {method.description}
              </p>
              <a
                href={method.action}
                className="text-primary hover:text-primary-700 font-medium text-sm transition-colors duration-300"
              >
                {method.contact}
              </a>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Office Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-surface rounded-2xl border border-border shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                        {office.location}
                      </h3>
                      <div className="space-y-2 text-sm text-text-secondary">
                        <div className="flex items-start space-x-2">
                          <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                          <div className="whitespace-pre-line">{office.address}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={16} className="flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={16} className="flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Globe" size={16} className="flex-shrink-0" />
                          <span>{office.timezone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;





