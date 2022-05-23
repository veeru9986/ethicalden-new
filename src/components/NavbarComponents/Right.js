import React, { useRef } from "react";
import { Link } from "gatsby";
import { mainMenuItems } from "../../constants/menu-item";
import styled from "styled-components";
import { ButtonStyled, LinkStyled } from "../StyledComponents/Wrapper";
import Cart from "../../assets/cart.svg";
import "../navbar.scss"
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

    .menu-links {
      color: var(--white);
    }
  }
`;

const Right = ({ open, setOpen, data }) => {
  console.log(data[0].title);
  return (
    <>
      <UL open={open}>
        {data.map((n) => (
          <li key={n.id}>
            <Link
              className="menu-links"
              activeClassName="menu-links-active"
              to={n.link}
              onClick={() => setOpen(!open)}
            >
              {n.title}
            </Link>
          </li>
        ))}
      </UL>
      <UL>
        <li>
          <ButtonStyled1 to="/sign-in" onClick={() => setOpen(!open)} id="hire-us">
            hire us
          </ButtonStyled1>
        </li>
      </UL>
    </>
  );
};

export default Right;
