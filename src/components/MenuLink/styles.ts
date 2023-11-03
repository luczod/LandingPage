import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.sm};
    padding: ${theme.spacings.sm};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0.8rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
