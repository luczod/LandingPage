import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    color: inherit;
    display: flex;
    align-items: center;
    > img {
      max-height: 2.5rem;
    }
  `}
`;
