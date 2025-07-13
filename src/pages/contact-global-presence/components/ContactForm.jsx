import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: '',
    projectDetails: '',
    preferredContact: 'email',
    urgency: 'medium'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: '', label: 'Select Service Interest' },
    { value: 'ai-solutions', label: 'AI Solutions' },
    { value: 'blockchain-projects', label: 'Blockchain Projects' },
    { value: 'saas-services', label: 'SaaS Services' },
    { value: 'government-ai', label: 'Government AI Solutions' },
    { value: 'enterprise-ai', label: 'Enterprise AI Solutions' },
    { value: 'consulting', label: 'AI Consulting Services' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'both', label: 'Both Email & Phone' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company/Organization name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service interest';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = 'Please provide more detailed project information (minimum 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        serviceInterest: '',
        projectDetails: '',
        preferredContact: 'email',
        urgency: 'medium'
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface rounded-xl shadow-lg p-8 border border-border">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-semibold text-text-primary mb-2">
          Start Your AI Journey
        </h3>
        <p className="text-text-secondary font-body">
          Connect with our experts to discuss your AI solutions needs. We'll respond within 24 hours.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success-50 border border-success-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon name="CheckCircle" size={20} className="text-success-600" />
            <div>
              <p className="text-success-800 font-medium">Message sent successfully!</p>
              <p className="text-success-600 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-error-50 border border-error-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon name="AlertCircle" size={20} className="text-error-600" />
            <div>
              <p className="text-error-800 font-medium">Failed to send message</p>
              <p className="text-error-600 text-sm">Please try again or contact us directly.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={errors.name ? 'border-error-500' : ''}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
              Company/Organization *
            </label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter company name"
              className={errors.company ? 'border-error-500' : ''}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-error-600">{errors.company}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={errors.email ? 'border-error-500' : ''}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Phone Number *
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className={errors.phone ? 'border-error-500' : ''}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-error-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-text-primary mb-2">
            Service Interest *
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.serviceInterest ? 'border-error-500' : 'border-border'
            }`}
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceInterest && (
            <p className="mt-1 text-sm text-error-600">{errors.serviceInterest}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredContact" className="block text-sm font-medium text-text-primary mb-2">
              Preferred Contact Method
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {contactMethods.map(method => (
                <option key={method.value} value={method.value}>
                  {method.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-text-primary mb-2">
              Project Urgency
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {urgencyOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="projectDetails" className="block text-sm font-medium text-text-primary mb-2">
            Project Details *
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            rows={5}
            placeholder="Please describe your project requirements, timeline, and any specific AI solutions you're interested in..."
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical ${
              errors.projectDetails ? 'border-error-500' : 'border-border'
            }`}
          />
          {errors.projectDetails && (
            <p className="mt-1 text-sm text-error-600">{errors.projectDetails}</p>
          )}
          <p className="mt-1 text-xs text-text-secondary">
            Minimum 20 characters required
          </p>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>

        <div className="text-center pt-4 border-t border-border">
          <p className="text-sm text-text-secondary">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;