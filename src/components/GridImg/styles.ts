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
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0 0 0 / 0.3); /* color-Black w/ opacity */
    & > span {
      position: fixed;
      cursor: pointer;
      top: 15px;
      right: 35px;
      color: ${theme.colors.secondaryColor};
      font-size: ${theme.font.sizes.hg};
      &::hover {
        color: ${theme.colors.white};
      }
      @media only screen and (max-width: 768px) {
        right: 16px;
      }
    }

    & > img {
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;
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