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
      position: absolute;
      min-width: 100px;
      bottom: 0;
      right: 1%;
    }
    a {
      font-size: 2.5rem;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s ease;
      cursor: pointer;
      margin-right: 2rem;
      @media (max-width: 479px) {
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
    width: 100%;
    align-items: center;
    position: absolute;
    top: 0;
    padding: 2rem;
    h2 {
      font-weight: var(--mediumWeight);
      color: #fff;
      @media (max-width: 479px) {
        font-size: 32px;
      }
    }
  }
`;

function Company() {
  return (
    <Wrapper>
      <div
        style={{ backgroundImage: `url(${company})` }}
        className="company_background"
      >
        <div className="layer" />
        <div className="heading">
          <h2>
            Brooklyn Roasting <br /> Company
          </h2>
        </div>
        <div className="text">
          <a href="#">Next</a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Company;
