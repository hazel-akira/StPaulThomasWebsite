// src/pages/TailorMadeLeadershipPathways.tsx

import InfoCard from '../components/InfoCard';

const cards = [
  {
    title: 'English',
    description: 'Discover how we craft personalized leadership journeys that unlock each student’s potential.',
    imageSrc: '/images/english.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/English-Grade-10-June-2024.pdf',
  },
  {
    title: 'Kiswahili / Kenya Sign Language',
    description: 'Our milestones framework guides you through every stage of leadership development.',
    imageSrc: '/images/swahili.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/Kiswahili-Lugha-Gredi-10-Juni-2024.pdf',
  },
  {
    title: 'Physical Education',
    description: 'Learn from seasoned educators and industry leaders who champion your growth.',
    imageSrc: '/images/athletics.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/Physical-Education-Grade-10-June-2024.pdf',
  },
  {
    title: 'Community Service',
    description: 'Learn from seasoned educators and industry leaders who champion your growth.',
    imageSrc: '/images/hands.jpg',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/CSL-Grade-10-June-2024.pdf',
  },
];

const TailorMadeLeadershipPathways: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-[#dde0e4]">
   

    {/* Hero Section */}
    <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: "url('/images/space.webp')" }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl text-[#df8811] font-bold mb-4">
          Tailor Made Leadership Pathways
        </h1>
        <p className="text-3xl font-bold md:text-xl text-[#ffffff] brightness-100 max-w-3xl mx-auto leading-relaxed">
          Senior School at Pioneer School provides learners aged 15 to 18+ years with a pre-university or pre-career experience. Choose your pathway based on interests and potential.
        </p>
      </div>
    </section>

    {/* Intro & Outcomes */}
    <section className="py-16 bg-gradient-to-bl from-[#c6c7c95a] to-[#1981d665]">
      <div className="container mx-auto px-4 gap-12  md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#093056] mb-4">
            Program Details
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This program allows learners to choose from seven recommended learning areas, including compulsory subjects like English and Kiswahili, ensuring both specialization and a broad-based education. Effective from January 2026.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#093056] mb-4">
            By the end of senior school, learners will be able to:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3 leading-snug">
            <li>Communicate effectively using ICT across varied contexts.</li>
            <li>Apply mathematical, logical, and critical thinking skills.</li>
            <li>Use basic research and scientific skills to solve problems.</li>
            <li>Leverage individual talents for career growth and fulfillment.</li>
            <li>Uphold national, moral, and religious values in daily life.</li>
            <li>Apply and promote health care strategies.</li>
            <li>Protect, preserve, and improve the environment.</li>
            <li>Demonstrate active local and global citizenship.</li>
            <li>Show appreciation for diversity in people and cultures.</li>
            <li>Manage pertinent and contemporary issues responsibly.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Cards Grid */}
    <section className="py-16 bg-[#e6e6e3]">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl py-2 md:text-4xl font-bold text-[#093056]">
        COMPULSORY SUBJECTS 
        <br />
<hr className="pt-2 h-5 w-full text-[#df8811]"/> 
        </h2>
        <p className='font-semibold text-[#093056] '>At Senior School, ALL students will be required to take the following subjects.</p> 
      </div>
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <InfoCard key={i} {...c} />
        ))}
      </div>
    </section>

  
  </div>
);

export default TailorMadeLeadershipPathways;
