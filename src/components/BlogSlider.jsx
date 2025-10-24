import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegCommentDots, FaUserCircle } from "react-icons/fa";

// Sample Blog Images
import blog1 from "../assets/blogs/b1.webp";
import blog2 from "../assets/blogs/b2.webp";
import blog3 from "../assets/blogs/b3.webp";
import blog4 from "../assets/blogs/b4.webp";
import blog5 from "../assets/blogs/b5.webp";
import blog6 from "../assets/blogs/b6.webp";

const BlogSlider = () => {
  const blogs = [
    {
      image: blog1,
      title: "How To Develop WordPress Plugin?",
      desc: "Developing WordPress plugins is a rewarding experience for those seeking to add custom functionality to",
      comments: 0,
      author: "OOP Technologies",
    },
    {
      image: blog2,
      title: "Do Developers Use WordPress?",
      desc: "Developers often use WordPress as a powerful tool for creating websites and managing content. With",
      comments: 0,
      author: "OOP Technologies",
    },
    {
      image: blog3,
      title: "How To Get Started With WordPress Development?",
      desc: "If you're looking to get started with WordPress development, you're in luck. Clearly, WordPress is",
      comments: 0,
      author: "OOP Technologies",
    },
    {
      image: blog4,
      title: "Why PHP is Getting Stronger?",
      desc: "PHP is a popular scripting language used for web development. And it is experiencing a",
      comments: 0,
      author: "OOP Technologies",
    },
    {
      image: blog5,
      title: "Difference Between WordPress Developer And WordPress Designer",
      desc: "A WordPress developer and designer is a professional who specializes in creating and customizing WordPress",
      comments: 0,
      author: "OOP Technologies",
    },
    {
      image: blog6,
      title: "When Did WordPress Become Popular?",
      desc: "WordPress has become the most popular content management system (CMS) in the world, powering over",
      comments: 0,
      author: "OOP Technologies",
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
    arrows:false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container w-full px-2 sm:px-4 md:px-6">
      <Slider {...settings}>
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="px-3 h-[486px] flex justify-center items-start"
          >
            <div className="w-[351px] h-full bg-white border border-gray-200 overflow-hidden group transition-all duration-300">
              
              {/* Image */}
              <div className="overflow-hidden h-[216.92px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-4 py-10 text-left">
                {/* Meta Row */}
                <div className="flex items-center uppercase font-semibold text-gray-500 text-[12px] mb-3 gap-5">
                  <div className="flex items-center gap-2">
                    <FaRegCommentDots className="text-[#1b75bb]" />
                    <span>{blog.comments} Comments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-[#1b75bb]"/>
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-semibold text-[#221e1f] mb-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#777777] line-clamp-3">
                  {blog.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
