"use client";
import hero from "../assets/hero.webp";
import Banner from "../assets/banner-img.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaRegNewspaper, FaBriefcase, FaBullhorn, FaListAlt } from "react-icons/fa";
import NeedHelpPanel from "../components/NeedHelpPanel";
import OurClients from "../components/OurClients";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/about-img.webp";
import BG_Tech from "../assets/technology/bg-technology.webp";
import BG_Product from "../assets/products/bg-products.webp";
import P1 from "../assets/products/p1.webp";
import P2 from "../assets/products/p2.webp";
import P3 from "../assets/products/p3.webp";
import Technologies from "../components/Technologies";
import WhatWeDo from "../components/Services";
import Tabs from "../components/Tabs";
import PortfolioTabs from "../components/PortfolioTabs";
import W1 from "../assets/why-choose-us/w1.webp";
import W2 from "../assets/why-choose-us/w2.webp";
import W3 from "../assets/why-choose-us/w3.webp";
import W4 from "../assets/why-choose-us/w4.webp";
import BG_CTA from "../assets/cta1.webp"
import BlogSlider from "../components/BlogSlider";
import Process from "../assets/process-flow.webp"
import MAC_CTA from "../assets/macs-cta.webp"
import MAC2_CTA from "../assets/mac2-cta.webp"
import TestimonialsSlider from "../components/TestimonialsSlider";
import Faqs from "../components/Faqs";




