'use client'; // Required for useRef and useState hooks

import React, { useRef, useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  title: string;
  children: React.ReactNode;
  // Add optional props like viewAllLink if needed later
}

const Carousel: React.FC<CarouselProps> = ({ title, children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to check scroll limits
  const checkScrollLimits = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 1); // Allow a pixel tolerance
      // Check if scrollLeft is near the maximum scroll position
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // Allow a pixel tolerance
    }
  }, []); // Empty dependency array, useCallback memoizes the function

  // Attach scroll event listener and check limits on mount and resize
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Initial check
      checkScrollLimits();

      // Check on scroll
      container.addEventListener('scroll', checkScrollLimits, { passive: true });
      // Check on resize
      window.addEventListener('resize', checkScrollLimits);

      // Cleanup listeners
      return () => {
        container.removeEventListener('scroll', checkScrollLimits);
        window.removeEventListener('resize', checkScrollLimits);
      };
    }
  }, [checkScrollLimits]); // Re-run effect if checkScrollLimits changes (though it's memoized)

  // Scroll function
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      // Calculate scroll amount (e.g., 80% of visible width)
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Note: The scroll event listener will automatically update button states
    }
  };

  return (
    <section className="mb-12 relative group"> {/* Add group for hover effects if needed */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {/* Buttons are positioned absolutely */}
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide" // scrollbar-hide might need a plugin or custom CSS
      >
        {children}
      </div>

      {/* Scroll Buttons (Positioned Absolutely) */}
      {/* Left Button */}
      <button
        aria-label="Scroll left"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 z-10
                    p-2 rounded-full bg-white border border-gray-300 shadow-md
                    text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500
                    disabled:opacity-0 disabled:cursor-not-allowed transition-opacity duration-300
                    opacity-0 group-hover:opacity-100 ${canScrollLeft ? 'opacity-100 group-hover:opacity-100' : 'opacity-0'}`} // Show on hover if scrollable
      >
         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>

      {/* Right Button */}
      <button
        aria-label="Scroll right"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10
                    p-2 rounded-full bg-white border border-gray-300 shadow-md
                    text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500
                    disabled:opacity-0 disabled:cursor-not-allowed transition-opacity duration-300
                    opacity-0 group-hover:opacity-100 ${canScrollRight ? 'opacity-100 group-hover:opacity-100' : 'opacity-0'}`} // Show on hover if scrollable
      >
         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

    </section>
  );
};

// Utility class for scrollbar hiding (add to globals.css or configure via plugin)
/*
In globals.css or a similar file:

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;  // IE and Edge
  scrollbar-width: none;  // Firefox
}
*/


export default Carousel; 