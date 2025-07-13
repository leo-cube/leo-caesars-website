import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from './components/SectionHeader';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import StatsOverview from './components/StatsOverview';

const ProductPortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Mock product data
  const products = [
    {
      id: 'aijusticegrid-prototype-1',
      name: 'AiJusticeGrid',
      tagline: 'AI-Powered Legal Case Management',
      description: `Advanced AI system for legal case analysis, document processing, and judicial decision support. Streamlines court operations with intelligent case categorization and automated legal research capabilities.`,
      features: [
        'Automated case categorization and priority scoring',
        'AI-powered legal document analysis and summarization',
        'Predictive case outcome modeling',
        'Intelligent legal research and precedent matching',
        'Real-time court scheduling optimization'
      ],
      status: 'available',
      icon: 'Scale',
      category: 'justice',
      isAvailable: true,
      accessUrl: 'https://aijusticegrid.netlify.app/login.html'
    },
    {
      id: 'CaesarScribe',
      name: 'CaesarScribe',
      tagline: 'Intelligent Healthcare Management System',
      description: `Comprehensive AI-driven healthcare platform designed for government health departments. Provides predictive analytics, patient management, and resource optimization for public health initiatives.`,
      features: [
        'Predictive health analytics and outbreak detection',
        'AI-powered patient diagnosis assistance',
        'Healthcare resource allocation optimization',
        'Electronic health record intelligent analysis',
        'Public health policy recommendation engine'
      ],
      status: 'coming-soon',
      icon: 'Heart',
      category: 'healthcare',
      isAvailable: false,
      accessUrl: null
    },
    {
      id: 'ai-edtech',
      name: 'Bhimlaw Ai',
      tagline: 'Educational Technology Enhancement Platform',
      description: `Revolutionary AI platform for educational institutions and government education departments. Personalizes learning experiences and optimizes educational resource distribution across public school systems.`,
      features: [
        'Personalized learning path generation',
        'AI-powered student performance analytics',
        'Educational content recommendation system',
        'Teacher performance optimization tools',
        'School district resource allocation AI'
      ],
      status: 'coming-soon',
      icon: 'GraduationCap',
      category: 'education',
      isAvailable: false,
      accessUrl: null
    },
    {
      id: 'ai-veterans-support',
      name: 'AI Veterans Support & Mental Health System',
      tagline: 'Comprehensive Veterans Care Platform',
      description: `Specialized AI system for veterans affairs departments focusing on mental health support, benefits processing, and comprehensive care coordination for military veterans and their families.`,
      features: [
        'AI-powered mental health assessment and monitoring',
        'Automated veterans benefits processing',
        'Personalized treatment plan recommendations',
        'Crisis intervention and support system',
        'Veterans services coordination platform'
      ],
      status: 'coming-soon',
      icon: 'Shield',
      category: 'veterans',
      isAvailable: false,
      accessUrl: null
    },
    {
      id: 'ai-child-welfare',
      name: 'AI Child Welfare and Foster System Optimization',
      tagline: 'Child Protection and Foster Care AI',
      description: `Advanced AI platform for child protective services and foster care systems. Optimizes child placement decisions, monitors welfare cases, and ensures comprehensive child protection through intelligent data analysis.`,
      features: [
        'AI-powered child safety risk assessment',
        'Optimal foster family matching algorithms',
        'Case worker workload optimization',
        'Child development tracking and analytics',
        'Family reunification success prediction'
      ],
      status: 'coming-soon',
      icon: 'Users',
      category: 'welfare',
      isAvailable: false,
      accessUrl: null
    },
    {
      id: 'ai-prison-reform',
      name: 'AI Prison Reform and Inmate Monitoring',
      tagline: 'Correctional System Intelligence Platform',
      description: `Comprehensive AI solution for correctional facilities and prison systems. Enhances rehabilitation programs, monitors inmate behavior, and optimizes facility operations for better outcomes and reduced recidivism.`,
      features: [
        'Inmate behavior analysis and risk assessment',
        'Rehabilitation program effectiveness tracking',
        'Recidivism prediction and prevention',
        'Prison facility resource optimization',
        'Staff safety and security enhancement'
      ],
      status: 'coming-soon',
      icon: 'Building',
      category: 'reform',
      isAvailable: false,
      accessUrl: null
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'justice', name: 'Justice & Legal', count: products.filter(p => p.category === 'justice').length },
    { id: 'healthcare', name: 'Healthcare', count: products.filter(p => p.category === 'healthcare').length },
    { id: 'education', name: 'Education', count: products.filter(p => p.category === 'education').length },
    { id: 'veterans', name: 'Veterans Affairs', count: products.filter(p => p.category === 'veterans').length },
    { id: 'welfare', name: 'Child Welfare', count: products.filter(p => p.category === 'welfare').length },
    { id: 'reform', name: 'Prison Reform', count: products.filter(p => p.category === 'reform').length }
  ];

  // Stats overview data
  const stats = [
    { icon: 'Layers', value: '6', label: 'AI Solutions' },
    { icon: 'CheckCircle', value: '1', label: 'Available Now' },
    { icon: 'Clock', value: '5', label: 'Coming Soon' },
    { icon: 'Building2', value: '100%', label: 'Gov Focused' }
  ];

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory, products]);

  const handleProductAccess = (product) => {
    if (product.isAvailable && product.accessUrl) {
      window.open(product.accessUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      <Helmet>
        <title>Product Portfolio Showcase - Leo Caesars AI Platform</title>
        <meta 
          name="description" 
          content="Explore Leo Caesars LLC's comprehensive AI solutions portfolio designed for government and enterprise clients. Discover our innovative products including AiJusticeGrid, CaesarScribe, Bhimlaw Ai, and more." 
        />
        <meta name="keywords" content="AI solutions, government AI, enterprise AI, legal AI, healthcare AI, education technology, veterans support, child welfare AI, prison reform AI" />
        <meta property="og:title" content="Product Portfolio Showcase - Leo Caesars AI Platform" />
        <meta property="og:description" content="Professional AI solutions for government and enterprise clients. Explore our innovative product portfolio." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <SectionHeader
              title="AI Solutions Portfolio"
              subtitle="Government & Enterprise Focused"
              description="Discover our comprehensive suite of AI-powered solutions designed specifically for government agencies and enterprise clients. From legal case management to healthcare optimization, our products deliver measurable results."
              icon="Layers"
            />

            {/* Stats Overview */}
            <StatsOverview stats={stats} />

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Products Grid */}
            <ProductGrid
              products={filteredProducts}
              onProductAccess={handleProductAccess}
            />

            {/* Additional Information */}
            <div className="mt-16 lg:mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-text-secondary text-lg mb-6 max-w-2xl mx-auto">
                  Our AI solutions are designed to meet the unique challenges of government and enterprise environments. 
                  Contact us to discuss how we can customize our platforms for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact-global-presence"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Contact Our Team
                  </a>
                  <a
                    href="/services-capabilities"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-text-primary rounded-lg font-medium hover:bg-muted transition-colors"
                  >
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductPortfolioShowcase;