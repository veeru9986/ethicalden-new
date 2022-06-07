import gsap from "gsap";
import React from "react";
import styled from "styled-components";
import baffle from "baffle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* PRE LOADER  */

  /* PRE LOADER  */

  .loader_bg {
    position: fixed;
    z-index: 99;
    background: #1a1a1a;
    width: 100%;
    height: 100%;
  }

  .loader_bg_color_black {
    position: fixed;
    z-index: 9;
    background: #1a1a1a;
    width: 100%;
    height: 100%;
  }

  .loader_bg_color {
    position: fixed;
    z-index: 9;
    background: #b4e851;
    width: 100%;
    height: 100%;
  }

  .loader {
    color: #ffff;
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: 700 !important;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 18rem;
  }
`;

function Preloader() {
  // POST PRE LOADER

  const green_bg = () => {
    gsap.to(".loader_bg", {
      opacity: 0,
      zIndex: -1,
      background: "none",
    });
    gsap.to(".loader_bg_color_black", {
      duration: 1,
      ease: "power4.out",
      x: -2000,
      delay: 0.5,
    });

    gsap.to(".loader_bg_color", {
      duration: 1.5,
      ease: "power4.out",
      x: -2000,
      delay: 1,
    });
  };

  React.useEffect(() => {
    const loaderText = baffle(".loader");
    loaderText.set({
      character: "",
      speed: 80,
    });
    loaderText.start();
    loaderText.reveal(2500);
    setTimeout(green_bg, 2000);
  }, []);

  return (
    <Container>
      <div className="loader_bg">
        <div className="loader">ETHICAL DEN</div>
      </div>
      <div className="loader_bg_color">
        <div className="loader_bg_color_black"></div>
      </div>
    </Container>
  );
}

export default Preloader;
