// src/pages/Aviator.tsx

import InfoCard from '../components/InfoCard';

// Key features for the Aviator program
const features = [
  {
    title: 'Private Pilot License (PPL)',
    description: 'Over the course of the last decade, we have proudly guided numerous students through our comprehensive program in collaboration with our esteemed partners, ensuring they achieve their Private Pilot License upon completing their final year.',
    imageSrc: '/images/aviation.jpg',
  },
  {
    title: 'Flight Simulation',
    description: 'Advanced simulators replicate real cockpit experience for skill-building in a safe environment.',
    imageSrc: '/images/aviator.jpg',
  },
  {
    title: 'Aircraft Systems',
    description: 'In-depth study of aerodynamics, avionics, and mechanical systems that keep you airborne.',
    imageSrc: '/images/plane.jpg',
  },
  {
    title: 'Safety & Regulations',
    description: 'With a focus on safety, quality, and professionalism, we strive to nurture the next generation of skilled pilots who will lead the aviation industry into the future.',
    imageSrc: '/images/aviator.jpg',
  },
];

const Aviator: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/aviation_boys.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Aviator Pathway
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            Become a certified pilot with our world-class aviation training program.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-[#093056] text-center">
            Our Mission for Future Aviators
          </h2>
          <p className="text-gray-700 leading-relaxed">
          Our institution, a trailblazer in Aviation Training in Kenya, has consistently set the standard for excellence. Since its inception, we have prioritized hands-on flight training for our students from the moment they join us.

Our mission is for our students to not only attain their potential in academics but also to be trained at the highest level in flying and also build Kenya's aviation sector to be the best in the continent. </p>
          <p className="text-gray-700 leading-relaxed">
          Over the course of the last decade, we have proudly guided numerous students through our comprehensive program in collaboration with our esteemed partners, ensuring they achieve their Private Pilot License upon completing their final year.   </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#093056]">
            Program Highlights
          </h2>
          <p className="text-gray-600 mt-2">
            Core components that set our Aviator pathway apart.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <InfoCard key={idx} {...f} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#093056] py-12 text-center px-4">
        <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">
          Ready to Take Flight?
        </h3>
        <a
            href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
          className="inline-block bg-[#f4a024] text-[#093056] font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition"
        >
          Enquire Now
        </a>
      </section>
    </>
  );
};

export default Aviator;
