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
  let factors = [];
  for (var i = 1; num > 1; num--) {
    factors.push(num);
    i *= num;
  }
  factors.push(1);
  return [i, factors];
}
