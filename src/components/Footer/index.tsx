import { ReactNode } from "react";
import * as S from "./styles";
import { Textfn } from "../Textfn";
import { SectionContainer } from "../SectionContainer";

export interface IFooterProps {
  footerHtml: string;
}

export function Footer({ footerHtml }: IFooterProps) {
  return (
    <S.Container>
      <SectionContainer>
        <Textfn htmlfn={footerHtml} />
      </SectionContainer>
    </S.Container>
  );
}
