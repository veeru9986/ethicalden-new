import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: auto;
  width: 100%;
  margin-top: 3rem;
  .wrapper {
    grid-area: auto/1/auto/4;
    background-color: #000;
    width: 100%;
    height: 600px;
  }
  .heading {
    grid-area: auto/2/auto/3;
    margin-bottom: 4rem;
    h3 {
      color: black;
      font-weight: var(--xheavyWeight);
      @media (max-width: 479px) {
         font-size: 32px;
    }
    }
  }
  .about {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-area: auto/2/auto/4;
    width: 35%;
    margin: 3rem 0;
    @media (max-width: 767px) {
        width: 100%;
      }
    .section {
      display: flex;
      align-items: center;
      @media (max-width: 479px) {
        flex-direction: column;
        align-items: unset;
      }
      p{
        margin-right: 1rem;
      }
      p,
      span {
        color: #000;
        font-size: var(--span);
        font-weight: var(--mediumWeight);
        width: 50%;
      }
      span {
        font-weight: var(--lightWeight) !important;
        color: var(--black);
      }
    }
  }
`;

function Website() {
  return (
    <Wrapper>
      <div className="heading">
        <h3>The Website</h3>
      </div>
      <div className="wrapper" />
      <div className="wrapper" />
      <div className="about">
        <div className="section">
          <p>Product Manager</p>
          <span>Name Surname</span>
        </div>
        <div className="section">
          <p>Content Writer</p>
          <span>Name Surname</span>
        </div>
        <div className="section">
          <p>Graphic Designer</p>
          <span>Name Surname</span>
        </div>
        <div className="section">
          <p>Art Director</p>
          <span>Name Surname</span>
        </div>
        <div className="section">
          <p>Digital Marketer</p>
          <span>Name Surname</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Website;
