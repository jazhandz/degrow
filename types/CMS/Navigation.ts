export type NavigationType = {
  title: string;
  homePath: string;
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
