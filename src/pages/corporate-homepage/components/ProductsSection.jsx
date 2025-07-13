import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "AiJusticeGrid",
      description: "Advanced AI-powered justice system optimization platform designed for government agencies. Features predictive analytics, case management automation, and real-time decision support for legal proceedings and administrative justice processes.",
      status: "Available Now",
      iconName: "Scale",
      isAvailable: true,
      externalUrl: "https://aijusticegrid.netlify.app/login.html",
      features: ["Murder Investigation Agent", "Cybercrime Investigation Agent", "Narcotics Investigation Agent", "Anti Smuggling Investigation Agent"],
      category: "Multipurpose AI Agent System"
    },
    {
      id: 2,
      title: "CaesarScribe",
      description: "Comprehensive healthcare AI solution providing patient data analysis, diagnostic assistance, treatment recommendations, and healthcare resource optimization for government healthcare systems and public health initiatives.",
      status: "Coming Soon",
      iconName: "Heart",
      isAvailable: false,
      features: ["Patient Analytics", "Diagnostic AI", "Treatment Planning", "Resource Optimization"],
      category: "Healthcare AI System"
    },
    {
      id: 3,
      title: "Bhimlaw Ai",
      description: "Legal technology platform powered by artificial intelligence that assists advocates and lawyers by automating legal research, managing case documents, generating intelligent legal drafts, and providing data-driven insights to enhance legal practice and courtroom efficiency.",
      status: "Coming Soon",
      iconName: "GraduationCap",
      isAvailable: false,
      features: ["Smart Legal Drafting", "Case Management Automation", "Litigation Analytics", "Legal Knowledge Engine"],
      category: "Legal AI System"
    },
    {
      id: 4,
      title: "AI Veterans Support & Mental Health System",
      description: "Specialized AI platform designed to support veterans' mental health needs through intelligent screening, personalized treatment recommendations, crisis intervention protocols, and comprehensive care coordination.",
      status: "Coming Soon",
      iconName: "Shield",
      isAvailable: false,
      features: ["Mental Health Screening", "Crisis Intervention", "Treatment Planning", "Care Coordination"],
      category: "Veterans AI System"
    },
    {
      id: 5,
      title: "AI Child Welfare and Foster System Optimization",
      description: "Advanced AI solution for child welfare agencies to optimize placement decisions, monitor child safety, streamline case management, and improve outcomes for children in the foster care system.",
      status: "Coming Soon",
      iconName: "Users",
      isAvailable: false,
      features: ["Placement Optimization", "Safety Monitoring", "Case Management", "Outcome Tracking"],
      category: "Child Welfare AI System"
    },
    {
      id: 6,
      title: "AI Prison Reform and Inmate Monitoring",
      description: "Comprehensive prison management AI system focused on rehabilitation, recidivism reduction, behavioral analysis, and operational efficiency for correctional facilities and justice departments.",
      status: "Coming Soon",
      iconName: "Building",
      isAvailable: false,
      features: ["Behavioral Analysis", "Rehabilitation Planning", "Risk Assessment", "Operational Efficiency"],
      category: "Correctional AI System"
    }
  ];

  return (
    <section id="products" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
            Product Portfolio
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            AI Solutions for Government
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of artificial intelligence solutions designed specifically 
            for government agencies and public sector organizations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              status={product.status}
              iconName={product.iconName}
              isAvailable={product.isAvailable}
              externalUrl={product.externalUrl}
              features={product.features}
              category={product.category}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Contact our team to discuss how Leo Caesars AI solutions can be customized 
              for your specific government or enterprise requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Get Started Today
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 80;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;