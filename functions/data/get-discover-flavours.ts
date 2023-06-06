import { DiscoverFlavoursBlockType } from "@/components/Blocks/DiscoverFlavoursBlock";
import { getStoryblokApi } from "@storyblok/react";

export async function getDiscoverFlavours() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/global/discover-flavours`, {
    version: "published" as const,
    resolve_relations: "flavour-discover-item.flavour",
  });

  return data as {
    story: {
      content: {
        global: [DiscoverFlavoursBlockType];
      };
    };
  };
}
