import * as React from "react";
import ReactHtmlParser from "react-html-parser";

interface RichTextProps {
  children: string;
}

export function RichText({ children }: RichTextProps) {
  return <React.Fragment>{ReactHtmlParser(children)}</React.Fragment>;
}
