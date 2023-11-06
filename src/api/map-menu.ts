import { IMenuObj, Menu } from "../utils/interfaces";
import { NoArgs } from "./noArgs";

export function mapMenu(pageMenu?: IMenuObj) {
  if (!pageMenu) {
    return NoArgs.pageMenu;
  }
  const {
    open_in_new_tab: newTab,
    logo_text: text,
    logo_link: link,
    logo: { url: srcImg },
    menu: links,
  } = pageMenu;

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
}

export const mapMenuLinks = (links?: Menu[]) => {
  if (!links) {
    return [];
  }
  return links.map((item) => {
    const { open_in_new_tab: newTab, link_text: children, url: link } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};

console.log(mapMenuLinks());
