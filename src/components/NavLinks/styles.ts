import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    /* flex direction and flex-wrap */
    flex-flow: row wrap;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
