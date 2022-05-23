import { createGlobalStyle } from "styled-components";

const TypographyStyles = createGlobalStyle`
#h1{
  font-family: "Quasimoda";
}
 h1{
     font-size: var(--h1);
     font-weight: var(--heavyWeight);
     margin: 0;
     padding: 0;
     color: var(--white);
 }
 h2{
     font-size: var(--h2);
     font-weight: var(--mediumWeight);
     margin: 0;
     padding: 0;
     color: var(--white);

 }
 h3{
     font-size: var(--h3);
     font-weight: var(--mediumWeight);
     margin: 0;
     padding: 0;
     color: var(--white);

 }
 h4{
     font-size: var(--h4);
     font-weight: var(--xmediumWeight);
     margin: 0;
     padding: 0;
     color: var(--white);

 }
 h5{
     font-size: var(--h5);
     font-weight: var(--xmediumWeight);
     margin: 0;
     padding: 0;
     color: var(--white);

 }
 span{
    color: var(--white);

 }

 p{
     font-size: var(--p1);
     font-weight: var(--lightWeight);
     color: var(--white);

 }

 button{
     font-family: "Quasimoda";
 }


  
`;
export default TypographyStyles;
