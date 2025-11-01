import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const images = [
    "/assets/clients/1.webp","/assets/clients/2.webp","/assets/clients/3.webp","/assets/clients/4.webp","/assets/clients/5.webp","/assets/clients/6.webp","/assets/clients/7.webp","/assets/clients/8.webp","/assets/clients/9.webp","/assets/clients/10.webp","/assets/clients/11.webp","/assets/clients/12.webp","/assets/clients/13.webp","/assets/clients/14.webp","/assets/clients/15.webp","/assets/clients/16.webp","/assets/clients/17.webp","/assets/clients/18.webp","/assets/clients/19.webp","/assets/clients/20.webp","/assets/clients/21.webp"
  ];

  const settings = {
    infinite: true,
    slidesToShow: 6,
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
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
      { breakpoint: 420, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="slider-container w-full px-2 sm:px-4 md:px-6 lg:px-10">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div
            key={i}
            className="relative px-1 sm:px-2 h-[90px] sm:h-[110px] md:h-[120px] flex justify-center items-center"
          >
            {/* --- Client Box --- */}
            <div className="flex items-center justify-center w-[120px] sm:w-[140px] md:w-40 h-20 sm:h-[90px] md:h-[100px] mx-auto bg-white shadow-[6px_12px_12px_rgba(0,0,0,0.08)] rounded-md">
              <img
                src={img}
                alt={`Client ${i + 1}`}
                className="max-w-[100px] sm:max-w-[110px] md:max-w-[120px] max-h-[60px] sm:max-h-[70px] md:max-h-20 object-contain"
                loading="lazy"
              />
            </div>

            {/* --- Divider (hidden on small screens) --- */}
            {i !== images.length - 1 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 sm:h-[50px] w-px bg-gray-300 hidden sm:block"></div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClients;
