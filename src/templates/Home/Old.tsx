import { MockBase } from "../Base/mock";
import { Base } from "../Base";
import { useQuery } from "@tanstack/react-query";
import { ErrorRequest } from "../../utils/MsgFlash";
import { wsapi } from "../../components/WebService";
import { IPageObj, mapData } from "../../api/menu/map-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Sketonfn(value: any) {
  const { attributes } = value.data[0];
  const pageData = mapData([attributes]);
  console.log(pageData[0]);

  return <Base {...MockBase} />;
}

export function Home() {
  const {
    data: rawData,
    error: msg,
    isLoading,
  } = useQuery(["listHome"], wsapi.listHome, {
    staleTime: Infinity,
  });

  if (!!msg && msg instanceof Error) {
    console.log(msg);
    ErrorRequest(msg?.message);
  }
  {
    isLoading && <Sketonfn data={rawData} />;
  }

  return <Base {...MockBase} />;
}
