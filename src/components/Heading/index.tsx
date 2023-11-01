import { ReactNode } from "react";
import * as S from "./styles";

export interface IHeadingProps {
  colorDark: boolean;
  children: ReactNode;
  variant: string;
}

export const Heading: React.FC<IHeadingProps> = ({
  children,
  colorDark = false,
  variant = "h1",
}) => {
  return (
    <S.Title colorDark={colorDark} as={variant}>
      {children}
    </S.Title>
  );
};
