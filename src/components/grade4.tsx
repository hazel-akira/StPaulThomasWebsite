// src/pages/JoinGrade9.tsx
const JoinGrade4: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-[#f9fafb]">
    
    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/grade_9.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056]/70" />
      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center top-1/2 transform -translate-y-1/2 px-4">
        WE ARE PROUD TO ANNOUNCE, GRADE 4 AT PIONEER JUNIOR ACADEMY
      </h1>
    </section>

    {/* Main Content */}
    <main className="flex-grow max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Eligibility */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          Eligibility Requirements for Joining Grade 4
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The student can apply to join Pioneer Junior Academy by either applying
          online, downloading the application form and submitting it to our offices,
          or visiting our offices and filling out the application form.
        </p>
      </section>

      {/* CBC Changes */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          Key Changes Under CBC (Form 1 &rarr; Grade 9)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
        The transition from Form 1 to Grade 9 under Kenya's Competency-Based Curriculum (CBC) involves several significant changes aimed at improving the quality and relevance of education. Here are the key changes:
        </p>
        <ul className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <strong>Structure & Duration:</strong> 2‑6‑3‑3‑3 replaces 8‑4‑4: two years
            pre‑primary, six years primary, three years junior secondary (Grades 7–9),
            three years senior secondary, and three years university.
          </li>
          <li>
            <strong>Assessment Methods:</strong> Continuous Assessment Tests (CATs)
            reduce emphasis on final exams for a comprehensive evaluation.
          </li>
          <li>
            <strong>Curriculum Content:</strong> More practical, hands‑on learning;
            new subjects like Integrated Science, Health Education, and Pre‑Technical
            Studies introduced.
          </li>
          <li>
            <strong>Learning Areas:</strong> Nine compulsory areas in junior secondary
            (Grades 7–9), including Mathematics, English, Kiswahili, and Religious
            Education.
          </li>
          <li>
            <strong>Life Skills & Values:</strong> Stronger emphasis to develop well‑rounded,
            emotionally and socially competent individuals.
          </li>
          <li>
            <strong>Digital Literacy:</strong> Integrated across subjects to ensure
            technology proficiency for learning and everyday tasks.
          </li>
        </ul>
      </section>

      {/* Calls to Action */}
      <section className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://pioneerjunioracademy.co.ke"
          target="_blank"
          rel="noopener"
          className="bg-[#f4a024] hover:bg-yellow-500 text-[#093056] font-bold py-3 px-8 rounded-lg text-center"
        >
          Visit Pioneer Junior Academy
        </a>
        <a
          href="https://enquireto.pioneergroupofschools.co.ke"
          target="_blank"
          rel="noopener"
          className="bg-[#093056] hover:bg-[#074060] text-white font-bold py-3 px-8 rounded-lg text-center"
        >
          Join to Register
        </a>
      </section>
    </main>

  
  </div>
);

export default JoinGrade4;
