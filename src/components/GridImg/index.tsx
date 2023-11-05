import { ReactNode } from "react";
import * as S from "./styles";

export interface IGridImgProps {
  children: ReactNode;
}

export function GridImg({ children }: IGridImgProps) {
  return (
    <S.Container>
      <h1>{children}</h1>
    </S.Container>
  );
}
