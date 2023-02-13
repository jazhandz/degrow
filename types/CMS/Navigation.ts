import { ColorVarientType } from "./Generic";

export type NavigationType = {
  title: string;
  homePath: string;
  colors: NavigationColorPath[];
  options: NavigationCategoryType[];
};

export type NavigationCategoryType = {
  label: string;
  path: string;
  target?: "blank";
  items?: NavigationOptionType[];
};

export type NavigationOptionType = {
  label: string;
  path: string;
  target?: "blank";
};

type NavigationColorPath = {
  path: string;
  color: ColorVarientType;
};
