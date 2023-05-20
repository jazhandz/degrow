import { THEME_COLORS } from "@/styles/color";

export type ColorVarientType = keyof typeof THEME_COLORS;

export type ColorDataType = [{ color: ColorVarientType }];
