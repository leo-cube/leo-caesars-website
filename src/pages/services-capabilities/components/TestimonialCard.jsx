import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  organization, 
  avatar, 
  rating = 5,
  className = ''
}) => {
  return (
    <div className={`bg-surface rounded-xl p-6 border border-border card-elevation ${className}`}>
      {/* Quote */}
      <div className="mb-6">
        <Icon name="Quote" size={32} className="text-primary-300 mb-4" />
        <blockquote className="text-text-primary font-body leading-relaxed italic">
          "{quote}"
        </blockquote>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Icon 
            key={index}
            name="Star" 
            size={16} 
            className={index < rating ? 'text-warning fill-current' : 'text-secondary-300'} 
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-200">
          <Image 
            src={avatar} 
            alt={`${author} profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-heading font-semibold text-text-primary">
            {author}
          </div>
          <div className="text-sm font-body text-text-secondary">
            {position}
          </div>
          <div className="text-xs font-caption text-text-secondary">
            {organization}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;