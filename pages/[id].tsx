import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import { FLAVOURS } from "@/data/flavours";
import { FlavourType } from "@/types/CMS/Flavours";
import { PageType } from "@/types/CMS/Page";
import CONTENT from "cms/content.json";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";

const Page: NextPage<{ data: PageType }> = ({ data }: { data: PageType }) => {
  console.log("data: ", data);
  return (
    <>
      <SEO title={data?.seo?.title} description={data?.seo?.description} />
      <Blocks key={data?.slug} data={data?.blocks} />
    </>
  );
};

export default Page;

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on id
  const paths = CONTENT.pages
    .filter(page => page.slug !== "home")
    .map(page => ({
      params: { id: page.slug },
    }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetServerSideProps<{ data: PageType }> = async context => {
  const { params } = context;
  const id = params?.id;

  const data = CONTENT.pages.find(page => page.slug === id) as any; // This is fine to cast, id is taken care of in static path and returns 404 otherwise
  return { props: { data: data } };
};
