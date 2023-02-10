import { useIsMobile } from "@/hooks/use-is-mobile";
import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Picture, PictureProps } from "../Picture";

export interface CenterImageBlockType extends PictureProps {
  size?: "large" | "small";
}

const LARGE_IMAGE_DESKTOP_SIZE = "100%";
const SMALL_IMAGE_DESKTOP_SIZE = "800px";

const LARGE_IMAGE_MOBILE_SIZE = "100%";
const SMALL_IMAGE_MOBILE_SIZE = "100%";

const CenterBlockImageStyled = styled(Container)`
    height: auto;
    display: block;
    position: relative;
    width: ${({$size}: {$size: string}) => $size};
    & picture{
      width: 100%;
      height: 100%;
    }
  `

export function CenterImageBlock({
  size = "small",
  ...pictureProps
}: CenterImageBlockType) {

  const isMobile= useIsMobile();

  const sizeValue = isMobile ?size === "small" ? SMALL_IMAGE_MOBILE_SIZE : LARGE_IMAGE_MOBILE_SIZE  : size === "small" ? SMALL_IMAGE_DESKTOP_SIZE : LARGE_IMAGE_DESKTOP_SIZE

  return (
    <CenterBlockImageStyled $size={sizeValue}>
        <Picture {...pictureProps} />
    </CenterBlockImageStyled>
  );
}
