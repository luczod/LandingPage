import styled, { DefaultTheme, css } from "styled-components";
import { Container as SectionContainer } from "../SectionContainer/styles";
import { Title as Heading } from "../Heading/styles";

interface IProps {
  $visible: boolean;
}

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.header<IProps>`
  ${({ theme, $visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    transition: all 300ms ease-in-out;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.mediumGray};

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${$visible && menuVisible()}

      > ${SectionContainer} {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.lg};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20rem;
    margin-right: 20rem;

    @media ${theme.media.lteMedium} {
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      min-height: 100vh;
      height: 100%;
      overflow-y: auto;
      padding: ${theme.spacings.xxl} 0;
      cursor: pointer;
    }
  `}
`;

export const Btn = styled.button<IProps>`
  ${({ theme, $visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 3rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;
    pointer-events: ${$visible ? "none" : "all"};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      cursor: pointer;
      padding-top: 2px;
      padding-left: 6px;
      padding-right: 6px;
    }
  `}
`;
