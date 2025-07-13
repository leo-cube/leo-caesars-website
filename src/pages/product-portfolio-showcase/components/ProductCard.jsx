import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ 
  product, 
  onAccessClick, 
  className = '' 
}) => {
  const {
    id,
    name,
    tagline,
    description,
    features,
    status,
    icon,
    category,
    isAvailable,
    accessUrl
  } = product;

  const handleAccessClick = () => {
    if (isAvailable && accessUrl) {
      window.open(accessUrl, '_blank', 'noopener,noreferrer');
    } else if (onAccessClick) {
      onAccessClick(product);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'justice': 'from-blue-600 to-indigo-700',
      'healthcare': 'from-green-600 to-emerald-700',
      'education': 'from-purple-600 to-violet-700',
      'veterans': 'from-red-600 to-rose-700',
      'welfare': 'from-orange-600 to-amber-700',
      'reform': 'from-gray-600 to-slate-700'
    };
    return colors[category] || 'from-primary to-accent';
  };

  // Get vibrant background color based on category
  const getCardBackgroundColor = () => {
    const backgrounds = {
      'justice': 'bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200',
      'healthcare': 'bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200',
      'education': 'bg-gradient-to-br from-purple-50 to-violet-100 hover:from-purple-100 hover:to-violet-200',
      'veterans': 'bg-gradient-to-br from-red-50 to-rose-100 hover:from-red-100 hover:to-rose-200',
      'welfare': 'bg-gradient-to-br from-orange-50 to-amber-100 hover:from-orange-100 hover:to-amber-200',
      'reform': 'bg-gradient-to-br from-gray-50 to-slate-100 hover:from-gray-100 hover:to-slate-200'
    };
    
    return backgrounds[category] || 'bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200';
  };

  const getTextColor = (category) => {
    const textColors = {
      'justice': 'text-blue-900',
      'healthcare': 'text-green-900',
      'education': 'text-purple-900',
      'veterans': 'text-red-900',
      'welfare': 'text-orange-900',
      'reform': 'text-gray-900'
    };
    return textColors[category] || 'text-blue-900';
  };

  const getSecondaryTextColor = (category) => {
    const textColors = {
      'justice': 'text-blue-700',
      'healthcare': 'text-green-700',
      'education': 'text-purple-700',
      'veterans': 'text-red-700',
      'welfare': 'text-orange-700',
      'reform': 'text-gray-700'
    };
    return textColors[category] || 'text-blue-700';
  };

  return (
    <div className={`group relative ${getCardBackgroundColor()} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-white/50 overflow-hidden transform-gpu ${className}`}>
      {/* Status Badge - Only for available products */}
      {isAvailable && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium shadow-md">
            Available
          </div>
        </div>
      )}

      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start space-x-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getCategoryColor(category)} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
            <Icon 
              name={icon} 
              size={26} 
              className="text-white" 
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`text-xl font-heading font-bold ${getTextColor(category)} mb-2 group-hover:text-primary transition-colors duration-300`}>
              {name}
            </h3>
            <p className={`text-sm font-semibold ${getSecondaryTextColor(category)} mb-3 group-hover:text-accent transition-colors duration-300`}>
              {tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 pb-6">
        <p className={`${getSecondaryTextColor(category)} text-sm leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300`}>
          {description}
        </p>

        {/* Features List */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className={`text-sm font-semibold ${getTextColor(category)} mb-3`}>Key Features:</h4>
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className={`flex items-start space-x-2 text-sm ${getSecondaryTextColor(category)}`}>
                  <Icon 
                    name="Check" 
                    size={16} 
                    className="text-success mt-0.5 flex-shrink-0" 
                  />
                  <span>{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className={`text-xs ${getSecondaryTextColor(category)} italic`}>
                  +{features.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Action Button - Only for available products */}
        {isAvailable && (
          <div className="pt-4 border-t border-white/30">
            <Button
              variant="primary"
              size="sm"
              fullWidth
              onClick={handleAccessClick}
              iconName="ExternalLink"
              iconPosition="right"
              className="group-hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              Access Now
            </Button>
          </div>
        )}
      </div>

      {/* Enhanced Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-primary/50 to-accent/50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCard;