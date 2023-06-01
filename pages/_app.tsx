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
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

interface StaticProps extends AppProps {
  data: any;
}

const NAVIGATION_CONTENT = CONTENT.navigation as NavigationType;

export default function MyApp({ Component, pageProps }: StaticProps) {
  const router = useRouter();

  const fetchAPI = async () => {
    console.log("sedning");
    const storyblokApi = getStoryblokApi();
    const response = await storyblokApi.get(`cdn/links/`, { version: "published" });

    // console.log("navigation:", data);
    console.log(
      "response:",
      Object.keys(response.data.links)
        .filter(
          linkKey =>
            (response.data.links[linkKey].slug !== "global" &&
              !response.data.links[linkKey].slug.startsWith("global/") &&
              !response.data.links[linkKey].is_folder) ||
            response.data.links[linkKey].slug === "home"
        )
        .map(linkKey => {
          const slug = response.data.links[linkKey].slug;

          return { params: { id: slug } };
        })
    );
  };

  React.useEffect(() => {
    fetchAPI();
  }, []);

  console.log("dataaa:", pageProps.data);

  const NAVIGATION_COLOR = React.useMemo(() => {
    return NAVIGATION_CONTENT.colors.find(colorPath => router.asPath.startsWith(colorPath.path))?.color ?? undefined;
  }, [router.asPath]);

  return (
    <>
      <GlobalStyles />
      {/* <Navigation data={NAVIGATION_CONTENT} backgroundColor={NAVIGATION_COLOR} /> */}
      <Component {...pageProps} />
      <Footer data={FOOTER_DATA} />
    </>
  );
}
