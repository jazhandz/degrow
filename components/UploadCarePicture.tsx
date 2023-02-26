import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

export type SupportedImageType = "webp" | "png" | "jpg" | "svg";

export interface UploadCarePictureProps {
  image: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
  supportedTypes: SupportedImageType[];
  alt: string;
  children?: React.ReactElement;
  objectFit?: "cover" | "contain";
}

const UploadCarePictureStyled = styled.picture`
  & img {
    width: 100%;
    height: auto;
    object-fit: ${({ $objectFit }: { $objectFit: "cover" | "contain" }) => $objectFit};
  }
`;

export function UploadCarePicture({
  supportedTypes,
  alt,
  children,
  objectFit = "cover",
  image,
}: UploadCarePictureProps) {
  return (
    <UploadCarePictureStyled $objectFit={objectFit}>
      {supportedTypes.includes("jpg") && <source srcSet={`${image.url}-/format/jpeg/`} type="image/jpg" />}
      {supportedTypes.includes("png") && <source srcSet={`${image.url}-/format/png/`} type="image/png" />}
      <Image width={image.width} height={image.height} src={`${image.url}-/format/webp/`} alt={alt} />
      {children}
    </UploadCarePictureStyled>
  );
}
