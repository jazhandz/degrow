import { parseStoryblokRichText } from "@/functions/parse-storyblok-richtext";
import * as React from "react";

interface RichTextProps {
  children: string;
}

export function RichText({ children }: RichTextProps) {
  return <span dangerouslySetInnerHTML={parseStoryblokRichText(children)}></span>;
}
