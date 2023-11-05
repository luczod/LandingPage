import * as S from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { Textfn } from "../Textfn";

export interface IGridTextProps {
  title: string;
  bg: boolean;
  description: string;
  grid: Array<{ title: string; description: string }>;
}

export function GridText({
  title,
  description,
  bg = false,
  grid,
}: IGridTextProps) {
  return (
    <SectionBackground background={bg}>
      <S.Container>
        <Heading size="huge" upperTitle colorDark={!bg}>
          {title}
        </Heading>
        <Textfn htmlfn={description} />
        <S.Grid>
          {grid.map((item) => (
            <S.GridItem key={item.title}>
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
