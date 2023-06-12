import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import NextLink from "next/link";
import * as React from "react";
import styled from "styled-components";

export interface LinkProps extends React.RefAttributes<HTMLAnchorElement> {
  children: string;
  href: string;
  size?: "large" | "small";
  target?: "blank" | "self";
}

const MOBILE_FONT_SIZE = fontSize.linkMobile;
const DESKTOP_FONT_SIZE = fontSize.linkDesktop;

const LinkStyled = styled(NextLink)`
  ${({ $size }: { $size: "large" | "small" }) =>
    $size === "large"
      ? `
    @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
  }
`
      : `font-size: ${fontSize.p};`}
`;

export function Link({ children, href, size = "small", ...props }: LinkProps) {
  return (
    <LinkStyled {...props} $size={size} href={href}>
      {children}
    </LinkStyled>
  );
}
