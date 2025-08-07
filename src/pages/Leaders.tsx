// src/pages/Leadership.tsx

import { motion } from 'framer-motion';


interface Leaders {
  name: string;
  position: string;
  description: string;
  image: string;
}

const leadership: Leaders[] = [
  //{
    //name: 'Mr . John Gichengo',
   // position: 'Group of schools  Principal',
   // description:
     // 'Leading Pioneer Group Of Schools with over 20 years of educational leadership experience.',
    //image: '/images/grace-wanjiku.jpg',
  //},
   {
    name: 'Mr Daniel Mwaura',
    position: 'Deputy Principal - Academic',
    description:
      'Overseeing academic excellence and student welfare with dedication and passion.',
    image: '/images/Mr_Mwaura.png', // swap in real photo
  },
 
  {
    name: 'Mr.  Joel Ananda',
    position: 'Deputy Principal - Administrations',
    description:
      'Guiding families through the admission process and ensuring the right fit for every student.',
    image: '/images/Mr_Ananda.jpg',
  },
];

const Leaders: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Hero */}
  

      {/* Leadership Grid */}<section className="relative h-[30vh] bg-[url('/images/psenv.png')] bg-center bg-cover">
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-4xl md:text-6xl text-white font-bold">Our Leadership</h1>
  </div>
</section>

      <main className="flex-grow bg-[#093057]  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader, idx) => (
              <motion.div
                key={leader.name}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#093056]">
                    {leader.name}
                  </h2>
                  <p className="text-sm text-secondary font-medium mb-4">
                    {leader.position}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default Leaders;
