export const findMatchingStrings = (
  paragraph: string,
  stringsToCheck: string[]
): string[] => {
  // console.log({ paragraph, stringsToCheck });

  const matchedStrings: string[] = [];

  stringsToCheck.forEach((stringToCheck) => {
    const regex = new RegExp(stringToCheck, "gi");

    if (paragraph.match(regex)) {
      matchedStrings.push(stringToCheck);
    }
  });

  return matchedStrings;
};
