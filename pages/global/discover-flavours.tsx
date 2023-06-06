import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import type { NextPage } from "next";
import React from "react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";
import { getStoryblokApi, ISbStoryData, useStoryblokState } from "@storyblok/react";
import { StaticDataType } from "@/components/Blocks/Blocks";
import { getDiscoverFlavours } from "@/functions/data/get-discover-flavours";

const DiscoverFlavours: NextPage<{ staticData: any }> = ({
  staticData,
}: {
  staticData: { discoverFlavours: ISbStoryData };
}) => {
  const liveStory = useStoryblokState(staticData.discoverFlavours) as any;

  const flavourDataBlock = liveStory ? liveStory : staticData.discoverFlavours;

  console.log("blocks global render: ", flavourDataBlock, liveStory);

  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks
        staticData={{ discoverFlavours: flavourDataBlock } as StaticDataType}
        data={[
          {
            component: "discover-flavours",
          },
        ]}
      />
    </>
  );
};

export default withNavigationAndFooter(DiscoverFlavours);

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
