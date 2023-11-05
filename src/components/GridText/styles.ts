import styled, { css } from "styled-components";
import { Title as ItemTitle } from "../Heading/styles";
import { Container as TextComponent } from "../Textfn/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.lg};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.lg};
    overflow: hidden;
    width: 100%;
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridItem = styled.article`
  ${({ theme }) => css`
    ${ItemTitle} {
      position: relative;
      left: 5rem;
    }

    ${ItemTitle}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.font.sizes.xhg};
      top: -2rem;
      left: -5rem;
      transform: rotate(8deg);
    }
  `}
`;
