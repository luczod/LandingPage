import { useEffect, useRef, useState } from "react";
import { mapData } from "../../api/menu/map-data";
import { MockBase } from "../Base/mock";
import { Base } from "../Base";
import { PageNotFound } from "../PageNotFound";

export function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([]);
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
        setData(() => pageData[0]);
        console.log(pageData[0]);
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
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...MockBase} />;
}
