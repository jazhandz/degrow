import { useIsMobile } from "@/hooks/use-is-mobile";
import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import styled from "styled-components";
import { Blocks } from "@/components/Blocks";

// Block Type
export type BreakpointBlockType = {
  mobile: BlockType<any>;
  desktop: BlockType<any>;
};

export function BreakpointBlock({
    mobile,
  desktop,
}: BreakpointBlockType) {
    const isMobile = useIsMobile();

  return (
    isMobile ? <Blocks data={[mobile]}/>: <Blocks data={[desktop]} />
  );
}
