import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/globalStyles";
import React from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

interface StaticProps extends AppProps {
  data: any;
}

export default function MyApp({ Component, pageProps }: StaticProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
