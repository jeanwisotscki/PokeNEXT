import type { AppProps } from "next/app";

import "../styles/globals.css";
import LayoutBase from "../components/LayoutBase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutBase>
      <Component {...pageProps} />
    </LayoutBase>
  );
}

export default MyApp;
