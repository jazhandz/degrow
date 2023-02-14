import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import { Blocks } from "@/components/Blocks";
import { IsMobile } from "../Breakpoints/IsMobile";
import { IsDesktop } from "../Breakpoints/IsDesktop";

// Block Type
export type BreakpointBlockType = {
  mobile: BlockType<any>;
  desktop: BlockType<any>;
};

export function BreakpointBlock({ mobile, desktop }: BreakpointBlockType) {
  return (
    <>
      <IsMobile>
        <Blocks data={[mobile]} />
      </IsMobile>
      <IsDesktop>
        <Blocks data={[desktop]} />
      </IsDesktop>
    </>
  );
}
