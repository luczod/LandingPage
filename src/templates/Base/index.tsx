import { ReactNode } from "react";
import { IMenuLinkProps } from "../../components/MenuLink";
import { ILogoLinkProps } from "../../components/LogoLink";
import { Menu } from "../../components/Menu";
import * as S from "./styles";
import { Footer } from "../../components/Footer";
import { GoTop } from "../../components/GoTop";

export interface IBaseProps {
  children: ReactNode;
  footerHtml: string;
  Links?: Array<IMenuLinkProps>;
  logoData: ILogoLinkProps;
}

export function Base({
  children,
  Links = [],
  footerHtml,
  logoData,
}: IBaseProps) {
  return (
    <>
      <Menu Links={Links} logoData={logoData} />
      {children}
      <S.Container>
        <Footer footerHtml={footerHtml} />
      </S.Container>
      <GoTop />
    </>
  );
}
