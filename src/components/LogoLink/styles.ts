import styled, { css } from "styled-components";

export const Container = styled.a`
  ${() => css`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;

    > img {
      height: 6rem;
      width: 14rem;
    }
  `}
`;
