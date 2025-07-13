import React from 'react';
import Button from '../../../components/ui/Button';


const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className = '' 
}) => {
  const categoryIcons = {
    'all': 'Grid3X3',
    'justice': 'Scale',
    'healthcare': 'Heart',
    'education': 'GraduationCap',
    'veterans': 'Shield',
    'welfare': 'Users',
    'reform': 'Building'
  };

  return (
    <div className={`flex flex-wrap justify-center gap-3 mb-8 lg:mb-12 ${className}`}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          iconName={categoryIcons[category.id] || 'Circle'}
          iconPosition="left"
          className="transition-all duration-200"
        >
          {category.name}
          {category.count > 0 && (
            <span className="ml-2 px-2 py-0.5 bg-current bg-opacity-20 rounded-full text-xs">
              {category.count}
            </span>
          )}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;