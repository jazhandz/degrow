import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/globalStyles";
import React from "react";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

interface StaticProps extends AppProps {
  data: any;
}

export default function MyApp({ Component, pageProps }: StaticProps) {
  const fetchAPI = async () => {
    console.log("sedning");
    const storyblokApi = getStoryblokApi();
    const response = await storyblokApi.get(`cdn/stories/flavours/original`, { version: "published" });

    // console.log("navigation:", data);
    console.log("response:", response);
  };

  React.useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
