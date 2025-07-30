import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Slider data (images in public/images)
const slides = [
  {
    image: '/images/slider01.jpg',
    title: 'At St Paul Thomas Academy We Nurture And Hone Talents.',
  },
  {
    image: '/images/slide2.PNG',
    title: "Fully Resourced To Meet Your Child's Needs",
  },
  {
    image: '/images/slide3.PNG',
    title: 'Vitae Abundantae | Life In Abundance',
  },
];




// Transparent header over hero
const header = () => (
  <header className="fixed inset-x-0 top-0 z-50 h-[10vh] bg-transparent">
    <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">
      <NavLink to="/" className="text-white font-bold text-xl">
        STPA
      </NavLink>
      <div className="space-x-6">
        <NavLink to="/" className="text-white hover:underline">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white hover:underline">
          About
        </NavLink>
        <NavLink to="/admissions" className="text-white hover:underline">
          Admissions
        </NavLink>
        <NavLink to="/contact" className="text-white hover:underline">
          Contact
        </NavLink>
      </div>
    </nav>
  </header>
);

// Hero slider with fade effect
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};

// Sample About section
const AboutSection = () => (
  <section id="about" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold text-primary-foreground mb-4">
        About St Paul Thomas Academy
      </h3>
      <p className="text-gray-700">
        St Paul Thomas Academy is committed to academic excellence and holistic development. Located in the heart of the community, we offer a nurturing environment where every child can thrive.
      </p>
    </div>
  </section>
);

// Sample Values/Features section
const ValuesSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard title="Academic Excellence">
        Rigorous curriculum and experienced faculty ensure top performance.
      </FeatureCard>
      <FeatureCard title="Creative Arts">
        Fully equipped art and music studios to foster creativity.
      </FeatureCard>
      <FeatureCard title="Sports & Life Skills">
        Wide range of sports and extracurricular activities.
      </FeatureCard>
    </div>
  </section>
);

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
    <h4 className="text-xl font-semibold mb-2 text-primary-foreground">{title}</h4>
    <p className="text-gray-600">{children}</p>
  </div>
);

// Simple Footer
const Footer = () => (
  <footer className="bg-[#093057] text-white py-8">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h5 className="font-bold mb-2">STPA</h5>
        <p>© {new Date().getFullYear()} St Paul Thomas Academy</p>
      </div>
      <div>
        <h5 className="font-bold mb-2">Contact</h5>
        <p>123 Academy Rd, City</p>
        <p>+254 700 000000</p>
      </div>
      <div>
        <h5 className="font-bold mb-2">Quick Links</h5>
        <ul className="space-y-1">
          <li><a href="/admissions">Admissions</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>
    </div>
  </footer>
);
export default header;