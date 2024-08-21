"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface TextCarouselProps {
  items: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const TextCarousel: React.FC<TextCarouselProps> = ({
  items,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // useCallback: Memoizes nextSlide, meaning it only changes if items.length changes.
  // This ensures that nextSlide remains stable across renders.
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);

    return () => clearInterval(slideInterval); // Cleanup upon unmount or dependency changes.
  }, [autoSlide, autoSlideInterval, nextSlide]);

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((text, idx) => (
          <div
            key={idx}
            className="flex h-36 min-w-full items-center justify-center px-4 py-8 sm:h-44 md:h-60"
          >
            <p className="text-center text-2xl font-medium sm:text-4xl md:text-7xl">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        aria-label="Previous Slide"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        aria-label="Next Slide"
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
