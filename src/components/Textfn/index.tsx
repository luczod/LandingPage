import { ReactNode } from "react";
import * as S from "./styles";

export interface ITextfnProps {
  children: ReactNode;
}

export const Textfn: React.FC<ITextfnProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
