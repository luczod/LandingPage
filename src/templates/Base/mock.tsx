import { linksList } from "../../components/NavLinks/mock";
import { GridText } from "../../components/GridText";
import Gridmock from "../../components/GridText/mock";

export const MockBase = {
  children: (
    <>
      <GridText {...Gridmock} bg />
      <GridText {...Gridmock} />
      <GridText {...Gridmock} bg />
      <GridText {...Gridmock} />
    </>
  ),
  Links: linksList,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: "<p>teste html</p>",
};
