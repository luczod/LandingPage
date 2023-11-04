import styled, { DefaultTheme, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const HtmlWrap = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xl} 0;
  `}
`;
