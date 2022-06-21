import React from "react";
import styled from "styled-components";
import { Wrapper } from "./StyledComponents/Wrapper";
import Logo from "../assets/logo.svg";
import { footerNavigationItems } from "../constants/footer-item";
import { Link } from "gatsby";
import HireUs from "./HireUs";
import { useStaticQuery, graphql } from "gatsby";

const FooterWrapper = styled(Wrapper)``;

const Container = styled.div`
  grid-area: auto/2/auto/3;
  @media (min-width: 1700px) {
    width: 80%;
  }
`;
function Footer({ kId }) {
  const data = useStaticQuery(graphql`
    {
      attributes {
        phone
        email
        footer {
          title
          sub_title
          services {
            id
            title
          }
        }
        description
      }
    }
  `);

  const { footer, phone, email, description } = data.attributes;
  return (
    <FooterWrapper>
      <Container>
        <HireUs
          kId={kId}
          footer={footer}
          phone={phone}
          email={email}
          description={description}
        />
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

// phone
// email
// footer {
//   title
//   sub_title
//   services {
//     id
//     title
//   }
// }
// description
