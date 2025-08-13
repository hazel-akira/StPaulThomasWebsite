// src/pages/TailorMadeLeadershipPathways.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import InfoCard from '../components/InfoCard';

type Subject = {
  title: string;
 
  imageSrc: string;
  link?: string;
};

const subjects: Subject[] = [
  { title: 'English', imageSrc: '/images/path3.webp' },
  { title: 'Kiswahili / Kenya Sign Language', imageSrc: '/images/path1.webp' },
  { title: 'Mathematics',  imageSrc: '/images/study2.webp' },
  { title: 'Religious Education',  imageSrc: '/images/study1.webp' },
  { title: 'Science & Technology',  imageSrc: '/images/path2.webp' },
  { title: 'Agriculture & Nutrition',  imageSrc: '/images/agric.webp' },
  { title: 'Social Studies',  imageSrc: '/images/social.webp' },
  { title: 'Creative Arts',  imageSrc: '/images/arts.webp' },
  { title: 'Pastoral/Religious Instruction Programme (PPI)', imageSrc: '/images/ppi.webp' },
];



const TailorMadeLeadershipPathways: React.FC = () => (
  <div className="min-h-screen font-sans flex flex-col bg-[#093056]">
    <Helmet>
      <title>Tailor-Made Pathways | St Paul Thomas Academy</title>
    </Helmet>

    {/* Header */}
    <section className="py-12 h-[20vh]">
      <div className="max-w-6xl mx-auto py-6 space-y-6 px-4 text-left">
        <h1 className="text-4xl text-left text-white mb-4">
          Tailor-Made Pathways - Upper Primary (Grades 4 - 6)
        </h1>
        <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
      </div>
    </section>

    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/path1.webp')" }}
      aria-label="Upper Primary Tailor-Made Pathways"
    >
      <div className="absolute inset-0 bg-black/30" />
      
    </section>
   

    {/* Outcomes (Upper Primary) */}
    <section className="py-12">
      <div className="container max-w-4xl mx-auto px-4 space-y-6">
        <h3 className="text-2xl font-semibold text-white">By the end of Upper Primary, learners will:</h3>
        <ul className="list-disc list-inside text-gray-100 space-y-2 leading-snug">
          <li>Communicate effectively in English and Kiswahili/KSL across varied contexts.</li>
          <li>Apply mathematical and scientific thinking to solve everyday problems.</li>
          <li>Demonstrate creativity and collaboration through arts and projects.</li>
          <li>Uphold moral, religious, and community values in daily life.</li>
          <li>Adopt healthy habits and care for the environment.</li>
        </ul>
      </div>
    </section>

    {/* Cards */}
    <section className="py-12">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Learning Areas (Grades 4 - 6)
        </h2>
        <div className="mx-auto mt-4 h-1 bg-white/70 w-32 rounded-full"></div>
      </div>

      <div className="container mx-auto bg-[#093056] px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s, i) => (
          <InfoCard
            key={i}
            title={s.title}
            description={s.link || ''}
            imageSrc={s.imageSrc}
            link="https://kicd.ac.ke/cbc-materials/curriculum-designs"
          />
        ))}
      </div>
    </section>



    {/* CTA */}
    <section className="flex flex-col py-6 sm:flex-row gap-4 justify-center">
      <a
        href="https://kicd.ac.ke/cbc-materials/curriculum-designs"
        target="_blank"
        rel="noopener"
        className="inline-block border border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
      >
        Learn More About Pathways
      </a>
    </section>
    <section className="flex flex-col py-6 sm:flex-row gap-4 justify-center">
      <a
        href="/cadet"
        rel="noopener"
        className="inline-block border border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
      >
        Young Air Cadets
      </a>
    </section>
  </div>
);

export default TailorMadeLeadershipPathways;
