import React from "react";
import styled from "styled-components";
import branding from "../../images/branding.png";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  min-height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 2rem;
  place-items: center;
  @media (max-width: 479px) {
    background-position-x: right;
    min-height: 90vh;
  }

  .hero_wrapper_wrapper {
    grid-area: auto/2/auto/3;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    align-items: flex-end;
    height: 80%;
    .hero_heading {
      h2 {
        color: var(--black);
        font-weight: 700;
        line-height: 70px;
      }
    }
  }
`;

function Hero() {
  return (
    <Wrapper style={{ backgroundImage: `url(${branding}) ` }}>
      <div className="hero_wrapper_wrapper">
        <div className="hero_heading">
          <h2>
            Name of the company or <br /> Client
          </h2>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
