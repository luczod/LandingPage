import { ReactNode } from "react";
import * as S from "./styles";

export interface ISectionContainerProps {
  children: ReactNode;
}

export function SectionContainer({ children }: ISectionContainerProps) {
  return <S.Container>{children}</S.Container>;
}
