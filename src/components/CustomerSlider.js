import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

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
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
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
          <div className="box-1">
            <StaticImage src="../images/team/Arihant Gupta.png" />
          </div>
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Arpita Mitra.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Fardeen Ahmed.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Group 46.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/khokon halder.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Krishanu Saha.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Nazmul islam.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Praveen Rathan.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Sagnik Roy.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Sajal Ahmed.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Sanjana Akter.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Shehnaz Sultana.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/team/Yathish Suresh.png" />
          </div>{" "}
        </div>
      </Slider>
    </Container>
  );
}

export default CustomerSlider;
