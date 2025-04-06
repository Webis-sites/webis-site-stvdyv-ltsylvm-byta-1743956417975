'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopButtonProps {
  threshold?: number;
  scrollDuration?: number;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  threshold = 300,
  scrollDuration = 500,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startPosition * (1 - easeOutCubic));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="חזרה לראש העמוד"
      className={`
        fixed bottom-6 start-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-primary text-white
        shadow-lg hover:bg-primary-dark
        focus:outline-none focus:ring-2 focus:ring-secondary
        transition-all duration-300 ease-in-out
        transform hover:scale-110
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;