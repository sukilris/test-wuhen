import "@/styles/globals.css";
import type { AppProps } from "next/app";

let redirectFlag = true;

const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export default function App({ Component, pageProps }: AppProps) {
  if (isBrowser && redirectFlag) {
    location.href = "https://m.jd.com";
    location.href = location.origin;
  }
  return <Component {...pageProps} />;
}
