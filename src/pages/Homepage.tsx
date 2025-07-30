import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// Slide type
interface Slide {
  type: 'image' | 'video';
  background?: string;
  link?: string;
  text?: string;
  src?: string;
  overlayText?: string;
}

// Slides data
const slides: Slide[] = [
 
  {
    type: 'video',
    src: '/images/drumming.mp4',
    overlayText: 'At St Paul Thomas Academy We Nurture And Hone Talents.',
  },
];

// Header
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Who We Are', href: '/Who-We-Are', dropdown: ['Vision & Mission', 'Our Team', 'History'] },
    { title: 'KCPE Results', href: '/KCPE-Results' },
    { title: 'Nurture', href: '/Nurture', dropdown: ['Spiritual', 'Academic', 'Character'] },
    { title: 'Study Life', href: '/Study-Life', dropdown: ['Clubs', 'Sports', 'Events'] },
    { title: 'Talent', href: '/Talent', dropdown: ['Arts', 'Music', 'Drama'] },
    { title: 'Our Friendly Fees', href: '/Fees' },
    { title: 'How To Join Us', href: '/Admissions' },
    { title: 'Location', href: '/Location' },
    { title: 'Get Access', href: '/Get-Access' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#74d1f6]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center h-[10vh]">
          <a href="/" className="flex-shrink-0">
            <img src="/images/favicon.webp" alt="STPA Logo" className="h-8 w-auto" />
            <h1 className='text-xl font-black'>St Paul Thomas Academy</h1>
          </a>

          <nav className="hidden lg:flex ml-10 space-x-8  text-black text-sm font-medium">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                <a href={item.href} className="flex items-center hover:text-gray-300">
                  {item.title}
                  {item.dropdown && <ChevronDownIcon className="ml-1 h-4 w-4" />}
                </a>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-44 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.dropdown.map((sub, si) => (
                      <a
                        key={si}
                        href={`${item.href}#${sub.replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="lg:hidden ml-auto">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white focus:outline-none">
              {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-md p-4">
          <nav className="space-y-2">
            {menuItems.map((item, i) => (
              <div key={i}>
                <a href={item.href} className="block text-gray-800 font-medium py-1">
                  {item.title}
                </a>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((sub, si) => (
                      <a
                        key={si}
                        href={`${item.href}#${sub.replace(/\s+/g, '-')}`}
                        className="block text-gray-600 py-1"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// HomePage
const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main className="pt-[10vh]">
        {/* Hero Slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 9000, disableOnInteraction: false }}
          className="h-screen w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="h-full">
              {slide.type === 'image' ? (
                <div
                  className="relative w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.background})` }}
                >
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
                    <a
                      href={slide.link}
                      className="text-white text-3xl md:text-5xl font-bold text-center"
                    >
                      {slide.text}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                      {slide.overlayText}
                    </h1>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-[#093057] mb-4">About St Paul Thomas Academy</h3>
            <p className="text-gray-700">
              St Paul Thomas Academy is committed to academic excellence and holistic development.
              <br /> Located in the heart of the community, we offer a nurturing environment where every child can thrive.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Academic Excellence', desc: 'Rigorous curriculum and experienced faculty ensure top performance.' },
              { title: 'Creative Arts', desc: 'Fully equipped art and music studios to foster creativity.' },
              { title: 'Sports & Life Skills', desc: 'Wide range of sports and extracurricular activities.' },
            ].map((val, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-2 text-[#093057]">{val.title}</h4>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
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
                <li><a href="/admissions" className="hover:underline">Admissions</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
