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
    infinite: true,
    slidesToShow: 8,
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
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 5 } },
      { breakpoint: 640, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="slider-container w-full px-2 sm:px-4 md:px-6 lg:px-0">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-2 sm:px-3 md:px-4 h-[90px] sm:h-[110px] md:h-[100px]"
          >
            <img
              src={img}
              alt={`Technology ${i + 1}`}
              className="object-contain mx-auto max-w-[80px] sm:max-w-[100px] md:max-w-[110px] max-h-[60px] sm:max-h-[70px] md:max-h-[100px]"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Technologies;
