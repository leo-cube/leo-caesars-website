import React, { useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  navigationItems = [], 
  activeSection = '',
  onNavigate 
}) => {
  // Handle escape key and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  const handleNavigate = (anchor, offset) => {
    if (onNavigate) {
      onNavigate(anchor, offset);
    }
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-1100 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-secondary-900/50 backdrop-blur-sm nav-transition"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 left-0 w-80 max-w-sm h-full bg-surface shadow-xl animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-heading font-semibold text-text-primary">
                Leo Caesars
              </h2>
              <p className="text-xs font-caption text-text-secondary -mt-1">
                AI Platform
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-muted nav-transition focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Close navigation menu"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="px-4 py-6 space-y-2" role="navigation">
          {navigationItems.map((item) => (
            <button
              key={item.anchor}
              onClick={() => handleNavigate(item.anchor, item.offset)}
              className={`w-full text-left px-4 py-3 text-base font-body font-medium nav-transition rounded-lg focus:outline-none focus:ring-2 focus:ring-ring ${
                activeSection === item.anchor
                  ? 'text-primary bg-primary-50 border-l-4 border-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
              }`}
              aria-current={activeSection === item.anchor ? 'page' : undefined}
            >
              <div className="flex items-center justify-between">
                <span>{item.label}</span>
                {activeSection === item.anchor && (
                  <Icon name="ChevronRight" size={16} className="text-primary" />
                )}
              </div>
            </button>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-muted">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={() => handleNavigate('contact', 60)}
            className="nav-transition"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Get Started
          </Button>
          
          <div className="mt-3 text-center">
            <p className="text-xs font-caption text-text-secondary">
              Professional AI Solutions for Government & Enterprise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;