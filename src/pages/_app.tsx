import ResponsiveAppBar from "@/components/AppBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/state/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { darkTheme } from "@/styles/theme";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
