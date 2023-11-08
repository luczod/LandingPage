import { useEffect, useRef, useState } from "react";

import { Base } from "../Base";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";

import { mapData } from "../../api/menu/map-data";
import { GridTwo } from "../../components/GridTwo";
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImg } from "../../components/GridImg";

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataHome, setData] = useState<any>({});
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          "http://localhost:1337/api/pages/?filters[slug]=first-page&populate=deep"
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(pageData[0]);
        console.log(pageData[0]);
        console.log(dataHome);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [dataHome]);

  useEffect(() => {
    if (dataHome === undefined) {
      document.title = `Página não encontrada`;
    }

    if (dataHome && !dataHome.slug) {
      document.title = `Carregando...`;
    }

    if (dataHome && dataHome.title) {
      document.title = `${dataHome.title}`;
    }
  }, [dataHome]);

  if (dataHome === undefined) {
    return <PageNotFound />;
  }

  if (dataHome && !dataHome.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = dataHome;
  const { menu_links, logo_text: text, logo_link: link } = menu;
  const { url: srcImg } = menu.logo.data.attributes;

  return (
    <Base
      Links={menu_links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sections.map((section: any, index: number) => {
          const { __component: component } = section;
          // const section.id = `${slug}-${index}`;

          if (component === "section.section-two-columns") {
            const { url } = section.image.data.attributes;
            section.srcImg = url;
            return <GridTwo key={section.id} {...section} />;
          }

          if (component === "section.section-content") {
            return <GridContent key={section.id} {...section} />;
          }

          if (component === "section.section-grid-text") {
            return <GridText key={section.id} {...section} />;
          }

          if (component === "section.section-grid-image") {
            return <GridImg key={section.id} {...section} />;
          }
        })
      }
    </Base>
  );
}
