import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductAccess, className = '' }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary text-lg">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAccessClick={onProductAccess}
          className="h-full"
        />
      ))}
    </div>
  );
};

export default ProductGrid;