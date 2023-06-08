import * as React from "react";
import styled from "styled-components";
import { FieldRenderProps } from "react-final-form";
import { color } from "@/styles/color";
import InputNoteComponent from "../components/InputNoteComponent";
import { CheckBoxInputComponent } from "../components/CheckBoxInputComponent";
import { fontSize } from "@/styles/fontSize";
import { Link } from "@/components/Link";

interface CheckBoxInputProps extends FieldRenderProps<boolean, HTMLInputElement> {
  icon?: React.ReactElement;
  note?: string;
  label?: string;
  compact?: boolean;
  href?: string;
}

const MAX_INPUT_WIDTH = "500px";

const CheckBoxInputStyled = styled.div`
  /* max-width: ${MAX_INPUT_WIDTH}; */
`;

const ParagraphStyled = styled.p`
  font-size: ${fontSize.p};
  font-weight: 600;
`;

const CheckBoxInputContainerStyled = styled.div`
  display: flex;
`;

CheckBoxInput.testID = "CheckBoxInput";

export function CheckBoxInput({
  input: { ...inputProps },
  href,
  note,
  label,
  compact = true,
  ...props
}: CheckBoxInputProps) {
  const errorMessage = props.meta.touched && props.meta.error;

  const handleOnCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputProps.onChange(event.target.checked);
  };

  return (
    <CheckBoxInputStyled data-testid={CheckBoxInput.testID}>
      <CheckBoxInputContainerStyled>
        <CheckBoxInputComponent
          error={errorMessage ? true : false}
          id={inputProps.name}
          checked={inputProps.value}
          onChange={handleOnCheckboxChange}
        ></CheckBoxInputComponent>
        <ParagraphStyled as="label" htmlFor={inputProps.name}>
          {href ? (
            <Link href={href ?? ""} target="blank">
              {label ?? ""}
            </Link>
          ) : (
            label
          )}
        </ParagraphStyled>
      </CheckBoxInputContainerStyled>
    </CheckBoxInputStyled>
  );
}
