"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "/assets/testimonials/u1.webp",
      name: "Shams W.Pawel",
      rating: 5,
      desc: "It gives me great pleasure to recommend OOP Technologies to anyone interested in their services. Throughout our collaboration, they have exhibited professionalism, thoroughness, and competence. We believe that our partnership with them will continue for many years to come.",
    },
    {
      image: "/assets/testimonials/u2.webp",
      name: "Parnell Benn",
      rating: 5,
      desc: "It was my first time trying to get a website for my business, and these guys have been a great help. They answered all my questions professionally and with patience. I can rate them 5 stars for their politeness alone, let aside their work outcome. These guys are the friendliest and collaborative.",
    },
    {
      image: "/assets/testimonials/u3.webp",
      name: "Dustin Mark",
      rating: 5,
      desc: "I always thought it was no use branding on social media, but OOP Technologies proved me wrong. I am so happy that I invested on these guys for social media marketing. Now my business page has so many likes and engagement, and the customer base is so strong. These guys really do know how to do the best.",
    },
    {
      image: "/assets/testimonials/u4.webp",
      name: "Renda",
      rating: 5,
      desc: "The sales of my business were going down, so I hired OOP Technologies for SEO. They brought the results right on the deadlines they promised. The progress was smooth and the sales started increasing day by day. They kept sharing the analytics with me throughout the service. And I am so grateful for their dedication and ingenuity.",
    },
    {
      image: "/assets/testimonials/u5.webp",
      name: "Lisa Moccoy",
      rating: 5,
      desc: "I wanted a redesign for my Ecommerce website, and I am so glad to have trusted OOP Technologies with the project. I was a bit worried in the start, but they really are the skilled experts. They added so much to the website I had no idea of. The sales are going up like crazy. These guys are doing a 10-out-of-10 work, if you ask me.",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    swipeToSlide: true,
    draggable: true,
    cssEase: "cubic-bezier(0.25, 1, 0.5, 1)",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white pb-16 md:mt-4">
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

        {/* Slider */}
        <div className="slider-container w-full px-2 sm:px-4 md:px-2">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-3 h-[440px] flex justify-center items-center">
                <div className="w-full h-full bg-white relative text-center overflow-hidden shadow-[6px_12px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-xl rounded-md group">
                  {/* Blue Curve + Quote Icon */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#1b75bb] rounded-bl-[100px] flex items-center justify-center">
                    <FaQuoteRight className="text-white text-3xl" />
                  </div>

                  {/* User Image */}
                  <div className="mt-14 flex justify-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="my-4 text-[18px] font-bold text-[#221e1f]">{t.name}</h3>

                  {/* Rating */}
                  <div className="flex justify-center mt-2 mb-3">
                    {[...Array(t.rating)].map((_, idx) => (
                      <FaStar key={idx} className="text-yellow-400 text-[18px] mx-[3px]" />
                    ))}
                  </div>

                  {/* Description */}
                  <p className="px-8 text-[12px] text-[#777777]">{t.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
