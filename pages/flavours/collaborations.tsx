import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import CONTENT from "@/cms/content.json";
import { FlavourType } from "@/types/CMS/Flavours";
import type { NextPage } from "next";
import React from "react";

const FLAVOURS = CONTENT.flavours;

const Flavours: NextPage<{ data: FlavourType }> = () => {
  const data = FLAVOURS.filter(flavour => flavour.isCollaboration === "1") as FlavourType[];

  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks
        data={data.map(flavour => ({
          ":type": "flavour",
          ...flavour,
          listItem: true,
        }))}
      />
    </>
  );
};

export default Flavours;
