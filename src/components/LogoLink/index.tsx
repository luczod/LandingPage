import { ReactNode } from "react";
import * as S from "./styles";
import { Heading } from "../Heading";

export interface ILogoLinkProps {
  srcImg?: string;
  text?: string;
  link: string;
}

export function LogoLink({ text, srcImg = "", link }: ILogoLinkProps) {
  return (
    <Heading size="small" upperTitle>
      <S.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </S.Container>
    </Heading>
  );
}
