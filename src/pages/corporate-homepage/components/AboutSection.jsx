import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AboutSection = () => {
  const stats = [
    { label: "Years of Experience", value: "2+", icon: "Calendar" },
    // { label: "Government Projects", value: "50+", icon: "Building2" },
    { label: "AI Models Deployed", value: "10+", icon: "Cpu" },
    { label: "Client Satisfaction", value: "99%", icon: "Star" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Pioneering cutting-edge AI and blockchain solutions that push the boundaries of what\'s possible in government technology.",
      icon: "Lightbulb"
    },
    {
      title: "Security & Compliance",
      description: "Maintaining the highest standards of security and regulatory compliance for government and enterprise clients.",
      icon: "Shield"
    },
    {
      title: "Transparency",
      description: "Building trust through open communication, clear processes, and accountable project management.",
      icon: "Eye"
    },
    {
      title: "Global Impact",
      description: "Creating solutions that make a meaningful difference in communities and organizations worldwide.",
      icon: "Brain"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success-100 text-success-700 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-success-500 rounded-full mr-2"></div>
            About Leo Caesars
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Leading AI Innovation for Government
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Leo Caesars LLC is a premier technology company specializing in artificial intelligence 
            and blockchain solutions for government agencies and enterprise organizations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                Transforming Government Operations Through Technology
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                Founded with a mission to revolutionize how government agencies operate, 
                Leo Caesars combines deep expertise in artificial intelligence, machine learning, 
                and blockchain technology to deliver solutions that enhance efficiency, 
                transparency, and citizen services.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                Our team of certified specialists works closely with government clients to 
                understand their unique challenges and develop customized solutions that 
                meet strict security, compliance, and performance requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-text-primary">
                Our Expertise
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Blockchain Technology",
                  "Government Compliance",
                  "Enterprise Security",
                  "Cloud Solutions",
                  "Data Analytics",
                  "System Integration"
                ].map((expertise, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-text-secondary">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office environment with AI technology displays and collaborative workspace"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-surface rounded-lg p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-primary mb-1">Tampa</div>
                  <div className="text-sm text-text-secondary">Florida, USA</div>
                </div>
                <div className="bg-surface rounded-lg p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-accent mb-1">Chennai</div>
                  <div className="text-sm text-text-secondary">Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Our Core Values
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <Icon name={value.icon} size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-semibold text-text-primary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
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

export default AboutSection;