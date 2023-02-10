import * as React from "react";
import styled from "styled-components";
import Image from "next/image"

export type SupportedImageType = "webp" | "png" | "jpg" | "svg";

export interface PictureProps {
  src: string;
  supportedTypes: SupportedImageType[];
  alt: string;
  children?: React.ReactElement;
  objectFit?: "cover" | "contain";
  width: number;
  height: number;
}

const PictureStyled = styled.picture`
    & img{
        width: 100%;
        height: auto;
        object-fit: ${({$objectFit}: {$objectFit: "cover" | "contain"}) => $objectFit}
    }
`;

export function Picture({ src, supportedTypes, alt, children, objectFit = "cover", width, height }: PictureProps) {
  return (
    <PictureStyled $objectFit={objectFit}>
      {supportedTypes.includes("webp") && <source srcSet={`${src}.webp`} type="image/webp" />}
      {supportedTypes.includes("jpg") && <source srcSet={`${src}.jpg`} type="image/jpg" />}
      {supportedTypes.includes("png") && <source srcSet={`${src}.png`} type="image/png" />}
      <Image width={width} height={height} src={`${src}.${supportedTypes[0]}`} alt={alt} />
      {children}
    </PictureStyled>
  );
}
