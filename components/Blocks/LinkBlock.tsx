import * as React from "react";
import styled from "styled-components";
import { RichText } from "@/components/RichText";
import { Container } from "../Container";
import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import Link from "next/link";

export interface LinkBlockType {
  text: string;
  href: string;
  external?: boolean;
}

const MOBILE_FONT_SIZE = fontSize.linkMobile;
const DESKTOP_FONT_SIZE = fontSize.linkDesktop;

const LinkContainer = styled(Container)`
    text-align: center;
    margin: ${spacing.xl} auto;
    @media ${media.mobile} {
        font-size: ${MOBILE_FONT_SIZE};
    }
    @media ${media.desktop} {
        font-size: ${DESKTOP_FONT_SIZE};
    }
`;

export function LinkBlock({ text, href, external }: LinkBlockType) {
  return <LinkContainer><Link href={href} target={external ? "blank" : undefined}>{text}</Link></LinkContainer>;
}
