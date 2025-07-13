import React from 'react';
import Icon from '../../../components/AppIcon';

const CapabilitySection = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  metrics, 
  technologies,
  className = ''
}) => {
  return (
    <div className={`bg-surface rounded-xl p-8 border border-border card-elevation ${className}`}>
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
          <Icon name={icon} size={28} className="text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-text-primary">
            {title}
          </h3>
          <p className="text-text-secondary font-body font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary font-body leading-relaxed mb-6">
        {description}
      </p>

      {/* Metrics */}
      {metrics && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-caption text-text-secondary">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Technologies */}
      {technologies && (
        <div>
          <h4 className="text-sm font-heading font-semibold text-text-primary mb-3">
            Technologies & Frameworks:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-caption font-medium bg-primary-100 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CapabilitySection;