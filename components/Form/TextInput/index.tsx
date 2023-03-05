import * as React from "react";
import styled from "styled-components";
import { FieldRenderProps } from "react-final-form";
import TextInputComponent from "../components/TextInputComponent";
import { color } from "@/styles/color";
import InputNoteComponent from "../components/InputNoteComponent";

interface TextInputProps extends FieldRenderProps<string, HTMLInputElement> {
  testID?: string;
  icon?: React.ReactElement;
  note?: string;
  compact?: boolean;
}

const MAX_INPUT_WIDTH = "500px";

const TextInputStyled = styled.div`
  /* max-width: ${MAX_INPUT_WIDTH}; */
`;

TextInput.testID = "TextInput";

export function TextInput({ input: { type = "text", ...inputProps }, note, compact = true, ...props }: TextInputProps) {
  const errorMessage = props.meta.touched && props.meta.error;

  return (
    <TextInputStyled data-testid={TextInput.testID}>
      <TextInputComponent {...inputProps} {...props} type={type}></TextInputComponent>
      {compact === false || note !== undefined || typeof errorMessage === "string" ? (
        <InputNoteComponent htmlFor={inputProps.name} color={!errorMessage ? undefined : color.red}>
          {!errorMessage ? note : errorMessage}
        </InputNoteComponent>
      ) : null}
    </TextInputStyled>
  );
}
