import * as React from "react";
import styled from "styled-components";
import { Picture, PictureProps } from "../Picture";

export interface LargeImageBlockType extends PictureProps {
    marginBottom?: string;
    marginTop?: string;
}

const LargeBlockImageStyled = styled.div`
margin-bottom: ${({$marginBottom}: {$marginBottom: string, $marginTop: string}) => $marginBottom};
margin-top: ${({$marginTop}: {$marginBottom: string, $marginTop: string}) => $marginTop};
width: 100%;
height: auto;
display: block;
position: relative;
& picture{
    width: 100%;
    height: 100%;
}
`

export function LargeImageBlock({
    marginBottom = "0",
    marginTop = "0",
  ...pictureProps
}: LargeImageBlockType) {
  return (
    <LargeBlockImageStyled $marginBottom={marginBottom} $marginTop={marginTop}>
        <Picture {...pictureProps} />
    </LargeBlockImageStyled>
  );
}
