import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
  margin-bottom: 2rem;
  img{
    width:100%;
  }
  .box {
    padding: 1rem;
    display: flex !important;
    justify-content: center;
    @media (max-width: 489px) {
      width: 188px !important;
    }
  }
  .box-1 {
    width: 195px;
    /* 
    @media (max-width: 489px) {
      width: 100px;
      height: 100px;
    } */
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

function CustomerSlider({ data, title, testPage, our_team }) {
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {our_team.map((o, id) => (
          <div className="box" key={id}>
            <div className="box-1">
              <img
                src={o.our_clients_media.data.attributes.url}
                alt={o.our_clients_media.data.attributes.name}
              />
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default CustomerSlider;
