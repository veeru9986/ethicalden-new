import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/StyledComponents/Wrapper";
import Facebook from "../assets/facebook.svg";
import Insta from "../assets/insta.svg";
import Behance from "../assets/behance.svg";

const Container = styled.div`
  grid-area: auto/2/auto/3;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .top-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 96px;
    font-weight: var(--heavyWeight);
    text-transform: capitalize;
    background: linear-gradient(
      135.72deg,
      #09e5e5 -12.91%,
      #12e6dc -0.28%,
      #2beac5 20.76%,
      #55f1a0 48.11%,
      #8efa6d 79.68%,
      #a8ff57 92.3%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 48px;
    }
  }
  p {
    text-align: center;
    width: 65%;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    @media (max-width: 767px) {
      font-size: var(--p1);
      width: 90%;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    height: 100%;
  }
  .social-icons {
    display: flex;
    align-items: center;
    @media (max-width: 479px) {
      position: unset;
      margin-top: 3rem;
    }
    a {
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      margin-right: 1rem;

      @media (max-width: 479px) {
        width: 25px;
      }
    }
    a:hover {
      svg,
      path {
        fill: #09e5e5;
      }

      #my-cool-gradient {
        --color-stop: #f12c06;
        --color-bot: #faed34;
      }
    }
  }
  .company-details {
    margin-top: -2rem;
    h6 {
      color: var(--white);
      font-size: 18px;
      margin-top: 0;
      font-weight: 400;
      @media (max-width: 479px) {
        font-size: 16px !important;
      }
    }
  }
`;

function UnderConstruction() {
  const d = new Date();
  let year = d.getFullYear()
  return (
    <Wrapper>
      <Container>
        <div className="top-container">
          <h1>Under construction</h1>
          <p>
            This will be worth the wait. We’re adding the finishing touches. See
            what curiosity is capable of creating. Something may work on paper,
            but that means nothing if it flounders in the real world!
          </p>
        </div>

        <div className="container">
          <div className="social-icons" data-scroll data-scroll-speed="-1.7">
          <a href="https://www.instagram.com/ethical.den/?utm_medium=copy_link">
                <Insta />
              </a>
              <a href="https://www.facebook.com/ethicalden">
                <Facebook />
              </a>
              <a href="https://www.behance.net/ethicalden">
                <Behance />
              </a>
          </div>
          <div className="company-details">
            <h6 id="footer-1">© {year}, Ethical Den, all rights reserved</h6>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default UnderConstruction;
