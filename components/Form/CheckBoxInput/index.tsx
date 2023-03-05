import * as React from "react";
import styled from "styled-components";
import { FieldRenderProps } from "react-final-form";
import { color } from "@/styles/color";
import InputNoteComponent from "../components/InputNoteComponent";
import { CheckBoxInputComponent } from "../components/CheckBoxInputComponent";
import { fontSize } from "@/styles/fontSize";

interface CheckBoxInputProps extends FieldRenderProps<boolean, HTMLInputElement> {
  icon?: React.ReactElement;
  note?: string;
  label?: string;
  compact?: boolean;
}

const MAX_INPUT_WIDTH = "500px";

const CheckBoxInputStyled = styled.div`
  /* max-width: ${MAX_INPUT_WIDTH}; */
`;

const ParagraphStyled = styled.p`
  font-size: ${fontSize.p};
`;

const CheckBoxInputContainerStyled = styled.div`
  display: flex;
`;

CheckBoxInput.testID = "CheckBoxInput";

export function CheckBoxInput({ input: { ...inputProps }, note, label, compact = true, ...props }: CheckBoxInputProps) {
  const errorMessage = props.meta.touched && props.meta.error;

  const handleOnCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputProps.onChange(event.target.checked);
  };

  return (
    <CheckBoxInputStyled data-testid={CheckBoxInput.testID}>
      <CheckBoxInputContainerStyled>
        <CheckBoxInputComponent
          id={inputProps.name}
          checked={inputProps.value}
          onChange={handleOnCheckboxChange}
        ></CheckBoxInputComponent>
        <ParagraphStyled as="label" htmlFor={inputProps.name}>
          {label}
        </ParagraphStyled>
      </CheckBoxInputContainerStyled>
      {compact === false || note !== undefined || typeof errorMessage === "string" ? (
        <InputNoteComponent htmlFor={inputProps.name} color={!errorMessage ? undefined : color.red}>
          {!errorMessage ? note : errorMessage}
        </InputNoteComponent>
      ) : null}
    </CheckBoxInputStyled>
  );
}
