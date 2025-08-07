
import { Helmet } from 'react-helmet-async';

const CodingLife: React.FC = () => (
  <div className="min-h-screen bg-[#083056] text-white" style={{ fontFamily: 'Times New Roman, serif'  }}>
    <Helmet>
      <title>Coding Life | St Paul Thomas Academy</title>
    </Helmet>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/coding.webp')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
      
    </section>

    {/* Main Content */}
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 space-y-6 "> 
        <h1 className="relative z-10 text-3xl md:text-6xl font-bold text-white text-center">
        Coding Life
      </h1>
        <p className='text-xl'>
          For many students, the journey into the world of coding begins with a curiosity and a desire to understand how technology works. Through introductory courses and hands-on workshops, we introduce students to the fundamentals of programming languages such as Python, Java, and C++, helping them develop a solid foundation in coding syntax, logic, and problem-solving techniques.
        </p>
      </main>
      </div>
         {/* Calls to Action */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center">
    
         <a
      href="/seafarers"
      target="_blank"
      rel="noopener"
      className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     Seafarers
         </a>
         </section> 
      
    
  </div>
);

export default CodingLife;
