import * as React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export interface BlockRichText {
  component: "rich-text";
  id: number;
  body: string;
}

const RichTextContainer = styled.div``;

export default function RichTextComponent({ body }: BlockRichText) {
  return <ReactMarkdown>{body}</ReactMarkdown>;
}
