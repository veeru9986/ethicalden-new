import React from "react";
import styled from "styled-components";
import SplitText from "../utils/Split3.min.js";
import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../hooks/useOnScreen";
import "./service.scss"
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
      p{
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
      <div  ref={ref} className={cn("service-wrapper", { "is-reveal": reveal })} >
        <div className="heading">
          <h5 id="para1-text" ref={ref} className={cn({ "is-reveal": reveal })}>Services</h5>
        </div>
        <div className="sub-heading">
          <h2 id="para1-text" ref={ref} className={cn({ "is-reveal": reveal })}>Develop, Exhibit, Secure</h2>
        </div>
        <div className="para">
          <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
            Ethical Den is a digital marketing, and software development company
            that flourished in June 2021 with a promise to create and educate on
            digital infrastructure and cyber hygiene across the world. Ethical
            Den's services include security audit, digital marketing, website
            development, Information , data-driven services, application
            development, and training and certifications on emerging
            technologies like Ethical hacking, Artificial Intelligence, digital
            marketing, etc.
          </p>
        </div>
        <div className="services-names">
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>Cyber Security Services</p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>Web Development</p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>Digital Marketing</p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>Search Engine Optimization</p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>UI/UX Development</p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>Education</p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>Artifical Intelligence</p>
          </div>
          <div className="names">
            <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>Mobile app Development</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
