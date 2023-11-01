import { ReactNode } from "react";
import { OverridableStringUnion } from "../../types/oneof";
import * as S from "./styles";

export interface IHeadingProps {
  colorDark: boolean;
  children: ReactNode;
  variant: OverridableStringUnion<"h1" | "h2" | "h3" | "h4">;
  size: OverridableStringUnion<"small" | "medium" | "big">;
}

export const Heading: React.FC<IHeadingProps> = ({
  children,
  colorDark = false,
  variant = "h1",
  size = "big",
}) => {
  return (
    <S.Title colorDark={colorDark} as={variant} size={size}>
      {children}
    </S.Title>
  );
};
