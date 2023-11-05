import { useState } from "react";
import * as S from "./styles";
import { SectionContainer } from "../SectionContainer";
import { LogoLink } from "../LogoLink";
import { ILogoLinkProps } from "../LogoLink";
import { NavLinks, INavLinksProps } from "../NavLinks";
import { MenuIcon, XIcon } from "lucide-react";

export interface IMenuProps extends INavLinksProps {
  logoData: ILogoLinkProps;
}

export function Menu({ Links = [], logoData }: IMenuProps) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <S.Btn
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/close menu"
      >
        {visible && <MenuIcon size={32} aria-label="Open menu" />}
        {!visible && <XIcon size={32} aria-label="Close menu" />}
      </S.Btn>
      <S.Container
        aria-label="wrap"
        visible={visible}
        onClick={() => setVisible(false)}
      >
        <SectionContainer>
          <S.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks Links={Links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Container>
    </>
  );
}
