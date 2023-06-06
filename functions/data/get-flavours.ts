import { getStoryblokApi } from "@storyblok/react";

export async function getFlavours() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "published" as const,
    starts_with: "flavours/",
  });

  return data.stories.map(item => ({ ...item.content, slug: item.slug })).filter(item => item.isCollaboration === true);
}
