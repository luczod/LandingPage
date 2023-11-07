import styled, { css } from "styled-components";
import { Container as TextComponent } from "../Textfn/styles";

interface IPros {
  open?: boolean;
}

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
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
  `}
`;

export const GridItem = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 1rem;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;

export const ModalImg = styled.div`
  ${({ theme }) => css`
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 0.3); /* color-Black w/ opacity */
    border-radius: 1rem;

    & > span {
      position: fixed;
      cursor: pointer;
      top: 4rem;
      right: 2rem;
      color: ${theme.colors.secondaryColor};
      font-size: ${theme.font.sizes.hg};
      &::hover {
        color: ${theme.colors.white};
      }
      @media only screen and (max-width: 768px) {
        left: 1rem;
      }
    }

    & > img {
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;
      border-radius: 1rem;
      /* 100% Image Width on Smaller Screens */
      @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 0.8rem;
      }
    }
    & > div {
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;
      text-align: center;
      font-size: ${theme.font.sizes.md};
      color: ${theme.colors.white};
      padding: 10px 0;
      height: 150px;
    }
  `}
`;
