import styled, { css } from "styled-components";

interface IProps {
  background?: string;
}

export const Wrapper = styled.div<IProps>`
  ${({ background }) => css`
    background: ${background};
  `}
`;
