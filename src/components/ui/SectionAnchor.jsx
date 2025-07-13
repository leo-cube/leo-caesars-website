import React, { useEffect, useRef } from 'react';

const SectionAnchor = ({ 
  id, 
  children, 
  className = '', 
  offset = 60,
  onIntersect 
}) => {
  const sectionRef = useRef(null);
  const anchorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && onIntersect) {
            onIntersect(id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0
      }
    );

    if (anchorRef.current) {
      observer.observe(anchorRef.current);
    }

    return () => {
      if (anchorRef.current) {
        observer.unobserve(anchorRef.current);
      }
    };
  }, [id, offset, onIntersect]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${className}`}
    >
      {/* Invisible anchor point for smooth scrolling */}
      <div
        id={id}
        ref={anchorRef}
        className="absolute scroll-offset"
        style={{ top: `-${offset}px` }}
        aria-hidden="true"
      />
      
      {children}
    </section>
  );
};

export default SectionAnchor;