import { ReactNode } from "react";
import * as S from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { Textfn } from "../Textfn";

export interface IGridContentProps {
  title: string;
  html: string;
  bg?: boolean;
}

export function GridContent({ title, html, bg = false }: IGridContentProps) {
  return (
    <SectionBackground background={bg}>
      <S.Container>
        <Heading upperTitle colorDark={!bg}>
          {title}
        </Heading>
        <S.HtmlWrap>
          <Textfn htmlfn={html} />
        </S.HtmlWrap>
      </S.Container>
    </SectionBackground>
  );
}
