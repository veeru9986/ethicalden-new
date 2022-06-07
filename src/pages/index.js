import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";
import security from "../images/gif/Cyber Security.gif";
import marketing from "../images/gif/Digital Marketing.gif";
import education from "../images/gif/Education.gif";

import { Wrapper } from "../components/StyledComponents/Wrapper";
import Services from "../components/Services";
import Ourwork from "../components/Ourwork";
import OurClient from "../components/OurClient";
import Ourteam from "../components/Ourteam";

const data = [
  {
    id: 0,
    title: "SECURity EXperts",
    desc: "Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity initiatives is critical to staying ahead of the constantly evolving risks that are out there. With Audits, Penetration Testing & Security System Architecture and Implementation, Ethical Den can help you better understand where you are now and where you need to be tomorrow.",
    image: security,
  },
  {
    id: 0,
    title: "Development EXPERTS",
    desc: "We create unique & efficient digital solutions that help businesses grow. By bringing the latest IT advancements to various industries, we deliver custom software that completely fits the behavior and needs of our customers. While Ethical Den records continuous growth and expansion, with the software solutions we provide, our customers grow, too.",
    image: education,
  },
  {
    id: 0,
    title: "DIGITAL MARKETING",
    desc: "At Ethical Den, we pride ourselves on digital marketing campaigns that build Brand Equity by using unique insights into your target market. A solid social media marketing strategy supports your wider digital marketing approach. Our team of digital marketing Cosmonauts ensure that your brands' online marketing strategy and planning are prepared to the standards of global best practices and built to achieve your brand's objectives. ",
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
        <RightSection data={data[0]} kId="aboutus" />
        <LeftSection data={data[1]} />
        <RightSection data={data[2]} />
        <Services kId="services" />
        <Ourwork kId="ourwork" />
        <OurClient kId="education" />
        <Ourteam />
      </Container>
    </Wrapper>
  );
}

export default Index;
