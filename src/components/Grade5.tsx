// src/pages/JoinGrade10.tsx
const JoinGrade10: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white">
 

    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Modal.png')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Join Grade 10
        </h1>
      </div>
    </section>

    {/* Content */}
    <main className="flex-grow max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Eligibility */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
        ELIGIBILTY REQUIREMENTS FOR JOINING GRADE 10
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            Minimum score of Achievement Level AL‑5 in the Kenya Junior Secondary
            Education Assessment (KJSEA).
          </li>
          <li>
            Original KJSEA report must be provided (we keep a copy).
          </li>
          <li>
            NEMIS and Assessment Number (or foreign students’ Ministry of Education
            ID). 
          </li>
          <li>
            Pass a medical examination. 
          </li>
          <li>
            Recent Grade 9 report form (original; we keep a copy). 
          </li>
          <li>
            Leaving Certificate in English (original; we keep a copy).
          </li>
          <li>
            Recommendation letter from previous school principal. 
          </li>
          <li>
            Valid Birth Certificate (or passport for foreigners; originals and copies).
          </li>
        </ol>
      </section>

      {/* How to Apply */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          How to Apply
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Apply online, download and submit the form to our offices, or visit us in person - remember to select your intended pathway. 
        </p>
        <div className="mt-6 text-center">
          <a
            href="https://enquireto.pioneergroupofschools.co.ke"
            className="inline-block bg-[#E4AF23] text-[#093056] font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition"
          >
            Join to Register
          </a>
        </div>
      </section>

      {/* What Happens Next */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          What Happens Next?
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Review of application forms to ensure completeness. </li>
          <li>Invite eligible applicants for tour and interview. </li>
          <li>Select candidates for admission. </li>
          <li>Issue offer letters to successful candidates. </li>
          <li>
            Submit acceptance or rejection of offer; accepted candidates pay the
            commitment fee. 
          </li>
          <li>Receive official admission letter upon completion.</li>
        </ol>
      </section>
    </main>

   
  </div>
)

export default JoinGrade10
