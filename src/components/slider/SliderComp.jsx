import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComp.css";
import sliderImg1 from "../../assests/images/sliderImg1.jpg";
import sliderImg2 from "../../assests/images/sliderImg2.jpg";
import sliderImg3 from "../../assests/images/sliderImg3.jpg";

const SliderComp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };
  return (
    <div className="w-100 ">
      <Slider {...settings}>
        <>
          <div style={{ backgroundImage: `url(${sliderImg1})` }} className={`slide-container`}>
            <div className={`show-elements ${currentSlide === 0 ? "active" : ""}`}>
              <h1>Elevate Your Style. Shop Now!</h1>
            </div>
          </div>
        </>
        <>
          <div className={`slide-container`} style={{ backgroundImage: `url(${sliderImg2})` }}>
            <div className={`show-elements ${currentSlide === 1 ? "active" : ""}`}>
              <h1>Discover Fashion Perfection. Explore Today!</h1>
            </div>
          </div>
        </>
        <>
          <div className={`slide-container`} style={{ backgroundImage: `url(${sliderImg3})` }}>
            <div className={`show-elements ${currentSlide === 2 ? "active" : ""}`}>
              <h1>Step into Elegance. Shop our Collection!</h1>
            </div>
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderComp;
