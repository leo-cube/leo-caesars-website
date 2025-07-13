import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16 ${className}`}>
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-surface rounded-xl p-4 lg:p-6 text-center border border-border hover:shadow-md transition-shadow"
        >
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon 
                name={stat.icon} 
                size={20} 
                className="text-white" 
              />
            </div>
          </div>
          <div className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;