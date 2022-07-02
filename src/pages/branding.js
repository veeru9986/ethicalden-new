import React from "react";
import styled from "styled-components";
import Hero from "../components/Branding/Hero";
import Process from "../components/Branding/Process";
import Proposal from "../components/Branding/Proposal";
import { Wrapper } from "../components/StyledComponents/Wrapper";

const Wrapper1 = styled(Wrapper)`
  background: #fff;
`;

const Container = styled.div`
  margin-top: var(--mt);
  grid-area: auto/2/auto/3;
  width: 100%;

  @media (min-width: 1700px) {
    width: 80%;
  }
`;
const Container1 = styled(Container)`
  grid-area: auto/1/auto/4;
  margin-top: 0;
  @media (min-width: 1700px) {
    width: 100%;
  }
`;
function branding() {
  return (
    <Wrapper1>
      <Container1>
        <Hero />
      </Container1>
      <Container>
        <Proposal />
      </Container>
      <Container1>
        <Process />
      </Container1>
    </Wrapper1>
  );
}

export default branding;
