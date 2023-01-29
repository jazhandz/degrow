import * as React from "react";
import styled from "styled-components";
import Image from "next/image"

export type SupportedImageType = "webp" | "png" | "jpg" | "svg";

export interface PictureProps {
  src: string;
  supportedTypes: SupportedImageType[];
  alt: string;
  children?: React.ReactElement;
}

const PictureStyled = styled.picture``;

export function Picture({ src, supportedTypes, alt, children }: PictureProps) {
  return (
    <PictureStyled>
      {supportedTypes.includes("webp") && <source srcSet={`${src}.webp`} type="image/webp" />}
      {supportedTypes.includes("jpg") && <source srcSet={`${src}.jpg`} type="image/jpg" />}
      {supportedTypes.includes("png") && <source srcSet={`${src}.png`} type="image/png" />}
      <Image layout="fill" src={`${src}.${supportedTypes[0]}`} alt={alt} />
      {children}
    </PictureStyled>
  );
}
