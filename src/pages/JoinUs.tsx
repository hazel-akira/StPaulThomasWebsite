// src/pages/JoinUs.tsx

import { Link } from 'react-router-dom';


const JoinUs: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-[#f9fafb]">
  

    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/grade_9.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Join Us</h1>
      </div>
    </section>

    {/* Main Content */}
    <main className="flex-grow max-w-4xl mx-auto px-4 py-16 space-y-12 text-gray-800">
      <h2 className="text-3xl font-semibold text-[#093056]">
        General Details of Joining Pioneer School
      </h2>

      {/* How to apply */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">How do I apply to Pioneer School?</h3>
        <p>
          Pioneer School application process is free, transparent and open to all eligible students
          regardless of race, religion and socio-economic class.
        </p>
        <a
          href="https://enquireto.pioneergroupofschools.co.ke"
          target="_blank"
          rel="noopener"
          className="inline-block bg-[#f4a024] text-[#093056] font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition"
        >
          Join to Register
        </a>
      </section>

      {/* Admission criteria */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">How do I get my child admitted to Pioneer School?</h3>
        <p>
          Admission to Pioneer School is transparent and merit‑based, solely on review of
          academic performance and talent.
        </p>
      </section>

      {/* Timing */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">When do I apply to Pioneer School?</h3>
        <p>
          Applications are open throughout the year. However, new student applications for Form 3
          positions run from the 3rd week of November through the last week of January annually.
          If spaces remain, applications may be submitted any time during the calendar year.
        </p>
      </section>

      {/* Quick Links */}
      <section>
        <h3 className="text-xl font-semibold text-[#093056] mb-4">Quick Links</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Link to="/grade9" className="block bg-[#E4AF23] p-4 rounded-lg shadow hover:bg-[#0C356A] hover:text-[#E4AF23] hover:shadow-md text-center">
            Join Grade 9
          </Link>
          <Link to="/grade10" className="block bg-[#E4AF23] p-4 rounded-lg shadow hover:bg-[#0C356A] hover:text-[#E4AF23]  hover:shadow-md text-center">
            Join Grade 10
          </Link>
          <Link to="/form3" className="block bg-[#E4AF23] p-4 rounded-lg shadow hover:bg-[#0C356A] hover:text-[#E4AF23] hover:shadow-md text-center">
            Join Form 3
          </Link>
          <Link to="/form4" className="block bg-[#E4AF23] p-4 rounded-lg shadow hover:bg-[#0C356A] hover:text-[#E4AF23] hover:shadow-md text-center">
            Join Form 4
          </Link>
          <Link to="/enquire" className="block bg-[#E4AF23] p-4 rounded-lg shadow hover:bg-[#0C356A] hover:text-[#E4AF23] hover:shadow-md text-center">
            Enquire
          </Link>
        </div>
      </section>
    </main>

   
  </div>
);

export default JoinUs;
