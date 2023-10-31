import styled, { css } from "styled-components";
// import { themefn } from "../../styles/themefn";

interface IProps {
  light: boolean;
}

/* export const Title = styled.h1<IProps>`
  color: ${(props) =>
    props.light ? themefn.colors.white : themefn.colors.primaryColor};
`; */

export const Title = styled.h1<IProps>`
  ${({ theme, light }) => css`
    color: ${light ? theme.colors.secondaryColor : theme.colors.primaryColor};
  `}
`;
