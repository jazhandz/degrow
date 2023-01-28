import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import { HeadingBlockType } from "@/types/CMS/Blocks/HeadingBlock";
import styled from "styled-components";

const MAX_WIDTH = "1000px"

const HeadingStyled = styled.h1`
    text-align: center;
    font-weight: ${fontWeight.light};
    max-width: ${MAX_WIDTH};

    @media ${media.mobile} {
        padding: 0 ${spacing.xl}
    }
    @media ${media.desktop} {
        padding: 0 ${spacing.xl}
    }
`

export function HeadingBlock({title, varient}:HeadingBlockType) {
return <HeadingStyled as={varient}>{title}</HeadingStyled>
}