import { ReactNode } from "react";
import { OverridableStringUnion } from "../../types/oneof";
import * as S from "./styles";

export interface IHeadingProps {
  colorDark?: boolean;
  children: ReactNode;
  variant?: OverridableStringUnion<"h1" | "h2" | "h3" | "h4">;
  size?: OverridableStringUnion<"small" | "medium" | "big" | "huge">;
  upperTitle?: boolean;
}

export function Heading({
  children,
  colorDark = true,
  variant = "h1",
  size = "big",
  upperTitle = false,
}: IHeadingProps) {
  return (
    <S.Title
      colorDark={colorDark}
      upperTitle={upperTitle}
      as={variant}
      size={size}
    >
      {children}
    </S.Title>
  );
}
