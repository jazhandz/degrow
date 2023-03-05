import { fontFamily } from "@/styles/fontFamily";
import { fontSize } from "@/styles/fontSize";
import * as React from "react";
import styled from "styled-components";
import { color as colorStyle } from "@/styles/color";
import { fontWeight } from "@/styles/fontWeight";
import { spacing } from "@/styles/spacing";

interface InputNoteProps extends React.HTMLAttributes<HTMLParagraphElement> {
  testID?: string;
  color?: string;
  htmlFor?: string;
}

const InputNoteStyled = styled.p(
  ({ color }: Pick<InputNoteProps, "color">) => `
    font-family: ${fontFamily.primary};
    font-size: ${fontSize.p};
    color: ${color ?? colorStyle.greyDark1};
    line-height: 21px;
    min-height: 21px;
    font-weight: ${fontWeight.regular};
    margin: ${spacing.xs} 0px ${spacing.s} 0px;
  `
);

InputNoteComponent.testID = "inputNote";

export default function InputNoteComponent({ ...props }: InputNoteProps) {
  return <InputNoteStyled data-testid={InputNoteComponent.testID} {...props}></InputNoteStyled>;
}
