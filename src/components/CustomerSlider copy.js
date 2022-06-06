import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import client1 from "../images/Clients/AKPS Logo.png";
import client2 from "../images/Clients/Devine.png";
import client3 from "../images/Clients/E-laj.png";
import client4 from "../images/Clients/Hero.png";
import client5 from "../images/Clients/Lassi Jn.png";
import client6 from "../images/Clients/Mr Tandoor.png";
import client7 from "../images/Clients/Prakrithi Study.png";
import client8 from "../images/Clients/Roaderr.png";
import client9 from "../images/Clients/S Fashion.png";
import client10 from "../images/Clients/Table Talk.png";
import client11 from "../images/Clients/The Roof.png";
import client12 from "../images/Clients/Wonderlite.png";
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
          <div className="box-1">
            <StaticImage src="../images/Clients/AKPS Logo.png" />
          </div>
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Devine.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/E-laj.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Hero.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Lassi Jn.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Mr Tandoor.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Prakrithi Study.png" />
          </div>{" "}
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Roaderr.png" />
          </div>
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/S Fashion.png" />
          </div>
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Table Talk.png" />
          </div>
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/The Roof.png" />
          </div>
        </div>
        <div className="box">
          <div className="box-1">
            <StaticImage src="../images/Clients/Wonderlite.png" />
          </div>
        </div>
      </Slider>
    </Container>
  );
}

export default CustomerSlider;
