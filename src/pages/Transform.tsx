// src/pages/Transform.tsx
import { Link } from 'react-router-dom';

const Transform: React.FC = () => {
  return (
    <div className=" min-h-screen relative">
     
    <main className="">
      {/* Section 1: Title + Intro */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#093056]">
            Transform and Lead
          </h1>
          <p className="text-lg text-gray-700">
            At Pioneer School, we inspire students to seek their ambitions and transform into future leaders
          </p>
        </div>
      </section>

      {/* Section 2: Full-screen background image with dark overlay */}
      <section
        className="relative h-[700px] bg-center  bg-cover bg-fixed"
        style={{ backgroundImage: "url('/images/men.webp')" }}
      >
        <div className="absolute inset-0  bg-opacity-50" />
      </section>

      {/* Section 3: Text + Call-to-Action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Transform copy */}
          <div className="md:col-span-2 space-y-6 text-gray-800">
            <h3 className="text-2xl font-semibold">
              We inspire our students to seek their ambitions and transform them into future leaders
            </h3>
            <p>
              &quot;Transform and Lead&quot; at Pioneer School encapsulates our commitment to fostering a learning environment where innovation, leadership, and community engagement are at the forefront.
            </p>
            <p>
              This initiative is designed to empower students with the skills and mindset needed to navigate and excel in an ever‑evolving world.
            </p>
            <p>
              By integrating advanced technology, personalized learning experiences, and robust leadership development programs, we aim to transform traditional educational models and cultivate a new generation of forward‑thinking leaders.
            </p>
            <p>
              Our holistic approach ensures that students not only achieve academic excellence but also develop empathy, resilience, and a sense of civic responsibility.
            </p>
            <p>
              Through collaboration with teachers, parents, and the broader community, Pioneer School is dedicated to creating an inclusive and dynamic educational experience that prepares students to lead with integrity and vision.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-start justify-center md:justify-end">
            <Link
              to="/transformative-History"
              className="inline-block bg-[#0C356A] text-[#E4AF23] hover:bg-[#E4AF23] hover:text-[#0C356A] font-bold text-lg px-6 py-4 rounded-lg hover:bg-[#082743] transition"
            >
              OUR TRANSFORMATIVE HISTORY
            </Link>
          </div>
        </div>

      </section>
     
     
    </main>
    </div>

  );
};

export default Transform;
