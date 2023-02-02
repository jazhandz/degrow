import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import { HeadingBlockType } from "@/types/CMS/Blocks/HeadingBlock";
import styled from "styled-components";
import { Container } from "../Container";

const HeadingStyled = styled.h1`
    text-align: center;
    font-weight: ${fontWeight.light};
    font-size: ${fontSize.h1};
    width: 100%;
`

export function HeadingBlock({title, varient}:HeadingBlockType) {
return <Container><HeadingStyled as={varient}>{title}</HeadingStyled></Container>
}