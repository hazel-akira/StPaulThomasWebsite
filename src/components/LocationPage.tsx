import React from 'react';
import { Helmet } from 'react-helmet-async';

const Location: React.FC = () => (
  <>
    {/* Document head */}
    <Helmet>
      <title>Location | St Paul Thomas Academy</title>
    </Helmet>

    {/* Header Section */}
    <section className="bg-[#13365e] text-[#bfd5ee] py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          We look forward to welcoming you to St Paul Thomas Academy
        </h1>
        <div className="mt-4 h-1 w-24 bg-[#bfd5ee] mx-auto"></div>
      </div>
    </section>

    {/* Map Section */}
    <section className="w-full h-96 md:h-[70vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4026722416047!2d37.16022407568768!3d-0.8270423352981284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50ca5860f35%3A0xb479dcc48ea204c1!2sSt.Paul%20Thomas%20Academy!5e0!3m2!1sen!2ske!4v1753947638927!5m2!1sen!2ske"
        className="border-0 w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>

    {/* Contact Section with dimmed background */}
    <section className="relative mx-auto px-4 flex items-center justify-center h-[50vh] text-center">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-[url('/images/contactUs.webp')] bg-cover bg-center filter brightness-50"
      />

      {/* Content layer */}
      <div className="relative z-10 text-white max-w-2xl space-y-6">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-lg">
          <span className="font-semibold">Phone:</span> +254 20 5038097
        </p>
        <p className="text-lg">
          <span className="font-semibold">Email:</span> admissions@stpaulthomasacademy.co.ke
        </p>
        <p className="text-lg">
          <span className="font-semibold">Postal Address:</span><br />
          P.O. Box 555-10205<br />
          off Kenol-Murang'a Road,<br />
          Ichagaki, Murang'a County, Kenya
        </p>
      </div>
    </section>
  </>
);

export default Location;
