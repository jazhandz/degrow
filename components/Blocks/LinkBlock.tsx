import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { spacing } from "@/styles/spacing";
import { Link } from "@/components/Link";

export type LinkBlockType = {
  external?: boolean;
  text: string;
  href: string;
};

const LinkContainer = styled(Container)`
  text-align: center;
  margin: ${spacing.xl} auto;
`;

export function LinkBlock({ text, href, external }: LinkBlockType) {
  return (
    <LinkContainer>
      <Link href={href} size="large" target={external ? "blank" : "self"}>
        {text}
      </Link>
    </LinkContainer>
  );
}
