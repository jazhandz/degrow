import { color } from "@/styles/color";
import { fontFamily } from "@/styles/fontFamily";
import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  appendElement?: React.ReactElement;
}

const InputContainerStyled = styled.div`
  border-bottom: solid ${color.black} 1px;
  width: 100%;
  display: flex;
  overflow: hidden;
  margin: ${spacing.l} 0;
`;

const InputStyled = styled.input`
  font-family: ${fontFamily.primary};
  font-size: ${fontSize.input};
  font-weight: ${fontWeight.thin};
  color: ${color.black};
  padding: ${spacing.s};
  padding-left: 0;
  border: none;
  flex: 1;
  background-color: transparent;
  ::placeholder {
    color: #00032c;
  }
`;

const TextInputComponent = React.forwardRef(({ appendElement, ...props }: InputProps, ref: any) => {
  return (
    <InputContainerStyled>
      <InputStyled ref={ref} {...props}></InputStyled>
      {appendElement}
    </InputContainerStyled>
  );
});

TextInputComponent.displayName = "TextInputComponent";

export default TextInputComponent;
