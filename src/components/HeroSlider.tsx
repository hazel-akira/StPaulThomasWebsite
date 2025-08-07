import { useState, useEffect } from "react";
import heroImage from "/images/slider01.jpg";
import heroVideo from "/images/drumming.mp4";
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
          <title>Home | Pioneer School</title>
        </Helmet>
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient/80" />
            </>
          ) : (
            <video
              src={slide.src}
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            />
          )}
        </div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white drop-shadow mb-8">
          At St Paul Thomas Academy we are fully resourced with human capital to meet your child’s need
        </h3>
        {/* <Button>Learn More</Button> */}
      </div>
    </section>
    </>
  );
};

export default Hero;
