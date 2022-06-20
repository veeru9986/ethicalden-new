import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Facebook from "../assets/facebook.svg";
import Insta from "../assets/insta.svg";
import Behance from "../assets/behance.svg";
import banner from "../images/banner.png";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 2rem;
  place-items: center;
  @media (max-width: 479px) {
    background-position-x: right;
    min-height: 90vh;
  }

  .wrapper-wrapper {
    grid-area: auto/2/auto/3;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    height: 100%;
    overflow: hidden;
    margin-top: 9rem;
    @media (min-width: 1700px) {
      width: 80%;
    }
    @media (max-width: 479px) {
      justify-content: flex-end;
      align-items: unset;
      margin-top: 0;
    }
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;

    #h1 {
      transform: translate(0);
      opacity: 1;
      &.is-reveal {
        opacity: 1;
      }
    }

    h1 {
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
    }
    .scroller {
      position: relative;
      overflow: hidden;
      height: 5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      @media (max-width: 479px) {
        height: 3rem;
      }
    }
    .scroller > span {
      position: absolute;
      top: 0;
      animation: slide 7s infinite;

      @media (max-width: 479px) {
        animation: slide-mobile 7s infinite;
      }
    }
    span {
      font-size: var(--h1);
      font-weight: var(--heavyWeight);
      text-transform: capitalize;
      white-space: pre-line;
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
      line-height: 80px;
      @media (max-width: 479px) {
        line-height: 58px;
      }
    }

    @keyframes slide {
      0% {
        top: 0;
      }
      25% {
        top: -80px;
      }
      50% {
        top: -160px;
      }
      75% {
        top: -240px;
      }
    }
  }
  @keyframes slide-mobile {
    0% {
      top: 0;
    }
    25% {
      top: -60px;
    }
    50% {
      top: -120px;
    }
    75% {
      top: -180px;
    }
  }
  .divider {
    width: 175px;
    height: 10px;
    background-color: var(--white);
    margin: 1rem 0;
  }
  p {
    width: 60%;
    line-height: 37px;
    font-weight: var(--lightWeight);
    /* @media (max-width: 1700px) {
      width: 100%;
    } */
    @media (max-width: 479px) {
      line-height: 22px;
      width: 100%;
    }
  }
  #p {
    transform: translate(0);
    opacity: 1;
    white-space: no-wrap;
    div {
      font-weight: var(--lightWeight);
      line-height: 37px;
      font-size: var(--p1);
      color: var(--white);
      transform: translate(0);
      opacity: 1;
      white-space: no-wrap !important;
    }
    &.is-reveal {
      opacity: 1;
    }
  }
  .social-icons {
    position: absolute;
    bottom: 0;
    display: flex;
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
        fill: var(--greenColor);
      }

      #my-cool-gradient {
        --color-stop: #f12c06;
        --color-bot: #faed34;
      }
    }
  }
`;

function Banner({ hero }) {
  // let container = useRef();
  // useEffect(() => {
  //   new LocomotiveScroll({
  //     el: container,
  //     smooth: true,
  //   });
  // }, []);

  React.useEffect(() => {
    const split = new SplitText("#h1", {
      type: "words",
    });

    gsap.from(split.words, {
      y: 50,
      duration: 1.5,
      opacity: 0,
      delay: 0.5,
      force3D: true,
      stagger: {
        amount: 1,
      },
      ease: "power4.out",
    });
    gsap.from("#p", {
      duration: 1.5,
      y: 80,
      opacity: 0,
      stagger: 0.1,
      ease: "power2",
      transformOrigin: "0% 50% -50",
    });
  }, []);



  return (
    <Wrapper style={{ backgroundImage: `url(${banner}) ` }}>
      <div className="wrapper-wrapper">
        <div className="text-wrapper">
          <h1
            id="h1"
            data-scroll
            data-scroll-speed="3"
            data-scroll-offset="100"
          >
            {hero.title}
          </h1>
          <div className="scroller" data-scroll data-scroll-speed="2">
        
            <span>{hero.hero_services.map(h =>`${h.title}\n` )}</span>
    
          </div>
        </div>
        <div className="divider" />
        <p data-scroll id="p">
          {hero.description}
        </p>
        <div className="social-icons" data-scroll data-scroll-speed="-1.7">
          <a href="https://www.instagram.com/ethical.den/?utm_medium=copy_link">
            <Insta />
          </a>
          <a href="https://www.facebook.com/ethicalden">
            <Facebook />
          </a>
          <a href="https://www.behance.net/Realethicalden">
            <Behance />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
