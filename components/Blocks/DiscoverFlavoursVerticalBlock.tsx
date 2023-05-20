import CONTENT from "@/cms/content.json";
import styled from "styled-components";
import { UploadCarePicture } from "../UploadCarePicture";

const FLAVOURS = CONTENT.flavours;
const CAN_RESIZE_WIDTH = 280;
const CAN_RESIZE_HEIGHT = 600;

const ImageWrapperStyled = styled.div`
  width: 200px;
  transform: rotate(15deg);
`;

export type DiscoverFlavoursVerticalBlockType = {
  // empty
};

export function DiscoverFlavoursVerticalBlock() {
  const flavourList = FLAVOURS.map(flavour => {
    return (
      <ImageWrapperStyled key={flavour.slug}>
        <UploadCarePicture
          resizeWidth={CAN_RESIZE_WIDTH}
          resizeHeight={CAN_RESIZE_HEIGHT}
          {...flavour.picture}
          supportedTypes={["webp", "png"]}
        />
      </ImageWrapperStyled>
    );
  });

  return <div>{flavourList}</div>;
}
