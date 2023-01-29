import { LargeImageBlockType } from "@/types/CMS/Blocks/LargeImageBlock";
import * as React from "react";
import styled from "styled-components";
import { Picture } from "../Picture";

const BlockImageStyled = styled.div`
margin-bottom: ${({$marginBottom}: {$marginBottom: string}) => $marginBottom};
width: 100%;
height: 50vw;
display: block;
position: relative;
& picture{
    width: 100%;
    height: 100%;
}
`

export default function LargeImageBlock({
    marginBottom = "0",
  ...pictureProps
}: LargeImageBlockType) {
  return (
    <BlockImageStyled $marginBottom={marginBottom}>
        <Picture {...pictureProps} />
    </BlockImageStyled>
  );
}
