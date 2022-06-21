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

function OurClient({kId, our_clients}) {
  return (
    <Wrapper>
      <div className="heading" id={kId}>
        <h5>Our clients</h5>
      </div>
      <CustomerSlider our_clients={our_clients} />
    </Wrapper>
  );
}

export default OurClient;
