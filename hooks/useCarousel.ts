"use client"

import { useState, useEffect, useRef, useCallback } from 'react';

export function useCarousel(itemCount: number, options: { autoplay?: boolean; autoplayInterval?: number } = {}) {
  const { autoplay = true, autoplayInterval = 5000 } = options;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % itemCount);
  }, [itemCount]);

  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(next, autoplayInterval);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, next, autoplayInterval]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return { currentIndex, goToSlide, next, prev, handleMouseEnter, handleMouseLeave };
}