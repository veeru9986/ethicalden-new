import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";
import security from "../images/gif/Cyber Security.gif";
import marketing from "../images/gif/Digital Marketing.gif";
import education from "../images/gif/Education.gif";
import { graphql } from "gatsby";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import Services from "../components/Services";
import Ourwork from "../components/Ourwork";
import OurClient from "../components/OurClient";
import Ourteam from "../components/Ourteam";
import Seo from "../components/Seo/Seo";

const dataS = [
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

function Index({ location, data }) {
  const keys = [
    "cyber security services",
    "cyber servurity",
    "web development",
    "ui/ux",
    "digital marketing agency",
    "ethical den",
    "ethicalden",
    "den",
  ];

  const { hero, about_us, services, our_work, our_clients, our_team } = data.attributes;

  return (
    <Wrapper>
      <Seo
        title="Cyber Security Service | Web Development | UI/UX | Digital Marketing | SEO"
        description="We're the best digital marketing agency from West Bengal, curating experiences that users fall in love with"
        image="https://ethicalden.com/logo.png"
        location={`${location.pathname}`}
        keywords={keys}
      />{" "}
      <Container1>
        <Banner hero={hero} />
      </Container1>
      <Container>
        {about_us.map((a, id) =>
          (id + 1) % 2 !== 0 ? (
            <RightSection data={a} kId="aboutus" key={a.id} />
          ) : (
            <LeftSection data={a} key={a.id} />
          )
        )}

        <div id="services">
          <Services services={services} />
        </div>
        <Ourwork kId="ourwork" our_work={our_work} />
        <OurClient our_clients={our_clients} />
        <Ourteam our_team={our_team} />
      </Container>
    </Wrapper>
  );
}

export default Index;

export const query = graphql`
  {
    attributes {
      hero {
        title
        description
        hero_services {
          id
          title
        }
      }
      about_us {
        title
        id
        description
        media {
          data {
            attributes {
              url
            }
          }
        }
      }
      services {
        description
        title
        main_title
        service_names {
          id
          title
        }
      }
      our_work {
        description
        id
        title
        our_work_media {
          data {
            attributes {
              url
            }
          }
        }
      }
      our_clients {
        our_clients_media {
          data {
            attributes {
              url
            }
            id
          }
        }
      }
      our_team {
        our_clients_media {
          data {
            attributes {
              url
              name
            }
          }
        }
      }
      
    }
  }
`;
