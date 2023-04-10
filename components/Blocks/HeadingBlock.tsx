import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import styled from "styled-components";
import { Container } from "../Container";

export type HeadingBlockType = {
  title: string;
  varient: "h1" | "h2" | "h3" | "h4";
};

const HeadingStyled = styled.h1`
  text-align: center;
  font-weight: ${fontWeight.light};
  @media ${media.mobile} {
    font-size: ${fontSize.h1Mobile};
  }
  @media ${media.desktop} {
    font-size: ${fontSize.h1Desktop};
  }
  width: 100%;
  font-variant-numeric: slashed-zero;
  margin: ${spacing.l} 0;
`;

export function HeadingBlock({ title, varient }: HeadingBlockType) {
  return (
    <Container>
      <HeadingStyled as={varient}>{title}</HeadingStyled>
    </Container>
  );
}
