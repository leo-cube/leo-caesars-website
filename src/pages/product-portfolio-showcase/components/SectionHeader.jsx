import React from 'react';
import Icon from '../../../components/AppIcon';

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  icon,
  className = '' 
}) => {
  return (
    <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-16 ${className}`}>
      {icon && (
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
            <Icon 
              name={icon} 
              size={32} 
              className="text-white" 
            />
          </div>
        </div>
      )}
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-lg md:text-xl text-accent font-medium mb-6">
          {subtitle}
        </p>
      )}
      
      {description && (
        <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;