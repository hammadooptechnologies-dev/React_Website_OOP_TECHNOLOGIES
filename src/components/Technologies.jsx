import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image_1 from "../assets/technology/1.webp";
import image_2 from "../assets/technology/2.webp";
import image_3 from "../assets/technology/3.webp";
import image_4 from "../assets/technology/4.webp";
import image_5 from "../assets/technology/5.webp";
import image_6 from "../assets/technology/6.webp";
import image_7 from "../assets/technology/7.webp";
import image_8 from "../assets/technology/8.webp";
import image_9 from "../assets/technology/9.webp";
import image_10 from "../assets/technology/10.webp";
import image_11 from "../assets/technology/11.webp";
import image_12 from "../assets/technology/12.webp";
import image_13 from "../assets/technology/13.webp";
import image_14 from "../assets/technology/14.webp";
import image_15 from "../assets/technology/15.webp";
import image_16 from "../assets/technology/16.webp";
import image_17 from "../assets/technology/17.webp";
import image_18 from "../assets/technology/18.webp";
import image_19 from "../assets/technology/19.webp";


const Technologies = () => {
  const images = [
    image_1, image_2, image_3, image_4, image_5, image_6, image_7,
    image_8, image_9, image_10, image_11, image_12, image_13, image_14,
    image_15, image_16, image_17, image_18, image_19,
  ];

  const settings = {
    infinite: true,               // loop forever
  slidesToShow: 8,              // show 6 logos at once
  slidesToScroll: 1,            // autoplay moves 1 slide
  autoplay: true,               // enable autoplay
  autoplaySpeed: 2500,          // time between auto moves
  speed: 700,                   // transition speed (ms)
  swipeToSlide: true,           // allow free swiping
  draggable: true,              // allow mouse drag
  cssEase: "cubic-bezier(0.25, 1, 0.5, 1)",       // smooth easing
  pauseOnHover: true,
    arrows:false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="slider-container w-full px-2 sm:px-4 md:px-6 lg:px-0 ">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="relative flex items-center justify-center px-1 sm:px-2 h-[90px] sm:h-[110px] md:h-[100px]">
            {/* --- Technology Box --- */}
              <img
                src={img}
                alt={`Client ${i + 1}`}
                className="max-w-[100px] sm:max-w-[110px] md:max-w-[100px] max-h-[60px] sm:max-h-[70px] md:max-h-[100px]"
                loading="lazy"
              />
                 
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Technologies;
