import "@/styles/globals.css";
import type { AppProps } from "next/app";

let redirectFlag = true;

export default function App({ Component, pageProps }: AppProps) {
  if (redirectFlag) {
    location.href = "https://m.jd.com";
  }
  return <Component {...pageProps} />;
}
