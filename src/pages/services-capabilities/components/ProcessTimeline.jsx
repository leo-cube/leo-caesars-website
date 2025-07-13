import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = ({ steps, className = '' }) => {
  return (
    <div className={`bg-surface rounded-xl p-8 border border-border ${className}`}>
      <h3 className="text-2xl font-heading font-bold text-text-primary mb-8 text-center">
        Our Development Process
      </h3>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start space-x-6">
              {/* Step Number */}
              <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-lg">
                  {index + 1}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name={step.icon} size={20} className="text-primary" />
                  <h4 className="text-lg font-heading font-semibold text-text-primary">
                    {step.title}
                  </h4>
                </div>
                <p className="text-text-secondary font-body leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Deliverables */}
                {step.deliverables && (
                  <div>
                    <h5 className="text-sm font-heading font-semibold text-text-primary mb-2">
                      Key Deliverables:
                    </h5>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-success" />
                          <span className="text-sm font-body text-text-secondary">
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;