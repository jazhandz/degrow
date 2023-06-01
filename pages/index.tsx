import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
// import CONTENT from "@/cms/content.json"; // STATIC DATA
import type { NextPage } from "next";
import React from "react";
import { getStoryblokApi, useStoryblokState, storyblokInit, apiPlugin } from "@storyblok/react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

// STATIC DATA
// const HOME_PAGE_DATA = CONTENT.pages.find(page => page.slug === "home");

const Home: NextPage = ({ data }: any) => {
  const liveStory = useStoryblokState(data) as any;

  const blocks = liveStory ? liveStory.content?.body : data.content.body;

  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks data={blocks ?? []} />
    </>
  );
};

export default withNavigationAndFooter(Home);

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = "home";

  const globalProps = await getStaticGlobalProps();

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "published" as const, // or 'published'
  });

  return {
    props: {
      ...globalProps,
      data: data ? data.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
