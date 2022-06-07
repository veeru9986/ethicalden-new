import React from "react";
import styled from "styled-components";
import Facebook from "../assets/facebook.svg";
import Behnace from "../assets/behance.svg";
import Insta from "../assets/insta.svg";
import SplitText from "../utils/Split3.min.js";
import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../hooks/useOnScreen";
import "./service.scss";

const Wrapper = styled.div`
  margin-top: 9rem;
  display: grid;
  grid-template-columns: 2fr 1fr;

  .grid-1-wrapper {
    grid-area: auto/1/auto/2;
    padding-bottom: 5rem;
    padding-right: 2.5rem;
    @media (max-width: 479px) {
      grid-area: auto/1/auto/3;
    }
    .sub-heading,
    .services {
      margin-top: 3rem;
      overflow: hidden;
    }
    h5 {
      text-transform: uppercase;
      letter-spacing: var(--letterSpacing);
      opacity: 0;

      div {
        opacity: 1;
        transform: translateY(0px);
      }
      &.is-reveal {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    h2 {
      background: var(--background);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-transform: uppercase;
      opacity: 0;
      font-weight: 700;

      @media (max-width: 479px) {
        font-size: 36px;
      }
    }
    .services {
      .services-names {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;

        .selected-services {
          background: var(--background);
          color: var(--black);
          transition: all 0.2s ease;
        }
        .names {
          margin-right: 1.5rem;
          opacity: 0;
          div {
            opacity: 1;
          }
          &.is-reveal {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      }
      p {
        border: 1.5px solid #fbfbfb;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        padding: 0.8rem 1.5rem;
        font-size: 0.938rem;
        cursor: pointer;
        outline: none;
        @media (max-width: 479px) {
          font-size: 13px;
        }
      }
    }

    .form-wrapper {
      display: flex;
      width: 100%;
      margin-top: 3rem;
      button {
        padding: 1rem;
        min-width: 150px;
        border-image-source: var(--background);
        border-width: 2px;
        border-style: solid;
        font-size: 1rem;
        color: var(--white);
        border-image-slice: 1;
        outline: none;
        background: transparent;
        border-radius: 25px;
        margin-top: 3rem;
        cursor: pointer;
      }

      form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      input {
        width: 100%;
        border: 0;
        border-bottom: 1.5px solid #fbfbfb;
        outline: 0;
        font-size: 20px;
        color: var(--white);
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
        @media (max-width: 479px) {
          margin-bottom: 1rem;
        }
      }

      input:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #11998e, #38ef7d);
        border-image-slice: 1;
      }

      input::placeholder {
        font-size: 20px;
        text-transform: uppercase;
        color: var(--white);
        font-family: var(--family);
        letter-spacing: var(--letterSpacing);
        @media (max-width: 479px) {
          font-size: 17px;
        }
      }

      .project-input {
        width: 100%;
        margin-top: 3.5rem;
        @media (max-width: 479px) {
          margin-top: 1rem;
        }
      }
      .name-input {
        margin-right: 1rem;
      }
      .email-input,
      .name-input {
        width: 49%;
        position: relative;

        @media (max-width: 479px) {
          width: 100%;
        }
      }
    }
  }
  .grid-2-wrapper {
    grid-area: auto/2/auto/3;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    @media (max-width: 479px) {
      grid-area: auto/1/auto/3;
      padding-left: 0;
    }
    .email {
      p {
        opacity: 0;
        div {
          opacity: 1;
        }
        &.is-reveal {
          opacity: 1;
          transform: translateY(0px);
        }
        @media (max-width: 479px) {
          font-size: 22px;
          font-weight: 400;
        }
      }
    }
    h5 {
      text-transform: uppercase;
      letter-spacing: var(--letterSpacing);
      opacity: 0;
      div {
        opacity: 1;
      }
      &.is-reveal {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    h6 {
      color: var(--white);
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      /* identical to box height, or 140% */

      letter-spacing: 0.01em;
      opacity: 0;
      div {
        opacity: 1;
      }
      &.is-reveal {
        opacity: 1;
        transform: translateY(0px);
      }
      @media (max-width: 479px) {
        font-size: 16px;
      }
    }
    .details {
      p {
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */

        letter-spacing: 0.01em;
        opacity: 0;
        div {
          opacity: 1;
        }
        &.is-reveal {
          opacity: 1;
          transform: translateY(0px);
        }
        @media (max-width: 479px) {
          font-size: 1rem;
        }
        .company-details {
          h6 {
            opacity: 0;
            div {
              opacity: 1;
            }
            &.is-reveal {
              opacity: 1;
              transform: translateY(0px);
            }
            @media (max-width: 479px) {
              font-size: 16px !important;
            }
          }
        }
      }
    }
    .follow-wrapper {
      margin-top: 4.5rem;

      .social-icons {
        display: flex;
        margin-top: 1.5rem;
      }
      a {
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          opacity: 1;
        }
        &.is-reveal {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      svg {
        margin-right: 1rem;
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
  }
`;

