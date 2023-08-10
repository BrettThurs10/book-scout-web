export const getGoogleISBN13 = (arr: any[]) => {
  if (arr === undefined) {
    console.log("arr is empty");
    return [];
  }
  return arr.find((item) => item?.type === "ISBN_13")?.identifier;
};
