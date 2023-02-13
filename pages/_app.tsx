import type { AppProps } from "next/app";
import Navigation from "../layout/Navigation";
import Footer from "@/layout/Footer";
import { NAVIGATION_DATA } from "@/data/navigation";
import { FOOTER_DATA } from "@/data/footer";
import GlobalStyles from "@/styles/globalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Navigation data={NAVIGATION_DATA} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer data={FOOTER_DATA} />
    </>
  );
}
