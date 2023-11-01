import styled, { DefaultTheme, css } from "styled-components";
type OnlyKeys = keyof typeof titleSize;
interface ISProps {
  colorDark: boolean;
  size: OnlyKeys;
  upperTitle?: boolean;
}

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.md};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.lg};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xl};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhg};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xl};
  }
`;

export const Title = styled.h1<ISProps>`
  ${({ theme, size, upperTitle, colorDark }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)};
    text-transform: ${upperTitle ? "uppercase" : "none"};
  `}
`;
