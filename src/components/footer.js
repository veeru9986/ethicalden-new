import React from "react";
import styled from "styled-components";
import { Wrapper } from "./StyledComponents/Wrapper";
import Logo from "../assets/logo.svg";
import { footerNavigationItems } from "../constants/footer-item";
import { Link } from "gatsby";
import HireUs from "./HireUs";

const FooterWrapper = styled(Wrapper)``;

const Container = styled.div`
  grid-area: auto/2/auto/3;
  @media (min-width: 1700px) {
    width: 80%;
  }
`;
function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <HireUs />
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
