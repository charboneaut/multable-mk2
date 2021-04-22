import { factorial } from "../../helpers";

export function tableCalc(mode, maxH, maxW) {
  let table = [];
  if (mode === "exp") {
    for (let i = 0; i < maxH; i++) {
      table.push([]);
      for (let k = 1; k <= maxW; k++) {
        table[i].push({ num: i ** k, factorI: i, factorK: k });
      }
    }
  } else if (mode === "adm") {
    table.push([]);
    for (let k = 1; k <= maxW; k++) {
      let results = factorial(k);
      table[0].push({ num: results[0] });
    }
  } else {
    for (let i = 0; i < maxH; i++) {
      table.push([]);
      for (let k = 1; k <= maxW; k++) {
        table[i].push({ num: i * k, factorI: i, factorK: k });
      }
    }
  }
  return table;
}
