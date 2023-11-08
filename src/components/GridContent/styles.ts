import styled, { DefaultTheme, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 0;
    margin: 0 auto;
  `}
`;

export const HtmlWrap = styled.div`
  ${({ theme }) => css`
    margin: 0;
  `}
`;
