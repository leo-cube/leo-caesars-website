import React from 'react';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Government AI Projects",
      description: "Specialized artificial intelligence solutions tailored for government agencies, including predictive analytics, automated decision-making systems, and citizen service optimization platforms.",
      icon: "Building2",
      features: [
        "Predictive Analytics for Policy Making",
        "Automated Citizen Service Systems", 
        "Data-Driven Decision Support",
        "Compliance and Regulatory AI"
      ],
      color: "emerald",
      bgGradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      bgLight: "bg-gradient-to-br from-emerald-50 to-teal-100",
      hoverBg: "hover:from-emerald-100 hover:to-teal-200",
      textColor: "text-emerald-900",
      iconBg: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200"
    },
    {
      id: 2,
      title: "AI Solutions Provision",
      description: "End-to-end artificial intelligence solution development and deployment, from initial consultation and system design to implementation, training, and ongoing support.",
      icon: "Cpu",
      features: [
        "Custom AI Model Development",
        "Machine Learning Implementation",
        "Natural Language Processing",
        "Computer Vision Solutions"
      ],
      color: "purple",
      bgGradient: "bg-gradient-to-br from-purple-500 to-violet-600",
      bgLight: "bg-gradient-to-br from-purple-50 to-violet-100",
      hoverBg: "hover:from-purple-100 hover:to-violet-200",
      textColor: "text-purple-900",
      iconBg: "bg-purple-100 text-purple-700 group-hover:bg-purple-200"
    },
    {
      id: 3,
      title: "SaaS Services",
      description: "Cloud-based Software as a Service platforms designed for scalability, security, and seamless integration with existing government and enterprise infrastructure.",
      icon: "Cloud",
      features: [
        "Cloud-Native Architecture",
        "Multi-Tenant Platforms",
        "API-First Development",
        "Enterprise Security Standards"
      ],
      color: "blue",
      bgGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      bgLight: "bg-gradient-to-br from-blue-50 to-cyan-100",
      hoverBg: "hover:from-blue-100 hover:to-cyan-200",
      textColor: "text-blue-900",
      iconBg: "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
    },
    {
      id: 4,
      title: "Blockchain Projects (Public & Private)",
      description: "Comprehensive blockchain solutions including public blockchain applications, private enterprise networks, smart contracts, and decentralized identity management systems.",
      icon: "Link",
      features: [
        "Smart Contract Development",
        "Private Blockchain Networks",
        "Decentralized Identity Systems",
        "Cryptocurrency Integration"
      ],
      color: "orange",
      bgGradient: "bg-gradient-to-br from-orange-500 to-red-600",
      bgLight: "bg-gradient-to-br from-orange-50 to-red-100",
      hoverBg: "hover:from-orange-100 hover:to-red-200",
      textColor: "text-orange-900",
      iconBg: "bg-orange-100 text-orange-700 group-hover:bg-orange-200"
    }
  ];

  const capabilities = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: "Clock"
    },
    {
      title: "Security First",
      description: "Government-grade security and compliance standards",
      icon: "Shield"
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your organization\'s needs",
      icon: "TrendingUp"
    },
    {
      title: "Expert Team",
      description: "Certified AI and blockchain specialists",
      icon: "Users"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-muted to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-medium mb-4 shadow-md">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Comprehensive AI & Blockchain Services
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From government-focused AI projects to enterprise blockchain solutions, 
            we deliver cutting-edge technology services that drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgLight} ${service.hoverBg} rounded-xl border-2 border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group hover:-translate-y-2 hover:scale-105 transform-gpu`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${service.iconBg} shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                  <Icon name={service.icon} size={32} />
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-xl font-heading font-bold ${service.textColor} mb-2 group-hover:text-primary transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className={`${service.textColor} opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity duration-300`}>
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className={`text-sm font-bold ${service.textColor} uppercase tracking-wide`}>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${service.bgGradient} shadow-sm`}></div>
                      <span className={`text-sm ${service.textColor} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-gradient-to-br from-surface to-muted rounded-2xl border-2 border-white/50 shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
              Why Choose Leo Caesars?
            </h3>
            <p className="text-text-secondary">
              Our commitment to excellence and innovation sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:scale-105 transform-gpu group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon name={capability.icon} size={26} />
                </div>
                <h4 className="text-lg font-heading font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {capability.title}
                </h4>
                <p className="text-sm text-text-secondary group-hover:text-gray-700 transition-colors duration-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Our Development Process
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and objectives", color: "from-emerald-500 to-teal-600" },
              { step: "02", title: "Design", description: "Creating tailored solutions and architecture", color: "from-purple-500 to-violet-600" },
              { step: "03", title: "Development", description: "Building and testing your AI/blockchain solution", color: "from-blue-500 to-cyan-600" },
              { step: "04", title: "Deployment", description: "Launch, training, and ongoing support", color: "from-orange-500 to-red-600" }
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${phase.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-heading font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-text-secondary group-hover:text-gray-700 transition-colors duration-300">
                    {phase.description}
                  </p>
                </div>
                
                {index < 3 && (
                  <div className={`hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r ${phase.color} opacity-30 transform -translate-x-10 rounded-full`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;