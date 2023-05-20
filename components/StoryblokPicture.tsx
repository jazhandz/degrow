import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

export type SupportedImageType = "webp" | "png" | "jpg" | "svg";

export interface StoryblokPictureProps {
  image: {
    id: string;
    alt: string;
    filename: string;
    width: number;
    height: number;
  };
  supportedTypes: SupportedImageType[];
  maxHeight?: string;
  children?: React.ReactElement;
  objectFit?: "cover" | "contain";
  resizeWidth?: string | number;
  resizeHeight?: string | number;
}

const PictureStyled = styled.picture`
  & img {
    width: 100%;
    height: auto;
    max-height: ${({ $maxHeight }: { $objectFit: "cover" | "contain"; $maxHeight?: string }) => $maxHeight};
    object-fit: ${({ $objectFit }: { $objectFit: "cover" | "contain"; $maxHeight?: string }) => $objectFit};
  }
`;

export function StoryblokPicture({
  supportedTypes,
  children,
  objectFit = "cover",
  image,
  maxHeight,
  resizeWidth = "500",
  resizeHeight = "500",
}: StoryblokPictureProps) {
  const dimensions = {
    width: parseInt(image?.filename.split("/")[5].split("x")[0]),
    height: parseInt(image?.filename.split("/")[5].split("x")[1]),
  };

  const isComplete = image?.filename && dimensions?.height && dimensions?.width;
  const formatResize = `${resizeWidth}x${resizeHeight}`;
  return (
    <PictureStyled $objectFit={objectFit} $maxHeight={maxHeight}>
      {supportedTypes.includes("jpg") && isComplete && (
        <source srcSet={`${image.filename}/m/${formatResize}/filters:format(jpeg)`} type="image/jpg" />
      )}
      {supportedTypes.includes("png") && isComplete && (
        <source srcSet={`${image.filename}/m/${formatResize}/filters:format(png)`} type="image/png" />
      )}
      <Image
        width={isComplete ? dimensions.width : 150}
        height={isComplete ? dimensions.height : 200}
        src={isComplete ? `${image.filename}/m/${formatResize}/filters:format(webp)` : "/images/empty.png"}
        alt={image.alt}
      />
      {children}
    </PictureStyled>
  );
}
