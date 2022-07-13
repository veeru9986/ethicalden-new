import React from "react";
import styled from "styled-components";
import company from "../../images/company.png";

const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 5% 1fr 5%;

  /* padding-bottom: 2rem; */
  position: relative;

  .company_background {
    width: 100%;
    height: 600px;
    grid-area: auto/1/auto/4;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    .text {
      margin-bottom: 2rem;
    }
    a {
      font-size: 2.5rem;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s ease;
      cursor: pointer;
      z-index: 3;
      position: relative;
      margin-right: 2rem;
      @media (max-width:479px){
        font-size: 1.5rem;
      }
      &:hover {
        text-decoration: underline !important;
      }
    }
  }
  .layer {
    background-color: var(--black);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
  .heading {
    grid-area: auto/2/auto/3;
    display: flex;
    height: 100%;
    align-items: center;
    margin-bottom: 2.5rem;
    h2 {
      font-weight: var(--mediumWeight);
      color: #000;
      @media (max-width: 479px) {
        font-size: 32px;
      }
    }
  }
`;

function Company() {
  return (
    <Wrapper>
      <div className="heading">
        <h2>
          Brooklyn Roasting <br /> Company
        </h2>
      </div>
      <div
        style={{ backgroundImage: `url(${company})` }}
        className="company_background"
      >
        <div className="layer" />
        <div className="text">
          <a href="#">Next</a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Company;
