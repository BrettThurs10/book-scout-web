export function isValidDate(dateStr: string) {
  var date = new Date(dateStr);
  return date instanceof Date && !isNaN(date.valueOf());
}
