import { parseStoryblokRichText } from "@/functions/parse-storyblok-richtext";
import { StoryBlokRichText } from "@/types/CMS/StoryBlok";
import * as React from "react";

interface RichTextProps {
  children: StoryBlokRichText;
}

export function RichText({ children }: RichTextProps) {
  return <div dangerouslySetInnerHTML={parseStoryblokRichText(children)}></div>;
}
