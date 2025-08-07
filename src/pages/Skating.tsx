import { Helmet } from 'react-helmet-async';

const SkatingLife: React.FC = () => (
  <div className="min-h-screen bg-[#083056]">
    <Helmet>
      <title> Skating Life | St Paul Thomas Academy</title>
    </Helmet>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/band.webp')",fontFamily: 'Times New Roman, serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
        Skating Life
      </h1>
    </section>

    
    {/* Calls to Action */}
    <section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    <a
    href="/cycling"
    rel="noopener"
    className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
       >
     Cycling Life
    </a>
    </section> 
  </div>
);

export default SkatingLife;
