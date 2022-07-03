import React from "react";
import styled from "styled-components";
import company from "../../images/company.png";

const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  min-height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 2rem;
  position: relative;

  .company_background {
    width: 100%;
    height: 600px;
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
    h2 {
      font-weight: var(--mediumWeight);
    }
  }
`;

function Company() {
  return (
    <Wrapper style={{ backgroundImage: `url(${company})` }}>
      <div className="layer" />
      <div className="heading">
        <h2>
          Brooklyn Roasting <br /> Company
        </h2>
      </div>
    </Wrapper>
  );
}

export default Company;
