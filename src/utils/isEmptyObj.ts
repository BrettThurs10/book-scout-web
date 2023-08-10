export function isEmptyObj(obj) {
  if (obj === undefined) return;
  return Object.keys(obj).length === 0;
}
