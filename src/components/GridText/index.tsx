import * as S from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { Textfn } from "../Textfn";

export interface IGridTextProps {
  title: string;
  bg: boolean;
  description: string;
  text_grid: Array<{ title: string; id: string; description: string }>;
}

export function GridText({
  title,
  description,
  bg = false,
  text_grid,
}: IGridTextProps) {
  return (
    <SectionBackground background={bg}>
      <S.Container>
        <Heading size="huge" upperTitle colorDark={!bg}>
          {title}
        </Heading>
        <Textfn htmlfn={description} />
        <S.Grid>
          {text_grid.map((item) => (
            <S.GridItem key={item.id}>
              <Heading size="medium" colorDark={!bg}>
                {item.title}
              </Heading>
              <Textfn htmlfn={item.description} />
            </S.GridItem>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
}
