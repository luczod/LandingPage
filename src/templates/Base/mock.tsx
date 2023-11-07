import Gridmock from "../../components/GridText/mock";
import Twomock from "../../components/GridTwo/mock";
import Contentmock from "../../components/GridContent/mock";
import Imgmock from "../../components/GridImg/mock";
import { linksList } from "../../components/NavLinks/mock";
import { GridText } from "../../components/GridText";
import { GridTwo } from "../../components/GridTwo";
import { GridContent } from "../../components/GridContent";
import { GridImg } from "../../components/GridImg";

export const MockBase = {
  children: (
    <>
      <GridTwo {...Twomock} bg />
      <GridText {...Gridmock} />
      <GridImg {...Imgmock} />
      <GridContent {...Contentmock} />
    </>
  ),
  Links: linksList,
  logoData: {
    text: "Logo",
    link: "#",
  },
  footerHtml: "<p>teste html</p>",
};
