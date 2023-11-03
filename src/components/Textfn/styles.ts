import styled, { DefaultTheme, css } from "styled-components";

export const Container = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.md};
  `}
`;
