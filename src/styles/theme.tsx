import { ThemeOptions, createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import montserrat, { modak } from "../fonts/fonts";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  logo: React.CSSProperties;
}

const customTypography = {
  logo: {
    fontFamily: modak.style.fontFamily,
    fontSize: "2rem", // Customize the logo font size
  },
};

const dark: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(255, 185, 95)",
    },
    secondary: {
      main: "rgb(103, 210, 165)",
    },
    info: {
      main: "rgb(150, 204, 255)",
    },
    error: {
      main: "rgb(255, 180, 171)",
    },
    background: {
      default: "rgba(0,11,22,255)",
    },
  },
  typography: {
    ...customTypography,
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
    ...customTypography,
    allVariants: {
      fontFamily: montserrat.style.fontFamily,
    } as ExtendedTypographyOptions,
  },
};

export const darkTheme = createTheme(dark as ThemeOptions);
export const lightTheme = createTheme(light as ThemeOptions);
