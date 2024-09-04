"use client"
import Debouncer from '@/utils/Debouncer';
import { useEffect, useState, useCallback } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import ScrollToTopUtils from '@/utils/ScrollToTop';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const toggleVisibility: () => void = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const debouncedToggleVisibility: (...args: any[]) => void = useCallback(Debouncer(toggleVisibility, 100), []);
  useEffect(() => {
    window.addEventListener('scroll', debouncedToggleVisibility);
    return () => {
      window.removeEventListener('scroll', debouncedToggleVisibility);
    };
  }, [debouncedToggleVisibility]);

  return (
    <button
      onClick={ScrollToTopUtils}
      className={`
        fixed right-8 p-3 bg-mainGreen text-white rounded-full shadow-lg 
        hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-300 
        transition-all duration-300 ease-in-out transform
        ${isVisible ? 'bottom-8 opacity-50' : 'bottom-[-100px] opacity-0'}
      `}
    >
      <FaArrowCircleUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;
