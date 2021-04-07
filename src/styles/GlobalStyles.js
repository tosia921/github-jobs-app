import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body[data-theme='light'] {
    --color-primary: #5964E0;
    --color-primary-light: #939BF4;
    --bg-color-body: #F4F6F8;
    --bg-color-card: #FFFFFF;
    --color-text-titles: #19202D; 
    --color-text-small: #9DAEC2;
    --color-text-p-tags: #6E8098;
    --color-text-link: #5964E0;
    --color-button-primary: #5964E0;
    --color-button-primary-hover: #939BF4;
    --color-button-secondary: #EEF0FC;  
    --color-button-secondary-hover: #C5C9F4;
    --color-text-link-button-secondary: #5964E0;
    --color-logo: #FFFFFF;   
  }
  body[data-theme='dark'] {
    --color-primary: #5964E0;
    --color-primary-light: #939BF4;
    --bg-color-body: #121721;
    --bg-color-card: #19202D;
    --color-text-titles: #FFFFFF  ; 
    --color-text-small: #9DAEC2;
    --color-text-p-tags: #9DAEC2;
    --color-text-link: #5964E0;
    --color-button-primary: #5964E0;
    --color-button-primary-hover: #939BF4;
    --color-button-secondary: #303642;  
    --color-button-secondary-hover: #535862;
    --color-text-link-button-secondary: #FFFFFF;
    --color-logo: #FFFFFF; 
  }
 
  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  * {
  box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color-body);
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
