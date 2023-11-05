import styled, { DefaultTheme, css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    position: fixed;
    right: 3rem;
    bottom: 2rem;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    opacity: 0.8;
  `}
`;
