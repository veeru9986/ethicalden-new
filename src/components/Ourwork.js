import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

const Wrapper = styled.div`
  margin-top: 9rem;

  .heading {
    grid-area: auto/1/auto/3;
    h5 {
      text-transform: uppercase;
    }
  }
  .our-clients-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 525px 100px 100px 100px 525px 100px;
    grid-column-gap: 14rem;
    margin-top: 3rem;
    @media (max-width: 479px) {
      grid-template-rows: auto;
    }
    h4 {
      font-size: 1.75rem;
      font-weight: var(--mediumWeight);
      @media (max-width: 479px) {
        font-size: 1.25rem;
      }
    }
    span {
      font-size: 1.063rem;
      font-weight: var(--xmediumWeight);
      @media (max-width: 479px) {
        font-size: 0.875rem;
      }
    }
    .image-0,
    .image-1,
    .image-2,
    .image-3 {
      width: 480px;
    }
    .image-0 {
      background-position: center;
      background-size: cover;
      grid-area: 1/1/3/2;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-1 {
      background-position: center;
      background-size: cover;
      grid-area: 2/2/4/3;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-2 {
      background-position: center;
      background-size: cover;
      grid-area: 5/1/7/2;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-3 {
      background-position: center;
      background-size: cover;
      grid-area: 6/2/8/3;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-4 {
      background-position: center;
      background-size: cover;
      grid-area: 6/2/8/3;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-5 {
      background-position: center;
      background-size: cover;
      grid-area: 6/2/8/3;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-6 {
      background-position: center;
      background-size: cover;
      grid-area: 6/2/8/3;
      border-radius: 7.84528px;
      padding: 2rem;
    }
    .image-0,
    .image-1,
    .image-2,
    .image-3,
    .image-4,
    .image-5,
    .image-6 {
      transition: transform 500ms ease-in-out 25ms;

      &:hover {
        transform: skewY(2.1deg);
      }
    }
    @media (max-width: 479px) {
      .image-0,
      .image-1,
      .image-2,
      .image-3,
      .image-4,
      .image-5,
      .image-6 {
        width: auto;
        grid-area: auto/1/auto/3;
        height: 450px;
        margin-bottom: 2.5rem;
      }
    }
  }
  .see-all-our-work {
    display: flex;
    margin-top: 3rem;
    justify-content: flex-end;

    a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: var(--mediumWeight);
      @media (max-width: 479px) {
        font-size: 1rem;
      }
    }
  }
`;

function Ourwork({ kId, our_work }) {
  return (
    <Wrapper>
      <div className="heading" id={kId}>
        <h5>Our work</h5>
      </div>
      <div className="our-clients-wrapper">
        {our_work.map((o, id) => (
          <div
            className={`image-${id}`}
            style={{
              backgroundImage: `url(${o.our_work_media.data.attributes.url})`,
            }}
            key={o.id}
          >
            <h4>{o.title}</h4>
            <div style={{ marginTop: ".5rem" }}>
              <span>{o.description}</span>
            </div>
          </div>
        ))}

        {/* <div className="image-1" style={{ backgroundImage: `url(${image2})` }}>
          <h4>Roaderr</h4>
          <div style={{ marginTop: ".5rem" }}>
            <span>Branding, Web Design</span>
          </div>
        </div>
        <div className="image-2" style={{ backgroundImage: `url(${image3})` }}>
          <h4>Dream Health</h4>
          <div style={{ marginTop: ".5rem" }}>
            <span>Branding , Web Design, UI UX</span>
          </div>
        </div>
        <div className="image-3" style={{ backgroundImage: `url(${image4})` }}>
          <h4>Wonderlite</h4>
          <div style={{ marginTop: ".5rem" }}>
            <span>Branding , Web Design, Social Media Marketing</span>
          </div>
        </div> */}
      </div>
      <div className="see-all-our-work">
        <a href="/under-construction/">See all our work {`>`}</a>
      </div>
    </Wrapper>
  );
}

export default Ourwork;
