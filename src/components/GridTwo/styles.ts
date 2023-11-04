import styled, { DefaultTheme, css } from "styled-components";
import { Title } from "../Heading/styles";

interface IProps {
  background: boolean;
}

export const Container = styled.div<IProps>`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.lg};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xl};
    }
  `}
`;

export const TextColumn = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.lg};
      text-align: center;
    }
  `}
`;

export const ImgWrap = styled.div`
  ${({ theme }) => css``}
`;

export const Imgfn = styled.img`
  ${({ theme }) => css``}
`;
