import styled, { css } from "styled-components";
// import { themefn } from "../../styles/themefn";

interface IProps {
  colorDark: boolean;
}

/* export const Title = styled.h1<IProps>`
  color: ${(props) =>
    props.colorDark ? themefn.colors.white : themefn.colors.primaryColor};
`; */

export const Title = styled.h1<IProps>`
  ${({ theme, colorDark }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
