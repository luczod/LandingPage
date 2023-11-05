import { ReactNode } from "react";
import * as S from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { Textfn } from "../Textfn";

export interface IGridTwoProps {
  title: string;
  text: string;
  srcImg: string;
  bg?: boolean;
}

export function GridTwo({ title, srcImg, text, bg = false }: IGridTwoProps) {
  return (
    <SectionBackground background={bg}>
      <S.Container background={bg}>
        <S.TextColumn>
          <Heading variant="h2" upperTitle colorDark={!bg}>
            {title}
          </Heading>
          <Textfn htmlfn={text} />
        </S.TextColumn>
        <S.ImgWrap>
          <S.Imgfn src={srcImg} alt="img" />
        </S.ImgWrap>
      </S.Container>
    </SectionBackground>
  );
}
