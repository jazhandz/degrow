import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import CONTENT from "@/cms/content.json";
import { FlavourType } from "@/types/CMS/Flavours";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { getStoryblokApi } from "@storyblok/react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";

const FLAVOURS = CONTENT.flavours;

const Flavours: NextPage<{ data: FlavourType }> = ({ data }: { data: FlavourType }) => {
  console.log("dataaaaaAA:", data);

  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks
        key={data.title}
        data={[
          {
            component: "section",
            color: data.color ?? [],
            gradient: data.gradient,
            items: [
              {
                ...data,
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

export const getStaticProps: GetServerSideProps<{ data: FlavourType }> = async context => {
  const { params } = context;
  const id = params?.id;

  const globalProps = await getStaticGlobalProps();

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/flavours/${id}`, {
    version: "published" as const,
  });

  return { props: { ...globalProps, data: data.story.content } };
};
