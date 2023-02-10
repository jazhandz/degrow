import { useIsMobile } from "@/hooks/use-is-mobile";
import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import styled from "styled-components";
import { Blocks } from "@/components/Blocks";
import {color as colors} from "@/styles/color"

// Block Type
export type SectionBlockType = {
  items: BlockType<any>[];
  color?: "softGreen" | "softBlue" | "softOrange" | "softPink";
};

const SectionStyled = styled.section`
    ${({$color} : {$color?: string}) => $color !== undefined ? `background-color: ${$color};` : ""}
    width: 100%;
    margin: 0 auto;
    display: inline-block; // Prevents collapsing margin outside parent
`

export function SectionBlock({
    items,
    color,
}: SectionBlockType) {

  return (
    <SectionStyled $color={color !== undefined ? colors[color] : undefined}><Blocks data={items}/></SectionStyled>
  );
}
