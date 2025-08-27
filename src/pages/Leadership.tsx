// src/pages/Leadership.tsx

import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

type Leader = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  campus?: string;
  school?: string;
};

const leaders: Leader[] = [
  {
    name: "Mr. James Mwangi",
    role: "Head Master",
    photo: "/images/Mwangi.jpeg",
    school: "St Paul Thomas Academy",
    campus: "Maragua",
    bio:
      "At St Paul Thomas, we believe every child is uniquely gifted and capable of excellence. Our commitment as a leadership team is to provide a safe, joyful, and intellectually rigorous environment where character and competence grow side by side. Guided by the Competency-Based Education, we emphasize strong foundations in literacy and numeracy, while nurturing creativity, collaboration, critical thinking, and communication - skills your child needs to thrive in a fast-changing world",
  },
  {
    name: "Mr. Dominic Miyago",
    role: "Senior Manager Grade 4 - 6",
    photo: "/images/Dominic.jpg",
    school: "St Paul Thomas Academy",
    campus: "Maragua",
    bio:
      "Grades 4-6 are a crucial bridge from Lower Primary. We move pupils from “learning to read” into “reading to learn,” deepen problem-solving in mathematics, and build study habits that last. Project-based tasks, practicals, and regular formative checks help learners apply knowledge and reflect on growth. Digital literacy, creative writing, and presentation skills feature strongly, while clubs and Society - chess, music, athletics - build confidence and teamwork. We share weekly targets and simple trackers so pupils and parents can see progress at a glance. With consistent effort, feedback, and care, every child can finish Grade 6 confident, competent, and ready for Junior School.",
  },
];

function FramedLeaderPanel({ leader }: { leader: Leader }) {
  return (
    <div className="mx-auto max-w-6xl rounded-2xl bg-[#d4d6da] shadow-[0_10px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10 p-6 md:p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(280px,420px)_1fr] items-center">
        {/* LEFT: Framed portrait */}
        <div className="mx-auto md:mx-0">
          <div className="rounded-md bg-neutral-800 p-4 md:p-5 shadow-[10px_10px_0_rgba(0,0,0,.35)]">
            <div className="bg-white p-5 md:p-7">
              <div className="relative aspect-[3/4] w-[240px] md:w-[300px] lg:w-[340px]">
                <img
                  src={leader.photo}
                  alt={`${leader.name} - $  {leader.role}`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
 
        {/* RIGHT: Text block, matching Pioneer Junior layout + message */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[black] tracking-tight">
            {leader.name}
          </h2>

          <hr className="mt-6 border-t border-black/30 w-full max-w-xl" />

          {/* Role */}
          <div className="mt-3 grid grid-cols-2 max-w-xl">
            <div className="font-semibold text-[#df8811]">{leader.role}</div>
            <div />
          </div>

          <hr className="mt-3 border-t border-black/30 w-full max-w-xl" />

          {/* School + Location */}
          <div className="mt-3 grid grid-cols-2 gap-x-10 max-w-xl text-black/80">
            <div className="leading-snug">
              {leader.school ?? "St Paul Thomas Academy"}
              <br />
              {/* you can add department/stream here if needed */}
            </div>
            <div className="leading-snug">{leader.campus ?? "Maragua"}</div>
          </div>

          <hr className="mt-3 border-t border-black/30 w-full max-w-xl" />

          {/* Message from the Leader (bio) */}
          {leader.bio && (
            <div className="mt-6 max-w-3xl">
              <h3 className="text-xl font-bold text-[#df8811]">
                Message 
              </h3>
              <p className="mt-3 text-[#5f4c31] italic font-semibold  leading-relaxed text-[17px]">
                {leader.bio}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="bg-[#161e2e] min-h-screen text-white">
      <Helmet>
        <title>Our Leadership Team | St Paul Thomas Academy</title>
      </Helmet>

      {/* Top bar / breadcrumb area */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Our Leadership Team</h1>
          <div className="mt-4 h-4 w-full bg-white/90" />
        </div>
      </section>

      {/* Panels */}
      <div className="bg-[#083563] pt-12 pb-10 space-y-8 md:space-y-10">
        {leaders.map((l) => (
          <FramedLeaderPanel key={l.name} leader={l} />
        ))}

        {/* Bottom CTA (optional, mirrors PJA’s right-aligned button but centered here) */}
        <div className="flex justify-center mt-2">
          <Link
            to="/nurturing"
            className="inline-block border mb-6 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
          >
            Nurturing Team
          </Link>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}
