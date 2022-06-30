import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  .heading {
    h2 {
      color: var(--black);
      font-weight: var(--xheavyWeight);
    }
  }
  .second_wrapper {
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    flex-wrap: wrap;
    .second_section {
      display: flex;
      flex-direction: column;

      span {
        font-size: var(--span);
        font-weight: var(--mediumWeight);
        color: #1a1a1a5e;
        text-transform: uppercase;
      }

      p {
        font-weight: var(--xmediumWeight);
        color: #000;
        font-size: var(--span);
        line-height: 28px;

      }
    }
  }
  .third_wrapper{
    p{
        color: var(--black);
    }
  }
`;

function Proposal() {
  return (
    <Container>
      <div className="heading">
        <h2>
          Our proposal for
          <br />a Company or Client Name
        </h2>
      </div>
      <div className="second_wrapper">
        <div className="second_section">
          <span>Agency</span>
          <p>Ethical Den</p>
        </div>
        <div className="second_section">
          <span>CLient</span>
          <p>Lorem Ipsum</p>
        </div>
        <div className="second_section">
          <span>Role</span>
          <p>social media, Branding</p>
        </div>
      </div>
      <div className="third_wrapper">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
          mattis a purus morbi gravida enim. Auctor consequat quisque vitae
          turpis felis, pretium egestas. Enim vitae lorem eleifend tortor
          adipiscing. Purus ac diam integer in egestas ac. Ullamcorper orci diam
          pretium dignissim erat feugiat enim. Felis pulvinar nisi, nibh est
          fusce dolor posuere. Nibh facilisi morbi egestas mi eu rhoncus, amet
          quis.
        </p>
        <p>
        Pretium condimentum aliquam auctor commodo. Pellentesque
          pharetra id risus arcu. Viverra in ultrices donec viverra consequat,
          eu enim, ut. Cras morbi ornare mattis pulvinar eleifend orci. Libero
          lacus vestibulum diam erat tincidunt aliquam sed laoreet. Integer
          tellus ullamcorper scelerisque quisque tincidunt eget odio ipsum
          justo. Adipiscing quam vel nunc consectetur nisl dictum.
        </p>
      </div>
    </Container>
  );
}

export default Proposal;
