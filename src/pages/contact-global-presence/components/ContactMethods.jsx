import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      title: 'Email Us',
      description: 'Send us a detailed message',
      value: 'contact@leocaesars.com',
      action: 'mailto:contact@leocaesars.com',
      buttonText: 'Send Email',
      color: 'accent'
    },
    {
      id: 'phone-us',
      icon: 'Phone',
      title: 'Call US Office',
      description: 'Speak with our US team',
      value: '+1 (813) 555-0123',
      action: 'tel:+18135550123',
      buttonText: 'Call Now',
      color: 'primary'
    },
    {
      id: 'phone-india',
      icon: 'Phone',
      title: 'Call India Office',
      description: 'Connect with our India team',
      value: '+91 44 5555 0123',
      action: 'tel:+914455550123',
      buttonText: 'Call Now',
      color: 'primary'
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn',
      description: 'Connect professionally',
      value: 'Leo Caesars LLC',
      action: 'https://linkedin.com/company/leocaesars',
      buttonText: 'Connect',
      color: 'secondary'
    }
  ];

  const emergencyContact = {
    title: 'Emergency Support',
    description: 'For critical system issues',
    phone: '+1 (813) 555-0199',
    email: 'emergency@leocaesars.com',
    availability: '24/7 Support Available'
  };

  return (
    <div className="space-y-8">
      {/* Quick Contact Methods */}
      <div>
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
          Quick Contact Methods
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-surface border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  method.color === 'accent' ? 'bg-accent-100 text-accent-600' :
                  method.color === 'primary'? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                }`}>
                  <Icon name={method.icon} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-text-primary mb-1">
                    {method.title}
                  </h4>
                  <p className="text-xs text-text-secondary mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm font-mono text-text-primary mb-3">
                    {method.value}
                  </p>
                  <Button
                    variant="outline"
                    size="xs"
                    onClick={() => window.open(method.action, '_blank')}
                    iconName={method.icon}
                    iconPosition="left"
                  >
                    {method.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-warning-50 border border-warning-200 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-warning-100 text-warning-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="AlertTriangle" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-heading font-semibold text-warning-800 mb-2">
              {emergencyContact.title}
            </h4>
            <p className="text-warning-700 text-sm mb-4">
              {emergencyContact.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-warning-600" />
                <a
                  href={`tel:${emergencyContact.phone.replace(/\D/g, '')}`}
                  className="text-warning-800 font-mono text-sm hover:text-warning-900 transition-colors"
                >
                  {emergencyContact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-warning-600" />
                <a
                  href={`mailto:${emergencyContact.email}`}
                  className="text-warning-800 text-sm hover:text-warning-900 transition-colors"
                >
                  {emergencyContact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-warning-600" />
                <span className="text-warning-800 text-sm font-medium">
                  {emergencyContact.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Information */}
      <div className="bg-muted rounded-lg p-6">
        <h4 className="text-lg font-heading font-semibold text-text-primary mb-4">
          Response Time Expectations
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-success-100 text-success-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="MessageSquare" size={20} />
            </div>
            <h5 className="font-medium text-text-primary mb-1">General Inquiries</h5>
            <p className="text-sm text-text-secondary">Within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Briefcase" size={20} />
            </div>
            <h5 className="font-medium text-text-primary mb-1">Business Proposals</h5>
            <p className="text-sm text-text-secondary">Within 48 hours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-warning-100 text-warning-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={20} />
            </div>
            <h5 className="font-medium text-text-primary mb-1">Technical Support</h5>
            <p className="text-sm text-text-secondary">Within 4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;