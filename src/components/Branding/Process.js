import React from "react";
import styled from "styled-components";
import branding from "../../images/branding.png";
import External from "../../assets/codicon_link-external.svg";

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  .bg_image {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 600px;
  }
  .main_wrapper {
    display: grid;
    grid-template-columns: 5% 1fr 5%;
    width: 100%;
    margin-top: 3rem;

    .section {
      grid-area: auto/2/auto/3;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      .heading {
        h3 {
          color: black;
          font-weight: var(--xheavyWeight);
        }
      }
      p {
        color: black;
        font-size: var(--p2);
        font-weight: var(--lightWeight);
        @media (max-width: 767px) {
          font-size: var(--span);
          line-height: 24px;
        }
      }
      .external_link {
        display: flex;
        align-items: center;
        a {
          outline: none;
          margin-left: 1rem;
        }
      }
    }
  }
`;

function Process() {
  return (
    <Container>
      <div
        className="bg_image"
        style={{ backgroundImage: `url(${branding}) ` }}
      />
      <div className="main_wrapper">
        <div className="section">
          <div className="heading">
            <h3>The Process</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
            mattis a purus morbi gravida enim. Auctor consequat quisque vitae
            turpis felis, pretium egestas. Enim vitae lorem eleifend tortor
            adipiscing. Purus ac diam integer in egestas ac. Ullamcorper orci
            diam pretium dignissim erat feugiat enim. Felis pulvinar nisi, nibh
            est fusce dolor posuere. Nibh facilisi morbi egestas mi eu rhoncus,
            amet quis.{" "}
          </p>
          <p>
            Pretium condimentum aliquam auctor commodo. Pellentesque pharetra id
            risus arcu. Viverra in ultrices donec viverra consequat, eu enim,
            ut. Cras morbi ornare mattis pulvinar eleifend orci. Libero lacus
            vestibulum diam erat tincidunt aliquam sed laoreet. Integer tellus
            ullamcorper scelerisque quisque tincidunt eget odio ipsum justo.
            Adipiscing quam vel nunc consectetur nisl dictum
          </p>
          <div className="external_link">
            <p>wwww.ethicalden.com</p>
            <a target="_blank" href="https://www.ethicalden.com">
              <External />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Process;
