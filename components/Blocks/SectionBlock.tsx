import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import styled from "styled-components";
import { Blocks } from "@/components/Blocks";
import { color as colors } from "@/styles/color";

type colorVarient = "softGreen" | "softBlue" | "softOrange" | "softPink";

// Block Type
export type SectionBlockType = {
  items: BlockType<any>[];
  color?: colorVarient;
  gradient?: [colorVarient, colorVarient, colorVarient];
  id: string;
};

const SectionStyled = styled.section`
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

export function SectionBlock({ items, color, id, gradient }: SectionBlockType) {
  return (
    <SectionStyled
      id={id}
      $gradient={gradient !== undefined ? [colors[gradient[0]], colors[gradient[1]], colors[gradient[2]]] : undefined}
      $color={color !== undefined ? colors[color] : undefined}
    >
      <Blocks data={items} />
    </SectionStyled>
  );
}
