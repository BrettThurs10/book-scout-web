import dayjs from "dayjs";

export const dataOlderThan30Days = ({ history, asin }) => {
  const foundBook = history?.find((book) => book.asin === asin);
  const today = dayjs();
  const yourTargetDate = dayjs(foundBook?.lastSaved);
  const differenceInDays = today.diff(yourTargetDate, "day");
  return differenceInDays >= 30;
};
