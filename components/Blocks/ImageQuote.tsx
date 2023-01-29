import { Constants } from "@/constants";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { DisplayImageTextQuote } from "../Display";

export interface BlockImageQuote {
  component: "image-quote";
  id: number;
  RichText: string;
  Image: any;
}

export default function ImageQuoteComponent({
  RichText,
  Image,
}: BlockImageQuote) {
  return (
    <DisplayImageTextQuote
      cite={Constants.metaData.author}
      src={Image.formats.thumbnail.url}
    >
      {RichText}
    </DisplayImageTextQuote>
  );
}
