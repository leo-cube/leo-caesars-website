import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationCard = ({ location, isUSLocation = false }) => {
  const formatPhoneNumber = (phone) => {
    if (isUSLocation) {
      return `+1 ${phone}`;
    }
    return `+91 ${phone}`;
  };

  const formatBusinessHours = (hours) => {
    if (isUSLocation) {
      return `${hours} (EST)`;
    }
    return `${hours} (IST)`;
  };

  return (
    <div className="bg-surface rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold text-text-primary">
              {location.city}
            </h3>
            <p className="text-sm font-caption text-text-secondary">
              {location.country}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1 px-3 py-1 bg-success-50 text-success-600 rounded-full text-xs font-medium">
          <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
          <span>Active</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-start space-x-3">
          <Icon name="Building2" size={18} className="text-text-secondary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-body text-text-primary leading-relaxed">
              {location.address}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <Icon name="Phone" size={18} className="text-text-secondary flex-shrink-0" />
          <a
            href={`tel:${formatPhoneNumber(location.phone)}`}
            className="text-sm font-body text-accent hover:text-accent-600 transition-colors duration-200"
          >
            {formatPhoneNumber(location.phone)}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <Icon name="Mail" size={18} className="text-text-secondary flex-shrink-0" />
          <a
            href={`mailto:${location.email}`}
            className="text-sm font-body text-accent hover:text-accent-600 transition-colors duration-200"
          >
            {location.email}
          </a>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={18} className="text-text-secondary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-body text-text-primary">
              {formatBusinessHours(location.businessHours)}
            </p>
            <p className="text-xs font-caption text-text-secondary mt-1">
              {location.businessDays}
            </p>
          </div>
        </div>

        {/* Specialization */}
        <div className="pt-3 border-t border-border">
          <div className="flex items-start space-x-3">
            <Icon name="Target" size={18} className="text-text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-caption text-text-secondary uppercase tracking-wide mb-1">
                Specialization
              </p>
              <p className="text-sm font-body text-text-primary">
                {location.specialization}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;