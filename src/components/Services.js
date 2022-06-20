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

function Services({ kId, services }) {
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
            {services.title}
          </h5>
        </div>
        <div className="sub-heading">
          <h2 id="para1-text" ref={ref} className={cn({ "is-reveal": reveal })}>
            {services.main_title}
          </h2>
        </div>
        <div className="para">
          <p id="para" ref={ref} className={cn({ "is-reveal": reveal })}>
            {services.description}
          </p>
        </div>
        <div className="services-names">
          {services.service_names.map((s) => (
            <div className="names" id={s.id}>
              <p id="para" ref={ref} className={cn({ "is-reveal": reveal })} >
                {s.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
