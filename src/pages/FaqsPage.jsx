import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Faqs from '../components/Faqs'

const FaqsPage = () => {
  return (
    <>
    <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover  bg-no-repeat lg:bg-top"
                style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
                <Breadcrumb />
    </section>

    {/* FAQS Section */}
    
          <section className="w-full bg-white py-12 md:mt-4">
            <div className="max-w-[1140px] mx-auto text-center">
              {/* Small blue heading with horizontal lines */}
              <div className="flex items-center justify-center mb-4">
                <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
                <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
                  FAQ's
                </span>
                <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
              </div>
              {/* Main heading */}
              <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f]">
                We Answer All Your Queries!
              </h2>
    
              <Faqs />
            </div>
          </section>
      
    </>
  )
}

export default FaqsPage
