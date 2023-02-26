import { Blocks } from "@/components/Blocks";
import { SEO } from "@/components/SEO";
import CONTENT from "@/cms/content.json";
import type { NextPage } from "next";
import React from "react";

const HOME_PAGE_DATA = CONTENT.pages.find(page => page.slug === "home");

const Home: NextPage = () => {
  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks data={HOME_PAGE_DATA?.blocks ?? []} />
    </>
  );
};

export default Home;
