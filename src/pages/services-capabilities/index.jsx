import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import CapabilitySection from './components/CapabilitySection';
import TestimonialCard from './components/TestimonialCard';
import CaseStudyHighlight from './components/CaseStudyHighlight';
import ProcessTimeline from './components/ProcessTimeline';

const ServicesCapabilities = () => {
  const [expandedServices, setExpandedServices] = useState({});
  const [activeTab, setActiveTab] = useState('government');

  useEffect(() => {
    document.title = 'Services & Capabilities - Leo Caesars AI Platform';
  }, []);

  const toggleService = (serviceId) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const services = [
    {
      id: 'government-ai',
      icon: 'Building2',
      title: 'Government-Based AI Projects',
      description: `Specialized AI solutions designed for public sector challenges, including citizen services automation, 
      policy analysis, and administrative efficiency improvements. Our government-focused approach ensures compliance 
      with regulatory requirements and security standards.`,
      features: [
        'Citizen Service Automation & Chatbots',
        'Policy Analysis & Recommendation Systems',
        'Document Processing & Classification',
        'Fraud Detection & Prevention',
        'Resource Allocation Optimization',
        'Compliance Monitoring & Reporting',
        'Public Safety & Emergency Response',
        'Data Privacy & Security Implementation'
      ],
      variant: 'featured'
    },
    {
      id: 'ai-solutions',
      icon: 'Brain',
      title: 'AI Solutions Provision',
      description: `Custom AI development services tailored to specific organizational needs. From machine learning models 
      to natural language processing systems, we deliver end-to-end AI solutions that drive business transformation 
      and operational excellence.`,
      features: [
        'Custom Machine Learning Model Development',
        'Natural Language Processing Solutions',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Recommendation Systems',
        'Automated Decision Support Systems',
        'AI Model Training & Optimization',
        'Integration with Existing Systems'
      ],
      variant: 'default'
    },
    {
      id: 'saas-services',
      icon: 'Cloud',
      title: 'SaaS Services',
      description: `Scalable Software-as-a-Service platforms that deliver AI capabilities through cloud-based solutions. 
      Our SaaS offerings provide immediate access to advanced AI tools without the need for extensive infrastructure 
      investment or technical expertise.`,
      features: [
        'Multi-tenant AI Platform Architecture',
        'API-first Development Approach',
        'Real-time Analytics & Dashboards',
        'Automated Scaling & Load Balancing',
        'Enterprise-grade Security',
        'Custom Branding & White-labeling',
        'Integration Marketplace',
        '24/7 Support & Monitoring'
      ],
      variant: 'premium'
    },
    {
      id: 'blockchain-projects',
      icon: 'Link',
      title: 'Blockchain Projects',
      description: `Comprehensive blockchain solutions covering both public and private implementations. From smart contract 
      development to decentralized applications, we provide secure, transparent, and efficient blockchain technologies 
      for various industry applications.`,
      features: [
        'Smart Contract Development & Auditing',
        'Decentralized Application (DApp) Creation',
        'Private Blockchain Network Setup',
        'Cryptocurrency & Token Development',
        'Supply Chain Transparency Solutions',
        'Digital Identity & Verification Systems',
        'Consensus Mechanism Implementation',
        'Blockchain Security & Compliance'
      ],
      variant: 'default'
    }
  ];

  const capabilities = [
    {
      icon: 'Shield',
      title: 'Security & Compliance',
      subtitle: 'Enterprise-Grade Protection',
      description: `Our security-first approach ensures all AI solutions meet the highest standards of data protection 
      and regulatory compliance. We implement comprehensive security measures from development through deployment.`,
      metrics: [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '256-bit', label: 'Encryption' }
      ],
      technologies: ['SOC 2 Type II', 'GDPR Compliant', 'HIPAA Ready', 'FedRAMP', 'ISO 27001']
    },
    {
      icon: 'Zap',
      title: 'Performance & Scalability',
      subtitle: 'Built for Enterprise Scale',
      description: `Our solutions are architected to handle enterprise-level workloads with automatic scaling, 
      load balancing, and performance optimization. We ensure consistent performance regardless of user volume.`,
      metrics: [
        { value: '<100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
      ],
      technologies: ['Kubernetes', 'Docker', 'AWS/Azure', 'CDN', 'Auto-scaling']
    }
  ];

  const testimonials = [
    {
      quote: `Leo Caesars delivered an exceptional AI solution that transformed our citizen services. 
      The system reduced processing time by 75% and significantly improved citizen satisfaction scores.`,
      author: 'Sarah Johnson',
      position: 'Director of Digital Services',
      organization: 'City of Tampa Government',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      quote: `The blockchain solution provided by Leo Caesars enhanced our supply chain transparency 
      and reduced fraud by 60%. Their expertise in both AI and blockchain is unmatched.`,
      author: 'Michael Chen',
      position: 'Chief Technology Officer',
      organization: 'Global Logistics Corp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: 'AI-Powered Justice System Optimization',
      client: 'State Judicial Department',
      challenge: `Manual case processing and scheduling led to significant delays and resource inefficiencies 
      in the judicial system, affecting thousands of cases annually.`,
      solution: `Implemented AiJusticeGrid system with automated case classification, intelligent scheduling, 
      and predictive analytics for case outcomes and resource allocation.`,
      results: [
        '45% reduction in case processing time',
        '30% improvement in resource utilization',
        '60% decrease in scheduling conflicts',
        '$2.3M annual cost savings'
      ],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
      tags: ['AI', 'Government', 'Justice System', 'Automation']
    },
    {
      title: 'Healthcare AI Diagnostic Platform',
      client: 'Regional Medical Center',
      challenge: `Shortage of specialized radiologists and increasing diagnostic workload leading to 
      delayed patient care and potential misdiagnoses.`,
      solution: `Developed AI-powered diagnostic assistance system with computer vision for medical imaging 
      analysis and decision support for healthcare professionals.`,
      results: [
        '85% diagnostic accuracy improvement',
        '50% faster report generation',
        '25% reduction in false positives',
        'Enhanced patient outcomes'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      tags: ['AI', 'Healthcare', 'Diagnostics', 'Computer Vision']
    }
  ];

  const processSteps = [
    {
      icon: 'Search',
      title: 'Discovery & Analysis',
      description: `We begin with comprehensive stakeholder interviews and system analysis to understand 
      your specific requirements, challenges, and objectives.`,
      deliverables: [
        'Requirements Documentation',
        'Technical Architecture Plan',
        'Project Timeline & Milestones',
        'Risk Assessment Report'
      ]
    },
    {
      icon: 'Palette',
      title: 'Design & Prototyping',
      description: `Our team creates detailed system designs and interactive prototypes to validate 
      the solution approach before full development begins.`,
      deliverables: [
        'System Design Documents',
        'Interactive Prototypes',
        'User Experience Mockups',
        'Technical Specifications'
      ]
    },
    {
      icon: 'Code',
      title: 'Development & Testing',
      description: `Agile development methodology with continuous integration, automated testing, 
      and regular stakeholder feedback to ensure quality delivery.`,
      deliverables: [
        'Production-Ready Code',
        'Automated Test Suites',
        'Performance Benchmarks',
        'Security Audit Reports'
      ]
    },
    {
      icon: 'Rocket',
      title: 'Deployment & Support',
      description: `Seamless deployment with comprehensive training, documentation, and ongoing 
      support to ensure successful adoption and optimal performance.`,
      deliverables: [
        'Production Deployment',
        'User Training Materials',
        'Maintenance Documentation',
        '24/7 Support Setup'
      ]
    }
  ];

  const tabContent = {
    government: {
      title: 'Government Solutions',
      description: 'Specialized AI solutions for public sector challenges and citizen services.',
      services: services.filter(s => s.id === 'government-ai')
    },
    enterprise: {
      title: 'Enterprise AI',
      description: 'Custom AI solutions for business transformation and operational excellence.',
      services: services.filter(s => ['ai-solutions', 'saas-services'].includes(s.id))
    },
    blockchain: {
      title: 'Blockchain Technology',
      description: 'Secure, transparent blockchain solutions for various industry applications.',
      services: services.filter(s => s.id === 'blockchain-projects')
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/corporate-homepage" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold text-text-primary">
                  Leo Caesars
                </span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  to="/corporate-homepage" 
                  className="text-text-secondary hover:text-primary nav-transition font-body"
                >
                  Home
                </Link>
                <Link 
                  to="/product-portfolio-showcase" 
                  className="text-text-secondary hover:text-primary nav-transition font-body"
                >
                  Products
                </Link>
                <span className="text-primary font-body font-semibold">
                  Services
                </span>
                <Link 
                  to="/contact-global-presence" 
                  className="text-text-secondary hover:text-primary nav-transition font-body"
                >
                  Contact
                </Link>
              </div>
            </div>
            
            <Button
              variant="primary"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-text-primary mb-6">
              Services & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {' '}Capabilities
              </span>
            </h1>
            <p className="text-xl font-body text-text-secondary leading-relaxed mb-8">
              Comprehensive AI solutions and blockchain technologies designed for government agencies 
              and enterprise clients. We deliver cutting-edge technology with proven results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="primary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg font-body text-text-secondary max-w-3xl mx-auto">
              Explore our comprehensive range of AI and blockchain solutions tailored for different sectors and use cases.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-border">
            {Object.entries(tabContent).map(([key, content]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 font-body font-medium nav-transition border-b-2 ${
                  activeTab === key
                    ? 'text-primary border-primary' :'text-text-secondary border-transparent hover:text-primary hover:border-primary-300'
                }`}
              >
                {content.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-text-secondary font-body">
              {tabContent[activeTab].description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tabContent[activeTab].services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                variant={service.variant}
                isExpanded={expandedServices[service.id]}
                onToggle={() => toggleService(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg font-body text-text-secondary max-w-3xl mx-auto">
              Built on enterprise-grade infrastructure with security, performance, and scalability at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <CapabilitySection
                key={index}
                icon={capability.icon}
                title={capability.title}
                subtitle={capability.subtitle}
                description={capability.description}
                metrics={capability.metrics}
                technologies={capability.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-lg font-body text-text-secondary max-w-3xl mx-auto">
              Real-world implementations delivering measurable results for our government and enterprise clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyHighlight
                key={index}
                title={study.title}
                client={study.client}
                challenge={study.challenge}
                solution={study.solution}
                results={study.results}
                image={study.image}
                tags={study.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg font-body text-text-secondary max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with Leo Caesars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                organization={testimonial.organization}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl font-body text-white/90 leading-relaxed mb-8">
            Let's discuss how our AI and blockchain solutions can address your specific challenges 
            and drive measurable results for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-white text-primary hover:bg-secondary-50"
            >
              Start Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Leo Caesars LLC</h3>
                  <p className="text-sm font-caption text-secondary-300">AI Platform Solutions</p>
                </div>
              </div>
              <p className="text-secondary-300 font-body leading-relaxed mb-4">
                Leading provider of AI and blockchain solutions for government agencies and enterprise clients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/corporate-homepage" className="text-secondary-300 hover:text-white nav-transition font-body">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/product-portfolio-showcase" className="text-secondary-300 hover:text-white nav-transition font-body">
                    Products
                  </Link>
                </li>
                <li>
                  <span className="text-white font-body">Services</span>
                </li>
                <li>
                  <Link to="/contact-global-presence" className="text-secondary-300 hover:text-white nav-transition font-body">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-secondary-300 font-body">
                <p>Tampa, Florida USA</p>
                <p>Chennai, Tamil Nadu India</p>
                <p>info@leocaesars.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
            <p className="text-secondary-400 font-caption">
              © {new Date().getFullYear()} Leo Caesars LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesCapabilities;