"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselScroll = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative ">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full ">
            <Image
              src={image.img}
              alt="carousel"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselScroll;
