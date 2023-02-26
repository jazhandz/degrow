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
  const isComplete = image?.url && image?.height && image?.width;
  return (
    <UploadCarePictureStyled $objectFit={objectFit}>
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
