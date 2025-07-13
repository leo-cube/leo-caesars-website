import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  isExpanded = false,
  onToggle,
  variant = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    default: 'bg-surface border-border hover:border-primary-300',
    featured: 'bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200 hover:border-primary-400',
    premium: 'bg-gradient-to-br from-accent-50 to-secondary-50 border-accent-200 hover:border-accent-400'
  };

  return (
    <div 
      className={`relative p-6 rounded-xl border-2 nav-transition card-elevation ${variantStyles[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center nav-transition ${
            variant === 'featured' ? 'bg-primary text-white' :
            variant === 'premium'? 'bg-accent text-white' : 'bg-primary-100 text-primary'
          }`}>
            <Icon name={icon} size={24} />
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-1">
              {title}
            </h3>
            {variant === 'featured' && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-caption font-medium bg-primary text-white">
                <Icon name="Star" size={12} className="mr-1" />
                Featured Service
              </span>
            )}
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          className="text-text-secondary hover:text-primary"
        >
          {isExpanded ? 'Less' : 'More'}
        </Button>
      </div>

      {/* Description */}
      <p className="text-text-secondary font-body leading-relaxed mb-4">
        {description}
      </p>

      {/* Features - Expandable */}
      <div className={`overflow-hidden nav-transition ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-heading font-semibold text-text-primary mb-3">
            Key Capabilities:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon 
                  name="CheckCircle" 
                  size={16} 
                  className="text-success mt-0.5 flex-shrink-0" 
                />
                <span className="text-sm font-body text-text-secondary">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover Effect Indicator */}
      <div className={`absolute inset-0 rounded-xl pointer-events-none nav-transition ${
        isHovered ? 'ring-2 ring-primary-300 ring-opacity-50' : ''
      }`} />
    </div>
  );
};

export default ServiceCard;