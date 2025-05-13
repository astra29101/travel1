
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SearchBar from './SearchBar';

// Define banner slides
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Explore Beautiful Destinations',
    description: 'Discover breathtaking landscapes and unforgettable experiences',
  },
  {
    image: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f',
    title: 'Adventure Awaits',
    description: 'Embark on thrilling journeys with our guided tours',
  },
  {
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    title: 'Relax in Paradise',
    description: 'Unwind in serene locations with luxury accommodations',
  },
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-center">
              {slide.description}
            </p>
            <SearchBar className="z-10" />
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
