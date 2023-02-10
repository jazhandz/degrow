import {Blocks} from "@/components/Blocks";
import {SEO} from "@/components/SEO";
import { ABOUT_PAGE_DATA } from "@/data/pages/about-us";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {

  return (
    <>
      <SEO title="De Grow Lab" description="" />
      <Blocks data={ABOUT_PAGE_DATA.items} />
    </>
  );
};

export default Home;
