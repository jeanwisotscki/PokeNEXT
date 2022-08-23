import Router from "next/router";
import NProgress from "nprogress";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/nprogress.css";
import LayoutBase from "../components/LayoutBase";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutBase>
      <Component {...pageProps} />
    </LayoutBase>
  );
}

export default MyApp;
