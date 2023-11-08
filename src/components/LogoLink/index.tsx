import * as S from "./styles";
import { Heading } from "../Heading";
import { apiUrl } from "../../utils/endpoint";

export interface ILogoLinkProps {
  srcImg?: string;
  text?: string;
  link: string;
}

export function LogoLink({ text, srcImg = "", link }: ILogoLinkProps) {
  return (
    <Heading size="small" upperTitle>
      <S.Container href={link}>
        {!!srcImg && <img src={apiUrl + srcImg} alt={text} />}
        {!srcImg && text}
      </S.Container>
    </Heading>
  );
}
