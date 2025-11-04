import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Technologies = () => {
  const images = [
    "/assets/technology/1.webp", "/assets/technology/2.webp", "/assets/technology/3.webp", "/assets/technology/4.webp", "/assets/technology/5.webp", "/assets/technology/6.webp", "/assets/technology/7.webp","/assets/technology/8.webp", "/assets/technology/9.webp", "/assets/technology/10.webp", "/assets/technology/11.webp", "/assets/technology/12.webp", "/assets/technology/13.webp", "/assets/technology/14.webp","/assets/technology/15.webp", "/assets/technology/16.webp", "/assets/technology/17.webp", "/assets/technology/18.webp", "/assets/technology/19.webp",
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
              className="object-contain mx-auto max-w-20 sm:max-w-[100px] md:max-w-[110px] max-h-[60px] sm:max-h-[70px] md:max-h-[100px]"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Technologies;
