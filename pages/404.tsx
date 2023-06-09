import { SEO } from "@/components/SEO";
import type { NextPage } from "next";
import React from "react";
import { getStoryblokApi, useStoryblokState, storyblokInit, apiPlugin } from "@storyblok/react";
import withNavigationAndFooter, { getStaticGlobalProps } from "@/hocs/withNavigationAndFooter";
import { getDiscoverFlavours } from "@/functions/data/get-discover-flavours";
import styled from "styled-components";
import { Container } from "@/components/Container";
import { HeadingBlock } from "@/components/Blocks/HeadingBlock";
import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";

storyblokInit({
  accessToken: "9dnLtFcg5u0FNFT4rWvQMwtt",
  use: [apiPlugin],
});

const NotFoundContainerStyled = styled(Container)`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NotFoundFeatureStyled = styled.div`
  font-size: 200px;
  font-variant-numeric: slashed-zero;
  margin: 0 0;
`;

const NotFoundTextStyled = styled.h1`
  font-weight: 200;
  margin: 0 0;
  text-align: center;
  margin-bottom: ${spacing.xl};
  @media ${media.mobile} {
    font-size: ${fontSize.h2Mobile};
    max-width: 400px;
  }
  @media ${media.desktop} {
    font-size: ${fontSize.h2Desktop};
    max-width: 400px;
  }
`;

const Home: NextPage = ({ data, staticData }: any) => {
  const liveStory = useStoryblokState(data) as any;

  const blocks = liveStory.content?.body;
  const seo = liveStory.content?.seo[0];

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <NotFoundContainerStyled>
        <NotFoundFeatureStyled>0</NotFoundFeatureStyled>
        <NotFoundTextStyled>Oeps, something doesn’t seem right - 404</NotFoundTextStyled>
      </NotFoundContainerStyled>
    </>
  );
};

export default withNavigationAndFooter(Home);

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  const slug = "home";

  const globalProps = await getStaticGlobalProps();
  const discoverFlavours = await getDiscoverFlavours();
  // const discoverFlavours = await getDiscoverFlavours();

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "published" as const, // or 'published'
  });

  return {
    props: {
      ...globalProps,
      data: data ? data.story : false,
      staticData: { discoverFlavours },
    },
    revalidate: 3600, // revalidate every hour
  };
}
