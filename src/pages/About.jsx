import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import WhatWeDo from '../components/Services';
import OurClients from '../components/OurClients';



const statsData = [
  {
    img: "/assets/stats-1.webp",
    value: "6816 +",
    heading: "Staticfied Customers",
  },
  {
    img: "/assets/stats-2.png",
    value: "10 K",
    heading: "Wroteable Code",
  },
  {
    img: "/assets/stats-3.webp",
    value: "200 +",
    heading: "Projects Done",
  },
  {
    img: "/assets/stats-4.webp",
    value: "194 +",
    heading: "Worldwide Landmark",
  },
];

const About = () => {
  return (
    <>
      <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover  bg-no-repeat lg:bg-top"
        style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
        <Breadcrumb />
      </section>

      <section
        className="w-full md:mt-12 mb-16"
      >
        <div className="max-w-[1140px] mx-auto max-h-[364px] rounded-2xl grid grid-cols-1 md:flex md:flex-row items-center justify-between gap-4 px-10 sm:gap-8 relative bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: `url("/assets/cta1.webp")` }}>

          {/* ---------- LEFT CONTENT ---------- */}
          <div className="text-left px-4">
            {/* Small subheading with lines */}
            <div className="flex items-center justify-center md:justify-start mb-1">
              <span className="w-8 sm:w-10 h-[3px] bg-[#1b75bb] mr-3"></span>
              <span className="text-[#1b75bb] font-extrabold text-base sm:text-lg">
                Meet With CEO
              </span>
              <span className="w-8 sm:w-10 h-[3px] bg-[#1b75bb] ml-3"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-white mb-4 leading-snug text-left md:text-left">
              Sultan Shahzad
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-white text-left md:text-left">
              I’m Sultan Shahzad, CEO of OOP Technologies, and I want to personally thank you for choosing us as your trusted technology partner. Our mission is to transform ideas into powerful digital experiences through innovation, reliability, and collaboration. Together, let’s move forward and redefine what’s possible in the digital era.
            </p>

            <p className="flex items-center gap-3 text-sm sm:text-base text-white mt-4 text-left md:text-left xl:max-w-[494px] mx-auto md:mx-0">
              <span className="flex items-center gap-2">
                <FaEnvelopeOpen className="text-[#1b75bb]" /> translator5255@gmail.com |
              </span>
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#1b75bb]" /> 03404429546
              </span>
            </p>
          </div>

          {/* ---------- RIGHT IMAGE COMPOSITION ---------- */}
          <div className="flex justify-center items-center h-[364px] md:justify-start lg:justify-center mt-4 sm:mt-10 md:mt-0 ">

            {/* Main image */}

            <img
              src="/assets/CEO.webp"
              alt="Main visual"
              className="w-[235px] sm:w-[300px] md:w-[300px] lg:max-w-[284px] h-[284px] object-cover rounded-2xl shadow-lg"
            />

          </div>
        </div>
      </section>


      <section className="bg-white mb-10 md:mb-0 py-8 px-6">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] items-start gap-4 px-4 relative">

          <div className="relative flex justify-center md:justify-start lg:justify-end mt-4 sm:mt-10 md:mt-0">
            <div className="relative">
              {/* Main image */}
              <div className="relative w-[235px] sm:w-[300px] md:w-[300px] lg:w-[443px] h-auto z-20">
                <img
                  src="/assets/gallery1.jpg"
                  alt="Main visual"
                  className="w-full h-auto object-cover relative z-20 shadow-lg"
                />
              </div>

              {/* Bottom-left Triangle */}
              <div className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 rotate-180 w-32 sm:w-36 md:w-40 h-32 sm:h-40 md:h-44 border-l-120 sm:border-l-160 md:border-l-300 border-l-transparent border-t-120 sm:border-t-160 md:border-t-300 border-t-[#1b75bb] z-10"></div>
            </div>
          </div>

          {/* ---------- LEFT CONTENT ---------- */}
          <div className="text-left px-4">
            {/* Small subheading with lines */}
            <div className="flex items-center justify-center md:justify-start mt-3">
              <span className="w-8 sm:w-10 h-[3px] bg-[#1b75bb] mr-3"></span>
              <span className="text-[#1b75bb] font-extrabold text-base sm:text-lg">
                About US
              </span>
              <span className="w-8 sm:w-10 h-[3px] bg-[#1b75bb] ml-3"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-[#221e1f] mb-4 leading-snug text-left md:text-left">
              We Work With 20 Years Of Experience.
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-[#777777] text-left md:text-left">
              As an affordable website development and SEO agency, we offer our expertise to a wide range of customers, from small businesses to large corporations, startups and entrepreneurs alike. Our goal is to provide customized digital solutions that support growth and enhance online presence. From designing user-friendly websites to optimizing visibility through effective SEO strategies, we take a comprehensive approach to digital marketing.
            </p>

            <p className="text-sm sm:text-base text-[#777777] mt-4 text-left mx-auto md:mx-0">
              Our team is dedicated to delivering professional and high-quality services, and building long-lasting relationships with our customers to help them stay ahead in the ever-changing digital landscape.
            </p>
          </div>          

        </div>
      </section>


      <section className="w-full bg-white py-4 md:mt-16 bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: `url("/assets/products/bg-products.webp")` }}>
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mt-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
              Facts
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f]">
            Our Company Growth
          </h2>

          <div className=" px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row justify-between gap-6 place-items-center">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 w-full max-w-[255px] h-[259px] hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.heading}
              className="w-14 h-14 mb-3 object-contain"
            />

            {/* Blue divider */}
            <div className="w-12 h-0.5 bg-[#1b75bb] mb-3 rounded-full"></div>

            {/* Value */}
            <h2 className="text-2xl sm:text-[40px] font-extrabold text-[#231f20]">
              {item.value}
            </h2>

            {/* Heading */}
            <p className="text-sm sm:text-base text-[#777777] font-medium text-center mt-1">
              {item.heading}
            </p>
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>


      {/* What We Do Section*/}
      
            <section className="w-full bg-white py-8 md:mt-4">
              <div className="max-w-[1140px] mx-auto text-center">
                {/* Small blue heading with horizontal lines */}
                <div className="flex items-center justify-center mb-4">
                  <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
                  <span className="text-[#1b75bb] font-extrabold text-sm sm:text-lg tracking-wider">
                    Services
                  </span>
                  <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
                </div>
      
                {/* Main heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-4 sm:mb-12">
                  What We Do
                </h2>
      
                {/* Clients Component */}
                <WhatWeDo />
              </div>
            </section>


            <section
        className="w-full md:mt-8 bg-cover bg-top bg-no-repeat place-content-center"
        style={{ backgroundImage: `url("/assets/cta1.webp")` }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-2 py-8 md:py-6 lg:py-12 xl:py-0 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">

          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-[30px] font-bold mb-2">
              Let’s Take Your Business To Better Heights!
            </h2>
            <p className="text-base md:text-[18px] mb-6">
              We offer a variety of IT services designed to support your success.
            </p>
            <button className="bg-white text-[#221e1f] uppercase px-8 py-2.5 md:px-10 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
              Let's Talk!
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full sm:w-[320px] md:w-[287px] lg:w-[380px] h-[220px] sm:h-[260px] md:h-[216px] lg:h-[245px] flex justify-center md:justify-end">
            <img
              src="/assets/macs-cta.webp"
              alt="Macs"
              className="w-full h-full lg:h-[285px] md:absolute lg:-top-6 xl:-top-12 xl:right-0 object-contain"
            />
          </div>
        </div>
      </section>


      {/* Our Clients Section */}

      <section className="w-full bg-white py-10">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
              Brand
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-12">
            Our Clients
          </h2>
          {/* Clients Component */}
          <div className="mt-6">
            <OurClients />
          </div>
        </div>
      </section>

    </>
  )
}

export default About
