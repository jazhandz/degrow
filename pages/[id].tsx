import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import { FLAVOURS } from "@/data/flavours";
import { FlavourType } from "@/types/CMS/Flavours";
import { PageType } from "@/types/CMS/Page";
import CONTENT from "cms/content.json";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { getStoryblokApi, useStoryblokState, storyblokInit, apiPlugin } from "@storyblok/react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";
import { StaticDataType } from "@/components/Blocks/Blocks";
import { getDiscoverFlavours } from "@/functions/data/get-discover-flavours";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

const Page: NextPage<{ data: { content: { body: PageType } }; staticData: StaticDataType }> = ({
  data,
  staticData,
}: {
  data: { content: { body: PageType } };
  staticData: StaticDataType;
}) => {
  const liveStory = useStoryblokState(data as any) as any;

  const blocks = liveStory.content?.body;
  const seo = liveStory.content?.seo[0];

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <Blocks key={blocks.id} staticData={staticData} data={blocks} />
    </>
  );
};

export default withNavigationAndFooter(Page);

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/links/", {
    version: "published",
  });

  const paths = Object.keys(data.links)
    .filter(
      linkKey =>
        (data.links[linkKey].slug !== "global" &&
          data.links[linkKey].slug !== "flavours" &&
          !data.links[linkKey].slug.startsWith("global/") &&
          !data.links[linkKey].slug.startsWith("flavours/") &&
          !data.links[linkKey].is_folder) ||
        data.links[linkKey].slug === "home"
    )
    .map(linkKey => {
      const slug = data.links[linkKey].slug;

      return { params: { id: slug } };
    }) as any[];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetServerSideProps<{ data: any; staticData: StaticDataType }> = async context => {
  const { params } = context;
  const id = params?.id;

  const globalProps = await getStaticGlobalProps();
  const discoverFlavours = await getDiscoverFlavours();

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${id}`, {
    version: "published" as const,
  });

  return { props: { ...globalProps, data: data.story, staticData: { discoverFlavours } } };
};
