// src/pages/Home.tsx
import  { useState } from 'react';
import Hero from '../components/HeroSlider';
import Modal from '../components/Modal';


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="bg-white min-h-[90vh] relative">
      

      {/* Hero Section */}
      <Hero />

      
      <Modal
        show={showModal}
      
        imageSrc="/images/Modal1.webp"
        enquiryUrl="https://enquireto.pioneergroupofschools.co.ke/main/register?school=stpaulthomasacademy.co.ke"
        onClose={() => setShowModal(false)}
      />

    </div>
  );
};

export default Home;
