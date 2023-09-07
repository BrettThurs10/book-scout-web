import { ThemeOptions, createTheme } from "@mui/material/styles";
import montserrat from "../fonts/fonts";

const dark: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(255, 185, 95)",
    },
    secondary: {
      main: "rgb(155, 68, 41)",
    },
    info: {
      main: "rgb(0, 74, 117)",
    },
    error: {
      main: "rgb(255, 180, 171)",
    },
  },
  typography: {
    allVariants: {
      fontFamily: montserrat.style.fontFamily,
    },
  },
};

const light: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "rgb(255, 185, 95)",
    },
    secondary: {
      main: "rgb(155, 68, 41)",
    },
    info: {
      main: "rgb(0, 74, 117)",
    },
    error: {
      main: "rgb(255, 180, 171)",
    },
    background: {
      default: "rgb(214, 196, 117)",
    },
  },
  typography: {
    allVariants: {
      fontFamily: montserrat.style.fontFamily,
    },
  },
};

export const darkTheme = createTheme(dark);
export const lightTheme = createTheme(light);
