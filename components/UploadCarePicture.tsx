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
  maxHeight?: string;
  children?: React.ReactElement;
  objectFit?: "cover" | "contain";
}

const UploadCarePictureStyled = styled.picture`
  & img {
    width: 100%;
    height: auto;
    max-height: ${({ $maxHeight }: { $objectFit: "cover" | "contain"; $maxHeight?: string }) => $maxHeight};
    object-fit: ${({ $objectFit }: { $objectFit: "cover" | "contain"; $maxHeight?: string }) => $objectFit};
  }
`;

export function UploadCarePicture({
  supportedTypes,
  alt,
  children,
  objectFit = "cover",
  image,
  maxHeight,
}: UploadCarePictureProps) {
  const isComplete = image?.url && image?.height && image?.width;
  return (
    <UploadCarePictureStyled $objectFit={objectFit} $maxHeight={maxHeight}>
      {supportedTypes.includes("jpg") && isComplete && (
        <source srcSet={`${image.url}-/format/jpeg/`} type="image/jpg" />
      )}
      {supportedTypes.includes("png") && isComplete && <source srcSet={`${image.url}-/format/png/`} type="image/png" />}
      <Image
        width={isComplete ? image.width : 150}
        height={isComplete ? image.height : 200}
        src={isComplete ? `${image.url}-/format/webp/` : "/images/empty.png"}
        alt={alt}
      />
      {children}
    </UploadCarePictureStyled>
  );
}
