import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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

function ProjectSection() {
  return (
    <section className="bg-white my-4">
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>1</h3>
        </div>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>2</h3>
        </div>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>3</h3>
        </div>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>4</h3>
        </div>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>5</h3>
        </div>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>6</h3>
        </div>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>7</h3>
        </div>
        <div className="w-30 h-30 m-2 bg-gray-800">
          <h3>8</h3>
        </div>
      </Slider>
    </section>
  );
}

export default ProjectSection;
