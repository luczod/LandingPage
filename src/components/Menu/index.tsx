import { ReactNode } from "react";
import * as S from "./styles";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from "../LogoLink";
import { ILogoLinkProps } from "../LogoLink";
import { NavLinks, INavLinksProps } from "../NavLinks";

export interface IMenuProps extends INavLinksProps {
  logoData: ILogoLinkProps;
}

export function Menu({ Links = [], logoData }: IMenuProps) {
  return (
    <S.Container>
      <SectionContainer>
        <S.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks Links={Links} />
        </S.MenuContainer>
      </SectionContainer>
    </S.Container>
  );
}
