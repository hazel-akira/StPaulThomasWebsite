// src/pages/Leadership.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

type Stat = { label: string; value: string };
type Leader = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  stats?: Stat[];
  email?: string;
  phone?: string;
};

const hoi: Leader = {
  name: 'Mr. John Maina',
  role: 'Head of Institution, St Paul Thomas Academy',
  photo: '/images/Mr. Maina.png',
  phone: '+254 700 000 000',
  bio:
    'At St Paul Thomas Academy, we foster academic excellence, character, and creativity. Our dedicated team provides an environment where every learner can reach their full potential.',
  stats: [
    { label: 'Years', value: '30+' },
    { label: 'Since', value: '1995' },
    { label: 'Campus', value: 'Ichagaki' },
  ],
};

const leaders: Leader[] = [
  {
    name: 'Mr. James Mwangi',
    role: 'Head Master, St Paul Thomas Academy',
    photo: '/images/Mr. Mwangi.png',
    bio:
      'Committed to holistic education, discipline, and a strong culture of learning across all departments.',
    stats: [
      { label: 'Years', value: '10' },
      { label: 'Since', value: '2015' },
      { label: 'Dept.', value: 'Admin' },
    ],
  },
  {
    name: 'Mr. Dominic Miyago',
    role: 'Senior Manager Grade 4-6',
    photo: '/images/Miyago.png',
    bio:
      'Oversees Upper Primary, ensuring learners build strong literacy, numeracy, and values for life.',
    stats: [
      { label: 'Years', value: '9' },
      { label: 'Since', value: '2016' },
      { label: 'Hostels', value: '3' },
    ],
  },
];

/* Two-column row card: big image left, content right. No rounded image. */
const LeaderRowCard: React.FC<{ data: Leader; badge?: string }> = ({ data, badge }) => (
  <article className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl">
    {/* Left: Image (large, rectangular, not rounded) */}
    <div className="relative">
      <img
        src={data.photo}
        alt={data.name}
        className="h-50 md:h-130 w-150 object-cover rounded-30"
      />
    </div>

    {/* Right: Content */}
    <div className="p-3 md:p-3">
      {badge && (
        <span className="inline-block mb-2 text-xs font-semibold tracking-widest text-[#df8811] uppercase">
          {badge}
        </span>
      )}
      <h3 className="text-2xl md:text-3xl font-bold text-[#083056]">{data.name}</h3>
      <p className="text-[#df8811] font-semibold mt-1">{data.role}</p>

      {data.bio && <p className="mt-4 text-gray-700 leading-relaxed">{data.bio}</p>}

      {/* Tiny stat line (optional) */}
      {data.stats && (
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm">
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
    <div className="min-h-screen bg-[#e9eff5]">
      <Helmet>
        <title>Inspired Leadership | St Paul Thomas Academy</title>
      </Helmet>
      
      {/* Page title */}
      <header className="container mx-auto px-4 pt-6 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0b2f56]">Inspired Leadership</h1>
        <div className="h-1 w-20 bg-[#0b2f56] mt-3 rounded"></div>
      </header>

      {/* HOI Row */}
      <section className="container mx-auto px-4">
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
