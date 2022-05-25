import React from "react";
import styled from "styled-components";
import CustomerSlider from "./CustomerSlider copy";

const Wrapper = styled.div`
  margin-top: 9rem;

  .heading {
    h5 {
      text-transform: uppercase;
    }
  }
`;

function OurClient() {
  return (
    <Wrapper>
      <div className="heading">
        <h5>Our clients</h5>
      </div>
      <CustomerSlider />
    </Wrapper>
  );
}

export default OurClient;