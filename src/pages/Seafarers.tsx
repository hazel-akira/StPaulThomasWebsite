// src/pages/Seafarers.tsx

import InfoCard from '../components/InfoCard';

const courses = [
  {
    title: 'Maritime Economics',
    description: 'Understanding marine resource management and the blue economy',
    imageSrc: '/images/sea.jpg',
  },
  {
    title: 'Nautical Science',
    description: 'Navigation, seamanship, and the art of ship handling',
    imageSrc: '/images/captain.jpg',
  },
];

const Seafarers: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/ship.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Seafarers Pathway
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            Dive into a dynamic maritime career with our specialized courses and hands-on training.
          </p>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-semibold text-[#093056] text-center">
            Our Mission for Young Seafarers
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Immerse yourself in the wonders of our Marine program, meticulously crafted to ignite a deep-rooted passion for the vast expanse of the sea and all facets of maritime life, whether dealing with Big cargo ships or Small tugboats.

Explore the intricate details of marine ecosystems and the fascinating world beneath the waves, where every journey is an adventure waiting to unfold. </p>
          <p className="text-gray-700 leading-relaxed">
          Explore the intricate details of marine ecosystems and the fascinating world beneath the waves, where every journey is an adventure waiting to unfold.</p>
          <p className="text-gray-700 leading-relaxed">
          Through a comprehensive curriculum and immersive experiences, we aim to equip our students with the essential skills and knowledge needed to drive forward the innovative 'Blue Economy' maritime economic development initiatives that hold the key to a sustainable future.
           <br />
           With a commitment to serving the continent, we endeavor to foster a culture of continuous skills development, education, training, and cutting-edge research that not only supports but propels the growth of the blue economy to new heights </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#093056]">
            Core Courses
          </h2>
          <p className="text-gray-600 mt-2">
            Choose the course that sets your maritime career in motion.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {courses.map((c, idx) => (
            <InfoCard key={idx} {...c} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0C356A] py-12 text-center px-4">
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">
          Ready to set sail?
        </h3>
        <a
          href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
          className="inline-block bg-[#E4AF23] text-[#093056] font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition"
        >
          Enquire Now
        </a>
      </section>

    </>
  );
};

export default Seafarers;
