import { ReactNode } from "react";
import * as S from "./styles";
import { ChevronUp } from "lucide-react";

export function GoTop() {
  return (
    <S.Container href="#" aria-label="Go to top" title="Go to top">
      <ChevronUp size={48} />
    </S.Container>
  );
}
