import { Helmet } from 'react-helmet-async';

const StudyLife: React.FC = () => (
  <div className="min-h-screen bg-[#083056]"style={{ fontFamily: 'Times New Roman, serif'  }}>
    <Helmet>
      <title>Study Life | St Paul Thomas Academy</title>
    </Helmet>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/study1.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative z-10 text-3xl md:text-6xl font-bold text-white text-center">
        Student Life @ St Paul Thomas Academy
      </h1>
    </section>

    {/* Main Content */}
    <section className="container mx-auto px-4 py-16 space-y-8 text-gray-100">
      <p className="text-xl">
        We offer the CBC approved curriculums and our main focus is on Science, Technology, Engineering and Mathematics.
      </p>
      <p className="text-xl">
        However, we do not ignore the basic human skills.
      </p>

      {/* Illustrative Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="/images/study1.webp"
          alt="Students engaged in STEM activities"
          className="w-full rounded-lg shadow"
        />
        <img
          src="/images/study2.webp"
          alt="Students practicing human skills"
          className="w-full rounded-lg shadow"
        />
      </div>
    </section>
    {/* Calls to Action */}
 <section className="flex flex-col sm:flex-row gap-4 justify-center">
    
    <a
      href="/tailor-made-leadership-pathways"
      rel="noopener"
      className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
    Tailor Made Pathways
    </a>
  </section>
  </div>
);

export default StudyLife;
