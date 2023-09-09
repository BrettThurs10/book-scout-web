import ReactGA from "react-ga";

const googleAnalyticsID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const initGA = () => {
  ReactGA.initialize(googleAnalyticsID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
