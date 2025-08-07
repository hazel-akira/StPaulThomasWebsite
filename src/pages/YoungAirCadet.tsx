
import { Helmet } from 'react-helmet-async';

const YoungAirCadet: React.FC = () => (
  <div className="min-h-screen bg-[#083056]" style={{ fontFamily: 'Times New Roman, serif'  }}>
    <Helmet>
      <title>Young Air Cadet | St Paul Thomas Academy</title>
    </Helmet>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/cadet.webp')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/50" />
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
        Young Air Cadet
      </h1>
    </section>

    {/* Main Content */}
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 space-y-6 text-gray-100">
        <p className='text-xl'>
          Young Air Cadets, with their eyes fixed on the boundless sky and hearts filled with dreams of flight, epitomize the spirit of adventure, discipline, and service. At St. Thomas, we are honored to support these aspiring aviators as they embark on a journey that will not only shape their futures but also instill in them values that will guide them throughout their lives.
        </p>
        <p className='text-xl'>
          Our program for young Air Cadets is designed to provide a comprehensive and enriching experience that combines theoretical knowledge with practical training, all under the guidance of experienced aviation professionals and mentors. From the moment they enroll in our program, students are immersed in a dynamic learning environment that fosters curiosity, teamwork, and a passion for aviation.
        </p>
      </main></div>
      {/* Calls to Action */}
 <section className="flex flex-col sm:flex-row gap-4 justify-center">
    
    <a
      href="/coding"
      target="_blank"
      rel="noopener"
      className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
      Coding Life
    </a>
  </section>

      
    
  </div>
);

export default YoungAirCadet;
