// import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../layout/Navigation";
import Footer from "@/layout/Footer";
// @ts-ignore
import config from "react-reveal/globals";
import { NAVIGATION_DATA } from "@/data/navigation";
import { FOOTER_DATA } from "@/data/footer";
import { color } from "@/styles/color";
import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import GlobalStyles from "@/styles/globalStyles";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Navigation
        data={NAVIGATION_DATA}
      />
      <main>
        <Component {...pageProps} />
      </main> 
      <Footer
        data={FOOTER_DATA}
      />
    </>
  );
}

export default MyApp;
