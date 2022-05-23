import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
  margin-bottom: 2rem;
  .box {
    padding: 1rem;
    display: flex !important;
    justify-content: center;
  }
  .box-1 {
    width: 195px;
    height: 195px;
    background-color: #c4c4c4;

    @media (max-width: 489px) {
      width: 100px;
      height: 100px;
    }
  }
  .slick-dots li button:before {
    color: #fff !important;
  }
  .slick-slider {
    display: grid;
  }
  .slick-initialized .slick-slide {
    padding-top: 2rem;
  }
`;

function CustomerSlider({ data, title, testPage }) {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
    dots: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        <div className="box">
          <div className="box-1" />
        </div>
        <div className="box">
          <div className="box-1" />
        </div>
        <div className="box">
          <div className="box-1" />
        </div>
        <div className="box">
          <div className="box-1" />
        </div>
        <div className="box">
          <div className="box-1" />
        </div>
        <div className="box">
          <div className="box-1" />
        </div>
        <div className="box">
          <div className="box-1" />
        </div>
        <div className="box">
          <div className="box-1" />
        </div>
      </Slider>
    </Container>
  );
}

export default CustomerSlider;
