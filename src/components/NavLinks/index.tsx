import * as S from "./styles";
import { MenuLink, IMenuLinkProps } from "../MenuLink";

export interface INavLinksProps {
  Links?: Array<IMenuLinkProps>;
}

export function NavLinks({ Links }: INavLinksProps) {
  return (
    <S.Container aria-label="Main menu">
      {Links?.map((item) => (
        <MenuLink key={item.id} {...item} />
      ))}
    </S.Container>
  );
}
