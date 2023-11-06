interface IPageObj {
  footer_text: string;
  slug: string;
  title: string;
  sections: Array<unknown>;
  menu: object;
}

const noPages = {
  footer_text: "",
  slug: "",
  title: "",
  sections: [],
  menu: {},
};

export function mapData(pagesData: Array<IPageObj> = [noPages]) {
  return pagesData.map((data) => {
    const { footer_text: footerHtml, slug, title, sections, menu } = data;

    return {
      footerHtml,
      slug,
      title,
      sections,
      menu,
    };
  });
}

console.log(mapData());
