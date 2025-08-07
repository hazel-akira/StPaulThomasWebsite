import { Helmet } from 'react-helmet-async';

const Talent: React.FC = () => (
  <div className="min-h-screen bg-[#083056]">
    <Helmet>
      <title>Talents | St Paul Thomas Academy</title>
    </Helmet>



    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/talent.webp')" ,fontFamily: 'Times New Roman, serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
      <div className="relative z-10 text-center flex flex-col items-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Talents @ St Paul Thomas Academy
        </h1>
        <a
          href="/band"
          rel="noopener"
          className="border border-[#bdd6f0] bg-[#e4af23] px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
        >
          Talent Recognition
        </a>
      </div>
    </section>

 ;


    {/* Main Content */}
    <section className="container mx-auto text-xl px-4 py-16 space-y-6 text-gray-100">
      <p>
      The process of honing talent begins with recognition - an acknowledgment of the innate gifts and passions that each individual possesses. Through observation, assessment, and open dialogue, we work closely with students to identify their strengths, interests, and areas for growth, laying the groundwork for a personalized journey of talent development. 
</p>
    
    <br />
    <p> Once talents are identified, the next step is cultivation - providing students with the knowledge, skills, and opportunities they need to nurture and refine their abilities. Whether it's through specialized classes, workshops, mentorship programs, or extracurricular activities, we offer a wide range of resources and experiences to help students deepen their understanding, expand their horizons, and push the boundaries of their talent. 
      
         </p>
    </section>
  </div>
);

export default Talent;
