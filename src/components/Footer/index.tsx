import { ReactNode } from "react";
import * as S from "./styles";
import { Textfn } from "../Textfn";
import { SectionContainer } from "../SectionContainer";

export interface IFooterProps {
  htmlfn: string;
}

export function Footer({ htmlfn }: IFooterProps) {
  return (
    <S.Container>
      <SectionContainer>
        <Textfn htmlfn={htmlfn} />
      </SectionContainer>
    </S.Container>
  );
}
