
import { Helmet } from 'react-helmet-async';

const  Golf: React.FC = () => (
<>
  <div className="min-h-screen font-sans bg-[#083056]">
    <Helmet>
      <title> Golf | St Paul Thomas Academy</title>
    </Helmet>
<section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          JUNIOR GOLFER 
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>
    {/* Hero Section */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/images/golf.webp')"}}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
 
    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 font-sans text-2xl space-y-6 text-gray-100">
        <p>
        Our golf program is about more than just improving technique; it's about instilling a love for the game and fostering a lifelong passion for golf.
 <br />

       <br /> 
       Through regular practice sessions, on-course play, and competitive tournaments, junior golfers learn the values of sportsmanship, integrity, and perseverance  - qualities that are essential not only on the golf course but also in life.   </p> </main>
      </div>   
{/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/fees"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
 Welcome 
    </a>
    </section> 
      
    
  </div>
  </>
);

export default  Golf;
