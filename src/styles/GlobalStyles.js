import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --family: "Quasimoda" !important;
    --background: linear-gradient(135.72deg, #09E5E5 -12.91%, #12E6DC -0.28%, #2BEAC5 20.76%, #55F1A0 48.11%, #8EFA6D 79.68%, #A8FF57 92.3%);
    --heavyWeight: 800;
    --xheavyWeight: 700;
    --mediumWeight: 600;
    --xmediumWeight: 500;
    --lightWeight: 400;
    --xlightWeight: 300;
    --transMed: 0.3s;
    --transSlow: 0.5s;
    --greenColor: #a8ff57;
    --lightBlue: #8CD1FF;
    --medBlue: #0071BC;
    --darkBlue: #005187;
    --lightPink: #EB9B9E;
    --lightRed : #C1272D;
    --darkRed: #7A191C;
    --lineHeight: 112%;
    --black : #1A1A1A;
    --white: #fbfbfb;
    --h1: 4.375rem;
    --letterSpacing: 0.1rem;
    --h2: 3.5rem;
    --h3: 3rem;
    --h4: 2rem;
    --h5: 1.5rem;
    --p1: 1.375rem;
    --p2: 1.375rem;
    --p3: 0.625rem;
    --p4: 0.875rem;
    --mt: 2rem;
    --gap: 2rem;
    --mt1: 8.48rem;
    --tmt1: 5rem;


    @media (max-width: 991px) {
      --h1: 3rem;
      --h2: 2.125rem;
      --h3: 1.50rem;
      --h4: 1.125rem;
      --p1: 1rem;
      --p2: 0.875rem;
      --p3: 0.75rem;
      --p4: 0.7rem;
      --mt: 1.7rem;
      --gap: 2rem;
      --mt1: 6.25rem;
      --signh2: 1.75rem;
      --tmt1: 3rem;


    }
    @media (max-width: 479px) {
      --h1: 1.875rem;
      --h2: 1.5rem;
      --h3: 1.25rem;
      --h4: 1.375rem;
      --h5: 1.375rem;

      --p1: 1.063rem;
      --p2: 0.875rem;
      --p3: 0.75rem;
      --p4: 0.7rem;
      --mt: 1rem;
      --gap: 2rem;
      --mt1: 4.375rem;
      --tmt1: 2rem;

    }
  }
* {
    box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
  height: auto !important;

}
body {
  font-family: "Quasimoda";
   margin: 0;
   background: var(--black);
   height: auto !important;
}
#h1{
  font-family: "Quasimoda";
}
/* ::-webkit-scrollbar{
  width: 8px;
}
::-webkit-scrollbar-track{
  background: #f1f1f1;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb{
  background: #002f54;
  border-radius: 50px;
} */
  
`;
export default GlobalStyles;
