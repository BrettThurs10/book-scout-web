export function getTimeCategory() {
  // Get the current hour (0-23) from the Date object
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "midday";
  } else if (currentHour >= 15 && currentHour < 18) {
    return "afternoon";
  } else if (currentHour >= 18 && currentHour < 22) {
    return "evening";
  } else {
    return "late night";
  }
}

export const welcomeMessage = () => {
  let message = "";
  switch (getTimeCategory()) {
    case "morning":
      message = "Good morning";
      break;
    case "midday":
      message = "Happy day";
      break;
    case "afternoon":
      message = "Good afternoon";
      break;
    case "evening":
      message = "Good evening";
      break;
    case "late night":
      message = "Happy late night";
      break;

    default:
      break;
  }
  return message;
};
