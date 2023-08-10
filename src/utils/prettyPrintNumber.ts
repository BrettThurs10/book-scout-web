export const prettyPrintNumber = (number: string) => {
  if (!number) return "";
  const parsedNumber = Number(number.replace(",", ""));
  const formattedNum = parsedNumber.toLocaleString("en-US", {
    notation: "compact",
  });
  return formattedNum;
};
