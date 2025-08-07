import { Helmet } from 'react-helmet-async';

const ScoutsLife: React.FC = () => (
  <div className="min-h-screen bg-[#083056]">
    <Helmet>
      <title>Scouts Life | St Paul Thomas Academy</title>
    </Helmet>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/scouts.jpg')",fontFamily: 'Times New Roman, serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
        Scouts Life
      </h1>
    </section>

    {/* Main Content */}
    <section className="container mx-auto  px-4 py-16 space-y-6 text-gray-100">
      <p className="text-2xl text-center">
        We have a vibrant Scout Team. Each term, Scouters can work towards a badge.
      </p>
    </section>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/scouts1.jpg')",fontFamily: 'Times New Roman, serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
    </section>
    {/* Calls to Action */}
    <section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/swimmers"
    rel="noopener"
    className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
       >
     Swimming Masters
    </a>
    </section> 
  </div>
);

export default ScoutsLife;
