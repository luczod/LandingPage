import { createGlobalStyle } from "styled-components";
//#f4f4f5
export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.lg} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.md} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.md};
    padding: ${({ theme }) => theme.spacings.md};
  }
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

`;
