export function sum(...values) {
  return values.reduce((acc, value) => acc + value, 0);
}

export function multiply(...values) {
  return values.reduce((acc, value) => acc * value, 1);
}
