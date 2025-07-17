import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ 
  title, 
  description, 
  status, 
  iconName, 
  isAvailable, 
  externalUrl,
  features = [],
  category = "AI Solution"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Check if this is the AiJusticeGrid card
  const isAiJusticeGrid = title === "AiJusticeGrid";
  
  // Get background color based on card type with consistent solid color
  const getCardBackgroundColor = () => {
    if (isAiJusticeGrid) {
      return 'bg-gray-50 border-gray-200'; // Consistent primary color for AiJusticeGrid
    }
    
    // Apply consistent solid background color for all other cards
    return 'bg-gray-50 border-gray-200';
  };

  // Get icon colors that match the consistent theme
  const getIconColors = () => {
    if (isAiJusticeGrid) {
      return isAvailable
        ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
        : 'bg-secondary-100 text-secondary-500';
    }

    // Consistent icon colors for all cards
    return isAvailable
      ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
      : 'bg-secondary-100 text-secondary-500';
  };

  const handleCardClick = () => {
    if (isAvailable && externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`relative group ${getCardBackgroundColor()} rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
        isAvailable ? 'cursor-pointer hover:scale-105' : 'cursor-default'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${getIconColors()}`}>
            <Icon name={iconName} size={24} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-sm text-text-secondary font-caption">
              {category}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-white/60 text-text-secondary text-xs rounded-md backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
              {features.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 bg-white/60 text-text-secondary text-xs rounded-md backdrop-blur-sm">
                  +{features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-white/30">
          {isAvailable ? (
            <Button
              variant="primary"
              size="sm"
              fullWidth
              iconName="ExternalLink"
              iconPosition="right"
              className="group-hover:shadow-md transition-shadow duration-300"
            >
              Access Platform
            </Button>
          ) : (
            <Button
              variant="coming-soon"
              size="sm"
              fullWidth
              disabled
              iconName="Clock"
              iconPosition="left"
            >
              Coming Soon
            </Button>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity duration-300 ${
        isHovered && isAvailable ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Available Indicator */}
      {isAvailable && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-success-400 to-success-600"></div>
      )}
    </div>
  );
};

export default ProductCard;
