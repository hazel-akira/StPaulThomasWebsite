// src/components/HeroSlider.jsx
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    image: '/images/slider01.jpg',
    title: 'At St Paul Thomas Academy We Nurture And Hone Talents.',
  },
  {
    image: '/images/students.jpg',
    title: "Fully Resourced To Meet Your Child's Needs",
  },
  {
    image: '/images/students1.jpg',
    title: 'Vitae Abundantae | Life In Abundance',
  },
];



export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 8000);
    return () => clearInterval(timer);
  }, [length]);

  const prevSlide = () =>
    setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#74d1f6] bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-20"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#74d1f6] bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-20"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
