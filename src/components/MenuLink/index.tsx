import * as S from "./styles";

export interface IMenuLinkProps {
  id?: string;
  link_text: string;
  url?: string;
  open_in_new_tab?: boolean;
}

export function MenuLink({
  link_text,
  url,
  open_in_new_tab = false,
}: IMenuLinkProps) {
  const target = open_in_new_tab ? "_blank" : "_self";
  return (
    <S.Container href={url} target={target}>
      {link_text}
    </S.Container>
  );
}
