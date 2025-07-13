import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CaseStudyHighlight = ({ 
  title, 
  client, 
  challenge, 
  solution, 
  results, 
  image, 
  tags,
  className = ''
}) => {
  return (
    <div className={`bg-surface rounded-xl overflow-hidden border border-border card-elevation ${className}`}>
      {/* Image */}
      <div className="h-48 overflow-hidden bg-secondary-100">
        <Image 
          src={image} 
          alt={`${title} case study`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
            {title}
          </h3>
          <div className="flex items-center space-x-2 text-sm font-body text-text-secondary">
            <Icon name="Building" size={16} />
            <span>{client}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-caption font-medium bg-accent-100 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Challenge */}
        <div className="mb-4">
          <h4 className="text-sm font-heading font-semibold text-text-primary mb-2 flex items-center">
            <Icon name="AlertTriangle" size={16} className="text-warning mr-2" />
            Challenge
          </h4>
          <p className="text-sm font-body text-text-secondary leading-relaxed">
            {challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <h4 className="text-sm font-heading font-semibold text-text-primary mb-2 flex items-center">
            <Icon name="Lightbulb" size={16} className="text-primary mr-2" />
            Solution
          </h4>
          <p className="text-sm font-body text-text-secondary leading-relaxed">
            {solution}
          </p>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h4 className="text-sm font-heading font-semibold text-text-primary mb-2 flex items-center">
            <Icon name="TrendingUp" size={16} className="text-success mr-2" />
            Results
          </h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm font-body text-text-secondary">
                  {result}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ExternalLink"
          iconPosition="right"
          className="text-primary border-primary hover:bg-primary hover:text-white"
        >
          View Full Case Study
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyHighlight;