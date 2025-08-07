// src/pages/Chaplaincy.tsx



const Chaplaincy: React.FC = () => (
  <div className="min-h-screen flex  flex-col bg-white">


    {/* Hero */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Person.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <h1 className="relative z-10 text-3xl md:text-5xl text-white font-bold">
        Chaplaincy
      </h1>
    </section>

    <main className="flex-grow opacity-60 text-#0C356A font-merriweather py-12 px-4 max-w-screen mx-auto space-y-6">
      <p className=" leading-relaxed">
        Our chaplaincy program plays a vital role in nurturing the spiritual
        and emotional well-being of students.
      </p>
      <p className=" leading-relaxed">
        Chaplains provide guidance, support, and pastoral care, fostering a
        sense of community and belonging across our boarding campus.
      </p>
    </main>


  </div>
);

export default Chaplaincy;
