import React from "react";
import styled from "styled-components";
import CustomerSlider from "./CustomerSlider";

const Wrapper = styled.div`
  margin-top: 9rem;
  .heading {
    h5 {
      text-transform: uppercase;
    }
  }
`;

function Ourteam() {
  return (
    <Wrapper>
      <div className="heading">
        <h5>Our team</h5>
      </div>
      <CustomerSlider />
    </Wrapper>
  );
}

export default Ourteam;
