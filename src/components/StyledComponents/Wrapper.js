import styled from "styled-components";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-top: 0;
  place-items: center;
  overflow: hidden;
`;

export const LinkStyled = styled(Link)`
  min-width: 170px;
  padding: 10px 22px;
  border: 2px solid;
  color: ${(props) => (props.primary ? "#fff" : `#000`)};
  border-color: ${(props) =>
    props.primary ? "transparent" : "var(--white)"};
  background-color: ${(props) => (props.primary ? "var(--lightRed)" : `#fff`)};
  outline: none;
  font-size: 14px;
  font-weight: var(--mediumWeight);
  border-radius: 66px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.primary ? "#fff" : "var(--background)")};
    border-color: ${(props) => (props.primary ? "var(--lightRed)" : "none")};
    color: ${(props) => (props.primary ? "#000" : "#fff")};
  }
`;

export const ButtonStyled = styled.button`
  min-width: 170px;
  padding: 10px 22px;
  border: 2px solid;
  color: ${(props) => (props.primary ? "#fff" : `var(--white)`)};
  border-color: ${(props) => (props.primary ? "transparent" : "var(--white)")};
  background: ${(props) =>
    props.primary ? "var(--lightRed)" : `transparent`};
  outline: none;
  font-size: 1rem;
  font-weight: var(--xmediumWeight);
  border-radius: 66px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;

  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "#fff" : "var(--background) !important")};
    border-color: ${(props) => (props.primary ? "var(--lightRed)" : "none")};
    color: ${(props) => (props.primary ? "#000" : "var(--black)")};
  }
`;
