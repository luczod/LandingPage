import * as S from "./styles";

export interface ITextfnProps {
  htmlfn: string;
}

export function Textfn({ htmlfn }: ITextfnProps) {
  return <S.Container dangerouslySetInnerHTML={{ __html: htmlfn }} />;
}
