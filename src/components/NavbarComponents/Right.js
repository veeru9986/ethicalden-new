import React, { useRef } from "react";
import { Link } from "gatsby";
import { mainMenuItems } from "../../constants/menu-item";
import styled from "styled-components";
import { ButtonStyled, LinkStyled } from "../StyledComponents/Wrapper";
import LocomotiveScroll from "locomotive-scroll";
import "../navbar.scss";

const ButtonStyled1 = styled(ButtonStyled)`
  min-width: 100px;
  padding: 1rem 3rem;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .menu-links {
    text-decoration: none;
    color: var(--white);
    font-weight: 500;
    font-size: 20px;
    /* identical to box height */
    transition: 0.3s ease-in-out;
    color: var(--white);
    font-weight: var(--xmediumWeight);
    cursor: pointer;
  }
  .menu-links:hover {
    background: var(--background);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  /* .menu-links-active {
    color: var(--medBlue);
    text-decoration: underline;
    text-decoration-color: var(--medBlue);
    text-decoration-thickness: 2px;
  } */

  li {
    padding: 18px 20px;
    text-transform: lowercase;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--black);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    padding-top: 6.5rem;
    transition: transform 0.3s ease-in-out;
    padding-left: 0;
    z-index: 10;
    margin-top: 0;

    .menu-links {
      color: var(--white);
    }
  }
`;

const Right = ({ open, setOpen, data }) => {
  console.log(data[0].title);
  const handleClick = (title) => {
    const newTitle = title.split(" ").join('')
    const scrollEl = document.querySelector("#main-container");
    let locomotive = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smoothMobile: true,
      getDirection: true,
      touchMultiplier: 2.5,
      lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
      multiplier: 1.4, // Effect Multiplier
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smoothMobile: true,
      smartphone: {
        smooth: true,
        breakpoint: 767,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
      },
      class: "is-reveal",
    });
    const slider = document.querySelector(`#${newTitle}`);
    var scrollToHere = slider.offsetTop;
    locomotive.scrollTo(scrollToHere, 0, 0);
    setOpen(!open)
  };
  return (
    <>
      <UL open={open}>
        {data.map((n, id) => (
          <li key={n.id}>
            <a
              className={`menu-links`}
              activeClassName="menu-links-active"
              onClick={() => handleClick(n.title)}
            >
              {n.title}
            </a>
          </li>
        ))}
      </UL>
      <UL>
        <li>
          <ButtonStyled1
            to="/sign-in"
            onClick={() => setOpen(!open)}
            id="hire-us"
          >
            hire us
          </ButtonStyled1>
        </li>
      </UL>
    </>
  );
};

export default Right;
