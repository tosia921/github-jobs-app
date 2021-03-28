import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
      //Primary Colors
    --Violet: #9e7f66;
    --LightViolet: #939BF4;
    --VeryDarkBlue: #19202D;
    --Midnight: #121721 ;
      //Secondary Colors
    --White: #FFFFFF;
    --LightGrey: #F4F6F8;
    --Gray: #9DAEC2;
    --DarkGrey: #6E8098 ;
  }

  html {
    background-color: var(--white);
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    box-sizing: border-box;
    background-color: var(--LightGrey);
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
