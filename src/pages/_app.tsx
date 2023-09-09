import ResponsiveAppBar from "@/components/AppBar";
import "@/styles/globals.css";
import { darkTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as gtag from "@/utils/ga";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);
  const router = useRouter();
  const routesToHideAppBar = ["/privacy"];
  const shouldHideAppBar = routesToHideAppBar.includes(router.pathname);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
  const googleAnalyticsID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  return (
    <>
      <Head>
        <title>Book Scout - Know more. Read more.</title>
        <meta
          property="og:title"
          content="Book Scout - Know more. Read more."
        />
        <meta property="og:image" content="/img/meta.png" />
        <meta
          name="description"
          content=" Discover New Books with Ease, Thanks to Book Scout"
        />
        <meta property="og:url" content="https://www.bookscoutapp.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`}
        />
      </Head>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <ThemeProvider theme={theme}>
        {!shouldHideAppBar && <ResponsiveAppBar isScrolled={isScrolled} />}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
