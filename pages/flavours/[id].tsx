import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import { FlavourType } from "@/types/CMS/Flavours";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { getStoryblokApi, useStoryblokState } from "@storyblok/react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";
import { StaticDataType } from "@/components/Blocks/Blocks";
import { getDiscoverFlavours } from "@/functions/data/get-discover-flavours";
import { parseStoryblokRichText } from "@/functions/parse-storyblok-richtext";

const Flavours: NextPage<{ data: { story: { content: FlavourType } }; staticData: StaticDataType }> = ({
  data,
  staticData,
}: {
  data: { story: { content: FlavourType } };
  staticData: StaticDataType;
}) => {
  const liveStory = useStoryblokState(data as any) as any;

  const flavour = liveStory.story?.content;
  const cleanSeoDesciption = parseStoryblokRichText(flavour.description).__html.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <>
      <SEO title={`DeGrow Lab - ${flavour.title}`} description={cleanSeoDesciption} />
      <Blocks
        key={flavour.title}
        staticData={staticData}
        data={[
          {
            component: "section",
            color: flavour.color ?? [],
            gradient: flavour.gradient,
            items: [
              {
                ...flavour,
                component: "flavour",
                gradient: [], // Used in section
                color: [], // Used in section
              },
              {
                component: "heading",
                title: `DISCOVER OUR OTHER FLAVOURS`,
                varient: "h2",
              },
              {
                component: "discover-flavours",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default withNavigationAndFooter(Flavours);

// This function gets called at build time
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/links/", {
    version: "published",
  });

  const paths = Object.keys(data.links)
    .filter(linkKey => data.links[linkKey].slug.startsWith("flavours/"))
    .map(linkKey => {
      const slug = data.links[linkKey].slug.replace("flavours/", "");

      return { params: { id: slug } };
    }) as any[];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetServerSideProps<{ data: FlavourType; staticData: StaticDataType }> = async context => {
  const { params } = context;
  const id = params?.id;

  const globalProps = await getStaticGlobalProps();
  const discoverFlavours = await getDiscoverFlavours();

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/flavours/${id}`, {
    version: "published" as const,
  });

  return { props: { ...globalProps, data: data, staticData: { discoverFlavours } } };
};
