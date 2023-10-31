import { ReactNode } from "react";
import * as S from "./styles";

export interface IHeadingProps {
  light: boolean;
  children: ReactNode;
}

export const Heading: React.FC<IHeadingProps> = ({
  children,
  light = false,
}) => {
  return <S.Title light={light}>{children}</S.Title>;
};
