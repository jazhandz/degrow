import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import CONTENT from "@/cms/content.json";
import type { NextPage } from "next";
import React from "react";
import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

const HOME_PAGE_DATA = CONTENT.pages.find(page => page.slug === "home");

const Home: NextPage = ({ story, key }: any) => {
  const liveStory = useStoryblokState(story) as any;

  const blocks = liveStory ? liveStory.content?.body : story.content.body;

  console.log("page data", story, key, liveStory);
  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks data={blocks ?? []} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = "home";

  // load the draft version
  const sbParams = {
    version: "draft" as const, // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
