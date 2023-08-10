export const chunkArray = (array: any[], by: number) => {
  const newArray: any[][] = [];

  for (let i = 0; i < array.length; i += by) {
    const chunk = array.slice(i, i + by);
    newArray.push(chunk);
  }

  return newArray;
};
