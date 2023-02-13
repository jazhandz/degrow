import type { AppProps } from "next/app";
import Navigation from "../layout/Navigation";
import Footer from "@/layout/Footer";
import { NAVIGATION_DATA } from "@/data/navigation";
import { FOOTER_DATA } from "@/data/footer";
import GlobalStyles from "@/styles/globalStyles";
import { useRouter } from "next/router";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const NAVIGATION_COLOR = React.useMemo(() => {
    return NAVIGATION_DATA.colors.find(colorPath => router.pathname.startsWith(colorPath.path))?.color ?? undefined;
  }, [router.pathname]);

  return (
    <>
      <GlobalStyles />
      <Navigation data={NAVIGATION_DATA} backgroundColor={NAVIGATION_COLOR} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer data={FOOTER_DATA} />
    </>
  );
}