export default function Home() {
  return (
    <>
      {/* Hero Section */}

      <section
        className="min-h-[765px] mb-28 sm:mb-0 mt-16 md:mt-20 text-black px-6 md:py-24 bg-fill bg-top-left md:bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="max-w-[1140px] mx-auto lg:mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-8">
          {/* ---- Right Image (moved above text on small screens) ---- */}
          <div className="flex justify-center md:justify-start md:pl-5 mt-10 md:mt-0 order-1 md:order-2">

            <img
              src={Banner}
              className="w-full max-w-[500px] md:max-w-[520px] h-auto object-contain"
              alt="OOP Technologies Banner"
            />

          </div>

          {/* ---- Left Content ---- */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-sm md:text-base text-[#231f20] font-normal tracking-wide">
              WE ARE CREATIVE
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#231f20] font-semibold mb-4 leading-tight">
              Let Us Boost Your Business
            </h2>

            <p className="text-base sm:text-lg md:text-[17px] text-[#231f20] leading-relaxed mb-10">
              Our focus is on innovation, performance, and excellence. So, with us by your side,
              your business will undoubtedly grow. We are creative and dedicated professionals
              offering all-round digital solutions from design and development to SEO,
              advertisement, and content generation.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link to="/">
                <button className="lato-font bg-[#231f20] text-white text-[15px] px-8 sm:px-10 py-3 sm:py-4.5 font-semibold rounded-full shadow hover:opacity-90 transition duration-300">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      <div className="relative">
        {/* Wrapper to position the cards overlapping */}
        <div className="absolute inset-x-0 -top-20 flex justify-center">
          <div className="relative bg-[#231f20] shadow-xl rounded-2xl w-[95%] sm:w-[90%] max-w-[1140px] grid grid-cols-2 md:grid-cols-4 text-center overflow-hidden">

            {/* ---- Vertical Dividers (only for md and above) ---- */}
            <div className="hidden md:block absolute top-1/2 left-1/4 transform -translate-y-1/2 w-px h-[40%] bg-white"></div>
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 w-px h-[40%] bg-white"></div>
            <div className="hidden md:block absolute top-1/2 left-[75%] transform -translate-y-1/2 w-px h-[40%] bg-white"></div>

            {/* ---- Card 1 ---- */}
            <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6 group transition-all duration-300 rounded-2xl">
              <FaRegNewspaper className="text-4xl sm:text-5xl text-[#1b75bb] mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-2" />
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-white mb-2 text-center">User-friendly Designs</h3>
            </div>

            {/* ---- Card 2 ---- */}
            <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6 group transition-all duration-300 rounded-2xl">
              <FaBriefcase className="text-4xl sm:text-5xl text-[#1b75bb] mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-2" />
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-white mb-2 text-center">Quick Development</h3>
            </div>

            {/* ---- Card 3 ---- */}
            <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6 group transition-all duration-300 rounded-2xl">
              <FaBullhorn className="text-4xl sm:text-5xl text-[#1b75bb] mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-2" />
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-white mb-2 text-center">Perfect Marketing</h3>
            </div>

            {/* ---- Card 4 ---- */}
            <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6 group transition-all duration-300 rounded-2xl">
              <FaListAlt className="text-4xl sm:text-5xl text-[#1b75bb] mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-2" />
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-white mb-2 text-center">Quality Content</h3>
            </div>
          </div>
        </div>
      </div>



      <div className="relative overflow-hidden">
        <NeedHelpPanel />
      </div>


      {/* Our Clients Section */}

      <section className="w-full bg-white py-10 mt-[200px] sm:mt-[250px] md:mt-20">
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


      {/* Get Ahead Online Section */}

      <section className="bg-white mb-10 md:mb-0 py-8 px-6">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-12 relative">

          {/* ---------- LEFT CONTENT ---------- */}
          <div className="text-left px-4">
            {/* Small subheading with lines */}
            <div className="flex items-center justify-center md:justify-start mb-3">
              <span className="w-8 sm:w-10 h-[3px] bg-[#1b75bb] mr-3"></span>
              <span className="text-[#1b75bb] font-extrabold text-base sm:text-lg">
                Get ahead online
              </span>
              <span className="w-8 sm:w-10 h-[3px] bg-[#1b75bb] ml-3"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-[30px] font-semibold text-[#221e1f] mb-4 leading-snug text-left md:text-left">
              We can make your profit charts go up!
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base text-[#777777] text-left md:text-left">
              Unlike any other <strong>digital marketing agency</strong>, we will bring you brilliant results.
              After all, we have years of experience to our name. Besides, we have a long
              track record of helping clients with their design, development, and marketing needs.
              So, you can count on us to provide you with the most practical solution. We believe
              in providing our clients with maximum satisfaction.
            </p>

            <p className="text-sm sm:text-base text-[#777777] mt-4 text-left md:text-left xl:max-w-[494px] mx-auto md:mx-0">
              Hence, you will get the full value for your money from us. Our service standards
              are exceptionally high. Whether you need us for <strong>website development</strong> or basic SEO,
              we can do wonders for you. No other company can match our policies and results.
              Let us help you steer your business towards maximum profits and benefits.
              We are ever-ready to help you with your digital needs.
            </p>
          </div>

          {/* ---------- RIGHT IMAGE COMPOSITION ---------- */}
          <div className="relative flex justify-center md:justify-start lg:justify-center mt-4 sm:mt-10 md:mt-0">
            <div className="relative">
              {/* Main image */}
              <div className="relative w-[235px] sm:w-[300px] md:w-[300px] lg:w-[406px] h-auto xl:overflow-hidden xl:origin-top-right xl:transition-all xl:duration-7000 xl:ease-[cubic-bezier(0.45,0,0.15,1)] xl:hover:scale-[1.05] z-20">
                <img
                  src={gallery1}
                  alt="Main visual"
                  className="w-full h-auto object-cover relative z-20 shadow-lg xl:transform xl:transition-transform xl:duration-5000 xl:ease-in-out xl:origin-center xl:hover:scale-[1.1]"
                />
              </div>

              {/* Bottom-left Triangle */}
              <div className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 rotate-180 w-32 sm:w-36 md:w-40 h-32 sm:h-40 md:h-44 border-l-120 sm:border-l-160 md:border-l-180 border-l-transparent border-t-120 sm:border-t-160 md:border-t-180 border-t-[#1b75bb] z-10"></div>

              {/* Small overlapping image */}
              <div className="absolute -bottom-16 sm:bottom-[-100px] md:bottom-[-74px] right-[-30px] sm:-right-20 md:-right-8 border-8 sm:border-10 border-white z-30">
                <img
                  src={gallery2}
                  alt="Small visual"
                  className="w-[130px] sm:w-[220px] md:w-40 lg:w-[220px] h-auto object-cover z-30 xl:transition-all xl:duration-7000 xl:ease-[cubic-bezier(0.45,0,0.15,1)] xl:hover:scale-[1.1] xl:origin-center"
                />
              </div>

              {/* Top-right small square */}
              <div className="absolute top-0 -right-4 sm:-right-6 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-[#1b75bb] z-10 border-l-2 border-white"></div>

              {/* Tiny diagonal square */}
              <div className="absolute -top-3 sm:-top-4 -right-8 sm:-right-10 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#1b75bb] z-20"></div>
            </div>
          </div>

        </div>
      </section>



      {/* Technologies We Serve */}

      <section
        className="w-full bg-white py-2 sm:py-10 md:mt-8 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_Tech})` }}
      >
        <div className="max-w-[1140px] mx-auto text-center px-4 sm:px-6 md:px-8">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-10 sm:w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-base sm:text-lg tracking-wider">
              Tech-Driven
            </span>
            <span className="w-10 sm:w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#221e1f] mb-10 sm:mb-12 leading-snug">
            Technologies We Serve
          </h2>

          {/* Technologies Component */}
          <div className="mt-6">
            <Technologies />
          </div>
        </div>
      </section>


      {/* What We Do Section*/}

      <section className="w-full bg-white py-4 md:mt-4">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-sm sm:text-lg tracking-wider">
              We are the true experts
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

      {/* Products Section*/}

      <section className="w-full bg-white py-4 md:mt-4 bg-fill bg-no-repeat"
        style={{ backgroundImage: `url(${BG_Product})` }}>
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
              Products
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#221e1f] mb-12">
            Shop by Industry
          </h2>

          {/* Card Component */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-4">
            {[
              {
                img: P1,
                title: "Portfolio Website Templates",
                price: (
                  <>
                    <span className=" line-through mr-2">$20.00</span>
                    <span className="">$10.00</span>
                  </>
                ),
              },
              {
                img: P2,
                title: "Nail Art Website Template",
                price: (
                  <>
                    <span className=" line-through mr-2">$20.00</span>
                    <span className="">$10.00</span>
                  </>
                ),
              },
              {
                img: P3,
                title: "Beauty Tips Website Template",
                price: (
                  <>
                    <span className=" line-through mr-2">$20.00</span>
                    <span className="">$10.00</span>
                  </>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* -50% Label */}
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 z-10">
                  -50%
                </div>

                {/* Image */}
                <div className="overflow-hidden group">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[296px] object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="p-5 text-center">
                  <h3 className="text-base font-semibold text-[#221e1f] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#777777] text-[15px]">{card.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-white text-black px-10 py-4 rounded-full font-medium text-sm md:text-base shadow-[6px_12px_12px_rgba(0,0,0,0.08)] hover:bg-[#231f20] hover:text-white transition-all duration-300">
              SEE MORE
            </button>
          </div>
        </div>
      </section>

      {/* Assisting Our Clients Section*/}

      <section className="w-full bg-white py-10 md:mt-4">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
              Results Driven
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-12">
            Assisting Our Clients
          </h2>

          {/* Tabs Component */}
          <Tabs />
        </div>
      </section>


      {/* Our Creative Works Section*/}

      <section className="w-full bg-white py-4 md:mt-4">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
              Portfolio
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-5">
            Our Creative Works
          </h2>

          {/* Portfolio Tabs Component */}
          <PortfolioTabs />

          {/* See More Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-[#231f20] text-white px-10 py-4 rounded-full font-medium text-sm md:text-base shadow-[6px_12px_12px_rgba(0,0,0,0.08)] transform transition-transform duration-500 ease-in-out hover:scale-103">
              VIEW ALL
            </button>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}

      <section className="w-full bg-white py-10 md:mt-4">
        <div className="max-w-[1140px] mx-auto text-center px-4 sm:px-6">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4 flex-wrap">
            <span className="w-10 sm:w-12 h-[3px] bg-[#1b75bb] mr-2 sm:mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-[12px] sm:text-lg tracking-wider">
              Amazing Smooth Workflow
            </span>
            <span className="w-10 sm:w-12 h-[3px] bg-[#1b75bb] ml-2 sm:ml-3 rounded-full"></span>
          </div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#221e1f] mb-8 sm:mb-12">
            Why Choose Us
          </h2>

          {/* 4 Square Cards */}
          <div className="md:place-items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
              {/* Card 1 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-[0_0_16px_rgba(0,0,0,0.4)] p-4 w-[260px] lg:w-[187px] lg:h-[158px] sm:w-[280px] sm:h-40">
                <img src={W1} alt="High Quality" className="w-12 h-12 mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-[#221e1f]">High Quality</h3>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-[0_0_16px_rgba(0,0,0,0.4)] p-4 w-[260px] lg:w-[187px] lg:h-[158px] sm:w-[280px] sm:h-40">
                <img src={W2} alt="Affordable Cost" className="w-12 h-12 mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-[#221e1f]">Affordable Cost</h3>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-[0_0_16px_rgba(0,0,0,0.4)] p-4 w-[260px] lg:w-[187px] lg:h-[158px] sm:w-[280px] sm:h-40">
                <img src={W3} alt="Clean Code" className="w-12 h-12 mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-[#221e1f]">Clean Code</h3>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-[0_0_16px_rgba(0,0,0,0.4)] p-4 w-[260px] lg:w-[187px] lg:h-[158px] sm:w-[280px] sm:h-40">
                <img src={W4} alt="Friendly Support" className="w-12 h-12 mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-[#221e1f]">Friendly Support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-10 sm:py-12 md:py-5 mt-6 md:mt-8"
        style={{ backgroundImage: `url(${BG_CTA})` }}
      >
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6 md:gap-8">
          {/* Text content */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold mb-2 leading-snug">
              Get Free Mockups and SEO Report
            </h2>
            <p className="text-sm sm:text-base md:text-[18px] max-w-[500px]">
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



      {/* Blogs Section */}

      <section className="w-full bg-white py-10 md:mt-4">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
              News & Articles
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-12">
            Latest From The Blog
          </h2>

          <BlogSlider />
        </div>
      </section>


      {/* Our Working Process Section */}

      <section className="w-full bg-white py-6 md:mt-4">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-[12px] sm:text-lg tracking-wider">
              How is everything going?
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-12">
            Our Working Process
          </h2>

          <img
            src={Process}
            alt="Process Flow"
            className="aspect-30/9"
          />
        </div>
      </section>


      {/* Macs CTA */}

      <section
        className="w-full md:mt-8 mb-16 bg-cover bg-top bg-no-repeat place-content-center"
        style={{ backgroundImage: `url(${BG_CTA})` }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 md:py-0 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">

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
          <div className="relative w-full sm:w-[320px] md:w-[380px] h-[220px] sm:h-[260px] md:h-[285px] flex justify-center md:justify-end">
            <img
              src={MAC_CTA}
              alt="Macs"
              className="w-full h-full md:absolute md:-top-8 md:right-0 object-contain"
            />
          </div>
        </div>
      </section>



      {/* Testimonials Section */}

      <section className="w-full bg-white py-3 md:mt-4">
        <div className="max-w-[1140px] mx-auto text-center">
          {/* Small blue heading with horizontal lines */}
          <div className="flex items-center justify-center mb-4">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
              Testimonials
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-12">
            What Makes People Praise Us?
          </h2>

          <TestimonialsSlider />
        </div>
      </section>


      {/* Mac 2 CTA */}

      <section
        className="w-full md:mt-28 mb-16 bg-cover bg-top bg-no-repeat place-content-center"
        style={{ backgroundImage: `url(${BG_CTA})` }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-2 py-8 md:py-3 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">

          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-[36px] font-extrabold mb-2">
              Don't Wait Any Longer!
            </h2>
            <p className="text-base md:text-[18px] mb-6">
              Maximize your digital presence with a website or App!
            </p>
            <button className="bg-white text-[#221e1f] uppercase px-8 py-2.5 md:px-10 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
              Hire a Developer
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full sm:w-[320px] md:w-[380px] h-[220px] sm:h-[260px] md:h-[285px] flex justify-center md:justify-end">
            <img
              src={MAC2_CTA}
              alt="Mac2"
              className="w-[200px] h-[250px] md:w-[284px] md:h-[358px] md:absolute md:-top-18 md:right-8 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQS Section */}

      <section className="w-full bg-white py-3 md:mt-4">
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
  );
}
