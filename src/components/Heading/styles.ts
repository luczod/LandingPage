import styled, { DefaultTheme, css } from "styled-components";
// import { themefn } from "../../styles/themefn";
type OnlyKeys = keyof typeof titleSize;
interface ISProps {
  colorDark: boolean;
  size: OnlyKeys;
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
  `,
};

/* const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`; */

export const Title = styled.h1<ISProps>`
  ${({ theme, size, colorDark }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)};
  `}
`;
