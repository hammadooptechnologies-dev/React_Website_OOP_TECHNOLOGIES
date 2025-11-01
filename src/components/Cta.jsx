import React from "react";


const CTA = () => {

  return (
    <section
            className="w-full bg-cover bg-top bg-no-repeat py-10 sm:py-12 md:py-5 mt-6 md:mt-8"
            style={{ backgroundImage: `url("/assets/cta1.webp")` }}
          >
            <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between text-white text-left gap-6 md:gap-8">
              {/* Text content */}
              <div className="flex flex-col items-start">
                <h2 className="text-[36px] font-bold mb-2 leading-snug">
                  Get Free Mockups and SEO Report
                </h2>
                <p className="text-[18px]">
                  We offer a variety of IT services designed to support your success.
                </p>
              </div>

              {/* Button */}
              <div>
                <button className="bg-white text-[#221e1f] uppercase px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
                  Get a quote
                </button>
              </div>
            </div>
          </section>
    
  );
};

export default CTA;
