import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { Textfn } from "../Textfn";
import * as S from "./styles";
import { apiUrl } from "../../utils/endpoint";

export interface IGridImgProps {
  title: string;
  bg: boolean;
  description: string;
  grid: Array<{ altText: string; srcImg: string; id: number }>;
}

export function GridImg({
  title,
  description,
  bg = false,
  grid,
}: IGridImgProps) {
  function OpenModal(id: string) {
    const modal = document.getElementById(id);
    if (modal instanceof HTMLDivElement) {
      modal.style.display = "block";
    }
  }

  function CloseModal(id: string) {
    const modal = document.getElementById(id);
    if (modal instanceof HTMLDivElement) {
      modal.style.display = "none";
    }
  }

  return (
    <SectionBackground background={bg}>
      <S.Container>
        <Heading size="huge" as="h2" upperTitle colorDark={!bg}>
          {title}
        </Heading>
        <Textfn htmlfn={description} />
        <S.Grid>
          {grid.map((item) => (
            <S.GridItem key={item.id}>
              <S.Image
                onClick={() => OpenModal(item.altText)}
                aria-label="item-img"
                src={apiUrl + item.srcImg}
                alt={item.altText}
              />

              <S.ModalImg id={item.altText} aria-label="Modal">
                <img src={apiUrl + item.srcImg} alt={item.altText} />
                <span
                  aria-label="Close-img"
                  onClick={() => CloseModal(item.altText)}
                >
                  &times;
                </span>
                <div>{item.altText}</div>
              </S.ModalImg>
            </S.GridItem>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
}
