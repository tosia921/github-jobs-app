import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: 'Kumbh Sans', sans-serif; 
    color: var(--White);
  }
  p, li {
    font-size: 1.6rem;
    font-weight: 400;
    margin: 0;
  }
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0; 
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
  }
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
  }
  a {
    color: var(--VeryDarkBlue);
    text-decoration-color: none;
  }
 
  .center {
    text-align: center;
  }

`;

export default Typography;
