import { factorial } from "./helpers";

export function tableCalc(mode, maxH, maxW) {
  let table = [];
  if (mode === "exp") {
    for (let i = 0; i < maxH; i++) {
      table.push([]);
      for (let k = 1; k <= maxW; k++) {
        table[i].push(i ** k);
      }
    }
  } else if (mode === "adm") {
    table.push([]);
    for (let k = 1; k <= maxW; k++) {
      table[0].push(factorial(k));
    }
  } else {
    for (let i = 0; i < maxH; i++) {
      table.push([]);
      for (let k = 1; k <= maxW; k++) {
        table[i].push(i * k);
      }
    }
  }
  return table;
}
