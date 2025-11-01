import React from "react";

const MacCtaSection = () => {
  return (
    <section
      className="w-full md:mt-16 mb-16 bg-cover bg-top bg-no-repeat place-content-center"
      style={{ backgroundImage: `url("/assets/cta1.webp")` }}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-2 py-8 md:py-6 lg:py-12 xl:py-0 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">

        {/* 🧩 Text content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-[30px] font-bold mb-2">
            Let’s Take Your Business To Better Heights!
          </h2>
          <p className="text-base md:text-[18px] mb-6">
            We offer a variety of IT services designed to support your success.
          </p>
          <button className="bg-white text-[#221e1f] uppercase px-8 py-2.5 md:px-10 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
            choose pricing plan
          </button>
        </div>

        {/* 💻 Image */}
        <div className="relative w-full sm:w-[320px] md:w-[287px] lg:w-[380px] h-[220px] sm:h-[260px] md:h-[216px] lg:h-[245px] flex justify-center md:justify-end">
          <img
            src="/assets/macs-cta.webp"
            alt="Macs"
            className="w-full h-full lg:h-[285px] md:absolute lg:-top-6 xl:-top-12 xl:right-0 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MacCtaSection;
