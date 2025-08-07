// src/pages/SchoolOfSocialSciences.tsx
import { useState } from 'react';

import InfoCard from '../components/InfoCard';

// Subject interface and SubjectCard
interface Subject {
  name: string;
  description: string;
  imageSrc: string;
}
const SubjectCard: React.FC<Subject> = ({ name, description, imageSrc }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm w-full md:w-auto">
    <img
      src={imageSrc}
      alt={name}
      className="w-16 h-16 object-cover rounded-full mr-4"
    />
    <div>
      <h4 className="text-lg font-semibold text-[#093056]">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

// Track interface and data
interface Track {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  subjects: Subject[];
}
const tracks: Track[] = [
  {
    id: 'languages-humanities',
    title: 'Languages & Humanities',
    description: 'Literature, Indigenous Languages, Fasihi, Sign Language, Mandarin Chinese',
    imageSrc: '/images/Ad_English.jpg',
    subjects: [
      { name: 'Literature', description: 'Study of written works.', imageSrc: '/images/literature.jpg' },
      { name: 'Indigenous Languages', description: 'Local languages and dialects.', imageSrc: '/images/indigenous_languages.jpg' },
      { name: 'Fasihi', description: 'Kiswahili literature studies.', imageSrc: '/images/swahili.jpg' },
      { name: 'Sign Language', description: 'Visual language for the deaf.', imageSrc: '/images/sign_language.jpg' },
      { name: 'Mandarin Chinese', description: 'Chinese language and culture.', imageSrc: '/images/mandarin_chinese.jpg' },
    ],
  },
  {
    id: 'business-studies',
    title: 'Business Studies',
    description: 'Accounting, Commerce, Entrepreneurship, Economics, Business Management',
    imageSrc: '/images/history.jpg',
    subjects: [
      { name: 'CRE', description: 'Financial record keeping.', imageSrc: '/images/accounting.jpg' },
      { name: 'Islamic', description: 'Trade and business operations.', imageSrc: '/images/commerce.jpg' },
      { name: 'History & citizenship', description: 'Starting and running businesses.', imageSrc: '/images/entrepreneurship.jpg' },
      { name: 'Geography', description: 'Production, consumption & transfer of wealth.', imageSrc: '/images/economics.jpg' },
      { name: 'Business Management', description: 'Organizing and directing resources.', imageSrc: '/images/business_management.jpg' },
    ],
  },
];

// Main component
const SchoolOfSocialSciences: React.FC = () => {
  const [openTrackId, setOpenTrackId] = useState<string | null>(null);
  const toggleTrack = (id: string) => setOpenTrackId(prev => (prev === id ? null : id));

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">


      {/* Hero */}
      <section
        className="relative h-[40vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/social.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#277291] opacity-30" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            School of Social Sciences
          </h1>
        </div>
      </section>

      {/* Message */}
      <section className="bg-[#0C356A] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E4AF23] font-poppins mb-4 text-center">
            Message from the Head of School of Social Sciences
          </h2>
          <p className="text-[#E4AF23]  mb-4 italic font-semibold">Dear Students and Parents,</p>
          <p className="text-[#E4AF23] font-merriweather mb-4">
            At Pioneer School, senior students interested in Social Sciences subject areas and careers
            will be required to select two subjects below.
            Details of each subject area are provided below.
          </p>
          <p className="mt-6 text-right font-semibold text-[#E4AF23]">
            Best regards,
            <br />
            Head of School
          </p>
        </div>
      </section>

      {/* Tracks Cards & Accordion */}
      <main className="flex-grow py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center">
          {tracks.map(track => (
            <div key={track.id} className="w-full md:w-1/2 lg:w-1/3">
              <div onClick={() => toggleTrack(track.id)} className="cursor-pointer">
                <InfoCard
                  title={track.title}
                  description={track.description}
                  imageSrc={track.imageSrc}
                />
              </div>

              {openTrackId === track.id && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {track.subjects.map(sub => (
                    <SubjectCard
                      key={sub.name}
                      name={sub.name}
                      description={sub.description}
                      imageSrc={sub.imageSrc}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

    
    </div>
  );
};

export default SchoolOfSocialSciences;
