// src/pages/Nurturing.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type Member = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  since?: string;
};

const team: Member[] = [
  {
    name: 'Mr Bosco',
    role: 'Boarding Master',
    photo: '/images/Bosco.jpg',
    bio:
      'At St Paul Thomas Academy, the boarding house is a home away-from home where safety, respect, and personal responsibility guide our daily life. My team and I ensure every learner is known by name, supported in their studies, and encouraged to grow in character. Clear routines morning and evening prep, quiet hours, and lights-out create the structure pupils need to thrive, while our values of punctuality, cleanliness, courtesy, and care for others shape a calm and orderly environment.Wellbeing sits at the centre of our work. We operate a zero-tolerance stance on bullying, partner closely with our matron, counsellor, and chaplain, and keep parents informed through timely communication. Student leadership is nurtured through dorm captains and duty rosters that build ownership and service. Weekends blend rest with enrichment sport, clubs, reading, and community service so boarders return to class refreshed and focused. Together with families, we are committed to raising disciplined, compassionate young people ready to lead and serve',
  },

];

const MemberRowCard: React.FC<{ data: Member; badge?: string }> = ({ data, badge }) => (
  <article className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-white/30 shadow-xl">
    {/* Left: Big rectangular image (no rounded corners on the image) */}
    <div className="relative">
      <img
        src={data.photo}
        alt={data.name}
        className="h-150 md:h-150 lg:h-150  w-150 object-cover object-[50%_15%] md:rounded-3xl"
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

      
      
    </div>
  </article>
);

const Nurturing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Nurturing Management Team | St Paul Thomas Academy</title>
      </Helmet>
      {/* Hero / Header */}
      <header className="bg-[#062747]  text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
          <h1 className="text-xl font-semibold md:text-5xl">Meet our Nurturing Management Team</h1>
          <div className="mt-6">
            <Link
              to="/perfomance"
              className="inline-block border mb-6 mt-6 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-semibold text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
          Past Perfomance →
            </Link>
          </div>
        </div>
      </header>      
      <div className="min-h-screen bg-[#e9eff5] font-sans">
       

        {/* First row: Chaplain highlighted */}
        <section className="container mx-auto px-4">
          {team.length > 0 && (
            <MemberRowCard data={team[0]} badge="Boarding Master" />
          )}
        </section>

        {/* Spacer */}
        <div className="container mx-auto px-4">
          <div className="my-10 md:my-14" />
        </div>

        {/* Other members as stacked rows (add to the array above) */}
        <section className="container mx-auto px-4 space-y-10 md:space-y-14 pb-16">
          {team.slice(1).map((member) => (
            <MemberRowCard key={member.name} data={member} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Nurturing;
