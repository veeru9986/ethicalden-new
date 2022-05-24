import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";
import security from "../images/gif/Cyber Security.gif"
import marketing from "../images/gif/Digital Marketing.gif"
import education from "../images/gif/Education.gif"

import { Wrapper } from "../components/StyledComponents/Wrapper";
import Services from "../components/Services";
import Ourwork from "../components/Ourwork";
import OurClient from "../components/OurClient";
import Ourteam from "../components/Ourteam";

const data = [
  {
    id: 0,
    title: "SECURity EXperts",
    desc: "With the best hand-picked Ethical Hackers on our side, threats and risks pertaining to the cyber world is something we are very good at defending. ",
    image: security,
  },
  {
    id: 0,
    title: "EDUCATION EXPERTS",
    desc: "Our top-notch trainers and mentors teach for fun. Their unique way of educating and making people understand makes studies very easy.",
    image: education,
  },
  {
    id: 0,
    title: "DIGITAL MARKETING",
    desc: "With a bunch of experienced growth hackers, Ethical Den can help you hack the maximum reach one can achieve in the digital world!",
    image: marketing,
  },
];

// const Wrapper1 = styled(Wrapper)`
//    grid-area: ;
// `

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

function Index() {
  return (
    <Wrapper>
      <Container1>
        <Banner />
      </Container1>
      <Container>
        <RightSection data={data[0]} />
        <LeftSection data={data[1]} />
        <RightSection data={data[2]} />
        <Services />
        <Ourwork />
        <OurClient />
        <Ourteam />
      </Container>
    </Wrapper>
  );
}

export default Index;
