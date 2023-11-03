import { ReactNode } from "react";
import * as S from "./styles";

export interface IMenuLinkProps {
  children: ReactNode;
  link?: string;
  newTab?: boolean;
}

export function MenuLink({ children, link, newTab = false }: IMenuLinkProps) {
  const target = newTab ? "_blank" : "_self";
  return (
    <S.Container href={link} target={target}>
      {children}
    </S.Container>
  );
}
