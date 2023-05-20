import type { AppProps } from "next/app";
import Navigation from "../layout/Navigation";
import Footer from "@/layout/Footer";
// import { NAVIGATION_DATA } from "@/data/navigation";
import CONTENT from "@/cms/content.json";
import { FOOTER_DATA } from "@/data/footer";
import GlobalStyles from "@/styles/globalStyles";
import { useRouter } from "next/router";
import React from "react";
import { NavigationType } from "@/types/CMS/Navigation";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

const NAVIGATION_CONTENT = CONTENT.navigation as NavigationType;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const NAVIGATION_COLOR = React.useMemo(() => {
    return NAVIGATION_CONTENT.colors.find(colorPath => router.asPath.startsWith(colorPath.path))?.color ?? undefined;
  }, [router.asPath]);

  return (
    <>
      <GlobalStyles />
      <Navigation data={NAVIGATION_CONTENT} backgroundColor={NAVIGATION_COLOR} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer data={FOOTER_DATA} />
    </>
  );
}
