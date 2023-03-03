import { UploadCarePictureProps } from "@/components/UploadCarePicture";
import { ColorVarientType } from "./Generic";

export type FlavourType = {
  slug: string;
  title: string;
  color?: ColorVarientType;
  gradient?: [ColorVarientType, ColorVarientType, ColorVarientType];
  isCollaboration?: "0" | "1";
  detailPage: {
    titleMobilePicture?: UploadCarePictureProps;
    titleDesktopPicture?: UploadCarePictureProps;
    description: string;
    ingredients: string;
    nutrition: string;
  };
  discover: {
    yOffset: string;
    rotate: string;
    stiffness: string;
  };
  picture: UploadCarePictureProps;
};
