import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    color: inherit;
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 1rem;
    > img {
      max-height: 2.5rem;
    }
  `}
`;
