// src/pages/Nurturing.tsx
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

type Member = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  since?: string;
  school?: string;
  campus?: string;
};

const team: Member[] = [
  {
    name: "Mr Bosco",
    role: "Boarding Master",
    photo: "/images/Bosco.jpg",
    school: "St Paul Thomas Academy",
    campus: "Maragua",
    bio:
      "At St Paul Thomas Academy, the boarding house is a home away-from home where safety, respect, and personal responsibility guide our daily life. My team and I ensure every learner is known by name, supported in their studies, and encouraged to grow in character. Clear routines morning and evening prep, quiet hours, and lights-out create the structure pupils need to thrive, while our values of punctuality, cleanliness, courtesy, and care for others shape a calm and orderly environment.Wellbeing sits at the centre of our work. We operate a zero-tolerance stance on bullying, partner closely with our matron, counsellor, and chaplain, and keep parents informed through timely communication. Student leadership is nurtured through dorm captains and duty rosters that build ownership and service. Weekends blend rest with enrichment sport, clubs, reading, and community service so boarders return to class refreshed and focused. Together with families, we are committed to raising disciplined, compassionate young people ready to lead and serve",
  },
];

function FramedMemberPanel({ member }: { member: Member }) {
  return (
    <div className="mx-auto max-w-6xl rounded-2xl bg-[#d4d6da] shadow-[0_10px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10 p-6 md:p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(280px,420px)_1fr] items-center">
        {/* LEFT: Framed portrait */}
        <div className="mx-auto md:mx-0">
          <div className="rounded-md bg-neutral-800 p-4 md:p-5 shadow-[10px_10px_0_rgba(0,0,0,.35)]">
            <div className="bg-white p-5 md:p-7">
              <div className="relative aspect-[3/4] w-[240px] md:w-[300px] lg:w-[340px]">
                <img
                  src={member.photo}
                  alt={`${member.name} – ${member.role}`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Text block */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
            {member.name}
          </h2>

          <hr className="mt-6 border-t border-black/30 w-full max-w-xl" />

          {/* Role */}
          <div className="mt-3 grid grid-cols-2 max-w-xl">
            <div className="font-semibold text-[#df8811]">{member.role}</div>
            <div />
          </div>

          <hr className="mt-3 border-t border-black/30 w-full max-w-xl" />

          {/* School + Location */}
          <div className="mt-3 grid grid-cols-2 gap-x-10 max-w-xl text-black/80">
            <div className="leading-snug">
              {member.school ?? "St Paul Thomas Academy"}
              {member.since && (
                <>
                  <br />
                  Since {member.since}
                </>
              )}
            </div>
            <div className="leading-snug">{member.campus ?? "Maragua"}</div>
          </div>

          <hr className="mt-3 border-t border-black/30 w-full max-w-xl" />

          {/* Message */}
          {member.bio && (
            <div className="mt-6 max-w-3xl">
              <h3 className="text-xl font-bold text-[#df8811]">
                Message
              </h3>
              <p className="mt-3 text-[#5f4c31] italic font-semibold leading-relaxed text-[17px]">
                {member.bio}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Nurturing() {
  return (
    <div className="bg-[#062747] min-h-screen text-white">
      <Helmet>
        <title>Our Nurturing Management Team | St Paul Thomas Academy</title>
      </Helmet>

      {/* Top bar / breadcrumb area */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Our Nurturing Management Team</h1>
          <div className="mt-4 h-4 w-full bg-white/90" />
        </div>
      </section>

      {/* Panels */}
      <div className="bg-[#083563] pt-12 pb-10 space-y-8 md:space-y-10">
        {team.map((m) => (
          <FramedMemberPanel key={m.name} member={m} />
        ))}

        {/* Bottom CTA (kept your route name) */}
        <div className="flex justify-center mt-2">
          <Link
            to="/perfomance"
            className="inline-block border mb-6 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
          >
            Past Performance →
          </Link>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}
