import React from "react";
import styled from "styled-components";
import SplitText from "../utils/Split3.min.js";
import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../hooks/useOnScreen";

const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;

  .heading {
    overflow: hidden;
  }

  .right-section {
    grid-area: 1/2/2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;

    @media (max-width: 479px) {
      grid-area: 2/1/3/3;
      margin-left: 0;
      margin-top: 1.5rem;
    }

    .para {
      overflow: hidden;
    }
    /* p {
      transform: translate(0, 200px);
      opacity: 0;
      white-space: no-wrap !important;

      &.is-reveal {
        opacity: 1;
      }
    } */
    h4 {
      background: var(--background);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-transform: uppercase;
      opacity: 0;

      div {
        opacity: 1;
      }
      &.is-reveal {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    p {
      font-weight: var(--lightWeight);
      line-height: 37px;
      padding-right: 11rem;
      opacity: 0;
      div {
        opacity: 1;
      }
      &.is-reveal {
        opacity: 1;
        transform: translateY(0px);
      }
      @media (max-width: 479px) {
        padding-right: 1rem;
      }
    }
  }
  .left-section {
    grid-area: 1/1/2/2;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 479px) {
      grid-area: 1/1/2/3;
    }
    .image {
      width: 383px;
      height: 451px;
      display: block;
      img {
        width: 100%;
      }
      @media (max-width: 479px) {
        height: 350px;
        width: 100%;
      }
    }
  }
`;

function RightSection({ data }) {
  const ref = React.useRef();
  const [reveal, setReveal] = React.useState(false);

  const onScreen = useOnScreen(ref);

  React.useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  React.useEffect(() => {
    const split = new SplitText("#left-section-title", {
      type: "lines",
    });

    gsap.from(split.lines, {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2",
    });
    gsap.from("left-section-title1", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power2",
    });
  }, [reveal]);

  return (
    <Wrapper>
      <div className={cn("right-section", { "is-reveal": reveal })} ref={ref}>
        <div className="heading">
          <h4
            id="left-section-title1"
            className={cn({ "is-reveal": reveal })}
            ref={ref}
          >
            {data.title}
          </h4>
        </div>
        <div className="para">
          <p id="left-section-title" className={cn({ "is-reveal": reveal })}>
            {data.description}
          </p>
        </div>
      </div>
      <div className="left-section" data-scroll data-scroll-speed="2">
        <div className="image">
          <img src={data.media.data.attributes.url} alt={data.title} />
        </div>{" "}
      </div>
    </Wrapper>
  );
}

export default RightSection;
