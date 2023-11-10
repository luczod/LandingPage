import * as S from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { Textfn } from "../Textfn";
import { apiUrl } from "../../utils/endpoint";

export interface IGridTwoProps {
  title: string;
  description: string;
  srcImg: string;
  bg?: boolean;
}

export function GridTwo({
  title,
  srcImg,
  description,
  bg = true,
}: IGridTwoProps) {
  return (
    <SectionBackground background={bg}>
      <S.Container>
        <S.TextColumn>
          <Heading upperTitle colorDark={!bg}>
            {title}
          </Heading>
          <Textfn htmlfn={description} />
        </S.TextColumn>
        <S.ImgWrap>
          <S.Imgfn src={apiUrl + srcImg} alt="img" />
        </S.ImgWrap>
      </S.Container>
    </SectionBackground>
  );
}
