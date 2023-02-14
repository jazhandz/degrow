import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import { FLAVOURS } from "@/data/flavours";
import { FlavourType } from "@/types/CMS/Flavours";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";

const Flavours: NextPage<{ data: FlavourType }> = ({ data }: { data: FlavourType }) => {
  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks
        key={data.title}
        data={[
          {
            type: "section",
            data: {
              color: data.color,
              gradient: data.gradient,
              items: [
                {
                  type: "flavour",
                  data: {
                    ...data,
                  },
                },
                {
                  type: "heading",
                  data: {
                    title: `DISCOVER OUR OTHER FLAVOURS`,
                    varient: "h2",
                  },
                },
                {
                  type: "discover-flavours",
                  data: {},
                },
              ],
            },
          },
        ]}
      />
    </>
  );
};

export default Flavours;

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on id
  const paths = FLAVOURS.map(flavour => ({
    params: { id: flavour.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps: GetServerSideProps<{ data: FlavourType }> = async context => {
  const { params } = context;
  const id = params?.id;

  const data = FLAVOURS.find(flavour => flavour.id === id) as FlavourType; // This is fine to cast, id is taken care of in static path and returns 404 otherwise
  return { props: { data: data } };
};
