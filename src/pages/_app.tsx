import ResponsiveAppBar from "@/components/AppBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
