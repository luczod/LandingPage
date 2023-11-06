import dados from "./dados.json";
import { inspect } from "util";
import { NoArgs } from "./noArgs";
interface IPageObj {
  footer_text: string;
  slug: string;
  title: string;
  sections: Array<unknown>;
  menu: object;
}

export function mapData(pagesData: Array<IPageObj> = [NoArgs.pages]) {
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

function viewFileJson() {
  console.log(inspect(mapData(dados), false, null, true));
  return;
}
const x = JSON.parse(JSON.stringify(dados));
console.log(Object.keys(x[0].menu));
