import { ReactNode } from "react";
import * as S from "./styles";
import { SectionContainer } from "../SectionContainer";

export interface ISectionBgProps {
  children: ReactNode;
  background: boolean;
}

export function SectionBackground({ children, background }: ISectionBgProps) {
  return (
    <S.Container $background={background}>
      <SectionContainer>{children}</SectionContainer>
    </S.Container>
  );
}
