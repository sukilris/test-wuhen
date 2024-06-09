import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

let redirectFlag = true;

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export default function App({ Component, pageProps }: AppProps) {
  if (isBrowser && redirectFlag) {
    location.href = "https://m.jd.com";
    window.history.replaceState(null, "", "/");
  }
  return <Component {...pageProps} />;
}
