import { PictureProps } from "@/components/Picture";
import { ColorVarientType } from "./Generic";

export type FlavourType = {
  id: string;
  title: string;
  color?: ColorVarientType;
  gradient?: [ColorVarientType, ColorVarientType, ColorVarientType];
  detailPage: {
    titleMobilePicture?: PictureProps;
    titleDesktopPicture?: PictureProps;
    description: string;
    ingredients: string;
    nutrition: string;
  };
  discover: {
    yOffset: string;
    rotate: number;
    stiffness: number;
  };
  productPicture: PictureProps;
};
