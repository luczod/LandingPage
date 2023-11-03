import * as S from "./styles";
import { MenuLink, IMenuLinkProps } from "../MenuLink";

export interface INavLinksProps {
  Links?: Array<IMenuLinkProps>;
}

export const NavLinks: React.FC<INavLinksProps> = ({ Links }) => {
  return (
    <S.Container>
      {Links?.map((item) => (
        <MenuLink key={item.link} {...item} />
      ))}
    </S.Container>
  );
};
