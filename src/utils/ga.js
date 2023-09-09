import ReactGA from "react-ga";

const googleAnalyticsID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
