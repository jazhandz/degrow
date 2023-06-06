import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
// import CONTENT from "@/cms/content.json"; // STATIC DATA
import type { NextPage } from "next";
import React from "react";
import { getStoryblokApi, useStoryblokState, storyblokInit, apiPlugin } from "@storyblok/react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";
import { getDiscoverFlavours } from "@/functions/data/get-discover-flavours";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

// STATIC DATA
// const HOME_PAGE_DATA = CONTENT.pages.find(page => page.slug === "home");

const Home: NextPage = ({ data, staticData }: any) => {
  const liveStory = useStoryblokState(data) as any;

  const blocks = liveStory.content?.body;
  const seo = liveStory.content?.seo[0];

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <Blocks key="home" staticData={staticData} data={blocks ?? []} />
    </>
  );
};

export default withNavigationAndFooter(Home);

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = "home";

  const globalProps = await getStaticGlobalProps();
  const discoverFlavours = await getDiscoverFlavours();
  // const discoverFlavours = await getDiscoverFlavours();

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "published" as const, // or 'published'
  });

  return {
    props: {
      ...globalProps,
      data: data ? data.story : false,
      staticData: { discoverFlavours },
    },
    revalidate: 3600, // revalidate every hour
  };
}
