
  {/* import { useState, useEffect } from "react";
import heroImage from "/images/kpsea.jpg";
import heroVideo from "/images/kpsea1.jpg";
import { Helmet } from 'react-helmet-async'
const slides = [
  { type: "image", src: heroImage, alt: "St Paul Thomas Academy Campus" },
  { type: "video", src: heroVideo },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000); // switch every 8 seconds
    return () => clearInterval(id);
  }, []);
  
    return (
      <>
       <Helmet>
          <title>Home | St Paul Thomas Academy</title>
        </Helmet>
    <section
      id="home"
      className="relative min-h-[100vh] font-sans flex items-center justify-center overflow-hidden"
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`
            absolute inset-0 z-0 transition-opacity duration-1000
            ${idx === current ? "opacity-100" : "opacity-0"}
          `}
        >
          {slide.type === "image" ? (
            <>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-screen h-full object-cover object-[50%_15%] "
              />
              <div className="absolute inset-0 bg-hero-gradient/80" />
            </>
          ) : (
            <video
              src={slide.src}
              className="w-full h-full object-cover object-[50%_20%]"
              muted
              autoPlay
              loop
              playsInline
            />
          )}
        </div>
      ))}

      {/*   <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-sans text-white drop-shadow mb-8">
          At St Paul Thomas Academy we are fully resourced with human capital to meet your child’s needs
        </h3>
      <Button>Learn More</Button> 
      </div>
    </section>
    </>
  );
};

export default Hero;
*/}
import { Helmet } from 'react-helmet-async'
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
   "/images/kpsea1.webp",
  "/images/kpsea1.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <>
    <Helmet>
      <title>Home | Pioneer Junior Academy</title>
    </Helmet>
    <div className="relative w-full bg-white">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "800px" }}
      >
        {/* Image Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Prev / Next Buttons */}
        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle 
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-medium z-10"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>*/}
      </div>
    </div>
    </>
  );
};

export default Hero;