import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import { OUR_STORY_PAGE_DATA } from "@/data/pages/our-story";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks data={OUR_STORY_PAGE_DATA.blocks} />
    </>
  );
};

export default Home;
