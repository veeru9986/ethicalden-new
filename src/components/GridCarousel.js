import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Carousel from "react-grid-carousel";

const Container = styled.div`
  margin-bottom: 2rem;
  .box {
    padding: 1rem;
    display: flex !important;
    justify-content: center;
  }
  .box-1 {
    background-color: #c4c4c4;
    height: 100px;

    @media (max-width: 489px) {

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
  return (
    <Container>
      <Carousel
        cols={4}
        gap={10}
        loop
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 4,
          },
          {
            breakpoint: 479,
            cols: 4,
            rows: 2,
            gap: 10,
          },
        ]}
        // mobileBreakpoint={1000}
      >
        <Carousel.Item >
          <div className="box-1" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="box-1" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="box-1" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="box-1" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="box-1" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CustomerSlider;
