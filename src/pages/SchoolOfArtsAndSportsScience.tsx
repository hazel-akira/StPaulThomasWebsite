// src/pages/SchoolOfArtsAndSportsScience.tsx
import { useState } from 'react';
import InfoCard from '../components/InfoCard';

// Subject interface and card component
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

// Track interface
interface Track {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  subjects: Subject[];
}

// Tracks data
const tracks: Track[] = [
  {
    id: 'sports-science',
    title: 'Sports Science',
    description: 'Sports and Recreation',
    imageSrc: '/images/Rugby.JPG',
    subjects: [
      { name: 'Sports', description: 'Physical training and athletics.', imageSrc: '/images/Rugby.JPG' },
      { name: 'Recreation', description: 'Leisure activities and well-being.', imageSrc: '/images/swimming.jpg' },
    ],
  },
  {
    id: 'arts',
    title: 'Arts',
    description: 'Music & Dance, Fine Arts, Theatre & Film',
    imageSrc: '/images/Man-jumping-up.jpg',
    subjects: [
      { name: 'Music & Dance', description: 'Performance and choreography.', imageSrc: '/images/Man-jumping-up.jpg' },
      { name: 'Fine Arts', description: 'Painting, sculpture, and drawing.', imageSrc: '/images/paintbrushes.jpg' },
      { name: 'Theatre & Film', description: 'Acting, production, and directing.', imageSrc: '/images/Spotlight.jpg' },
    ],
  },
];

// Main component
const SchoolOfArtsAndSportsScience: React.FC = () => {
  const [openTrackId, setOpenTrackId] = useState<string | null>(null);
  const toggleTrack = (id: string) =>
    setOpenTrackId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      {/* Navbar */}
   

      {/* Hero Section */}
      <section
        className="relative h-[40vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/paintbrushes.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#277291] opacity-30" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Arts &amp; Sports Science Pathways
          </h1>
        </div>
      </section>

      {/* Message from Head */}
      <section className="bg-[#0C356A] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#E4AF23] font-poppins mb-4 text-center">
            Message from the Head of Arts &amp; Sports Science
          </h2>
          <p className="text-[#E4AF23]  mb-4 italic font-semibold">Dear Students and Parents,</p>
          <p className="text-[#E4AF23] font-merriweather mb-4">
            At Pioneer School, senior students interested in Arts &amp; Sports Science subject
            areas will select two subjects from the tracks below. Details of each subject area
            follow.
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
          {tracks.map((track) => (
            <div key={track.id} className="w-full md:w-1/2 lg:w-1/3">
              <div
                onClick={() => toggleTrack(track.id)}
                className="cursor-pointer"
              >
                <InfoCard
                  title={track.title}
                  description={track.description}
                  imageSrc={track.imageSrc}
                />
              </div>

              {openTrackId === track.id && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {track.subjects.map((sub) => (
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

export default SchoolOfArtsAndSportsScience;
