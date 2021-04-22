export function createHeading(maxW) {
  let heads = [];
  for (let i = 1; i <= maxW; i++) {
    heads.push(i);
  }
  return heads;
}

export function factorial(num) {
  if (num === 0) {
    return 1;
  }
  for (var i = 1; num > 1; num--) {
    i *= num;
  }
  return i;
}
