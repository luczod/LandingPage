import { ReactNode } from "react";
import { OverridableStringUnion } from "../../types/oneof";
import * as S from "./styles";

export interface IHeadingProps {
  colorDark?: boolean;
  children: ReactNode;
  as?: OverridableStringUnion<"h1" | "h2" | "h3" | "h4">;
  size?: OverridableStringUnion<"small" | "medium" | "big" | "huge">;
  upperTitle?: boolean;
}

export function Heading({
  children,
  colorDark = true,
  as = "h1",
  size = "big",
  upperTitle = false,
}: IHeadingProps) {
  return (
    <S.Title $colorark={colorDark} $uppertitle={upperTitle} as={as} size={size}>
      {children}
    </S.Title>
  );
}
