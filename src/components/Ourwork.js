import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import client from "../images/ourwork.png";

const Wrapper = styled.div`
  margin-top: 9rem;

  .heading {
    grid-area: auto/1/auto/3;
    h5 {
      text-transform: uppercase;
    }
  }
  .our-clients-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 525px 100px 100px 100px 525px 100px;
    grid-column-gap: 14rem;
    margin-top: 3rem;
    @media (max-width: 479px) {
      grid-template-rows: auto;
    }
    h4 {
      font-size: 1.75rem;
      font-weight: var(--mediumWeight);
      @media (max-width: 479px) {
        font-size: 1.25rem;
      }
    }
    span {
      font-size: 1.063rem;
      font-weight: var(--xmediumWeight);
      @media (max-width: 479px) {
        font-size: 0.875rem;
      }
    }
    .image {
      background-position: center;
      background-size: cover;
      grid-area: 1/1/3/2;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-1 {
      background-position: center;
      background-size: cover;
      grid-area: 2/2/4/3;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-2 {
      background-position: center;
      background-size: cover;
      grid-area: 5/1/7/2;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-3 {
      background-position: center;
      background-size: cover;
      grid-area: 6/2/8/3;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image,
    .image-1,
    .image-2,
    .image-3 {
      transition: transform 500ms ease-in-out 25ms;

      &:hover {
        transform: skewY(2.1deg);
      }
    }
    @media (max-width: 479px) {
      .image,
      .image-1,
      .image-2,
      .image-3 {
        grid-area: auto/1/auto/3;
        height: 450px;
        margin-bottom: 2.5rem;
      }
    }
  }
  .see-all-our-work {
    display: flex;
    margin-top: 3rem;
    justify-content: flex-end;

    a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: var(--mediumWeight);
      @media (max-width: 479px) {
        font-size: 1rem;
      }
    }
  }
`;

function Ourwork({kId}) {
  return (
    <Wrapper>
      <div className="heading" id={kId}>
        <h5>Our work</h5>
      </div>
      <div className="our-clients-wrapper">
        <div className="image" style={{ backgroundImage: `url(${client})` }}>
          <h4>Name of the company or Client</h4>
          <span>Branding, Web Design</span>
        </div>
        <div className="image-1" style={{ backgroundImage: `url(${client})` }}>
          <h4>Name of the company or Client</h4>
          <span>Branding, Web Design</span>
        </div>
        <div className="image-2" style={{ backgroundImage: `url(${client})` }}>
          <h4>Name of the company or Client</h4>
          <span>Branding, Web Design</span>
        </div>
        <div className="image-3" style={{ backgroundImage: `url(${client})` }}>
          <h4>Name of the company or Client</h4>
          <span>Branding, Web Design</span>
        </div>
      </div>
      <div className="see-all-our-work">
        <Link to="/">See all our work {`>`}</Link>
      </div>
    </Wrapper>
  );
}

export default Ourwork;
