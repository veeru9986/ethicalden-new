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

  .loader_bg {
    position: fixed;
    background: #1a1a1a;
    width: 100%;
    height: 100%;
  }

  .loader_bg_color_black {
    position: fixed;
    background: #1a1a1a;
    width: 100%;
    height: 100%;
  }

  .loader_bg_color {
    position: fixed;
    background: #b4e851;
    width: 100%;
    height: 100%;
  }

  .loader {
    color: #ffff;
    font-size: 3rem;
    font-weight: 700 !important;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 18rem;

    @media (max-width: 479px){
      font-size: 2rem;
    }
  }
`;

function Preloader() {
  // POST PRE LOADER
  const loaderText = baffle(".loader");
  loaderText.set({
    character: "",
    speed: 80,
  });
  const green_bg = () => {
    gsap.to(".loader_bg_color_black", {
      duration: 1,
      ease: "power4.out",
      x: -2000,
    });

    gsap.to(".loader_bg_color", {
      duration: 1.5,
      ease: "power4.out",
      x: -2000,
      delay: 0.5,
    });
  };

  React.useEffect(() => {
    loaderText.start();
    loaderText.reveal(1000);

    setTimeout(green_bg, 1000);
  }, [loaderText]);

  return (
    <Container>
      <div class="loader_bg">
        <div class="loader">ETHICAL DEN</div>
      </div>
      <div class="loader_bg_color">
        <div class="loader_bg_color_black"></div>
      </div>
    </Container>
  );
}

export default Preloader;
