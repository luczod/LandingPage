import styled, { css } from "styled-components";
import { Container as SectionContainer } from "../../components/SectionContainer/styles";
import { Container as Textfn } from "../../components/Textfn/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.2rem solid ${theme.colors.mediumGray};
    a {
      color: inherit;
      text-decoration: none;
    }

    & ${Textfn} {
      font-size: ${theme.font.sizes.sm};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
