import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import CONTENT from "@/cms/content.json";
import { FlavourType } from "@/types/CMS/Flavours";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";
import { getStoryblokApi } from "@storyblok/react";
import { StaticDataType } from "@/components/Blocks/Blocks";
import { getDiscoverFlavours } from "@/functions/data/get-discover-flavours";

const FLAVOURS = CONTENT.flavours;

const Flavours: NextPage<{ data: FlavourType[]; staticData: StaticDataType }> = ({
  data,
  staticData,
}: {
  data: FlavourType[];
  staticData: StaticDataType;
}) => {
  const flavoursData = data as FlavourType[];

  return (
    <>
      <SEO title="DeGrow Lab - Collaborations" description="" />
      <Blocks
        staticData={staticData}
        data={[
          ...flavoursData.map(flavour => ({
            component: "flavour",
            ...flavour,
            listItem: true,
          })),
          {
            component: "section",
            id: "newsletter",
            color: [{ color: "softGreen" }],
            items: [{ component: "chapter-heading", title: "NEWSLETTER", varient: "h2" }, { component: "newsletter" }],
          },
        ]}
      />
    </>
  );
};

export default withNavigationAndFooter(Flavours);

export const getStaticProps: GetServerSideProps<{ data: any; staticData: StaticDataType }> = async () => {
  const globalProps = await getStaticGlobalProps();
  const discoverFlavours = await getDiscoverFlavours();

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "published" as const,
    starts_with: "flavours/",
  });

  console.log("data", data);

  return {
    props: {
      ...globalProps,
      data: data.stories
        .map((item: any) => ({ ...item.content, slug: item.slug }))
        .filter((item: any) => item.isCollaboration === true),
      staticData: { discoverFlavours },
    },
  };
};
