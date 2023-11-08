import styled, { DefaultTheme, css } from "styled-components";

interface IPros {
  background: boolean;
}

const containerBgActivate = (theme: DefaultTheme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.section<IPros>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    border-bottom: 0.2rem solid ${theme.colors.mediumGray};
    ${background && containerBgActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