function HireUs() {
  const ref = React.useRef();
  const [reveal, setReveal] = React.useState(false);
  const [selectText, setSelectText] = React.useState("");
  const onScreen = useOnScreen(ref);

  React.useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);
  React.useEffect(() => {
    const split = new SplitText("#footer-1", {
      type: "lines",
    });
    gsap.from(split.lines, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power2",
    });
    gsap.from("#footer-1-text", {
      y: 70,
      opacity: 0,
      duration: 1.2,
      ease: "power2",
    });
  }, [reveal]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setSelectText(e.target.innerHTML);
  };

  const Pstyle = {
    background: "var(--background)",
    color: "var(--black)",
    transition: "all 0.2s ease",
  };

  return (
    <Wrapper>
      <div className={cn("grid-1-wrapper", { "is-reveal": reveal })} ref={ref}>
        <div className="heading">
          <h5
            id="footer-1-text"
            className={cn({ "is-reveal": reveal })}
            ref={ref}
          >
            Hire Us
          </h5>
        </div>
        <div className="sub-heading">
          <h2
            id="footer-1-text"
            className={cn({ "is-reveal": reveal })}
            ref={ref}
          >
            Work with ethical den
          </h2>
        </div>
        <div className="services">
          <h5 className={cn("footer-1-text", { "is-reveal": reveal })}>
            services
          </h5>
          <div
            className={cn("services-names", { "is-reveal": reveal })}
            ref={ref}
          >
            <div
              className={cn("names", { "is-reveal": reveal })}
              id="footer-1"
              ref={ref}
            >
              <p
                onClick={handleClick}
                role="button"
                className={
                  selectText === "digital marketing" && `selected-services`
                }
              >
                digital marketing
              </p>
            </div>
            <div
              className={cn("names", { "is-reveal": reveal })}
              id="footer-1"
              ref={ref}
            >
              <p
                onClick={handleClick}
                role="button"
                className={
                  selectText === "cyber security" && `selected-services`
                }
              >
                cyber security
              </p>
            </div>
            <div
              className={cn("names", { "is-reveal": reveal })}
              id="footer-1"
              ref={ref}
            >
              <p
                onClick={handleClick}
                role="button"
                className={selectText === "seo" && `selected-services`}
              >
                seo
              </p>
            </div>
            <div
              className={cn("names", { "is-reveal": reveal })}
              id="footer-1"
              ref={ref}
            >
              <p
                onClick={handleClick}
                role="button"
                className={selectText === "branding" && `selected-services`}
              >
                branding
              </p>
            </div>
            <div
              className={cn("names", { "is-reveal": reveal })}
              id="footer-1"
              ref={ref}
            >
              <p
                onClick={handleClick}
                role="button"
                className={selectText === "ui/ux" && `selected-services`}
              >
                ui/ux
              </p>
            </div>
            <div
              className={cn("names", { "is-reveal": reveal })}
              id="footer-1"
              ref={ref}
            >
              <p
                onClick={handleClick}
                role="button"
                className={
                  selectText === "web development" && `selected-services`
                }
              >
                web development
              </p>
            </div>
            <div
              className={cn("names", { "is-reveal": reveal })}
              id="footer-1"
              ref={ref}
            >
              <p
                onClick={handleClick}
                role="button"
                className={
                  selectText === "social media marketing" && `selected-services`
                }
              >
                social media marketing
              </p>
            </div>
          </div>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="name-input">
              <input type="name" placeholder="name" required />
            </div>
            <div className="email-input">
              <input type="email" placeholder="email" required />
            </div>
            <div className="project-input">
              <input type="text" placeholder="project details" required />
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
      <div className="grid-2-wrapper">
        <div>
          <div className="heading">
            <h5 id="footer-1-text" className={cn({ "is-reveal": reveal })}>
              Contacts
            </h5>
          </div>
          <div className="email">
            <p id="footer-1" className={cn({ "is-reveal": reveal })}>
              hello@ethicalden.com
            </p>
          </div>
          <div className="email">
            <p id="footer-1" className={cn({ "is-reveal": reveal })}>
            +91 9547578920
            </p>
          </div>
          <div className="follow-wrapper">
            <h5 id="footer-1-text" className={cn({ "is-reveal": reveal })}>
              Follow
            </h5>
            <div className="social-icons">
              <a href="https://www.instagram.com/ethical.den/?utm_medium=copy_link">
                <Insta />
              </a>
              <a href="https://www.facebook.com/ethicalden">
                <Facebook />
              </a>
              <a href="https://www.behance.net/Realethicalden">
                <Behnace />
              </a>
            </div>
          </div>
        </div>

        <div className="details">
          <p id="footer-1" className={cn({ "is-reveal": reveal })}>
            When you choose to work with a company, you're looking for a
            relationship based on trust and respect. We're not just a vendor,
            we're your partner.
          </p>
          <div className="company-details">
            <h6 id="footer-1" className={cn({ "is-reveal": reveal })}>
              © 2022, Ethical Den, all rights reserved
            </h6>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default HireUs;
