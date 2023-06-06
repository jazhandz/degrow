import { BlockType } from "@/types/CMS/Block";
import * as React from "react";
import { Blocks } from "@/components/Blocks";
import { IsMobile } from "../Breakpoints/IsMobile";
import { IsDesktop } from "../Breakpoints/IsDesktop";
import { StaticDataType } from "./Blocks";

// Block Type
export type BreakpointBlockType = {
  mobile: [BlockType<any>];
  desktop: [BlockType<any>];
  staticData: StaticDataType;
};

export function BreakpointBlock({ mobile, desktop, staticData }: BreakpointBlockType) {
  return (
    <>
      <IsMobile>
        <Blocks data={[mobile[0]]} staticData={staticData} />
      </IsMobile>
      <IsDesktop>
        <Blocks data={[desktop[0]]} staticData={staticData} />
      </IsDesktop>
    </>
  );
}
