import React from "react";
import styled from "styled-components";
import SplitText from "../utils/Split3.min.js";
import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../hooks/useOnScreen";
import "./service.scss";
const Wrapper = styled.div`
  margin-top: 9rem;

  .heading {
    overflow: hidden;
    h5 {
      text-transform: uppercase;
      letter-spacing: var(--letterSpacing);
      opacity: 0;
    }
  }
  .sub-heading {
    margin-top: 3rem;
    overflow: hidden;
    h2 {
      background: var(--background);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-transform: capitalize;
      opacity: 0;
      font-weight: 700;
      div {
        opacity: 1;
      }

      @media (max-width: 479px) {
        font-size: 36px;
      }
    }
  }
  .para {
    p {
      line-height: 32px;
      width: 70%;
      opacity: 0;
      div {
        opacity: 1;
      }

      @media (max-width: 479px) {
        width: 100%;
      }
    }
  }
  .services-names {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2rem;
    .names {
      min-width: 300px;
      p {
        opacity: 0;
        div {
          opacity: 1;
        }
      }
    }
  }
`;

function Services() {
  const ref = React.useRef();
  const [reveal, setReveal] = React.useState(false);

  const onScreen = useOnScreen(ref);

  React.useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  React.useEffect(() => {
    const split = new SplitText("#para", {
      type: "lines",
    });

    gsap.from(split.lines, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power2",
      onComplete: () => split.revert(),
    });
    gsap.from("#para1-text", {
      y: 60,
      opacity: 0,
      ease: "power2",
      duration: 1.2,
    });
  }, [reveal]);
  return (
    <Wrapper data-scroll>
      <div ref={ref} className={cn("service-wrapper", { "is-reveal": reveal })}>
        <div className="heading">
          <h5 id="para1-text" ref={ref} className={cn({ "is-reveal": reveal })}>
            Services
          </h5>
        </div>
        <div className="sub-heading">
          <h2 id="para1-text" ref={ref} className={cn({ "is-reveal": reveal })}>
            Develop, Exhibit, Secure
          </h2>
        </div>
        <div className="para">
          <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
            Welcome to Ethical Den - The Strategic Digital Company. We are a
            brand and digital consultancy based in India, partnering globally
            with leaders across industries to build future products, services,
            and brands. Working for the unknown since 2021. Our services span a
            wide variety of audiences and capabilities, but all of them are
            rooted in inspiring ideas, human connection, and writing your
            brand's future. The world is changing fast. We help you keep up
          </p>
        </div>
        <div className="services-names">
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Cyber Security Services
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Web Development
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Digital Marketing
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Search Engine Optimization
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              UI/UX Development
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Branding
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Artifical Intelligence
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Mobile app Development
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Film Production{" "}
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Video Editing
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Software Solutions
            </p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
              Engagement Campaigns
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
