import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Burger from "./NavbarComponents/Burger";
import { Link } from "gatsby";
import "./navbar.scss";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  top: 0;
  z-index: 999;
  /* margin-top: ${({ positionS }) => (positionS ? "2rem" : "0")}; */
  place-items: center;
  padding-top: ${({ positionS }) => (positionS ? "0" : "2rem")};
  position: fixed;
  top: 0;
  .color-change {
    transition: all 0.5s ease-in-out;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 1rem 0;
    svg {
      path {
        fill: var(--black);
      }
    }
  }
  @media (max-width: 767px) {
    margin-top: 1rem;
    padding-top: 0;
  }
`;
const Nav = styled.nav`
  grid-area: auto/2/auto/3;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;

  @media (min-width: 1700px) {
    width: 80%;
  }
  .logo {
    z-index: 11;
    svg {
      @media (max-width: 479px) {
        width: 50px;
      }
    }
  }
`;

const navData = [
  {
    id: 0,
    title: "about us",
    link: "#about-us",
  },
  {
    id: 1,
    title: "services",
    link: "#services",
  },
  {
    id: 2,
    title: "our work",
    link: "#our-work",
  },
  {
    id: 3,
    title: "education",
    link: "#education",
  },
];

function Navbar(props) {
  // console.log(data.strapiNavbar.data.attributes.navbar);
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      console.log(colorChange);
      console.log(window.scrollY);

      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  console.log(colorChange);

  return (
    <Wrapper
      positionS={props.positionS}
      id="color"
      className={colorChange ? "navbar colorChange" : "navbar"}
    >
      <Nav>
        <div className="logo">
          <Link to="/" style={{ display: "flex" }}>
            <Logo className="logo" />
          </Link>
        </div>
        <Burger data={navData} />
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
