import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "YOUR_TOKEN",
});

export function parseStoryblokRichText(storyblokHTML: any) {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML),
  };
}
