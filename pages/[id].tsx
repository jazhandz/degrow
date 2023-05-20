import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import { FLAVOURS } from "@/data/flavours";
import { FlavourType } from "@/types/CMS/Flavours";
import { PageType } from "@/types/CMS/Page";
import CONTENT from "cms/content.json";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { getStoryblokApi, useStoryblokState, storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

const Page: NextPage<{ data: PageType }> = ({ data, key }: any) => {
  const liveStory = useStoryblokState(data) as any;

  const blocks = liveStory ? liveStory.content?.body : data.content.body;
  console.log("page data", data);
  return (
    <>
      {/* <SEO title={data?.seo?.title} description={data?.seo?.description} /> */}
      <Blocks key={data.id} data={blocks} />
    </>
  );
};

export default Page;

// This function gets called at build time
export async function getStaticPaths() {
  // // Get the paths we want to pre-render based on id
  // const paths = CONTENT.pages
  //   .filter(page => page.slug !== "homce")
  //   .map(page => ({
  //     params: { id: page.slug },
  //   }));

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });

  const paths = [] as any[];
  Object.keys(data.links).forEach(linkKey => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    const splittedSlug = slug.split("/");

    paths.push({ params: { id: slug } });
  });

  console.log("paths", data, paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetServerSideProps<{ data: PageType }> = async context => {
  const { params } = context;
  const id = params?.id;

  // home is the default slug for the homepage in Storyblok
  const slug = "home";

  // load the draft version
  const sbParams = {
    version: "draft" as const, // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${id}`, sbParams);

  // const data = CONTENT.pages.find(page => page.slug === id) as any; // This is fine to cast, id is taken care of in static path and returns 404 otherwise
  return { props: { data: data.story } };
};
