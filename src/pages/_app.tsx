import React from "react";
import ResponsiveAppBar from "@/components/AppBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/state/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { darkTheme } from "@/styles/theme";
import { useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);
  const router = useRouter();
  const routesToHideAppBar = ["/privacy"];
  const shouldHideAppBar = routesToHideAppBar.includes(router.pathname);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Define the scroll threshold (e.g., 200 pixels from the top)
      const scrollThreshold = 800;
      // Check if the scroll position is beyond the threshold
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {!shouldHideAppBar && <ResponsiveAppBar isScrolled={isScrolled} />}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
