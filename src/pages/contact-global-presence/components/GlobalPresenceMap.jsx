import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GlobalPresenceMap = () => {
  const [selectedLocation, setSelectedLocation] = useState('tampa');

  const locations = {
    tampa: {
      id: 'tampa',
      name: 'Tampa, Florida',
      country: 'United States',
      coordinates: { lat: 27.9506, lng: -82.4572 },
      address: `Leo Caesars LLC\n123 Innovation Drive, Suite 400\nTampa, FL 33602\nUnited States`,
      timezone: 'Eastern Time (EST)',
      established: '2021',
      teamSize: '25+ Professionals',
      specialties: ['Government AI Solutions', 'Enterprise SaaS', 'Blockchain Development']
    },
    chennai: {
      id: 'chennai',
      name: 'Chennai, Tamil Nadu',
      country: 'India',
      coordinates: { lat: 13.0827, lng: 80.2707 },
      address: `Leo Caesars India Pvt Ltd\n456 Tech Park, 5th Floor\nChennai, Tamil Nadu 600001\nIndia`,
      timezone: 'India Standard Time (IST)',
      established: '2022',
      teamSize: '40+ Professionals',
      specialties: ['AI Development', 'Data Analytics', 'Technical Support']
    }
  };

  const globalStats = [
    {
      icon: 'Users',
      label: 'Global Team',
      value: '65+',
      description: 'AI & Tech Professionals'
    },
    {
      icon: 'Globe',
      label: 'Countries Served',
      value: '12+',
      description: 'Government & Enterprise Clients'
    },
    {
      icon: 'Clock',
      label: 'Time Coverage',
      value: '24/7',
      description: 'Support Across Time Zones'
    },
    {
      icon: 'Award',
      label: 'Years Experience',
      value: '3+',
      description: 'In AI Solutions'
    }
  ];

  const currentLocation = locations[selectedLocation];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
          Global Presence & Reach
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          With strategic offices in the United States and India, Leo Caesars LLC provides 
          round-the-clock AI solutions and support to government and enterprise clients worldwide.
        </p>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {globalStats.map((stat, index) => (
          <div key={index} className="bg-surface border border-border rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name={stat.icon} size={20} className="text-white" />
            </div>
            <div className="text-2xl font-heading font-bold text-text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-text-primary mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-text-secondary">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Map Section */}
      <div className="bg-surface rounded-xl shadow-lg border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
            Our Office Locations
          </h3>
          <div className="flex flex-wrap gap-2">
            {Object.values(locations).map((location) => (
              <Button
                key={location.id}
                variant={selectedLocation === location.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedLocation(location.id)}
                iconName="MapPin"
                iconPosition="left"
              >
                {location.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Map */}
          <div className="h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title={`${currentLocation.name} Office Location`}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}&z=14&output=embed`}
              className="border-0"
            />
          </div>

          {/* Location Details */}
          <div className="p-6 bg-muted lg:bg-surface">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-heading font-semibold text-text-primary">
                  {currentLocation.name}
                </h4>
                <p className="text-text-secondary font-caption">
                  {currentLocation.country}
                </p>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-success-50 text-success-600 rounded-full text-xs font-medium">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span>Active</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="text-text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-body text-text-primary whitespace-pre-line">
                    {currentLocation.address}
                  </p>
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} className="text-text-secondary flex-shrink-0" />
                <p className="text-sm font-body text-text-primary">
                  {currentLocation.timezone}
                </p>
              </div>

              {/* Established */}
              <div className="flex items-center space-x-3">
                <Icon name="Calendar" size={18} className="text-text-secondary flex-shrink-0" />
                <p className="text-sm font-body text-text-primary">
                  Established {currentLocation.established}
                </p>
              </div>

              {/* Team Size */}
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={18} className="text-text-secondary flex-shrink-0" />
                <p className="text-sm font-body text-text-primary">
                  {currentLocation.teamSize}
                </p>
              </div>

              {/* Specialties */}
              <div className="pt-3 border-t border-border">
                <div className="flex items-start space-x-3">
                  <Icon name="Target" size={18} className="text-text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-caption text-text-secondary uppercase tracking-wide mb-2">
                      Core Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentLocation.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Zone Information */}
      <div className="bg-surface rounded-lg border border-border p-6">
        <h4 className="text-lg font-heading font-semibold text-text-primary mb-4">
          Current Time Zones
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={16} />
              </div>
              <div>
                <p className="font-medium text-text-primary">Tampa, FL</p>
                <p className="text-sm text-text-secondary">Eastern Time</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-mono font-semibold text-text-primary">
                {new Date().toLocaleTimeString('en-US', { 
                  timeZone: 'America/New_York',
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p className="text-xs text-text-secondary">EST</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={16} />
              </div>
              <div>
                <p className="font-medium text-text-primary">Chennai, TN</p>
                <p className="text-sm text-text-secondary">India Standard Time</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-mono font-semibold text-text-primary">
                {new Date().toLocaleTimeString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p className="text-xs text-text-secondary">IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresenceMap;