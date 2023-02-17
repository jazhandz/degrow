import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import { FLAVOURS } from "@/data/flavours";
import { FlavourType } from "@/types/CMS/Flavours";
import type { NextPage } from "next";
import React from "react";

const Flavours: NextPage<{ data: FlavourType }> = () => {
  const data = FLAVOURS.filter(flavour => flavour.isCollaboration === true) as FlavourType[];

  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks
        data={data.map(flavour => ({
          type: "flavour",
          data: {
            ...flavour,
            listItem: true,
          },
        }))}
      />
    </>
  );
};

export default Flavours;
