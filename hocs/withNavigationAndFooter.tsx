import Navigation from "@/layout/Navigation";
import { getStoryblokApi } from "@storyblok/react";
import { useRouter } from "next/router";
import * as React from "react";

const withNavigationAndFooter = (Component: any) => {
  const wrappedComponent = (props: any) => {
    const router = useRouter();

    const NAVIGATION_CONTENT = props.props.navigationData;

    const NAVIGATION_COLOR =
      NAVIGATION_CONTENT.colors.find((colorItem: { color: [any]; path: string }) =>
        router.asPath.startsWith(colorItem.path)
      )?.color?.[0]?.color ?? undefined;

    console.log("hocdata", props, router.asPath, NAVIGATION_COLOR);

    return (
      <>
        <Navigation data={NAVIGATION_CONTENT} backgroundColor={NAVIGATION_COLOR} />
        <main>
          <Component {...props} />
        </main>
      </>
    );
  };
  return wrappedComponent;
};

export async function getStaticGlobalProps() {
  const storyblokApi = getStoryblokApi();

  const data = await storyblokApi.get(`cdn/stories/global/navigation`, {
    version: "published" as const, // or 'published'
  });

  return {
    props: {
      navigationData: data ? data.data.story.content.global?.[0] : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default withNavigationAndFooter;
