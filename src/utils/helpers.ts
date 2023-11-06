import dados from "../api/dados.json";
import { mapData } from "../api/menu/map-data";
import { inspect } from "util";
const isObjectEmpty = (objectName: object) => {
  for (const prop in objectName) {
    // eslint-disable-next-line no-prototype-builtins
    if (objectName.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

function viewFileJson() {
  console.log(inspect(mapData(dados), false, null, true));
  return;
}
const x = JSON.parse(JSON.stringify(dados));
console.log(Object.keys(x[0].menu));
