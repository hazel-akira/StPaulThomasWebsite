// src/pages/Leadership.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'

type Stat = { label: string; value: string };
type Leader = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  stats?: Stat[];
  email?: string;
};

const hoi: Leader = {
  name: 'Mr. John Maina',
  role: 'Head of Institution, St Paul Thomas Academy',
  photo: '/images/Maina.jpeg',
  bio:
    'Learning here is holistic. Beyond the classroom, pupils engage in music, sports, clubs, and community service that sharpen talents and cultivate discipline, teamwork, and resilience. We uphold high expectations with warm, individualized support, ensuring each learner is known by name, encouraged to take bold steps, and celebrated for progress. Our teachers are caring professionals who model integrity and curiosity; our systems prioritize safeguarding and well-being; and our partnerships with families keep us aligned on shared goals..',
  stats: [
    { label: 'Years', value: '30+' },
    { label: 'Since', value: '1995' },
    { label: 'Campus', value: 'Maragua' },
  ],
};

const leaders: Leader[] = [
  {
    name: 'Mr. James Mwangi',
    role: 'Head Master, St Paul Thomas Academy',
    photo: '/images/Mr. Mwangi.png',
    bio:
      'At St Paul Thomas, we believe every child is uniquely gifted and capable of excellence. Our commitment as a leadership team is to provide a safe, joyful, and intellectually rigorous environment where character and competence grow side by side. Guided by the Competency-Based Curriculum, we emphasize strong foundations in literacy and numeracy, while nurturing creativity, collaboration, critical thinking, and communication - skills your child needs to thrive in a fast-changing world',
  
  },
  {
    name: 'Mr. Dominic Miyago',
    role: 'Senior Manager Grade 4-6',
    photo: '/images/Dominics.jpeg',
    bio:
      'Grades 4-6 are a crucial bridge from Lower Primary. We move pupils from “learning to read” into “reading to learn,” deepen problem-solving in mathematics, and build study habits that last. Project-based tasks, practicals, and regular formative checks help learners apply knowledge and reflect on growth. Digital literacy, creative writing, and presentation skills feature strongly, while clubs - chess, music, athletics - build confidence and teamwork. We share weekly targets and simple trackers so pupils and parents can see progress at a glance. With consistent effort, feedback, and care, every child can finish Grade 6 confident, competent, and ready for the next step.',
 
  },
];

/* Two-column row card: big image left, content right. No rounded image. */
const LeaderRowCard: React.FC<{ data: Leader; badge?: string }> = ({ data, badge }) => (
  <article className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-white/30 shadow-xl">
    {/* Left: Image (large, rectangular, not rounded) */}
    <div className="relative">
      <img
        src={data.photo}
        alt={data.name}
        className="h-50 md:h-130 w-150 object-cover object-[50%_15%] rounded-100"
      />
    </div>

    {/* Right: Content */}
    <div className="p-3 md:p-3">
      {badge && (
        <span className="inline-block mb-2 font-bold text-xl p-3 tracking-widest bg-[#083056] rounded-full text-[#df8811] uppercase">
          {badge}
        </span>
      )}
      <h3 className="text-2xl md:text-3xl mt-2 font-bold text-[#083056]">{data.name}</h3>
      <p className="text-[#df8811] font-semibold mt-1">{data.role}</p>

      {data.bio && <p className="mt-4 text-gray-900 text-xl font-sans  leading-relaxed">{data.bio}</p>}

      {/* Tiny stat line (optional) */}
      {data.stats && (
        <div className="mt-2 grid grid-cols-3 gap-4 max-w-sm">
          {data.stats.slice(0, 3).map((s) => (
            <div key={s.label} className="">
              <div className="text-xl font-semibold text-[#083056]">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </article>
);

const Leadership: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Talent Management  Team | St Paul Thomas Academy</title>
      </Helmet>
      
      
      {/* Hero / Header */}
      <header className="bg-[#062747] mb-2 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
          <h1 className="text-xl font-semibold md:text-5xl">Meet our Talent Management Team</h1>
          <div className="mt-6">
            <Link
              to="/nurturing"
              className="inline-block border mb-6 mt-6 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-semibold text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
              Nurturing Team
            </Link>
          </div>
        </div>
      </header>
      

      {/* HOI Row */}
      <section className="container pt-3 mx-auto px-4">
        <LeaderRowCard data={hoi} badge="Head of Institution" />
      </section>

      {/* Spacer */}
      <div className="container mx-auto px-4">
        <div className="my-10 md:my-14" />
      </div>

      {/* Other leaders (stacked rows like the reference) */}
      <section className="container mx-auto px-3 space-y-6 md:space-y-14 pb-10">
        {leaders.map((leader) => (
          <LeaderRowCard key={leader.name} data={leader} />
        ))}
      </section>

    </div>
  );
};

export default Leadership;
