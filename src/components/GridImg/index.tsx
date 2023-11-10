import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { Textfn } from "../Textfn";
import * as S from "./styles";
import { apiUrl } from "../../utils/endpoint";
import { IImagGrid } from "../../utils/interfaces";

export interface IGridImgProps {
  title: string;
  bg: boolean;
  description: string;
  img_grid: Array<IImagGrid>;
}

export function GridImg({
  title,
  description,
  bg = false,
  img_grid: grid,
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
                onClick={() => OpenModal(`GridImg-${item.id}`)}
                aria-label="item-img"
                src={item.image.data[0].attributes.url}
                alt={item.image.data[0].attributes.alternativeText}
              />

              <S.ModalImg id={`GridImg-${item.id}`} aria-label="Modal">
                <img
                  src={item.image.data[0].attributes.url}
                  alt={item.image.data[0].attributes.alternativeText}
                />
                <span
                  aria-label="Close-img"
                  onClick={() => CloseModal(`GridImg-${item.id}`)}
                >
                  &times;
                </span>
                <div>{item.image.data[0].attributes.alternativeText}</div>
              </S.ModalImg>
            </S.GridItem>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
}
