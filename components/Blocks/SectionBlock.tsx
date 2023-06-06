import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import styled from "styled-components";
import { Blocks } from "@/components/Blocks";
import { color as colors } from "@/styles/color";
import { ColorDataType } from "@/types/CMS/Generic";
import { StaticDataType } from "./Blocks";

// Block Type
export type SectionBlockType = {
  items: BlockType<any>[];
  color?: [] | [ColorDataType];
  gradient?: [] | [ColorDataType, ColorDataType, ColorDataType];
  id: string;
  staticData: StaticDataType;
};

const SectionStyled = styled.div`
  ${({ $color, $gradient }: { $color?: string; $gradient?: [string, string, string] }) =>
    $gradient !== undefined
      ? `background-image: linear-gradient(180deg, ${$gradient[0]} 0%, ${$gradient[1]} 49%, ${$gradient[2]} 100%);`
      : $color !== undefined
      ? `background-color: ${$color};`
      : ""}
  width: 100%;
  margin: 0 auto;
  display: inline-block; // Prevents collapsing margin outside parent
`;

export function SectionBlock({ items, color, id, gradient, staticData }: SectionBlockType) {
  return (
    <SectionStyled
      id={id}
      $gradient={
        gradient !== undefined && gradient.length !== 0
          ? [colors[gradient[0].color], colors[gradient[1].color], colors[gradient[2].color]]
          : undefined
      }
      $color={color !== undefined && color.length !== 0 ? colors[color[0].color] : undefined}
    >
      <Blocks data={items} staticData={staticData} />
    </SectionStyled>
  );
}
