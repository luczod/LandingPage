import { ReactNode } from "react";
import * as S from "./styles";

export interface ITextfnProps {
  children: ReactNode;
}

export function Textfn({ children }: ITextfnProps) {
  return <S.Container>{children}</S.Container>;
}
